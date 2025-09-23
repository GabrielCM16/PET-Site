import React, { useEffect, useRef, useState } from "react";
import LogoPET from "./../../assets/download.png";
import GatoPet from "./../../assets/gatopet.png";
import Fruta from "./../../assets/mango.png";

const Sus: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [active, setActive] = useState(false);
  const [modal, setModal] = useState<{ title: string; text: string } | null>(null);

  // Função para mostrar modal
  const showCustomModal = (title: string, text?: string) => {
    setModal({ title, text: text ?? "" }); // se não passar nada, fica ""
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

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Usar tela cheia
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let animationFrameId: number;
    const player = { x: 50, y: 50, size: 80, speed: 2 };
    const enemy = { x: 800, y: 500, size: 100, speed: 1.0 };
    const fruit = { x: 0, y: 0, size: 30 };
    let score = 0;
    const keys: Record<string, boolean> = {};

    const playerImg = new Image();
    playerImg.src = LogoPET;

    const enemyImg = new Image();
    enemyImg.src = GatoPet;

    const fruitImg = new Image();
    fruitImg.src = Fruta;

    const spawnFruit = () => {
      fruit.x = Math.random() * (canvas.width - fruit.size);
      fruit.y = Math.random() * (canvas.height - fruit.size);
    };
    spawnFruit();

    const handleKeyDown = (e: KeyboardEvent) => (keys[e.key] = true);
    const handleKeyUp = (e: KeyboardEvent) => (keys[e.key] = false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    document.body.style.overflow = "hidden";

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Movimentação jogador
      if (keys["ArrowUp"]) player.y = Math.max(0, player.y - player.speed);
      if (keys["ArrowDown"]) player.y = Math.min(canvas.height - player.size, player.y + player.speed);
      if (keys["ArrowLeft"]) player.x = Math.max(0, player.x - player.speed);
      if (keys["ArrowRight"]) player.x = Math.min(canvas.width - player.size, player.x + player.speed);

      // Inimigo segue jogador
      const dx = player.x - enemy.x;
      const dy = player.y - enemy.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 0) {
        enemy.x = Math.max(0, Math.min(canvas.width - enemy.size, enemy.x + (dx / dist) * enemy.speed));
        enemy.y = Math.max(0, Math.min(canvas.height - enemy.size, enemy.y + (dy / dist) * enemy.speed));
      }

      // Colisão frutinha
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
          return;
        } else {
          player.speed += 0.3;
          enemy.speed += 0.3;
          spawnFruit();
        }
      }

      // Renderizar frutinha, player, inimigo
      if (fruitImg.complete) ctx.drawImage(fruitImg, fruit.x, fruit.y, fruit.size, fruit.size);
      if (playerImg.complete) ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
      if (enemyImg.complete) ctx.drawImage(enemyImg, enemy.x, enemy.y, enemy.size, enemy.size);

      const text = `Pontos: ${score}`;
      ctx.font = "bold 20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";

      const textWidth = ctx.measureText(text).width;
      const textHeight = 24; // altura aproximada da fonte (20px + margem)

      // fundo branco com cantos retos
      ctx.fillStyle = "white";
      ctx.fillRect(canvas.width / 2 - textWidth / 2 - 6, 10, textWidth + 12, textHeight);

      // texto preto
      ctx.fillStyle = "black";
      ctx.fillText(text, canvas.width / 2, 10);


      // Colisão inimigo
      const collided =
        player.x < enemy.x + enemy.size &&
        player.x + player.size > enemy.x &&
        player.y < enemy.y + enemy.size &&
        player.y + player.size > enemy.y;

      if (collided) {
        const audio = new Audio("/plankton.mp3");
        audio.play();
        showCustomModal("Game Over!", `Pontos: ${score}`);
        setActive(false);
        document.body.style.overflow = "auto";
        return;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    const startGame = () => {
      if (playerImg.complete && enemyImg.complete && fruitImg.complete) loop();
      else {
        playerImg.onload = enemyImg.onload = fruitImg.onload = loop;
      }
    };

    startGame();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("resize", resize);
      document.body.style.overflow = "auto";
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

      {/* Modal React */}
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
            <h2 style={{color: "black"}}>{modal.title}</h2>
            <p style={{color: "black"}}>{modal.text}</p>
            <button onClick={() => setModal(null)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sus;
