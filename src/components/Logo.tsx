import React from 'react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img src="/CV%20Logo%20Blanco%20SVG.svg" alt="Talento Logo" className={className} />
  );
}
