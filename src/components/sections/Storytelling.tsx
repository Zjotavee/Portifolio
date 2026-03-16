import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const phrases = [
  "Olá.",
  "Eu sou João Vitor.",
  "Sou especialista em criação de websites.",
  "Trabalho com UX, UI e desenvolvimento completo.",
  "Mas acima de tudo…",
  "Estou aqui para te ajudar a transformar sua ideia em um website profissional."
];

export default function Storytelling() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="h-[400vh] relative bg-main-bg">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {phrases.map((phrase, index) => {
          const opacity = useTransform(
            scrollYProgress,
            [index / phrases.length, (index + 0.5) / phrases.length, (index + 1) / phrases.length],
            [0, 1, 0]
          );
          const scale = useTransform(
            scrollYProgress,
            [index / phrases.length, (index + 0.5) / phrases.length],
            [0.8, 1]
          );

          return (
            <motion.div
              key={index}
              style={{ opacity, scale }}
              className="absolute text-center px-4"
            >
              <h2 className="text-4xl md:text-7xl font-bold font-display text-white">
                {phrase}
              </h2>
            </motion.div>
          );
        })}

        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]) }}
          className="absolute text-center px-4"
        >
          <img
            src="https://i.ibb.co/NnpqhYcL/Whats-App-Image-2026-03-16-at-14-29-13.jpg"
            alt="João Vitor"
            className="w-64 h-64 rounded-full border-4 border-tech-blue shadow-2xl shadow-tech-blue/20 mb-8 mx-auto"
            referrerPolicy="no-referrer"
          />
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white">
            Vamos começar?
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
