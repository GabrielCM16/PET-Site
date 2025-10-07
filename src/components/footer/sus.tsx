import React, { useEffect, useRef, useState } from "react";
import Tini1 from "./../../assets/images/game/tini1.png";
import Tini2 from "./../../assets/images/game/tini2.png";
import Tini3 from "./../../assets/images/game/tini3.png";
import Tini4 from "./../../assets/images/game/tini4.png";
import N1 from "./../../assets/images/game/neadertal1.png";
import N2 from "./../../assets/images/game/neadertal2.png";
import N3 from "./../../assets/images/game/neadertal3.png";
import N4 from "./../../assets/images/game/neadertal4.png";
import N5 from "./../../assets/images/game/neadertal5.png";
import N6 from "./../../assets/images/game/neadertal6.png";
import N7 from "./../../assets/images/game/neadertal7.png";
import FrutaSrc from "./../../assets/mango.png";

type Modal = { title: string; text: string } | null;

const preloadImages = (paths: string[]) => {
  return Promise.all(
    paths.map(
      (p) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.src = p;
          img.onload = () => resolve(img);
          img.onerror = (e) => reject(e);
        })
    )
  );
};

const Sus: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [active, setActive] = useState(false);
  const [modal, setModal] = useState<Modal>(null);

  const audioMusicaRef = useRef<HTMLAudioElement | null>(null);

  const showCustomModal = (title: string, text?: string) => {
    setModal({ title, text: text ?? "" });
  };

  // Konami Code
  useEffect(() => {
    const konami = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
    ];
    let index = 0;

    const handler = (e: KeyboardEvent) => {
      if (e.key === konami[index]) {
        index++;
        if (index === konami.length) {
          setActive(true);
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Bagre Code
  useEffect(() => {
    const bagreCode = ["b", "a", "g", "r", "e"];
    let index = 0;

    const handler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === bagreCode[index]) {
        index++;
        if (index === bagreCode.length) {
          // Ação ao digitar "bagre"
          window.location.href = "/bagre"; // ou use navigate se for React Router
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);


  useEffect(() => {

    if (active) {
      if (!audioMusicaRef.current) {
        audioMusicaRef.current = new Audio("/audiotini.mp3");
        audioMusicaRef.current.loop = true;
      }
      audioMusicaRef.current.play();
    } else {
      // Pausa e reseta quando o jogo termina
      if (audioMusicaRef.current) {
        audioMusicaRef.current.pause();
        audioMusicaRef.current.currentTime = 0;
      }
    }



    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // game state
    const player = { x: 50, y: 50, size: 80, speed: 2 };
    const enemy = { x: 800, y: 500, size: 120, speed: 1.0 };
    const fruit = { x: 0, y: 0, size: 30 };
    let score = 0;
    const keys: Record<string, boolean> = {};

    const playerFramesSrc = [Tini1, Tini2, Tini3, Tini4];
    const enemyFramesSrc = [N1, N2, N3, N4, N5, N6, N7];

    // animation state
    const animState = {
      player: { frames: [] as HTMLImageElement[], frameIndex: 0, elapsed: 0, frameDuration: 120 },
      enemy: { frames: [] as HTMLImageElement[], frameIndex: 0, elapsed: 0, frameDuration: 100 },
      fruitImg: null as HTMLImageElement | null,
    };

    const spawnFruit = () => {
      fruit.x = Math.random() * (canvas.width - fruit.size);
      fruit.y = Math.random() * (canvas.height - fruit.size);
    };

    // preload all images then start loop
    let rafId = 0;
    let lastTime = performance.now();

    Promise.all([
      preloadImages(playerFramesSrc),
      preloadImages(enemyFramesSrc),
      preloadImages([FrutaSrc]),
    ])
      .then(([playerFrames, enemyFrames, [fruitImg]]) => {
        animState.player.frames = playerFrames;
        animState.enemy.frames = enemyFrames;
        animState.fruitImg = fruitImg;
        spawnFruit();

        // input handlers
        const handleKeyDown = (e: KeyboardEvent) => (keys[e.key] = true);
        const handleKeyUp = (e: KeyboardEvent) => (keys[e.key] = false);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        document.body.style.overflow = "hidden";

        const loop = (timestamp: number) => {
          const dt = timestamp - lastTime;
          lastTime = timestamp;

          // update animation timers
          animState.player.elapsed += dt;
          while (animState.player.elapsed >= animState.player.frameDuration) {
            animState.player.elapsed -= animState.player.frameDuration;
            animState.player.frameIndex = (animState.player.frameIndex + 1) % animState.player.frames.length;
          }

          animState.enemy.elapsed += dt;
          while (animState.enemy.elapsed >= animState.enemy.frameDuration) {
            animState.enemy.elapsed -= animState.enemy.frameDuration;
            animState.enemy.frameIndex = (animState.enemy.frameIndex + 1) % animState.enemy.frames.length;
          }

          // movement
          if (keys["ArrowUp"]) player.y = Math.max(0, player.y - player.speed);
          if (keys["ArrowDown"]) player.y = Math.min(canvas.height - player.size, player.y + player.speed);
          if (keys["ArrowLeft"]) player.x = Math.max(0, player.x - player.speed);
          if (keys["ArrowRight"]) player.x = Math.min(canvas.width - player.size, player.x + player.speed);

          // enemy follows
          const dx = player.x - enemy.x;
          const dy = player.y - enemy.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0) {
            enemy.x = Math.max(0, Math.min(canvas.width - enemy.size, enemy.x + (dx / dist) * enemy.speed));
            enemy.y = Math.max(0, Math.min(canvas.height - enemy.size, enemy.y + (dy / dist) * enemy.speed));
          }

          // collisions
          const fruitCollected =
            player.x < fruit.x + fruit.size &&
            player.x + player.size > fruit.x &&
            player.y < fruit.y + fruit.size &&
            player.y + player.size > fruit.y;

          if (fruitCollected) {
            score++;
            if (score >= 10) {
              const audio = new Audio("/victory.mp3");
              audio.play();
              showCustomModal("pet code");
              setActive(false);
              document.body.style.overflow = "auto";
              window.removeEventListener("keydown", handleKeyDown);
              window.removeEventListener("keyup", handleKeyUp);
              cancelAnimationFrame(rafId);
              return;
            } else {
              player.speed += 0.3;
              enemy.speed += 0.3;
              spawnFruit();
            }
          }

          // clear & draw
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // draw fruit
          if (animState.fruitImg) ctx.drawImage(animState.fruitImg, fruit.x, fruit.y, fruit.size, fruit.size);

          // draw player frame
          if (animState.player.frames.length) {
            const pf = animState.player.frames[animState.player.frameIndex];
            ctx.drawImage(pf, player.x, player.y, player.size, player.size);
          }

          // draw enemy frame
          if (animState.enemy.frames.length) {
            const ef = animState.enemy.frames[animState.enemy.frameIndex];
            ctx.drawImage(ef, enemy.x, enemy.y, enemy.size, enemy.size);
          }

          // UI
          const text = `Pontos: ${score}`;
          ctx.font = "bold 20px Arial";
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          const textWidth = ctx.measureText(text).width;
          const textHeight = 24;
          ctx.fillStyle = "white";
          ctx.fillRect(canvas.width / 2 - textWidth / 2 - 6, 10, textWidth + 12, textHeight);
          ctx.fillStyle = "black";
          ctx.fillText(text, canvas.width / 2, 10);

          const enemyPadding = 20;

          const collided =
            player.x < enemy.x + enemy.size - enemyPadding &&
            player.x + player.size > enemy.x + enemyPadding &&
            player.y < enemy.y + enemy.size - enemyPadding &&
            player.y + player.size > enemy.y + enemyPadding;


          if (collided) {
            const audio = new Audio("/plankton.mp3");
            audio.play();
            showCustomModal("Game Over!", `Pontos: ${score}`);
            setActive(false);
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            cancelAnimationFrame(rafId);

            // 🔇 pausa a música
            audioMusicaRef.current?.pause();


            setActive(false);

            return;
          }

          rafId = requestAnimationFrame(loop);
        };

        rafId = requestAnimationFrame(loop);



        // attach cleanup to outer scope via return below
      })
      .catch((err) => {
        console.error("Erro ao carregar frames:", err);
        showCustomModal("Erro ao carregar imagens", String(err));
        setActive(false);
        document.body.style.overflow = "auto";
      });


    return () => {
      // cancel RAF and restore page
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  return (
    <>
      {active && (
        <canvas
          ref={canvasRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            background: "transparent",
          }}
        />
      )}

      {modal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              background: "#ffffffff",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "black" }}>{modal.title}</h2>
            <p style={{ color: "black" }}>{modal.text}</p>
            <button onClick={() => setModal(null)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sus;
