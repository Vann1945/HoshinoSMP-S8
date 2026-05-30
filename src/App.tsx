import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Users, Server, Sparkles, Map, Shield, Code, Crown, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const IP_ADDRESS = "basic-1.alstore.space:25607";
const COMMUNITY_LINK = "https://linktr.ee/HoshinoSMP";

const STAFF_DATA = [
  { role: "Owner", icon: Crown, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20", members: [
    { name: "HoshinoDyDit", status: "🟢", emote: "⭐" },
    { name: "GanzLemez", status: "🟡", emote: "🔥" }
  ]},
  { role: "Developer", icon: Code, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", members: [
    { name: "Vinnexv", status: "🔴", emote: "🚀" },
    { name: "ShiningShards", status: "🟡", emote: "" }
  ]},
  { role: "Admin", icon: Shield, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", members: [
    { name: "Caisar", status: "🟢", emote: "💥" },
    { name: "Vivue", status: "🟢", emote: "🌟" },
    { name: "Anara", status: "🔴", emote: "💖" },
    { name: "MarcelZeee", status: "🟢", emote: "🌹" },
    { name: "KalilloMC", status: "🔴", emote: "🔥" },
    { name: "C00lKi11er", status: "🟡", emote: "🎉" }
  ]}
];

const SEASONS = [
  { id: "S1", name: "RPG", emoji: "🎆" },
  { id: "S2", name: "Modern 1.0", emoji: "🏙" },
  { id: "S3", name: "Kiw-Essential", emoji: "🛠" },
  { id: "S4", name: "Medieval 1.0", emoji: "🏰" },
  { id: "S5", name: "Fantasy", emoji: "🏞" },
  { id: "S6", name: "Modern 2.0", emoji: "🌁" },
  { id: "S7", name: "Horror", emoji: "👻" },
  { id: "S8", name: "Murni", emoji: "✨" },
  { id: "S9", name: "adalah pokoknya...", emoji: "❓" },
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const [isSeasonsOpen, setIsSeasonsOpen] = useState(false);

  const handleCopyIp = async () => {
    try {
      await navigator.clipboard.writeText(IP_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy IP", err);
    }
  };

  return (
    <div className="font-sans min-h-screen text-slate-200 overflow-x-hidden selection:bg-hoshino-accent-1/30">
      {/* Navbar Minimalist */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/95">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <img src="https://hoshino-smp.netlify.app/1000202494.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold space-x tracking-[0.1em] text-white/90 text-sm">HOSHINO SMP</span>
          </div>
          <div className="flex space-x-4 text-sm font-medium">
             <a href={COMMUNITY_LINK} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full bg-white text-black hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 font-semibold">
                Join <Users className="w-4 h-4" />
             </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto space-y-24">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center pt-20 md:pt-32 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-12"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 p-1 rounded-3xl bg-white/10 overflow-hidden">
               <img 
                 src="https://hoshino-smp.netlify.app/1000202494.jpg" 
                 alt="Hoshino SMP Logo" 
                 className="w-full h-full rounded-2xl object-cover"
               />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10"
          >
             <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
             <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Season 8 is Live</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
          >
            Welcome to <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-500">Hoshino SMP</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12"
          >
            Komunitas Minecraft yang seru, chaos, chill, dan penuh vibe futuristik✨ 
            Bangun dunia bersama, survive bareng, dan jadi bagian dari <strong className="text-slate-200 font-semibold font-display">Hoshino Universe</strong>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          >
            <button 
              onClick={handleCopyIp}
              className="group relative flex items-center justify-between w-full sm:w-auto p-2 pr-6 bg-[#111] border border-white/10 rounded-2xl hover:bg-[#1a1a1a] transition-all overflow-hidden"
            >
              <div className="flex items-center gap-4 relative z-10 w-full pl-2">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors text-slate-400">
                  <Server className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-start min-w-0 pr-4">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest leading-none mb-1">Server IP (Click to copy)</span>
                  <span className="font-mono text-white text-base md:text-lg whitespace-nowrap truncate">{IP_ADDRESS}</span>
                </div>
              </div>
              <div className="relative z-10 hidden sm:flex">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Check className="w-5 h-5 text-emerald-400" />
                    </motion.div>
                  ) : (
                    <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Copy className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </motion.div>
        </section>

        {/* Welcome Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center pt-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <Sparkles className="w-4 h-4" />
              <span>Hoshino Network</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.1]">
                Your new <br/><span className="text-slate-400">“Chill Server 😎”</span>
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg max-w-lg">
                Server utama dari HoshinoSMP Network. Tempat di mana kita semua bisa melepaskan penat, membangun karya besar, atau sekadar nongkrong bersama teman-teman.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative lg:pl-10 h-full flex flex-col justify-center"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 ring-1 ring-white/5 bg-zinc-900">
              <img 
                src="https://hoshino-smp.netlify.app/1000245961.jpg" 
                alt="Welcome Member Group Photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Staff Roster */}
        <section className="space-y-16 pt-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Meet the Crew</h2>
            <p className="text-slate-400 text-lg">Orang-orang hebat di balik layar yang menjaga server tetap aman dan seru.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {STAFF_DATA.map((group, idx) => {
              const Icon = group.icon;
              return (
                <motion.div 
                  key={group.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#111] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-6"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${group.bg} border ${group.border}`}>
                      <Icon className={`w-6 h-6 ${group.color}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white">{group.role}</h3>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{group.members.length} Members</p>
                    </div>
                  </div>
                  <ul className="space-y-4 flex-1">
                    {group.members.map((member, i) => (
                      <li key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-4">
                          <span className="text-sm shadow-sm bg-white/5 border border-white/10 rounded-full w-6 h-6 flex items-center justify-center">{member.status}</span>
                          <span className="font-medium text-slate-300 transition-colors">{member.name}</span>
                        </div>
                        {member.emote && <span className="opacity-80 text-xl">{member.emote}</span>}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Seasons */}
        <section className="space-y-10 mb-32 pt-10 max-w-2xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">Timeline & Tema</h2>
            <p className="text-slate-400">Evolusi server dari waktu ke waktu.</p>
          </div>

          <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
            <button 
              onClick={() => setIsSeasonsOpen(!isSeasonsOpen)}
              className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <span className="font-display font-bold text-lg text-white">View All Seasons</span>
              {isSeasonsOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
            
            <AnimatePresence>
              {isSeasonsOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 flex flex-col gap-2">
                    {SEASONS.map((season) => (
                      <div 
                        key={season.id}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="text-2xl">{season.emoji}</div>
                        <div>
                          <div className="text-xs font-bold text-slate-500 tracking-widest">{season.id}</div>
                          <div className="font-medium text-slate-200">{season.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-hoshino-border bg-hoshino-bg py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 opacity-50">
            <Map className="w-4 h-4" />
            <span className="text-sm">Hoshino Universe &copy; {new Date().getFullYear()}</span>
          </div>
          <p className="text-sm text-slate-500">Built for the community, by the community.</p>
        </div>
      </footer>
    </div>
  );
}

