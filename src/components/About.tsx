import { motion } from 'motion/react';
import { Stethoscope, Home, Award, CheckCircle2, Instagram } from 'lucide-react';
import { ABOUT_DATA } from '../data/content';

export default function About() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-[#121829] text-white overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#D87088]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D87088]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Portrait card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 order-2 lg:order-1"
          >
            <div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/08 flex flex-col justify-between p-7"
              style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D87088]/10 rounded-bl-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.28em] text-[#D87088]/60 border-b border-white/06 pb-3 relative z-10">
                <span>Perfil Profissional</span>
                <span className="text-white/20">Itaperuna / RJ</span>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-5 py-8 relative z-10">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full bg-[#D87088]/15 scale-[1.25] blur-md"
                  />
                  <div
                    className="relative w-28 h-28 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #1A233A, #0F1626)',
                      border: '1.5px solid rgba(216,112,136,0.4)',
                      boxShadow: '0 12px 40px rgba(216,112,136,0.2)',
                    }}
                  >
                    <span className="font-serif text-5xl font-semibold text-white/80 select-none">mj</span>
                  </div>
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-0.5 right-0.5 w-5 h-5 rounded-full bg-[#D87088] border-2 border-[#121829]"
                    style={{ boxShadow: '0 0 10px rgba(216,112,136,0.7)' }}
                  />
                </div>
                <div className="text-center space-y-1.5">
                  <p className="font-serif text-xl font-semibold text-white">Dra. Maria Júlia Merhge</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#D87088]">Clínica Médica · Medicina de Família</p>
                </div>
              </div>

              <div
                className="p-4 rounded-2xl space-y-2 relative z-10"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="font-serif italic text-white/60 text-sm leading-relaxed">
                  &ldquo;Compreender a pessoa é tão importante quanto compreender a doença.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-2 border-t border-white/05 text-[9px]">
                  <span className="text-white/28">Atendimento Humanizado</span>
                  <span className="text-[#D87088] font-bold uppercase tracking-widest">— Dra. Maria Júlia</span>
                </div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/dramariajuliamerhge/"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl border border-white/08 hover:border-[#D87088]/40 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D87088]/12 flex items-center justify-center group-hover:bg-[#D87088]/20 transition-colors">
                  <Instagram className="w-4 h-4 text-[#D87088]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Instagram</p>
                  <p className="text-[11px] text-white/35">@dramariajuliamerhge</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#D87088] group-hover:translate-x-0.5 transition-transform uppercase tracking-wider">
                Ver perfil →
              </span>
            </a>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#D87088]/60" />
              <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#D87088]/80">Trajetória e Propósito</span>
            </div>

            <div className="space-y-3">
              <h2
                className="font-serif text-white"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                {ABOUT_DATA.title}
              </h2>
              <p className="font-serif text-lg text-[#D87088] italic">{ABOUT_DATA.subtitle}</p>
            </div>

            <div className="space-y-4 text-white/65 leading-relaxed">
              {ABOUT_DATA.paragraphs.map((para, i) => <p key={i}>{para}</p>)}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Stethoscope, title: 'Atuação Aprofundada', desc: 'Clínica Médica e Medicina de Família integradas.' },
                { icon: Home, title: 'Atendimento Domiciliar', desc: 'Visitas médicas no conforto do seu lar.' },
                { icon: Award, title: 'Rigor Técnico', desc: 'Atualização científica constante e conduta segura.' },
                { icon: CheckCircle2, title: 'Presencial', desc: 'Consultório e domiciliar em Itaperuna/RJ.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-4 rounded-2xl border border-white/08 hover:border-[#D87088]/30 hover:bg-white/05 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <Icon className="w-4 h-4 text-[#D87088] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">{title}</p>
                    <p className="text-[11px] text-white/40 mt-0.5 leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
