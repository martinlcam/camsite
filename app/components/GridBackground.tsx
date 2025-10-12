/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from "react";

export default function GridBackground() {
  const squareSize = 50;

  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cols = Math.floor(dimensions.width / squareSize) + 1;
  const rows = Math.floor(dimensions.height / squareSize) + 1;

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-[-2] pointer-events-none"
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, ${squareSize}px)`,
        gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, idx) => (
        <div
          key={idx}
          style={{
            border: '1px solid #e2e2e2',
            width: `${squareSize}px`,
            height: `${squareSize}px`,
            boxSizing: 'border-box',
          }}
        />
      ))}
    </div>
  );
}
