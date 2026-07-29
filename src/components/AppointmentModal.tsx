import { useState, FormEvent } from 'react';
import { X, Calendar, MessageCircle, Stethoscope, Users, Home } from 'lucide-react';

interface AppointmentModalProps { isOpen: boolean; onClose: () => void; }

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [modality, setModality] = useState<string>('Clínica Médica');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [preferredShift, setPreferredShift] = useState<string>('Manhã');
  const [preferredDay, setPreferredDay] = useState<string>('Qualquer dia');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá, Dra. Maria Júlia Merhge! Gostaria de solicitar o agendamento de uma consulta.\n\n*Dados do Solicitante:*\n• *Nome:* ${patientName || 'Não informado'}\n• *Telefone:* ${patientPhone || 'Não informado'}\n• *Modalidade de Atendimento:* ${modality}\n• *Preferência de Dia:* ${preferredDay}\n• *Preferência de Horário:* ${preferredShift}${notes ? `\n• *Observações/Motivo:* ${notes}` : ''}\n\nAguardando informações sobre disponibilidade de horários em Itaperuna/RJ. Muito obrigado(a)!`;
    window.open(`https://wa.me/5522999999999?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121829]/80 backdrop-blur-xs">
      <div className="bg-[#FDF9FA] w-full max-w-lg rounded-2xl border border-[#D87088]/30 shadow-2xl overflow-hidden relative">
        <div className="bg-[#121829] text-white p-6 sm:p-7 relative border-b border-[#D87088]/30">
          <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer" aria-label="Fechar"><X className="w-5 h-5" /></button>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D87088] mb-1">
            <Calendar className="w-4 h-4 text-[#D87088]" />
            <span>Agendamento de Consulta</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Dra. Maria Júlia Merhge</h3>
          <p className="text-xs text-[#F8E8EC]/80 mt-1">Preencha abaixo para direcionar seu atendimento diretamente pelo WhatsApp.</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5 max-h-[80vh] overflow-y-auto">
          <div className="space-y-2">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121829]">1. Escolha a Modalidade de Atendimento:</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[{ id: 'Clínica Médica', icon: Stethoscope }, { id: 'Medicina de Família', icon: Users }, { id: 'Atendimento Domiciliar', icon: Home }].map((item) => {
                const Icon = item.icon;
                const isSelected = modality === item.id;
                return (
                  <button type="button" key={item.id} onClick={() => setModality(item.id)} className={`p-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex flex-col items-center gap-2 border transition-all duration-300 cursor-pointer ${isSelected ? 'bg-[#121829] text-white border-[#121829] shadow-sm' : 'bg-white text-[#3B4761] border-[#D87088]/20 hover:bg-[#F8E8EC]'}`}>
                    <Icon className="w-4 h-4 text-[#D87088]" />
                    <span className="text-center text-[10px]">{item.id}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121829] mb-1">Nome do Paciente *</label>
              <input type="text" required value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Ex: Ana Silva" className="w-full px-4 py-3 rounded-xl border border-[#D87088]/30 bg-white text-sm text-[#121829] focus:outline-none focus:border-[#D87088] focus:ring-1 focus:ring-[#D87088]" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121829] mb-1">Telefone / WhatsApp *</label>
              <input type="tel" required value={patientPhone} onChange={(e) => setPatientPhone(e.target.value)} placeholder="Ex: (22) 99999-8888" className="w-full px-4 py-3 rounded-xl border border-[#D87088]/30 bg-white text-sm text-[#121829] focus:outline-none focus:border-[#D87088] focus:ring-1 focus:ring-[#D87088]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121829] mb-1">Dia de Preferência</label>
              <select value={preferredDay} onChange={(e) => setPreferredDay(e.target.value)} className="w-full px-3 py-3 rounded-xl border border-[#D87088]/30 bg-white text-sm text-[#121829] focus:outline-none focus:border-[#D87088]">
                <option value="Qualquer dia">Qualquer dia</option>
                <option value="Segunda-feira">Segunda-feira</option>
                <option value="Terça-feira">Terça-feira</option>
                <option value="Quarta-feira">Quarta-feira</option>
                <option value="Quinta-feira">Quinta-feira</option>
                <option value="Sexta-feira">Sexta-feira</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121829] mb-1">Turno de Preferência</label>
              <select value={preferredShift} onChange={(e) => setPreferredShift(e.target.value)} className="w-full px-3 py-3 rounded-xl border border-[#D87088]/30 bg-white text-sm text-[#121829] focus:outline-none focus:border-[#D87088]">
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
                <option value="Indiferente">Indiferente</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121829] mb-1">Observações ou Sintomas Principais (Opcional)</label>
            <textarea rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Descreva brevemente o motivo da consulta ou necessidade..." className="w-full px-4 py-3 rounded-xl border border-[#D87088]/30 bg-white text-sm text-[#121829] focus:outline-none focus:border-[#D87088]" />
          </div>
          <div className="pt-2">
            <button type="submit" className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#121829] hover:bg-[#D87088] text-white font-bold text-xs tracking-widest uppercase shadow-md transition-all duration-300 cursor-pointer group">
              <MessageCircle className="w-4 h-4 text-[#D87088] group-hover:text-white transition-colors" />
              <span>Enviar Pré-Agendamento via WhatsApp</span>
            </button>
            <p className="text-[10px] text-[#3B4761] text-center mt-2 font-medium uppercase tracking-wider">Você será redirecionado com a mensagem pronta para confirmação da clínica.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
