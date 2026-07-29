import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/content';
import { Calendar, CheckCircle2 } from 'lucide-react';

interface ProcessProps { onOpenBooking: () => void; }

export default function Process({ onOpenBooking }: ProcessProps) {
  return (
    <section id="como-funciona" className="relative py-20 lg:py-28 bg-[#FDFAF8] overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D87088]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D87088]/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#D87088]/80">Jornada do Paciente</span>
          </div>
          <h2
            className="font-serif text-[#121829]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Como acontece o atendimento
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col gap-4 p-6 rounded-3xl bg-white border border-[#D87088]/15 hover:border-[#D87088]/40 hover:shadow-[0_12px_40px_rgba(216,112,136,0.1)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-full bg-[#121829] flex items-center justify-center group-hover:bg-[#D87088] transition-colors">
                  <span className="font-mono text-xs font-bold text-white">{String(step.number).padStart(2, '0')}</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#D87088]/30 group-hover:text-[#D87088] transition-colors" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif text-lg font-semibold text-[#121829] group-hover:text-[#D87088] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#3B4761]/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col justify-between gap-5 p-6 rounded-3xl bg-[#121829] text-white border border-[#D87088]/20"
          >
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#D87088] font-bold">Agendamento</span>
              <h3 className="font-serif text-xl font-semibold">Pronto para iniciar seu cuidado?</h3>
              <p className="text-xs text-white/45 leading-relaxed">Escolha o melhor horário em Itaperuna/RJ.</p>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#D87088] hover:bg-[#C55B74] text-white font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Agendar
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
