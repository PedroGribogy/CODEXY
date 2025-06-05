import { useState, useEffect, type ReactNode } from 'react';

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  height?: string;
}

const FlipCard = ({
  frontContent,
  backContent,
  height = "h-[400px]"
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className={`${height} [perspective:1000px] cursor-pointer ${!isMobile ? 'hover-flip' : ''}`}
      onClick={handleClick}
    >
      <div 
        className={`
          relative h-full w-full rounded-xl glass-card
          transition-all duration-500 
          [transform-style:preserve-3d]
          ${isFlipped ? '[transform:rotateY(180deg)]' : ''}
        `}
      >
        {/* Front of the card */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <div className="h-full">
            {frontContent}
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 h-full w-full glass-card [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="h-full">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard; 