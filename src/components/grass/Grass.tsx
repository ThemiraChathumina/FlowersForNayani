import "./Grass.css";

interface GrassProps {
  className?: string;
  scale?: number;
}

export default function Grass({ className, scale }: GrassProps) {
  const style = {
    transform: `scale(${scale || 1})`,
  };

  return (
    <div className={className} style={style}>
      <div className="leaf"></div>
      <div className="leaf leaf-1"></div>
      <div className="leaf leaf-2"></div>
      <div className="leaf leaf-3"></div>
      <div className="leaf leaf-4"></div>
    </div>
  );
}
