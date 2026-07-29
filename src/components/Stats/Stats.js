import React, { useEffect, useRef, useState } from "react";
import "./stats.css";
import { RiAwardLine, RiMapPinLine, RiTeamLine, RiStarLine } from "react-icons/ri";

const statsData = [
  { icon: <RiAwardLine />, value: 15, label: "Years of Experience", suffix: "+" },
  { icon: <RiMapPinLine />, value: 500, label: "Projects Completed", suffix: "+" },
  { icon: <RiTeamLine />, value: 200, label: "Happy Clients", suffix: "+" },
  { icon: <RiStarLine />, value: 98, label: "Satisfaction Rate", suffix: "%" },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  return (
    <section id="stats" className="stats">
      <div className="container">
        <div className="stats__grid">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="stats__item fade-in"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="stats__icon">{stat.icon}</div>
              <div className="stats__value">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
