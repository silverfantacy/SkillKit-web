import { motion } from "motion/react";

export default function Screenshots() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm mb-4">
            介面預覽
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            簡潔而強大的<span className="shimmer-text">原生體驗</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow behind screenshot */}
          <div className="absolute inset-0 bg-violet-600/20 blur-[80px] rounded-3xl" />

          {/* App screenshot */}
          <div className="relative shadow-2xl shadow-violet-900/30">
            <img
              src="/screenshot-app.png"
              alt="SkillKit App 介面截圖"
              className="w-full h-auto block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
