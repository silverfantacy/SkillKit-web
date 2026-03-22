export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-3">
          <img src="/icon.png" alt="SkillKit" className="w-7 h-7 rounded-lg" />
          <span className="font-semibold text-gray-400">SkillKit</span>
          <span>·</span>
          <span>MIT License · 完全開源</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/silverfantacy/SkillKit" className="hover:text-gray-400 transition-colors">GitHub</a>
          <a href="https://github.com/silverfantacy/SkillKit/releases" className="hover:text-gray-400 transition-colors">下載</a>
          <a href="https://github.com/silverfantacy/SkillKit/issues" className="hover:text-gray-400 transition-colors">回報問題</a>
        </div>
      </div>
    </footer>
  );
}
