import { motion } from "framer-motion";
import Image from "next/image";
import Inner from "../Layout/Inner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const tabClass = "px-[12px] py-[8px] text-[14px] text-gray-300";

const tabData = [
  {
    value: "dashboard",
    title: "Dashboard",
    src: "/images/img-dashboard.png",
    alt: "대시보드 메인",
  },
  {
    value: "auto",
    title: "Auto Mode",
    src: "/images/img-dashboard.png",
    alt: "대시보드 자동 검수 모드",
  },
  {
    value: "manual",
    title: "Manual Mode",
    src: "/images/img-dashboard.png",
    alt: "대시보드 수동 검수 모드",
  },
];

function SolutionSection() {
  return (
    <section className="pt-[150px]" id="solution">
      <Inner>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[36px] font-bold">
            효율적인 검수를 위한 스마트한 AI 솔루션
          </h2>
          <p className="text-[18px] mt-[4px]">
            Smart AI for Seamless Inspection
          </p>
        </motion.div>

        <Tabs
          defaultValue="dashboard"
          className="w-full flex flex-col gap-[40px] items-center mt-[40px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <TabsList className="flex gap-6 p-2 rounded-full bg-black backdrop-blur-md">
              {tabData.map((tab, i) => {
                return (
                  <TabsTrigger key={i} value={tab.value} className={tabClass}>
                    {tab.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </motion.div>

          {tabData.map((tab, i) => {
            return (
              <TabsContent key={i} value={tab.value}>
                <motion.div
                  className="w-[1000px] h-[600px] sticky top-[80px] rounded-md overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative size-full">
                    <Image src={tab.src} alt={tab.alt} fill />
                  </div>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </Inner>
    </section>
  );
}

export default SolutionSection;
