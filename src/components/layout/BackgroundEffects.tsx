import { motion } from 'motion/react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated Grid */}
      <motion.div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'linear-gradient(to right, #2A2A2A 1px, transparent 1px), linear-gradient(to bottom, #2A2A2A 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
        initial={{ backgroundPosition: '0px 0px' }}
        animate={{ backgroundPosition: '60px 60px' }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-tech-cyan/30 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            x: [null, Math.random() * 100 - 50],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 8 + 7,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
            delay: Math.random() * 5
          }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-main-bg/80 via-transparent to-main-bg/80" />
    </div>
  );
}
