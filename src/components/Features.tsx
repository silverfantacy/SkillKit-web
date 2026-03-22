import { motion } from "motion/react";

const features = [
  {
    icon: "🗂️",
    title: "統一管理",
    desc: "自動掃描 Claude Code、OpenClaw 等工具的技能目錄，所有技能一覽無遺，不再需要手動翻資料夾。",
  },
  {
    icon: "🏷️",
    title: "標籤分類",
    desc: "為每個技能加上自訂標籤，快速篩選。找「前端」、「寫作」、「分析」技能只需一秒。",
  },
  {
    icon: "🎭",
    title: "情境切換",
    desc: "儲存不同工作模式的技能組合。切換到「Debug 模式」或「寫作模式」，一鍵套用對應的啟用設定。",
  },
  {
    icon: "☁️",
    title: "Git 備份",
    desc: "將技能庫備份到私有 Git repo，換電腦不怕遺失，多台電腦也能同步。",
  },
  {
    icon: "🔔",
    title: "更新偵測",
    desc: "追蹤 Git-based 技能的上游狀態，有新版本時自動提醒，永遠保持最新。",
  },
  {
    icon: "🛡️",
    title: "安全掃描",
    desc: "自動掃描技能檔案中的潛在安全問題，讓你安心使用社群技能。",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/40 hover:bg-white/5 transition-all duration-300"
    >
      {/* Shimmer border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl card-border opacity-30" style={{ padding: "1px" }}>
          <div className="w-full h-full rounded-2xl bg-[#09090f]" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-3xl mb-4">{feature.icon}</div>
        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-4">
          功能特色
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          技能管理，<span className="shimmer-text">前所未有的順手</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <FeatureCard key={f.title} feature={f} index={i} />
        ))}
      </div>
    </section>
  );
}
