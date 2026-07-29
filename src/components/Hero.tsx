import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Calendar, ArrowRight, Home, PhoneCall, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0D121D]"
    >

      {/* ====== BACKGROUND LAYER ====== */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">

        {/* Base deep navy gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1A] via-[#111827] to-[#0D121D]" />

        {/* Rose ambient glow — top right */}
        <div className="absolute -top-20 -right-20 w-[800px] h-[700px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#D87088]/18 via-[#D87088]/05 to-transparent rounded-full blur-[120px]" />
        </div>

        {/* Rose ambient glow — bottom left */}
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[500px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D87088]/10 via-transparent to-transparent rounded-full blur-[100px]" />
        </div>

        {/* Subtle vertical grid lines */}
        <div className="absolute inset-0 opacity-[0.025]">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-[#D87088]"
              style={{ left: `${i * 7.69}%` }}
            />
          ))}
        </div>

        {/* Horizontal editorial rule */}
        <div className="absolute top-[38%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D87088]/12 to-transparent" />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />
      </motion.div>

      {/* ====== STATUS BAR (fades on scroll) ====== */}
      <motion.div
        style={{ opacity }}
        className="absolute top-0 left-0 right-0 z-20 pt-24 sm:pt-28 px-6 sm:px-10 md:px-16 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Specialty badges */}
          <div className="flex items-center gap-2">
            {['Clínica Médica', 'Medicina de Família', 'Domiciliar'].map((tag) => (
              <span
                key={tag}
                className="hidden md:inline-flex items-center text-[9px] font-bold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full border border-[#D87088]/25 text-[#D87088]/60 bg-[#0D121D]/80 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Quick CTA */}
          <button
            onClick={onOpenBooking}
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D87088]/12 hover:bg-[#D87088]/20 border border-[#D87088]/35 text-[#D87088] font-bold text-[10px] tracking-[0.2em] uppercase transition-all backdrop-blur-sm cursor-pointer"
          >
            <Calendar className="w-3 h-3" />
            <span>Agendar</span>
          </button>
        </div>
      </motion.div>

      {/* ====== MAIN CONTENT (parallax on scroll) ====== */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-16 pb-20 lg:pb-28"
      >
        {/* -- Editorial eyebrow -- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-4 mb-10 lg:mb-14"
        >
          <div className="w-12 h-px bg-[#D87088]/50" />
          <span className="text-[9px] font-black uppercase tracking-[0.45em] text-[#D87088]/70">
            Itaperuna / RJ &mdash; Atendimento Presencial &mdash; Domiciliar
          </span>
        </motion.div>

        {/* -- 12-column editorial grid -- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">

          {/* LEFT: Headline */}
          <div className="lg:col-span-7 space-y-8">

            {/* Giant serif headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif leading-[1.02] select-none"
              style={{ fontSize: 'clamp(3.8rem, 9vw, 8.5rem)', letterSpacing: '-0.025em' }}
            >
              {/* Solid line */}
              <span className="block text-white">MEDICINA</span>

              {/* Ghost / outline line */}
              <span
                className="block"
                style={{
                  WebkitTextStroke: '1px rgba(216,112,136,0.45)',
                  color: 'transparent',
                  fontSize: '0.9em',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                }}
              >
                PARA A
              </span>

              {/* Gradient fade line */}
              <span
                className="block"
                style={{
                  background: 'linear-gradient(100deg, #ffffff 30%, rgba(255,255,255,0.25) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                VIDA
              </span>
            </motion.h1>

            {/* Quote / subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex items-start gap-5"
            >
              <div className="w-1 h-16 bg-[#D87088] shrink-0 mt-1" />
              <p className="font-serif text-xl sm:text-2xl text-[#D87088] font-normal italic leading-snug">
                &ldquo;Atendimento médico preventivo e integral,
                focado na pessoa e em suas necessidades reais.&rdquo;
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              {/* Primary CTA */}
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-between gap-6 px-8 py-5 rounded-2xl bg-[#D87088] hover:bg-[#C55B74] text-white font-bold text-[10px] tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_8px_40px_rgba(216,112,136,0.35)] hover:shadow-[0_8px_60px_rgba(216,112,136,0.55)] cursor-pointer active:scale-[0.98] min-w-[220px]"
              >
                <span className="flex items-center gap-3">
                  <Calendar className="w-4 h-4" />
                  Agendar Consulta
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>

              {/* Secondary CTA */}
              <a
                href="https://wa.me/5522999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-5 rounded-2xl border border-white/15 text-white/75 hover:text-white hover:border-white/35 hover:bg-white/5 font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-[#D87088]" />
                WhatsApp
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-8 border-t border-white/8"
            >
              {[
                'Emissão de recibo para reembolso',
                'Acompanhamento contínuo',
                'Itaperuna / RJ',
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/45">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D87088]" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Portrait card + location badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Portrait placeholder card */}
            <div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/8 flex flex-col justify-between p-6 shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(2px)',
              }}
            >
              {/* Rose inner glow */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-[#D87088]/08 rounded-bl-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#D87088]/05 rounded-tr-full blur-xl pointer-events-none" />

              {/* Card header */}
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-[#D87088]/55 border-b border-white/06 pb-3 relative z-10">
                <span>Dra. Maria Júlia Merhge</span>
                <span className="text-white/18">CRM-RJ</span>
              </div>

              {/* Center: monogram avatar */}
              <div className="flex-1 flex flex-col items-center justify-center gap-6 py-10 relative z-10">
                <div className="relative">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #1A233A, #0F1626)',
                      border: '1.5px solid rgba(216,112,136,0.35)',
                      boxShadow: '0 0 50px rgba(216,112,136,0.2), inset 0 0 30px rgba(216,112,136,0.05)',
                    }}
                  >
                    <span className="font-serif text-4xl font-semibold text-white/80 select-none">mj</span>
                  </div>
                  {/* Online dot */}
                  <div className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#D87088] border-2 border-[#0D121D] shadow-[0_0_12px_rgba(216,112,136,0.6)]" />
                </div>

                <div className="text-center space-y-2">
                  <p className="font-serif text-xl font-semibold text-white">
                    Dra. Maria Júlia Merhge
                  </p>
                  <p className="text-[10px] text-[#D87088] font-bold uppercase tracking-widest">
                    Clínica Médica &bull; Medicina de Família
                  </p>
                </div>
              </div>

              {/* Quote footer */}
              <div
                className="p-4 rounded-xl space-y-2 relative z-10"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <p className="font-serif italic text-white/65 text-sm leading-relaxed">
                  &ldquo;Compreender a pessoa é tão importante quanto compreender a doença.&rdquo;
                </p>
                <div className="flex justify-between items-center pt-2 border-t border-white/06 text-[9px]">
                  <span className="text-white/28">Atendimento Humanizado</span>
                  <span className="text-[#D87088]/75 font-bold uppercase tracking-widest">— Dra. Maria Júlia</span>
                </div>
              </div>
            </div>

            {/* Location + quick book card */}
            <div
              className="flex items-center justify-between p-4 rounded-2xl border border-white/08 hover:border-[#D87088]/30 transition-colors duration-300 cursor-pointer group"
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)' }}
              onClick={onOpenBooking}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D87088]/12 flex items-center justify-center">
                  <Home className="w-4 h-4 text-[#D87088]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Itaperuna / RJ</p>
                  <p className="text-[11px] text-white/30">Consultório & Domiciliar</p>
                </div>
              </div>
              <button
                className="px-4 py-2 rounded-xl bg-[#D87088] hover:bg-[#C55B74] text-white text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Agendar
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ====== BOTTOM GRADIENT FADE ====== */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0D121D] to-transparent pointer-events-none z-15" />

      {/* ====== SCROLL INDICATOR ====== */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold text-white/22">Scroll</span>
        <div className="relative w-5 h-12 rounded-full border border-white/18">
          <motion.div
            className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/55"
            animate={{ y: [0, 22, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
