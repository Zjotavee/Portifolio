import { motion } from 'motion/react';
import { useState } from 'react';

interface PremiumMediaProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function PremiumMedia({ src, alt, className = '', containerClassName = '' }: PremiumMediaProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${containerClassName}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setIsLoaded(true)}
        whileHover={{ scale: 1.05 }}
        referrerPolicy="no-referrer"
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-tech-gray animate-pulse" />
      )}
    </motion.div>
  );
}
