import React from 'react';

export const AnimatedLynx = ({ size = 64 }: { size?: number }) => {
  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Head Shape */}
        <path
          d="M20 40 L50 15 L80 40 L80 80 L50 95 L20 80 Z"
          className="fill-primary"
        />
        
        {/* Ears */}
        <path d="M20 40 L5px 10 L35 30 Z" className="fill-primary" />
        <path d="M80 40 L95 10 L65 30 Z" className="fill-primary" />
        
        {/* Tufted tips */}
        <path d="M5 10 L2 2" className="stroke-primary stroke-[2px]" />
        <path d="M95 10 L98 2" className="stroke-primary stroke-[2px]" />

        {/* Eye Sockets */}
        <rect x="30" y="45" width="12" height="8" rx="4" fill="white" fillOpacity="0.8" />
        <rect x="58" y="45" width="12" height="8" rx="4" fill="white" fillOpacity="0.8" />

        {/* Animated Pupils */}
        <circle cx="36" cy="49" r="3" fill="#1a1a1a">
          <animate
            attributeName="cx"
            values="34;38;34"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="64" cy="49" r="3" fill="#1a1a1a">
          <animate
            attributeName="cx"
            values="62;66;62"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Nose */}
        <path d="M47 65 L53 65 L50 70 Z" fill="white" fillOpacity="0.5" />
      </svg>
    </div>
  );
};
