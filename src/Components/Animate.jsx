import React from "react";
import { motion } from "framer-motion";

const Animate = () => {
  const text = "Design is thinking made visual - Saul Bass";
  const words = text.split(" ");

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.3,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  const wordVariant = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="mt-16 lg:text-right"
      variants={container}
      initial="initial"
      animate="animate"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          className="text-base font-medium inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Animate;
