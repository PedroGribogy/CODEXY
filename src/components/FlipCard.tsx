import { useState, type ReactNode } from 'react';

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

  return (
    <div 
      className={`${height} [perspective:1000px]`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        } md:group-hover:[transform:rotateY(180deg)]`}
      >
        {/* Front of the card */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-lg">
          {frontContent}
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-blue-50 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard; 