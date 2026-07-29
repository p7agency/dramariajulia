import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/content';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);
  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#FCFAFA] relative border-t border-[#D87088]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#D87088]">Dúvidas Frequentes</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#121829]">Esclareça suas dúvidas</h2>
          <p className="text-sm sm:text-base text-[#3B4761]">Informações claras para você agendar sua consulta com total segurança e tranquilidade.</p>
        </motion.div>
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: index * 0.05 }} className="bg-white rounded-2xl border border-[#D87088]/25 overflow-hidden transition-all duration-300 shadow-2xs hover:border-[#D87088]">
                <button onClick={() => toggleFAQ(index)} className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#F8E8EC]/40 transition-colors cursor-pointer" aria-expanded={isOpen}>
                  <span className="font-serif font-semibold text-lg sm:text-xl text-[#121829]">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#D87088] text-white' : 'bg-[#F8E8EC] text-[#D87088]'}`}><ChevronDown className="w-4 h-4" /></div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#3B4761] leading-relaxed border-t border-[#D87088]/15 bg-[#FDF9FA]"><p>{faq.answer}</p></div>
                )}
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6 }} className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#121829] text-white border border-[#D87088]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#D87088]/15 rounded-bl-full pointer-events-none" />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D87088]/20 text-[#D87088] flex items-center justify-center shrink-0 border border-[#D87088]/40"><HelpCircle className="w-6 h-6" /></div>
            <div>
              <p className="font-bold text-white text-xs uppercase tracking-wider">Possui outra dúvida específica?</p>
              <p className="text-xs text-[#F8E8EC]/80 mt-0.5">Nossa equipe está disponível no WhatsApp para te orientar.</p>
            </div>
          </div>
          <a href="https://wa.me/5522999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D87088] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C55B74] transition-colors shadow-md shrink-0">
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
