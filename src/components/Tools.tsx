import { motion } from "motion/react";

const tools = [
  { name: "Claude Code", icon: "⚡", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { name: "OpenClaw", icon: "🔮", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  { name: "Cursor", icon: "✦", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { name: "Windsurf", icon: "🌊", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
  { name: "更多持續加入…", icon: "＋", color: "text-gray-500", bg: "bg-white/3 border-white/10" },
];

export default function Tools() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-4">
            支援工具
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            你用什麼 AI 工具<br />
            <span className="shimmer-text">SkillKit 都支援</span>
          </h2>
          <p className="text-gray-400 mb-12">統一管理來自不同工具的技能，不再需要各自開不同資料夾</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${tool.bg} transition-all duration-200 hover:scale-105`}
            >
              <span className="text-xl">{tool.icon}</span>
              <span className={`font-medium ${tool.color}`}>{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
