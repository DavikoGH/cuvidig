import React, { useEffect, useState } from 'react';
import { Persona } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { Plus, Edit2, Trash2, Power, Search, Upload } from 'lucide-react';

export default function Admin() {
  const { theme } = useTheme();
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetch('/api/personas')
      .then(res => res.json())
      .then(setPersonas);
  }, []);

  const filtered = personas.filter(p => 
    p.nombre.toLowerCase().includes(q.toLowerCase()) || 
    p.apellido.toLowerCase().includes(q.toLowerCase()) ||
    p.profesion.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className={`font-display font-bold text-2xl lg:text-3xl tracking-tight mb-1 ${theme === 'night' ? 'text-white' : 'text-slate-900'}`}>
            Panel Administrativo
          </h2>
          <p className={`${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>
            Gestiona los perfiles del directorio
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors">
          <Plus size={18} /> Nuevo Perfil
        </button>
      </div>

      <div className={`p-4 rounded-xl border mb-6 flex flex-col sm:flex-row gap-4 items-center ${
        theme === 'night' ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="relative w-full sm:max-w-sm">
          <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`} />
          <input 
            type="text"
            placeholder="Buscar por nombre o profesión..."
            value={q}
            onChange={e => setQ(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg text-sm font-medium border outline-none transition-colors ${
              theme === 'night' 
                ? 'bg-slate-900/50 border-slate-700 text-white focus:border-blue-500 placeholder-slate-500' 
                : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-blue-500 placeholder-slate-400'
            }`}
          />
        </div>
      </div>

      <div className={`flex-1 rounded-2xl border overflow-hidden flex flex-col ${
        theme === 'night' ? 'bg-slate-900 border-slate-800 shadow-xl shadow-black/50' : 'bg-white border-slate-200 shadow-lg shadow-slate-200/50'
      }`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className={`border-b font-medium ${
              theme === 'night' ? 'bg-slate-800/80 text-slate-300 border-slate-700/80' : 'bg-slate-50 text-slate-700 border-slate-200'
            }`}>
              <tr>
                <th className="px-6 py-4">Profesional</th>
                <th className="px-6 py-4">Contacto</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Acciones</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${theme === 'night' ? 'divide-slate-800/80' : 'divide-slate-100'}`}>
              {filtered.map(persona => (
                <tr key={persona.id} className={`transition-colors ${theme === 'night' ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-slate-200">
                        <img src={persona.foto} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className={`font-bold ${theme === 'night' ? 'text-white' : 'text-slate-900'}`}>
                          {persona.nombre} {persona.apellido}
                        </p>
                        <p className={`text-xs ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>{persona.profesion}</p>
                      </div>
                    </div>
                  </td>
                  <td className={`px-6 py-4 ${theme === 'night' ? 'text-slate-300' : 'text-slate-600'}`}>
                    <p>{persona.email}</p>
                    <p className="text-xs opacity-80 mt-0.5">{persona.telefono}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      persona.estado === 'activo' 
                        ? (theme === 'night' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border-emerald-200')
                        : (theme === 'night' ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-slate-100 text-slate-500 border-slate-200')
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${persona.estado === 'activo' ? 'bg-current' : 'bg-slate-400'}`} />
                      {persona.estado === 'activo' ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className={`p-2 rounded-lg transition-colors ${theme === 'night' ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900'}`} title="Editar">
                        <Edit2 size={16} />
                      </button>
                      <button className={`p-2 rounded-lg transition-colors ${theme === 'night' ? 'hover:bg-slate-800 text-slate-400 hover:text-blue-400' : 'hover:bg-slate-100 text-slate-500 hover:text-blue-600'}`} title={persona.estado === 'activo' ? 'Desactivar' : 'Activar'}>
                        <Power size={16} />
                      </button>
                      <button className={`p-2 rounded-lg transition-colors ${theme === 'night' ? 'hover:bg-slate-800 text-slate-400 hover:text-red-400' : 'hover:bg-slate-100 text-slate-500 hover:text-red-600'}`} title="Eliminar">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                    No se encontraron perfiles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
