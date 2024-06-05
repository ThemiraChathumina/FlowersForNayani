import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import "./Flower.css";

const getRandomPosition = (petalAngle: number) => {
  const spreadAngle = petalAngle + Math.random() * 45 - 22.5; // Spread particles +/- 22.5 degrees from the petal angle
  const radius = Math.random() * 100 + 180; // Random radius between 180 and 280
  const x = Math.cos((spreadAngle * Math.PI) / 180) * radius;
  const y = Math.sin((spreadAngle * Math.PI) / 180) * radius;
  return { x, y };
};

const createParticles = (numParticles: number, angle: number) => {
  const particles = [];
  for (let i = 0; i < numParticles; i++) {
    const { x, y } = getRandomPosition(angle);
    particles.push(
      <div
        key={i}
        className="particle"
        style={
          {
            "--translate-x": `${x}px`,
            "--translate-y": `${y}px`,
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%)`,
            animationDelay: `${Math.random() * 4}s`,
          } as React.CSSProperties
        }
      ></div>
    );
  }
  return particles;
};

const Flower: React.FC = () => {
  const [hearts, setHearts] = useState<
    { id: number; x: number; y: number; rotation: number }[]
  >([]);
  const [nextHeartId, setNextHeartId] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotation = Math.random() * 360; // Random rotation angle
    setHearts([...hearts, { id: nextHeartId, x, y, rotation }]);
    setNextHeartId(nextHeartId + 1);
  };

  useEffect(() => {
    if (hearts.length > 0) {
      const timer = setTimeout(() => {
        setHearts(hearts.slice(1));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hearts]);

  const numParticlesPerPetal = 1; // Adjust as needed
  return (
    <div className="flower" onClick={handleClick}>
      <div className="flower-stalk">
        <svg className="stalk" viewBox="0 0 100 300" width="100" height="300">
          <defs>
            <linearGradient id="stalkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(1, 90, 1)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(1, 90, 1)" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path
            d="M100 0 C 30 -25, 60 180, 20 300"
            stroke="url(#stalkGradient)"
            strokeWidth="8"
            fill="none"
          />
        </svg>
        <div className="leaf-left"></div>
        <div className="leaf-right"></div>
      </div>
      <div className="petal petal1">
        {createParticles(numParticlesPerPetal, 0)}
      </div>
      <div className="petal petal2">
        {createParticles(numParticlesPerPetal, 45)}
      </div>
      <div className="petal petal3">
        {createParticles(numParticlesPerPetal, 90)}
      </div>
      <div className="petal petal4">
        {createParticles(numParticlesPerPetal, 135)}
      </div>
      <div className="petal petal5">
        {createParticles(numParticlesPerPetal, 180)}
      </div>
      <div className="petal petal6">
        {createParticles(numParticlesPerPetal, 225)}
      </div>
      <div className="petal petal7">
        {createParticles(numParticlesPerPetal, 270)}
      </div>
      <div className="petal petal8">
        {createParticles(numParticlesPerPetal, 315)}
      </div>
      <div className="center"></div>
      {hearts.map((heart) => (
        <FaHeart
          key={heart.id}
          className="heart"
          style={{
            top: heart.y,
            left: heart.x,
            transform: `rotate(${heart.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Flower;
