import Inner from "@/components/Layout/Inner";
import Logo from "@/public/images/icon-logo-white.svg";
import { motion } from "framer-motion";

const highlightTexts = [
  {
    title: "Performance",
    description: "고속 AI 기반 검수 시스템으로 최대 10배 이상의 생산성 향상",
  },
  {
    title: "Reliability",
    description:
      "정밀한 데이터 분석과 검증을 통한 높은 신뢰도의 AI 솔루션 제공",
  },
  {
    title: "Innovation",
    description: "산업별 맞춤형 AI 기술 개발 및 연속 학습 기반 AI 시스템 구축",
  },
  {
    title: "Experience",
    description: "정부 R&D 및 산업 프로젝트 수행, AI 솔루션 구축 경험 보유",
  },
];

function HighlightSection() {
  return (
    <section className="pt-[200px] mb-[150px]" id="company">
      <Inner className="flex justify-between">
        <motion.h2
          className="text-[36px] font-semibold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Logo className="w-[200px] block" />
          산업 검수의 변화를 이끄는 <br />
          AI 혁신 기업입니다.
        </motion.h2>

        <motion.div className="flex flex-col gap-[80px]">
          {highlightTexts.map((text, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              <h3 className="text-[64px] leading-none font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {text.title}
              </h3>
              <p className="text-gray-300 text-[18px] mt-[16px]">
                {text.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Inner>
    </section>
  );
}

export default HighlightSection;
