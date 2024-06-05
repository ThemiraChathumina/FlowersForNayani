import React, { useEffect } from "react";
import "./App.css";
import Flower from "./components/Flower/Flower";
import Night from "./components/night/night";

const App: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const trail = document.createElement("div");
      trail.className = "trail";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);
      setTimeout(() => {
        trail.remove();
      }, 1000);
    };

    const handleMouseClick = (e: MouseEvent) => {
      const trail = document.createElement("div");
      trail.className = "trail";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);
      setTimeout(() => {
        trail.remove();
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleMouseClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <div className="app-container">
      <Night />
      <div className="flower-container-1">
        <Flower />
      </div>
    </div>
  );
};

export default App;
