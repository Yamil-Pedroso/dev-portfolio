import React, { useEffect, useState } from "react";
import "./styles.css"; 

const CustomCursor: React.FC<{ isHovering: boolean }> = ({ isHovering }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [showText, setShowText] = useState(false); 

  useEffect(() => {
    if (isHovering) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 500); 
  
      return () => clearTimeout(timer);
    } else {
      setShowText(false); 
    }
  }, [isHovering]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setTargetPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followCursor = () => {
      setPosition((prevPosition) => {
        const dx = targetPosition.x - prevPosition.x;
        const dy = targetPosition.y - prevPosition.y;

        const speed = 0.2;
        return {
          x: prevPosition.x + dx * speed,
          y: prevPosition.y + dy * speed,
        };
      });

      requestAnimationFrame(followCursor);
    }

    followCursor();

    return () => cancelAnimationFrame(followCursor as unknown as number);
  }, [targetPosition]);

  const cursorStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    width: isHovering ? "140px" : "0.8rem", 
    height: isHovering ? "40px" : "0.8rem", 
    borderRadius: isHovering ? "20px" : "50%",
    
    background: isHovering ? "rgba(0, 153, 255, 0.4)" : "#0099ff", 
    border: isHovering ? "1px solid rgba(0, 153, 255, .8)" : "none", 
  
    boxShadow: isHovering
      ? "0 4px 10rem 5px rgba(0, 153, 255, 0.6), 0 0 20px rgba(0, 153, 255, 0.2)" 
      : "0 0 3rem 5px rgba(0, 153, 255, 0.8), 0 0 20px rgba(0, 153, 255, 0.5)", 
    
    backdropFilter: isHovering ? "blur(10px)" : "none",
    WebkitBackdropFilter: isHovering ? "blur(10px)" : "none",
  
    transition: "width .5s ease-in-out, height .5s ease-in-out, border-radius .5s ease-in-out, background-color .5s ease-in-out", 

    fontSize: ".9rem",
    fontWeight: 300,
    color: "#fff",
    whiteSpace: "nowrap",
  } as React.CSSProperties;

  const textStyle = {
    opacity: showText ? 1 : 0, 
    transition: "opacity .1s ease", 
    visibility: showText ? "visible" : "hidden", 
    color: "#fff",
    fontSize: "0.9rem",
  } as React.CSSProperties;

  return (
    <div className="custom-cursor" style={cursorStyle}>
        <span style={textStyle}>Discover project</span>
    </div>
  );
};

export default CustomCursor;