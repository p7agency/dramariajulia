import { motion } from 'motion/react';
import { Calendar, MapPin, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';
import { FINAL_CTA_DATA } from '../data/content';

interface FinalCTAProps { onOpenBooking: () => void; }

export default function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-[#0E1322] text-white relative border-t border-[#D87088]/30 overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#D87088]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }} className="bg-[#151D30] rounded-2xl p-8 sm:p-12 lg:p-16 border border-[#D87088]/40 shadow-2xl text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D87088]/15 rounded-bl-full pointer-events-none" />
          <div className="inline-flex items-center gap-2 text-[#D87088] text-[11px] font-bold tracking-[0.2em] uppercase border-b border-[#D87088]/30 pb-1">
            <MapPin className="w-4 h-4 text-[#D87088]" />
            <span>{FINAL_CTA_DATA.location}</span>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white">{FINAL_CTA_DATA.title}</h2>
            <p className="font-serif text-xl sm:text-2xl text-[#D87088] font-normal italic">{FINAL_CTA_DATA.subtitle}</p>
          </div>
          <p className="text-base sm:text-lg text-[#F8E8EC]/85 max-w-2xl mx-auto leading-relaxed">{FINAL_CTA_DATA.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button onClick={onOpenBooking} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#D87088] hover:bg-[#c25870] text-white font-semibold text-xs tracking-widest uppercase shadow-lg transition-all duration-300 cursor-pointer">
              <Calendar className="w-4 h-4 text-white" />
              <span>Agendar Consulta Agora</span>
            </button>
            <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-[#D87088]/40 text-white hover:bg-white/10 font-semibold text-xs tracking-widest uppercase transition-colors">
              <MessageCircle className="w-4 h-4 text-[#D87088]" />
              <span>Contato via WhatsApp</span>
            </a>
          </div>
          <div className="pt-8 border-t border-[#D87088]/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#F8E8EC]/80">
            <div className="flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-[#D87088]" /><span className="font-bold text-xs uppercase tracking-wider">Tempo Estendido de Atendimento</span></div>
            <div className="flex items-center justify-center gap-2"><ShieldCheck className="w-4 h-4 text-[#D87088]" /><span className="font-bold text-xs uppercase tracking-wider">Emitimos Recibo para Reembolso</span></div>
            <div className="flex items-center justify-center gap-2"><Heart className="w-4 h-4 text-[#D87088]" /><span className="font-bold text-xs uppercase tracking-wider">Consultório Físico & Domiciliar</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
