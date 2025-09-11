import React, { useEffect, useRef, useState } from "react";
import LogoPET from "./../../assets/download.png";
import GatoPet from "./../../assets/gatopet.png";
import Fruta from "./../../assets/mango.png";

const Sus: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [active, setActive] = useState(false);

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

    // Função para spawnar frutinha em posição aleatória
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
      // Limpar áreas onde o jogador, inimigo, frutinha e contador estavam
      ctx.clearRect(
        player.x - player.speed,
        player.y - player.speed,
        player.size + player.speed * 2,
        player.size + player.speed * 2
      );
      ctx.clearRect(
        enemy.x - enemy.speed,
        enemy.y - enemy.speed,
        enemy.size + enemy.speed * 2,
        enemy.size + enemy.speed * 2
      );
      ctx.clearRect(
        fruit.x - 1,
        fruit.y - 1,
        fruit.size + 2,
        fruit.size + 2
      );
      ctx.clearRect(canvas.width / 2 - 100, 0, 200, 40); // Limpar área do contador centralizado

      // Movimentação do jogador com limites
      if (keys["ArrowUp"]) {
        player.y = Math.max(0, player.y - player.speed);
      }
      if (keys["ArrowDown"]) {
        player.y = Math.min(canvas.height - player.size, player.y + player.speed);
      }
      if (keys["ArrowLeft"]) {
        player.x = Math.max(0, player.x - player.speed);
      }
      if (keys["ArrowRight"]) {
        player.x = Math.min(canvas.width - player.size, player.x + player.speed);
      }

      // Inimigo segue o jogador com limites
      const dx = player.x - enemy.x;
      const dy = player.y - enemy.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 0) {
        const newEnemyX = enemy.x + (dx / dist) * enemy.speed;
        const newEnemyY = enemy.y + (dy / dist) * enemy.speed;
        enemy.x = Math.max(0, Math.min(canvas.width - enemy.size, newEnemyX));
        enemy.y = Math.max(0, Math.min(canvas.height - enemy.size, newEnemyY));
      }

      // Detecção de colisão com a frutinha
      const fruitCollected =
        player.x < fruit.x + fruit.size &&
        player.x + player.size > fruit.x &&
        player.y < fruit.y + fruit.size &&
        player.y + player.size > fruit.y;

      if (fruitCollected) {
        score += 1;
        player.speed += 0.3;
        enemy.speed += 0.3;
        spawnFruit();
      }

      // Desenhar frutinha
      if (fruitImg.complete) ctx.drawImage(fruitImg, fruit.x, fruit.y, fruit.size, fruit.size);

      // Desenhar imagens do jogador e inimigo
      if (playerImg.complete) ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
      if (enemyImg.complete) ctx.drawImage(enemyImg, enemy.x, enemy.y, enemy.size, enemy.size);

      // Desenhar contador de pontos
      ctx.fillStyle = "white";
      ctx.font = "bold 20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText(`Pontos: ${score}`, canvas.width / 2, 10);

      // Detecção de colisão com o inimigo
      const collided =
        player.x < enemy.x + enemy.size &&
        player.x + player.size > enemy.x &&
        player.y < enemy.y + enemy.size &&
        player.y + player.size > enemy.y;

      if (collided) {
        alert(`Game Over! Pontos: ${score}`);
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
    </>
  );
};

export default Sus;