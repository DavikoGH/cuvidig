import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Mail, MapPin, Briefcase, GraduationCap, Award, CheckCircle2, Eye, FileText, Printer } from 'lucide-react';
import { Persona, Ciudad } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { personas as allPersonas, ciudades as allCiudades } from '../data';

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  const [persona, setPersona] = useState<Persona | null>(null);
  const [ciudades, setCiudades] = useState<Ciudad[]>([]);
  const [loading, setLoading] = useState(true);
  
  const vistas = useMemo(() => Math.floor(Math.random() * 500) + 50, []);

  useEffect(() => {
    // Simulate network parsing
    setTimeout(() => {
      const foundPersona = allPersonas.find(p => p.id === id);
      setPersona(foundPersona || null);
      setCiudades(allCiudades);
      setLoading(false);
    }, 200);
  }, [id]);

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Cargando perfil...</div>;
  }

  if (!persona) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Perfil no encontrado</h2>
        <button onClick={() => navigate(-1)} className="text-blue-500 hover:underline">Volver</button>
      </div>
    );
  }

  const ciudadNombre = ciudades.find(c => c.id === persona.ciudadId)?.nombre || 'Ciudad desconocida';

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <button 
        onClick={() => navigate(-1)}
        className={`flex items-center gap-2 mb-6 font-medium transition-colors ${
          theme === 'night' ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
        }`}
      >
        <ArrowLeft size={20} /> Volver a resultados
      </button>

      <div className={`rounded-3xl overflow-hidden border shadow-2xl transition-colors duration-500 ${
        theme === 'night' ? 'bg-slate-900 border-slate-800 shadow-black/50' : 'bg-white border-slate-200 shadow-slate-200/50'
      }`}>
        {/* Banner header */}
        <div 
          className={`h-48 md:h-64 bg-cover bg-center relative ${!persona.portada ? 'bg-gradient-to-r from-blue-700 to-indigo-900' : 'bg-gradient-to-r from-slate-700 to-slate-900'}`}
          style={{ backgroundImage: persona.portada ? `url('${persona.portada}')` : undefined }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="px-6 md:px-12 pb-12 relative">
          {/* Avatar & Main Info */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start -mt-20 md:-mt-24 mb-10 relative z-10">
            <div className={`w-40 md:w-48 h-auto rounded-2xl overflow-hidden border-4 shrink-0 shadow-xl bg-slate-200 ${
              theme === 'night' ? 'border-slate-900 bg-slate-800' : 'border-white bg-slate-200'
            }`}>
              <img src={persona.foto} alt={persona.nombre} className="w-full h-auto object-contain" />
            </div>
            
            <div className={`flex-1 pt-24 md:pt-28 flex flex-col md:flex-row md:items-end justify-between gap-6 w-full ${
              theme === 'night' ? 'text-white' : 'text-slate-900'
            }`}>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold">{persona.nombre} {persona.apellido}</h1>
                <p className={`text-lg mt-1 font-medium ${theme === 'night' ? 'text-blue-400' : 'text-blue-600'}`}>
                  {persona.profesion}
                </p>
                <div className={`flex items-center gap-2 mt-3 font-medium ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>
                  <MapPin size={18} />
                  <span>{ciudadNombre}</span>
                </div>
              </div>

              <div className="flex gap-3 shrink-0">
                <button className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-colors ${
                  theme === 'night' ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-white' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                }`}>
                  <FileText size={18} /> CV en Digital
                </button>
                <button className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-colors ${
                  theme === 'night' ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-white' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                }`}>
                  <Printer size={18} /> CV en Físico
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className={`font-display text-xl font-bold mb-4 flex items-center gap-2 ${theme === 'night' ? 'text-white' : 'text-slate-900'}`}>
                  Sobre mí
                </h2>
                <p className={`leading-relaxed ${theme === 'night' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {persona.descripcion}
                </p>
              </section>

              <section>
                <h2 className={`font-display text-xl font-bold mb-6 flex items-center gap-2 ${theme === 'night' ? 'text-white' : 'text-slate-900'}`}>
                  <Briefcase className="text-blue-500" /> Experiencia Profesional
                </h2>
                <div className="space-y-6">
                  {persona.experiencia.slice(0, 2).map((exp, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700 pb-2">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7.5px] top-1.5 ring-4 ring-white dark:ring-slate-900" />
                      <h3 className={`font-bold text-lg ${theme === 'night' ? 'text-white' : 'text-slate-900'}`}>{exp.cargo}</h3>
                      <p className={`font-medium mt-1 ${theme === 'night' ? 'text-slate-300' : 'text-slate-700'}`}>{exp.empresa}</p>
                      <p className={`text-sm mt-1.5 ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>{exp.duracion}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className={`font-display text-xl font-bold mb-6 flex items-center gap-2 ${theme === 'night' ? 'text-white' : 'text-slate-900'}`}>
                  <GraduationCap className="text-blue-500" /> Formación Académica
                </h2>
                <div className="space-y-6">
                  {persona.formacion.slice(0, 1).map((form, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700 pb-2">
                      <div className="absolute w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full -left-[7.5px] top-1.5 ring-4 ring-white dark:ring-slate-900" />
                      <h3 className={`font-bold text-lg ${theme === 'night' ? 'text-white' : 'text-slate-900'}`}>{form.titulo}</h3>
                      <p className={`font-medium mt-1 ${theme === 'night' ? 'text-slate-300' : 'text-slate-700'}`}>{form.institucion}</p>
                      <p className={`text-sm mt-1.5 ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>{form.ano}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-8">
              <div className={`p-6 rounded-2xl border ${theme === 'night' ? 'bg-slate-800/50 border-slate-700/50' : 'bg-slate-50 border-slate-100'}`}>
                <h3 className={`font-display text-lg font-bold mb-4 flex items-center gap-2 ${theme === 'night' ? 'text-white' : 'text-slate-900'}`}>
                  <CheckCircle2 className="text-blue-500" size={20} /> Habilidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {persona.habilidades.slice(0, 3).map((hab, idx) => (
                    <span 
                      key={idx} 
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        theme === 'night' ? 'bg-slate-700/80 text-slate-200' : 'bg-white border text-slate-700'
                      }`}
                    >
                      {hab}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-6 rounded-2xl border ${theme === 'night' ? 'bg-slate-800/50 border-slate-700/50' : 'bg-slate-50 border-slate-100'}`}>
                <h3 className={`font-display text-lg font-bold mb-4 flex items-center gap-2 ${theme === 'night' ? 'text-white' : 'text-slate-900'}`}>
                  <Award className="text-blue-500" size={20} /> Cursos y Certificaciones
                </h3>
                <ul className="space-y-3">
                  {persona.cursos.slice(0, 3).map((cr, idx) => (
                    <li key={idx} className={`flex text-sm items-start gap-2 ${theme === 'night' ? 'text-slate-300' : 'text-slate-600'}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span>{cr}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
