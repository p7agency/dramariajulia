import { motion } from 'motion/react';
import { Calendar, MapPin, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';
import { FINAL_CTA_DATA } from '../data/content';

interface FinalCTAProps { onOpenBooking: () => void; }

export default function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-[#121829] text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D87088]/07 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-[#D87088]/60" />
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.38em] text-[#D87088]/80">
              <MapPin className="w-3.5 h-3.5" />
              {FINAL_CTA_DATA.location}
            </div>
            <div className="w-8 h-px bg-[#D87088]/60" />
          </div>

          <div className="space-y-3">
            <h2
              className="font-serif text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.025em', lineHeight: 1.08 }}
            >
              {FINAL_CTA_DATA.title}
            </h2>
            <p className="font-serif text-xl text-[#D87088] italic">{FINAL_CTA_DATA.subtitle}</p>
          </div>

          <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
            {FINAL_CTA_DATA.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-[#D87088] hover:bg-[#C55B74] text-white font-bold text-xs tracking-[0.2em] uppercase shadow-[0_8px_30px_rgba(216,112,136,0.4)] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" /> Agendar Consulta Agora
            </button>
            <a
              href="https://wa.me/5522999999999"
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-white/15 text-white hover:bg-white/05 font-bold text-xs tracking-wider uppercase transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#D87088]" /> WhatsApp
            </a>
          </div>

          <div className="pt-8 border-t border-white/08 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, text: 'Tempo Estendido de Atendimento' },
              { icon: ShieldCheck, text: 'Recibo para Reembolso' },
              { icon: Heart, text: 'Consultório Físico & Domiciliar' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-2 text-white/35">
                <Icon className="w-4 h-4 text-[#D87088]" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
