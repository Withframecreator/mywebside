import React from 'react';

interface WFCLogoProps {
  className?: string;
  showText?: boolean;
  adaptiveFrameColor?: boolean;
}

export function WFCLogo({ className = "w-10 h-10", showText = false, adaptiveFrameColor = true }: WFCLogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Frame (Thick Square Outline) */}
        <rect
          x="46"
          y="24"
          width="50"
          height="50"
          rx="2"
          stroke={adaptiveFrameColor ? "currentColor" : "#111111"}
          strokeWidth="6"
          fill="none"
          className={adaptiveFrameColor ? "text-white" : ""}
        />

        {/* --- Letters WFC with solid dark outlines for maximum pop --- */}
        <g stroke="#111111" strokeWidth="1.5" strokeLinejoin="round">
          
          {/* W (Red Parts) */}
          {/* Left Slanted Bar */}
          <path
            d="M 16,44 L 21,44 L 26,62 L 21,62 Z"
            fill="#EF4444"
          />
          {/* Middle Peak */}
          <path
            d="M 27,62 L 32,44 L 37,44 L 42,62 L 37,62 L 34.5,52 L 32,62 Z"
            fill="#EF4444"
          />
          {/* Bottom V */}
          <path
            d="M 21,65 L 26,65 L 30,78 L 34,65 L 39,65 L 32.5,82 L 27.5,82 Z"
            fill="#EF4444"
          />

          {/* F (Blue Parts) */}
          {/* Vertical Stem */}
          <path
            d="M 43,44 L 47,44 L 47,82 L 43,82 Z"
            fill="#3B82F6"
          />
          {/* Top Horizontal Bar */}
          <path
            d="M 47,44 L 64,44 L 61,50 L 47,50 Z"
            fill="#3B82F6"
          />
          {/* Middle Horizontal Bar */}
          <path
            d="M 47,56 L 60,56 L 57,62 L 47,62 Z"
            fill="#3B82F6"
          />
          {/* Bottom Horizontal Foot */}
          <path
            d="M 47,68 L 56,68 L 53,74 L 47,74 Z"
            fill="#3B82F6"
          />

          {/* C (Yellow/Gold Curved Part) */}
          <path
            d="M 78,44 A 18 18 0 0 0 54,63 A 18 18 0 0 0 78,82 L 78,75 A 11 11 0 0 1 61,63 A 11 11 0 0 1 78,51 Z"
            fill="#FBBF24"
          />
        </g>
      </svg>
      
      {showText && (
        <span className="text-[10px] font-extrabold tracking-widest text-white mt-1 uppercase font-display">
          WITH FRAME CREATOR
        </span>
      )}
    </div>
  );
}
