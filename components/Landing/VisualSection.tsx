import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Typewriter } from "nextjs-simple-typewriter";
import Inner from "../Layout/Inner";

function VisualSection() {
  return (
    <section>
      <Inner className="h-[92vh] relative">
        <div className="text-white absolute top-[250px]">
          <h2 className="h-[43px] text-[36px] font-bold">
            <Typewriter words={["Fabric Inspection with AI"]} typeSpeed={60} />
          </h2>

          <motion.p
            className="text-[18px] mt-[16px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1.5 }}
          >
            AI 기반 하이브리드 솔루션으로
            <br />
            정확하고 효율적인 섬유 검수를 제공합니다.
          </motion.p>
        </div>

        <div className="w-[1000px] h-full absolute top-0 right-0">
          {/* 분홍색 */}
          {/* <Spline scene="https://prod.spline.design/DaPV8UcLkUQRqirI/scene.splinecode" /> */}

          {/* 녹색 */}
          <Spline scene="https://prod.spline.design/xm9CpfRLRajLZVSf/scene.splinecode" />
        </div>
      </Inner>
    </section>
  );
}

export default VisualSection;
