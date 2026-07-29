import { motion } from 'motion/react';
import { Calendar, ArrowRight, PhoneCall, CheckCircle2, Home, Clock, Heart } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#FDFAF8] overflow-hidden">

      {/* ── Ambient background shapes ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large soft rose circle — top right */}
        <div className="absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full bg-[#D87088]/[0.07] blur-3xl" />
        {/* Small warm accent — bottom left */}
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-[#D87088]/[0.05] blur-3xl" />
        {/* Faint center glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f5e8ec]/60 blur-3xl" />
      </div>

      {/* ── Subtle diagonal line ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(105deg, #D87088 0px, #D87088 1px, transparent 1px, transparent 120px)',
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-28 pb-16 lg:pt-32 lg:pb-20">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center gap-3 mb-12 lg:mb-16"
        >
          <div className="w-8 h-px bg-[#D87088]/60" />
          <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#D87088]/80">
            Itaperuna / RJ &nbsp;&bull;&nbsp; Presencial &nbsp;&bull;&nbsp; Domiciliar
          </span>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col gap-8">

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="font-serif text-[#121829] leading-[1.06]"
                style={{ fontSize: 'clamp(3rem, 6.5vw, 6.5rem)', letterSpacing: '-0.025em' }}
              >
                Medicina
                <span
                  className="block font-light italic"
                  style={{
                    WebkitTextStroke: '1.5px rgba(216,112,136,0.55)',
                    color: 'transparent',
                    fontSize: '0.92em',
                  }}
                >
                  para a
                </span>
                <span
                  className="block"
                  style={{
                    background: 'linear-gradient(110deg, #121829 10%, #D87088 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Vida.
                </span>
              </h1>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="w-0.5 h-14 bg-[#D87088] shrink-0 mt-0.5" />
              <p className="font-serif text-lg sm:text-xl text-[#D87088] italic font-normal leading-snug">
                &ldquo;Cuidado médico baseado em ciência,
                tempo e individualidade.&rdquo;
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="text-base sm:text-lg text-[#3B4761]/80 leading-relaxed max-w-lg"
            >
              Acredito que cada paciente possui uma história única. Meu compromisso é
              oferecer medicina baseada nas melhores evidências, aliada a um olhar humano
              que respeita sua individualidade.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#121829] hover:bg-[#D87088] text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(216,112,136,0.4)] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D87088] group-hover:text-white transition-colors" />
                Agendar Consulta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="https://wa.me/5522999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-[#D87088]/35 text-[#121829] hover:bg-[#F8E8EC] font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-[#D87088]" />
                WhatsApp
              </a>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-[#D87088]/15"
            >
              {[
                'Emissão de recibo para reembolso',
                'Acompanhamento contínuo',
                'Itaperuna / RJ',
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#3B4761]/70"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D87088]" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN ─── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Portrait card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#D87088]/20 shadow-[0_20px_60px_rgba(216,112,136,0.12)] bg-gradient-to-br from-white to-[#FDF0F3]">

              {/* Aspect ratio wrapper */}
              <div className="aspect-[4/5] flex flex-col justify-between p-7">

                {/* Card header */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#D87088]/70">
                    Dra. Maria Júlia Merhge
                  </span>
                  <span className="text-[9px] font-bold text-[#121829]/30 uppercase tracking-widest">CRM-RJ</span>
                </div>

                {/* Center monogram */}
                <div className="flex flex-col items-center justify-center gap-5 flex-1 py-8">
                  <div className="relative">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full bg-[#D87088]/10 scale-[1.18] blur-sm" />
                    <div
                      className="relative w-28 h-28 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #121829, #1E2D45)',
                        boxShadow: '0 12px 40px rgba(216,112,136,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
                        border: '1.5px solid rgba(216,112,136,0.4)',
                      }}
                    >
                      <span className="font-serif text-5xl font-semibold text-white/85 select-none">mj</span>
                    </div>
                    {/* Status dot */}
                    <div
                      className="absolute bottom-0.5 right-0.5 w-5 h-5 rounded-full bg-[#D87088] border-2 border-white"
                      style={{ boxShadow: '0 0 10px rgba(216,112,136,0.7)' }}
                    />
                  </div>

                  <div className="text-center space-y-1.5">
                    <p className="font-serif text-xl font-semibold text-[#121829]">
                      Dra. Maria Júlia Merhge
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#D87088]">
                      Clínica Médica &bull; Medicina de Família
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-4 rounded-2xl bg-[#121829]/[0.04] border border-[#121829]/[0.07] space-y-2">
                  <p className="font-serif italic text-[#121829]/65 text-sm leading-relaxed">
                    &ldquo;Compreender a pessoa é tão importante quanto compreender a doença.&rdquo;
                  </p>
                  <div className="flex justify-between items-center pt-2 border-t border-[#121829]/06 text-[9px]">
                    <span className="text-[#121829]/35">Atendimento Humanizado</span>
                    <span className="text-[#D87088] font-bold uppercase tracking-widest">— Dra. Maria Júlia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Three micro-cards row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Clock, label: 'Consultas', sub: 'Estendidas' },
                { icon: Heart, label: 'Cuidado', sub: 'Individual' },
                { icon: Home, label: 'Consultório', sub: '& Domicílio' },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-[#D87088]/15 hover:border-[#D87088]/40 hover:shadow-md transition-all duration-300 text-center"
                >
                  <div className="w-9 h-9 rounded-full bg-[#F8E8EC] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#D87088]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#121829] uppercase tracking-wide leading-none">{label}</p>
                    <p className="text-[10px] text-[#3B4761]/60 leading-tight mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location + book pill */}
            <button
              onClick={onOpenBooking}
              className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-[#D87088]/20 hover:border-[#D87088]/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8E8EC] flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4 text-[#D87088]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#121829] uppercase tracking-wider">Itaperuna / RJ</p>
                  <p className="text-[11px] text-[#3B4761]/60">Presencial & Domiciliar</p>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D87088] group-hover:translate-x-0.5 transition-transform">
                Agendar &rarr;
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDFAF8] to-transparent pointer-events-none" />
    </section>
  );
}
