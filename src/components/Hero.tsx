import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Glow orbs */}
      <div className="glow-orb absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="glow-orb absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-purple-500/15 blur-[80px] pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          macOS 專屬 · 完全開源
        </motion.div>

        {/* App icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-[28px] bg-violet-500/30 blur-xl scale-110" />
            <img
              src="/icon.png"
              alt="SkillKit icon"
              className="relative w-24 h-24 rounded-[28px] shadow-2xl shadow-violet-900/50"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          管理你的
          <br />
          <span className="shimmer-text">AI 技能庫</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          SkillKit 將你在 Claude、OpenClaw 等 AI 工具中的技能統一管理，
          支援標籤分類、情境切換、Git 備份與自動更新偵測。
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://github.com/silverfantacy/SkillKit/releases"
            className="relative group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-violet-900/40 overflow-hidden"
          >
            <span className="beam absolute inset-0 w-1/3 bg-white/20 blur-sm" />
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            下載 for macOS
          </a>
          <a
            href="https://github.com/silverfantacy/SkillKit"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 hover:border-violet-500/50 bg-white/5 hover:bg-white/8 text-gray-300 hover:text-white font-semibold text-base transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </motion.div>

        {/* Version hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 text-sm text-gray-600"
        >
          需要 macOS 14+ · 免費開源
        </motion.p>
      </div>
    </section>
  );
}
