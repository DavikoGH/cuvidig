import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, FileText, Mail, MapPin, Phone, Briefcase, Eye } from 'lucide-react';
import { Persona } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

interface PersonaCardProps {
  key?: React.Key;
  persona: Persona;
  ciudadNombre: string;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export default function PersonaCard({ persona, ciudadNombre, isExpanded, onToggleExpand }: PersonaCardProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [localExpanded, setLocalExpanded] = useState(false);
  
  const expanded = isExpanded !== undefined ? isExpanded : localExpanded;
  const toggleExpanded = () => {
    if (onToggleExpand) {
      onToggleExpand();
    } else {
      setLocalExpanded(!localExpanded);
    }
  };

  const vistas = useMemo(() => Math.floor(Math.random() * 500) + 50, []);

  return (
    <div className={`relative flex flex-col rounded-[16px] overflow-hidden border transition-transform duration-300 hover:-translate-y-1 ${
      theme === 'night' 
        ? 'bg-[#1e293b] border-white/5' 
        : 'bg-white border-slate-200 shadow-sm'
    }`}>
      {/* Image Container */}
      <div className="relative w-full h-[175px] bg-slate-700 overflow-hidden">
        <img 
          src={persona.foto} 
          alt={persona.nombre}
          className="w-full h-full object-cover object-top"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${
          theme === 'night' ? 'from-[#0f172a] via-[#0f172a]/40 to-transparent' : 'from-white via-white/40 to-transparent'
        }`} style={{ background: `linear-gradient(to top, ${theme === 'night' ? 'rgba(15,23,42,1)' : 'rgba(255,255,255,1)'} 0%, transparent 80%)` }} />
        
        {/* Expand Arrow inside Image */}
        <button 
          onClick={toggleExpanded}
          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            theme === 'night' ? 'bg-black/50 hover:bg-black/70 text-white' : 'bg-white/50 hover:bg-white/80 text-slate-900 backdrop-blur-sm'
          }`}
        >
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={16} />
          </motion.div>
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-1 relative z-10 flex flex-col flex-1">
        <h3 className={`text-[18px] font-bold mb-1 line-clamp-1 ${theme === 'night' ? 'text-white' : 'text-slate-900'}`}>{persona.nombre} {persona.apellido}</h3>
        <div className="text-[11px] text-blue-500 uppercase tracking-wider font-bold line-clamp-1 mb-2">{persona.profesion}</div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto items-center">
          <button 
            onClick={() => navigate(`/persona/${persona.id}`)}
            className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold text-center transition-colors"
          >
            Ver CV
          </button>
          <div className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
            theme === 'night' ? 'bg-white/5 text-slate-300' : 'bg-slate-100 text-slate-600'
          }`} title="Vistas del perfil">
            <Eye size={14} />
            <span>{vistas}</span>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-black/10"
          >
            <div className={`p-4 border-t text-sm ${
              theme === 'night' ? 'border-white/5 text-slate-300' : 'border-slate-100 text-slate-600'
            }`}>
              <div className="flex flex-col gap-2">
                <p className={`text-[13px] ${theme === 'night' ? 'text-slate-200' : 'text-slate-800'}`}>
                  <span className={`font-semibold ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>Ciudad:</span> {ciudadNombre}
                </p>
                <p className={`text-[13px] ${theme === 'night' ? 'text-slate-200' : 'text-slate-800'}`}>
                  <span className={`font-semibold ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>Modalidad:</span> {['Fijo', 'Eventual', 'Freelancer'][persona.id.length % 3]}
                </p>
                <p className={`text-[13px] ${theme === 'night' ? 'text-slate-200' : 'text-slate-800'}`}>
                  <span className={`font-semibold ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>Disponibilidad:</span> {['Sí', 'No', '1/2 tiempo'][persona.nombre.length % 3]}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
