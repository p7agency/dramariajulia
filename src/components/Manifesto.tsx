import { motion } from 'motion/react';
import { MANIFESTO_DATA } from '../data/content';
import { Heart } from 'lucide-react';

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24 lg:py-36 bg-[#121829] text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D87088]/06 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-10"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-[#D87088]/60" />
            <div className="flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-[#D87088]" />
              <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#D87088]/80">O Manifesto</span>
            </div>
            <div className="w-8 h-px bg-[#D87088]/60" />
          </div>

          <h2
            className="font-serif text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.025em', lineHeight: 1.08 }}
          >
            {MANIFESTO_DATA.title}
          </h2>

          <div className="space-y-5 font-serif italic text-lg sm:text-xl leading-relaxed text-white/60">
            {MANIFESTO_DATA.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={i === MANIFESTO_DATA.paragraphs.length - 1
                  ? 'font-serif text-2xl sm:text-3xl font-semibold text-white not-italic pt-4'
                  : ''}
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="pt-8 border-t border-white/08 flex flex-col items-center gap-3">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center font-serif font-semibold text-xl text-white/80"
              style={{
                background: 'linear-gradient(135deg, #1A233A, #0F1626)',
                border: '1.5px solid rgba(216,112,136,0.4)',
                boxShadow: '0 0 30px rgba(216,112,136,0.15)',
              }}
            >
              mj
            </div>
            <p className="font-serif text-2xl font-semibold text-white">Dra. Maria Júlia Merhge</p>
            <p className="text-[10px] text-[#D87088]/65 font-bold uppercase tracking-widest">
              Clínica Médica · Medicina de Família · Itaperuna/RJ
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
