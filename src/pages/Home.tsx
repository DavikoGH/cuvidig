import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Persona, Ciudad } from '../types';
import PersonaCard from '../components/PersonaCard';
import { useTheme } from '../contexts/ThemeContext';
import { SearchX } from 'lucide-react';
import { personas as allPersonas, ciudades as allCiudades } from '../data';

export default function Home() {
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [ciudades, setCiudades] = useState<Ciudad[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  useEffect(() => {
    // Fetch ciudades to map IDs to names in cards
    setCiudades(allCiudades);
  }, []);

  useEffect(() => {
    setLoading(true);
    
    // Simulate network and filtering
    setTimeout(() => {
      const q = searchParams.get('q')?.toLowerCase();
      const area = searchParams.get('area');
      const ciudad = searchParams.get('ciudad');
      const pais = searchParams.get('pais');

      let result = [...allPersonas];

      if (pais) result = result.filter(p => p.paisId === pais);
      if (area) result = result.filter(p => p.areaId === area);
      if (ciudad) result = result.filter(p => p.ciudadId === ciudad);
      if (q) {
        result = result.filter(p => 
          p.nombre.toLowerCase().includes(q) ||
          p.apellido.toLowerCase().includes(q) ||
          p.profesion.toLowerCase().includes(q) ||
          p.descripcion.toLowerCase().includes(q) ||
          p.habilidades.some(h => h.toLowerCase().includes(q))
        );
      }

      setPersonas(result);
      setLoading(false);
    }, 200);

  }, [searchParams]);

  const getCiudadNombre = (id: string) => {
    return ciudades.find(c => c.id === id)?.nombre || 'Ciudad desconocida';
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto h-full flex flex-col">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`rounded-xl h-[300px] animate-pulse ${theme === 'night' ? 'bg-[#1e293b]' : 'bg-slate-200'}`} />
          ))}
        </div>
      ) : personas.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 pb-20 items-start">
          {personas.map(persona => (
            <PersonaCard 
              key={persona.id} 
              persona={persona} 
              ciudadNombre={getCiudadNombre(persona.ciudadId)} 
              isExpanded={expandedCardId === persona.id}
              onToggleExpand={() => setExpandedCardId(prev => prev === persona.id ? null : persona.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl ${
            theme === 'night' ? 'bg-[#1e293b] text-slate-400 shadow-black/20' : 'bg-white text-slate-400 shadow-slate-200/50'
          }`}>
            <SearchX size={32} />
          </div>
          <h3 className={`font-display text-xl font-bold mb-2 ${theme === 'night' ? 'text-white' : 'text-slate-900'}`}>
            No se encontraron resultados
          </h3>
          <p className={`max-w-md ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>
            Intenta ajustar tus filtros de búsqueda, probar con otras palabras clave o cambiar de categoría.
          </p>
        </div>
      )}
    </div>
  );
}
