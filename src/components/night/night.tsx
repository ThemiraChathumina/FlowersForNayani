import "./night.css";

export default function Night() {
  const stars = Array.from({ length: 300 }, (_, index) => {
    const style = {
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 4}s`,
    };
    return <div key={index} className="star" style={style}></div>;
  });

  return <div className="night">{stars}</div>;
}
