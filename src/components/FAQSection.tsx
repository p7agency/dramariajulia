import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/content';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-[#FDFAF8] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D87088]/04 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D87088]/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#D87088]/80">Dúvidas Frequentes</span>
          </div>
          <h2
            className="font-serif text-[#121829]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Esclareça suas dúvidas
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 bg-white ${
                  isOpen
                    ? 'border-[#D87088]/30 shadow-[0_8px_30px_rgba(216,112,136,0.1)]'
                    : 'border-[#D87088]/12 hover:border-[#D87088]/25'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#FDF5F7] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-semibold text-lg text-[#121829] leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-[#D87088] rotate-180' : 'bg-[#F8E8EC]'
                  }`}>
                    <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-[#D87088]'}`} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 bg-[#FDF5F7] border-t border-[#D87088]/10">
                    <p className="text-sm text-[#3B4761]/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 p-6 rounded-3xl bg-[#121829] text-white flex flex-col sm:flex-row items-center sm:justify-between gap-5 text-center sm:text-left"
        >
          <div>
            <p className="font-bold text-sm text-white">Possui outra dúvida específica?</p>
            <p className="text-xs text-white/40 mt-0.5">Nossa equipe está disponível no WhatsApp para te orientar.</p>
          </div>
          <a
            href="https://wa.me/5522999999999"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D87088] hover:bg-[#C55B74] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
