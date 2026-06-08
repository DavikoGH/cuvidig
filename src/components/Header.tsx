import React, { useEffect, useState } from 'react';
import { Search, Moon, Sun } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Pais, Categoria, Ciudad } from '../types';
import Logo from './Logo';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [paises, setPaises] = useState<Pais[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [ciudades, setCiudades] = useState<Ciudad[]>([]);

  useEffect(() => {
    Promise.all([
      fetch('/api/paises').then(res => res.json()),
      fetch('/api/categorias').then(res => res.json()),
      fetch('/api/ciudades').then(res => res.json()),
    ]).then(([ps, cats, ciuds]) => {
      setPaises(ps);
      setCategorias(cats);
      setCiudades(ciuds);

      const urlParams = new URLSearchParams(window.location.search);
      if (!urlParams.has('pais')) {
        const bolivia = ps.find((x: Pais) => x.nombre.toLowerCase() === 'bolivia');
        if (bolivia) {
            setSearchParams(prev => {
                if (!prev.has('pais')) {
                prev.set('pais', bolivia.id);
                }
                return prev;
            }, { replace: true });
        }
      }
    });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setSearchParams(prev => {
      if (q) prev.set('q', q);
      else prev.delete('q');
      return prev;
    }, { replace: true });
  };

  const handleSelect = (key: string, value: string) => {
    setSearchParams(prev => {
      if (value) prev.set(key, value);
      else prev.delete(key);
      return prev;
    });
  };

  const currentQ = searchParams.get('q') || '';
  const currentPais = searchParams.get('pais') || '';
  const currentArea = searchParams.get('area') || '';
  const currentCiudad = searchParams.get('ciudad') || '';

  return (
    <header className="h-[80px] shrink-0 flex items-center justify-between mb-6 relative z-30">
      
      {/* Branding */}
      <div className="flex items-center gap-3 shrink-0">
        <Logo className="w-12 h-12" />
        <div>
          <h1 className={`font-display text-[18px] font-extrabold tracking-tight ${theme === 'night' ? 'text-white' : 'text-slate-900'} flex items-center leading-none`}>
            PORTAL <span className="mx-2"><span className="text-[#00FF00]">C</span><span className="text-[#F15A24]">V</span></span> DIGITAL
          </h1>
          <p className={`text-[12px] uppercase font-bold tracking-[0.15em] mt-1 ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`}>
            Currictorio Profesional
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-[500px] mx-10 relative hidden md:block">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`} />
        <input 
          type="text"
          placeholder="Buscar por nombre, habilidad o experiencia..."
          value={currentQ}
          onChange={handleSearch}
          className={`w-full pl-12 pr-5 py-3 rounded-full text-sm outline-none transition-colors ${
            theme === 'night' 
              ? 'bg-slate-800/70 border border-white/10 text-white focus:border-blue-500/50 placeholder-slate-400' 
              : 'bg-white border border-slate-200 text-slate-900 focus:border-blue-500 placeholder-slate-400 shadow-sm'
          }`}
        />
      </div>

      {/* Filters & Theme Toggle */}
      <div className="flex items-center gap-3 shrink-0">
        <select 
          value={currentPais}
          onChange={(e) => handleSelect('pais', e.target.value)}
          className={`px-4 py-2 rounded-lg text-[13px] font-medium outline-none appearance-none cursor-pointer transition-colors ${
            theme === 'night' 
              ? 'bg-slate-800/70 border border-white/10 text-white hover:bg-slate-800' 
              : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 bg-opacity-70'
          }`}
        >
          <option value="">País: Todos</option>
          {paises.map(p => (
            <option key={p.id} value={p.id}>{p.nombre}</option>
          ))}
        </select>

        <select 
          value={currentCiudad}
          onChange={(e) => handleSelect('ciudad', e.target.value)}
          className={`px-4 py-2 rounded-lg text-[13px] font-medium outline-none appearance-none cursor-pointer transition-colors ${
            theme === 'night' 
              ? 'bg-slate-800/70 border border-white/10 text-white hover:bg-slate-800' 
              : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 bg-opacity-70'
          }`}
        >
          <option value="">Departamento: Todos</option>
          {ciudades.map(c => (
             // Ideally we filter cities by country, but since all mock cities represent Bolivia and we're demonstrating the concept:
            <option key={c.id} value={c.id}>{c.nombre}</option>
          ))}
        </select>

        <select 
          value={currentArea}
          onChange={(e) => handleSelect('area', e.target.value)}
          className={`px-4 py-2 rounded-lg text-[13px] font-medium outline-none appearance-none cursor-pointer transition-colors ${
            theme === 'night' 
              ? 'bg-slate-800/70 border border-white/10 text-white hover:bg-slate-800' 
              : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 bg-opacity-70'
          }`}
        >
          <option value="">Área: Todas</option>
          {categorias.map(c => (
            <option key={c.id} value={c.id}>{c.nombre}</option>
          ))}
        </select>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105 shadow-xl ${
            theme === 'night' ? 'bg-white text-slate-900 shadow-white/10' : 'bg-slate-900 text-white shadow-slate-900/20'
          }`}
          title="Cambiar Modo"
        >
          {theme === 'night' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
