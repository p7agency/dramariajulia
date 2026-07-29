import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/content';
import { Calendar, CheckCircle2 } from 'lucide-react';

interface ProcessProps { onOpenBooking: () => void; }

export default function Process({ onOpenBooking }: ProcessProps) {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-[#FCFAFA] relative border-t border-[#D87088]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#D87088]">Jornada do Paciente</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#121829]">Como acontece o atendimento</h2>
          <p className="text-base sm:text-lg text-[#3B4761]">Cada consulta é planejada para proporcionar uma experiência médica completa e individualizada.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="p-7 rounded-2xl bg-white border border-[#D87088]/25 hover:border-[#D87088] interactive-card flex flex-col justify-between relative group space-y-4 shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#121829] text-[#F8E8EC] font-mono font-bold text-xs flex items-center justify-center border border-[#D87088]/30 group-hover:bg-[#D87088] group-hover:text-white transition-colors">0{step.number}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#D87088] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#121829] group-hover:text-[#D87088] transition-colors">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#3B4761] leading-relaxed">{step.description}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D87088]/15 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#D87088]">
                <span>Etapa {step.number} de 7</span>
                <span>Cuidado Atento</span>
              </div>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: 0.5 }} className="p-7 rounded-2xl bg-[#121829] text-white flex flex-col justify-between space-y-4 shadow-xl border border-[#D87088]/40 interactive-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D87088]/20 rounded-bl-full pointer-events-none" />
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D87088] font-bold">Agendamento Simples</span>
              <h3 className="font-serif text-2xl font-semibold text-white">Pronto para iniciar seu cuidado?</h3>
              <p className="text-xs text-[#F8E8EC]/80 leading-relaxed">Escolha o melhor horário para seu atendimento presencial em nosso consultório ou no conforto da sua casa em Itaperuna/RJ.</p>
            </div>
            <button onClick={onOpenBooking} className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#D87088] hover:bg-[#C55B74] text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-xs cursor-pointer">
              <Calendar className="w-4 h-4 text-white" />
              <span>Agendar Minha Consulta</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
