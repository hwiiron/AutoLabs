import { motion } from "framer-motion";
import Image from "next/image";
import Inner from "../Layout/Inner";

function TeamSection() {
  return (
    <section className="pt-[150px] relative" id="team">
      <Inner className="relative flex flex-col items-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[36px] font-bold">AutoLabs Team</h2>
          <p className="text-[18px] mt-[4px]">함께 일하고, 함께 성장합니다.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative w-[1000px] h-[600px] rounded-md overflow-hidden mt-[40px]"
        >
          <Image src="/images/img-team.png" alt="AutoLabs Team" fill />
        </motion.div>
      </Inner>
    </section>
  );
}

export default TeamSection;
