import { useState, FormEvent } from 'react';
import { X, Calendar, MessageCircle, Stethoscope, Users, Home } from 'lucide-react';

interface AppointmentModalProps { isOpen: boolean; onClose: () => void; }

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [modality, setModality] = useState('Clínica Médica');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [preferredShift, setPreferredShift] = useState('Manhã');
  const [preferredDay, setPreferredDay] = useState('Qualquer dia');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá, Dra. Maria Júlia! Gostaria de agendar uma consulta.\n\n*Dados:*\n• *Nome:* ${patientName || 'Não informado'}\n• *Telefone:* ${patientPhone || 'Não informado'}\n• *Modalidade:* ${modality}\n• *Dia:* ${preferredDay}\n• *Horário:* ${preferredShift}${notes ? `\n• *Observações:* ${notes}` : ''}\n\nAguardo retorno. Obrigado(a)!`;
    window.open(`https://wa.me/5522999999999?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: 'rgba(18,24,41,0.7)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#FDFAF8] w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl border border-[#D87088]/15 shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-[#121829] px-6 py-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#D87088]/75 text-[9px] font-black uppercase tracking-[0.25em] mb-1">
              <Calendar className="w-3.5 h-3.5" /> Agendamento
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">Dra. Maria Júlia Merhge</h3>
            <p className="text-xs text-white/40 mt-0.5">Preencha para agendar via WhatsApp.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-white/10 text-white/50 hover:text-white transition-all cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] sm:max-h-none overflow-y-auto">

          {/* Modality */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-[#121829]/60 block">
              Modalidade de Atendimento
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'Clínica Médica', icon: Stethoscope },
                { id: 'Medicina de Família', icon: Users },
                { id: 'Atendimento Domiciliar', icon: Home },
              ].map(item => {
                const Icon = item.icon;
                const sel = modality === item.id;
                return (
                  <button
                    type="button" key={item.id}
                    onClick={() => setModality(item.id)}
                    className={`p-3 rounded-2xl text-[10px] font-bold flex flex-col items-center gap-1.5 border transition-all cursor-pointer ${
                      sel
                        ? 'bg-[#121829] text-white border-[#121829]'
                        : 'bg-white text-[#3B4761] border-[#D87088]/15 hover:bg-[#F8E8EC] hover:border-[#D87088]/30'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#D87088]" />
                    <span className="text-center leading-tight uppercase tracking-wide">{item.id}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name + Phone */}
          <div className="space-y-3">
            <div>
              <label className="text-[10px] font-black uppercase tracking-wider text-[#121829]/60 block mb-1.5">Nome do Paciente *</label>
              <input
                type="text" required value={patientName} onChange={e => setPatientName(e.target.value)}
                placeholder="Ex: Ana Silva"
                className="w-full px-4 py-3 rounded-xl border border-[#D87088]/20 bg-white text-sm text-[#121829] placeholder:text-[#3B4761]/30 focus:outline-none focus:border-[#D87088] focus:ring-1 focus:ring-[#D87088]/25"
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-wider text-[#121829]/60 block mb-1.5">Telefone / WhatsApp *</label>
              <input
                type="tel" required value={patientPhone} onChange={e => setPatientPhone(e.target.value)}
                placeholder="Ex: (22) 99999-8888"
                className="w-full px-4 py-3 rounded-xl border border-[#D87088]/20 bg-white text-sm text-[#121829] placeholder:text-[#3B4761]/30 focus:outline-none focus:border-[#D87088] focus:ring-1 focus:ring-[#D87088]/25"
              />
            </div>
          </div>

          {/* Day + Shift */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-black uppercase tracking-wider text-[#121829]/60 block mb-1.5">Dia</label>
              <select
                value={preferredDay} onChange={e => setPreferredDay(e.target.value)}
                className="w-full px-3 py-3 rounded-xl border border-[#D87088]/20 bg-white text-sm text-[#121829] focus:outline-none focus:border-[#D87088]"
              >
                {['Qualquer dia', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'].map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-wider text-[#121829]/60 block mb-1.5">Turno</label>
              <select
                value={preferredShift} onChange={e => setPreferredShift(e.target.value)}
                className="w-full px-3 py-3 rounded-xl border border-[#D87088]/20 bg-white text-sm text-[#121829] focus:outline-none focus:border-[#D87088]"
              >
                {['Manhã', 'Tarde', 'Indiferente'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-[10px] font-black uppercase tracking-wider text-[#121829]/60 block mb-1.5">Observações (Opcional)</label>
            <textarea
              rows={2} value={notes} onChange={e => setNotes(e.target.value)}
              placeholder="Descreva brevemente o motivo da consulta..."
              className="w-full px-4 py-3 rounded-xl border border-[#D87088]/20 bg-white text-sm text-[#121829] placeholder:text-[#3B4761]/30 focus:outline-none focus:border-[#D87088] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#121829] hover:bg-[#D87088] text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#D87088]" />
            Enviar via WhatsApp
          </button>
          <p className="text-[10px] text-[#3B4761]/35 text-center uppercase tracking-wider">
            Você será redirecionado com a mensagem pronta.
          </p>
        </form>
      </div>
    </div>
  );
}
