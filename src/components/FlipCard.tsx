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
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) setIsFlipped(f => !f);
  };

  return (
    <div
      className={`${height} flip-card-outer`}
      onClick={handleClick}
    >
      <div className={`flip-card-inner${isMobile && isFlipped ? ' flipped' : ''}`}>
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard; 