'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-32 left-1/2 -translate-x-1/2 z-40">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 border border-dashed border-white/30 rounded-full animate-spin-slow" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[10px] tracking-widest text-white/80 uppercase font-light">
            Scroll
          </span>
          <span className="text-[10px] tracking-widest text-white/80 uppercase font-light">
            Down
          </span>
          <ChevronDown className="w-4 h-4 mt-1 text-white/80 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
