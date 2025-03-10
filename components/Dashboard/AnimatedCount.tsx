import { AnimatedCountType } from "@/types/chart.type";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedCount({ to }: AnimatedCountType) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = setInterval(
      () => {
        setCount((prev) => (prev < to ? prev + 1 : to));
      },
      (1 * 1000) / to,
    );

    return () => clearInterval(controls);
  }, [to]);

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
