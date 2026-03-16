import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ReactNode } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

export default function InteractiveCard({ children, className = '' }: InteractiveCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const springConfig = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`relative group perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 to-tech-cyan/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full bg-secondary-bg/80 backdrop-blur-xl border border-tech-gray rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:border-tech-blue/50">
        {children}
      </div>
    </motion.div>
  );
}
