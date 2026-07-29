import { motion } from 'motion/react';
import { Quote, Heart } from 'lucide-react';
import { MANIFESTO_DATA } from '../data/content';

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 lg:py-32 bg-[#121829] text-white relative border-t border-[#D87088]/30">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#D87088]">
          <Heart className="w-3.5 h-3.5 text-[#D87088]" />
          <span className="border-b border-[#D87088]/30 pb-0.5">O Manifesto</span>
        </div>
        <div className="flex justify-center"><Quote className="w-12 h-12 text-[#D87088]/60" /></div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight">{MANIFESTO_DATA.title}</h2>
        <div className="space-y-6 max-w-3xl mx-auto text-base sm:text-xl text-[#F8E8EC]/85 leading-relaxed font-serif italic">
          {MANIFESTO_DATA.paragraphs.map((para, idx) => (
            <p key={idx} className={idx === MANIFESTO_DATA.paragraphs.length - 1 ? 'text-2xl sm:text-3xl font-semibold text-white not-italic pt-4 font-serif' : ''}>{para}</p>
          ))}
        </div>
        <div className="pt-8 border-t border-[#D87088]/25 flex flex-col items-center justify-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#D87088]/20 border border-[#D87088]/50 flex items-center justify-center text-[#F8E8EC] font-serif font-bold text-lg shadow-2xs">mj</div>
          <p className="font-serif text-2xl font-medium text-white tracking-tight">Dra. Maria Júlia Merhge</p>
          <p className="text-[10px] text-[#D87088] tracking-[0.2em] uppercase font-bold">Clínica Médica • Medicina de Família • Itaperuna/RJ</p>
        </div>
      </motion.div>
    </section>
  );
}
