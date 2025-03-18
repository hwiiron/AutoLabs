import Logo from "@/public/images/icon-logo-white.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Intro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed left-0 top-0 z-[3] flex h-screen w-full items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 1, ease: "easeOut" }}
    >
      <div className="w-[150px] mo:w-[80px]">
        <Logo type="icon" />
      </div>
    </motion.div>
  );
}

export default Intro;
