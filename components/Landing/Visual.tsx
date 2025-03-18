import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Typewriter } from "nextjs-simple-typewriter";
import { useEffect, useState } from "react";
import Inner from "../Layout/Inner";

function Visual() {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Inner className="h-[90vh] relative">
        <div className="text-white absolute top-[250px]">
          <h1 className="h-[43px] text-[36px] font-bold">
            {startTyping && (
              <Typewriter
                words={["Fabric Inspection with AI"]}
                typeSpeed={80}
              />
            )}
          </h1>

          <motion.p
            className="text-[18px] mt-[16px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 1.5 }}
          >
            AI-powered hybrid solution <br />
            for accurate and efficient fabric inspection.
          </motion.p>
        </div>

        <div className="w-[1000px] h-full absolute top-0 right-0">
          <Spline scene="https://prod.spline.design/DaPV8UcLkUQRqirI/scene.splinecode" />
        </div>
      </Inner>
    </div>
  );
}

export default Visual;
