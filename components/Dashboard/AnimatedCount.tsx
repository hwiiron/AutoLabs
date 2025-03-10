import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedNumberProps {
  from?: number;
  to: number;
  duration?: number;
}

function AnimatedCount({ from = 0, to, duration = 1 }: AnimatedNumberProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = setInterval(
      () => {
        setCount((prev) => (prev < to ? prev + 1 : to));
      },
      (duration * 1000) / to,
    );

    return () => clearInterval(controls);
  }, [to, duration]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {count}
    </motion.span>
  );
}

export default AnimatedCount;
