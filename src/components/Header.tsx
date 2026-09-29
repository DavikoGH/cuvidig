import React, { useEffect, useState } from 'react';
import { Search, Moon, Sun, Home, FileText, Facebook, ChevronDown } from 'lucide-react';
import { useSearchParams, NavLink, useLocation, useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Pais, Categoria, Ciudad } from '../types';
import Logo from './Logo';
import ShareButton from './ShareButton';
import { paises as allPaises, categorias as allCategorias, ciudades as allCiudades } from '../data';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [paises, setPaises] = useState<Pais[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [ciudades, setCiudades] = useState<Ciudad[]>([]);

  useEffect(() => {
    // Read from local data
    setPaises(allPaises);
    setCategorias(allCategorias);
    setCiudades(allCiudades);

    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('pais')) {
      const bolivia = [...allPaises].find((x: Pais) => x.nombre.toLowerCase() === 'bolivia');
      if (bolivia) {
        setSearchParams(prev => {
          if (!prev.has('pais')) {
            prev.set('pais', bolivia.id);
          }
          return prev;
        }, { replace: true });
      }
    }
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    if (location.pathname !== '/cv-digital') {
      const nextParams = new URLSearchParams(searchParams);
      if (q) nextParams.set('q', q);
      else nextParams.delete('q');
      navigate(`/cv-digital?${nextParams.toString()}`);
      return;
    }
    setSearchParams(prev => {
      if (q) prev.set('q', q);
      else prev.delete('q');
      return prev;
    }, { replace: true });
  };

  const handleSelect = (key: string, value: string) => {
    if (location.pathname !== '/cv-digital') {
      const nextParams = new URLSearchParams(searchParams);
      if (value) nextParams.set(key, value);
      else nextParams.delete(key);
      navigate(`/cv-digital?${nextParams.toString()}`);
      return;
    }
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
    <header className="shrink-0 mb-6 relative z-30 w-full">
      {/* ========================================================
          MOBILE VIEW (Portrait & Landscape)
          ======================================================== */}
      <div className="is-mobile-device md:hidden flex-col items-center justify-center w-full gap-2.5 pt-1 pb-2">
        {/* ----------------------------------------------------
            FORMATO MOBILE VERTICAL (portrait)
            1. Logotipo CV PORTAL DIGITAL DE CV arriba centrado
            2. Menú a la izquierda + Logo de Facebook a la derecha
            3. Las 3 categorías (País, Depto, Área) debajo
            Todos centrados en la visual horizontal
            ---------------------------------------------------- */}
        <div className="flex portrait:flex landscape:hidden flex-col items-center justify-center w-full gap-3">
          {/* 1. Logotipo CV PORTAL DIGITAL DE CV, CURRICTORIO PROFESIONAL arriba */}
          <div className="relative w-full flex items-center justify-center">
            <Link to="/inicio" className="flex items-center justify-center gap-2.5 group cursor-pointer" title="Ir al Inicio - Presentación">
              <Logo className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform" />
              <div className="text-left">
                <h1 className="font-display text-[16px] sm:text-[18px] font-extrabold tracking-tight text-[#00FF00] flex items-center leading-none">
                  PORTAL&nbsp;&nbsp;DIGITAL&nbsp;&nbsp;DE&nbsp;&nbsp;CV
                </h1>
                <p className="text-[11px] uppercase font-bold tracking-[0.14em] mt-1 text-[#F15A24]">
                  Currictorio Profesional
                </p>
              </div>
            </Link>

            {/* Theme Toggle Button (Mobile Top Right) */}
            <button 
              onClick={toggleTheme}
              className={`absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-md ${
                theme === 'night' ? 'bg-white text-slate-900 shadow-white/10' : 'bg-slate-900 text-white shadow-slate-900/20'
              }`}
              title="Cambiar Modo"
              aria-label="Cambiar Modo"
            >
              {theme === 'night' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>

          {/* 2. Menú a la izquierda y Logo de Facebook a la derecha */}
          <div className="w-full max-w-sm sm:max-w-md mx-auto flex items-center justify-between gap-2 px-1">
            {/* Menú a la izquierda: Inicio y CV Digitales */}
            <nav className="flex items-center gap-1.5">
              <NavLink
                to="/inicio"
                className={({ isActive }) => twMerge(clsx(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-sm",
                  isActive 
                    ? "bg-blue-500 text-white shadow-blue-500/25"
                    : (theme === 'night' ? "bg-slate-800/80 text-slate-300 hover:text-white border border-white/5" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200")
                ))}
              >
                <Home size={15} />
                <span>Inicio</span>
              </NavLink>

              <NavLink
                to="/cv-digital"
                className={({ isActive }) => twMerge(clsx(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-sm",
                  isActive 
                    ? "bg-blue-500 text-white shadow-blue-500/25"
                    : (theme === 'night' ? "bg-slate-800/80 text-slate-300 hover:text-white border border-white/5" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200")
                ))}
              >
                <FileText size={15} />
                <span>CV Digitales</span>
              </NavLink>
            </nav>

            {/* Red social de Facebook a la derecha y Compartir */}
            <div className="flex items-center gap-1.5 shrink-0">
              <ShareButton size="sm" />
              <a 
                href="https://www.facebook.com/daviko.curriculum" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Facebook - Daviko Curriculum" 
                aria-label="Facebook"
                className={`flex items-center justify-center w-8 h-8 rounded-xl transition-all shadow-sm shrink-0 ${
                  theme === 'night' 
                    ? 'bg-slate-800/80 text-slate-300 hover:text-[#1877F2] border border-white/5' 
                    : 'bg-white text-slate-700 hover:text-[#1877F2] border border-slate-200'
                }`}
              >
                <Facebook size={18} className="text-[#1877F2]" />
              </a>
            </div>
          </div>

          {/* 3. Las 3 categorías (País, Departamento y Área) debajo del menú */}
          <div className="w-full max-w-sm sm:max-w-md mx-auto grid grid-cols-3 gap-2">
            {/* País */}
            <div className="relative">
              <select 
                value={currentPais}
                onChange={(e) => handleSelect('pais', e.target.value)}
                className={`w-full appearance-none pl-2.5 pr-6 py-2 rounded-xl text-[12px] font-semibold truncate outline-none cursor-pointer border shadow-sm transition-colors ${
                  theme === 'night' 
                    ? 'bg-slate-800/90 border-white/10 text-white focus:border-blue-500' 
                    : 'bg-white border-slate-200 text-slate-800 focus:border-blue-500'
                }`}
              >
                <option value="">País: Todos</option>
                {paises.map(p => (
                  <option key={p.id} value={p.id}>{p.nombre}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>

            {/* Departamento */}
            <div className="relative">
              <select 
                value={currentCiudad}
                onChange={(e) => handleSelect('ciudad', e.target.value)}
                className={`w-full appearance-none pl-2.5 pr-6 py-2 rounded-xl text-[12px] font-semibold truncate outline-none cursor-pointer border shadow-sm transition-colors ${
                  theme === 'night' 
                    ? 'bg-slate-800/90 border-white/10 text-white focus:border-blue-500' 
                    : 'bg-white border-slate-200 text-slate-800 focus:border-blue-500'
                }`}
              >
                <option value="">Depto: Todos</option>
                {ciudades.map(c => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>

            {/* Área */}
            <div className="relative">
              <select 
                value={currentArea}
                onChange={(e) => handleSelect('area', e.target.value)}
                className={`w-full appearance-none pl-2.5 pr-6 py-2 rounded-xl text-[12px] font-semibold truncate outline-none cursor-pointer border shadow-sm transition-colors ${
                  theme === 'night' 
                    ? 'bg-slate-800/90 border-white/10 text-white focus:border-blue-500' 
                    : 'bg-white border-slate-200 text-slate-800 focus:border-blue-500'
                }`}
              >
                <option value="">Área: Todas</option>
                {categorias.map(c => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>
          </div>

          {/* Buscador Mobile Vertical */}
          <div className="w-full max-w-sm sm:max-w-md mx-auto relative">
            <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`} />
            <input 
              type="text"
              placeholder="Buscar por nombre, habilidad..."
              value={currentQ}
              onChange={handleSearch}
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs outline-none transition-colors border shadow-sm ${
                theme === 'night' 
                  ? 'bg-slate-800/70 border-white/10 text-white focus:border-blue-500/50 placeholder-slate-400' 
                  : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* ----------------------------------------------------
            FORMATO MOBILE HORIZONTAL (landscape)
            - El menú que vaya arriba alineado a la derecha del logotipo.
            - El logotipo que vaya alineado a la izquierda.
            - Las 3 categorías debajo del menú.
            ---------------------------------------------------- */}
        <div className="hidden landscape:flex flex-col w-full gap-2.5">
          {/* Fila 1: Logotipo a la izquierda + Menú a la derecha del logotipo */}
          <div className="flex items-center justify-between w-full">
            {/* Logotipo alineado a la izquierda */}
            <Link to="/inicio" className="flex items-center gap-2.5 shrink-0 group cursor-pointer" title="Ir al Inicio - Presentación">
              <Logo className="w-9 h-9 shrink-0 group-hover:scale-105 transition-transform" />
              <div className="text-left">
                <h1 className="font-display text-[15px] sm:text-[17px] font-extrabold tracking-tight text-[#00FF00] flex items-center leading-none">
                  PORTAL&nbsp;&nbsp;DIGITAL&nbsp;&nbsp;DE&nbsp;&nbsp;CV
                </h1>
                <p className="text-[10px] uppercase font-bold tracking-[0.14em] mt-0.5 text-[#F15A24]">
                  Currictorio Profesional
                </p>
              </div>
            </Link>

            {/* Menú arriba alineado a la derecha del logotipo */}
            <div className="flex items-center gap-2 shrink-0">
              <nav className="flex items-center gap-1.5">
                <NavLink
                  to="/inicio"
                  className={({ isActive }) => twMerge(clsx(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-sm",
                    isActive 
                      ? "bg-blue-500 text-white shadow-blue-500/25"
                      : (theme === 'night' ? "bg-slate-800/80 text-slate-300 hover:text-white border border-white/5" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200")
                  ))}
                >
                  <Home size={15} />
                  <span>Inicio</span>
                </NavLink>

                <NavLink
                  to="/cv-digital"
                  className={({ isActive }) => twMerge(clsx(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-sm",
                    isActive 
                      ? "bg-blue-500 text-white shadow-blue-500/25"
                      : (theme === 'night' ? "bg-slate-800/80 text-slate-300 hover:text-white border border-white/5" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200")
                  ))}
                >
                  <FileText size={15} />
                  <span>CV Digitales</span>
                </NavLink>
              </nav>

              {/* Botón Compartir */}
              <ShareButton size="sm" />

              {/* Logotipo de Facebook */}
              <a 
                href="https://www.facebook.com/daviko.curriculum" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Facebook - Daviko Curriculum" 
                aria-label="Facebook"
                className={`flex items-center justify-center w-8 h-8 rounded-xl transition-all shadow-sm shrink-0 ${
                  theme === 'night' 
                    ? 'bg-slate-800/80 text-slate-300 hover:text-[#1877F2] border border-white/5' 
                    : 'bg-white text-slate-700 hover:text-[#1877F2] border border-slate-200'
                }`}
              >
                <Facebook size={18} className="text-[#1877F2]" />
              </a>

              {/* Botón de cambio de tema */}
              <button 
                onClick={toggleTheme}
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-sm ${
                  theme === 'night' ? 'bg-white text-slate-900 shadow-white/10' : 'bg-slate-900 text-white shadow-slate-900/20'
                }`}
                title="Cambiar Modo"
                aria-label="Cambiar Modo"
              >
                {theme === 'night' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>

          {/* Fila 2: Categorías debajo del menú + Buscador */}
          <div className="flex items-center gap-2 w-full">
            {/* Las 3 categorías: País, Departamento y Área */}
            <div className="grid grid-cols-3 gap-2 flex-1">
              {/* País */}
              <div className="relative">
                <select 
                  value={currentPais}
                  onChange={(e) => handleSelect('pais', e.target.value)}
                  className={`w-full appearance-none pl-2.5 pr-6 py-1.5 rounded-xl text-[11.5px] font-semibold truncate outline-none cursor-pointer border shadow-sm transition-colors ${
                    theme === 'night' 
                      ? 'bg-slate-800/90 border-white/10 text-white focus:border-blue-500' 
                      : 'bg-white border-slate-200 text-slate-800 focus:border-blue-500'
                  }`}
                >
                  <option value="">País: Todos</option>
                  {paises.map(p => (
                    <option key={p.id} value={p.id}>{p.nombre}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
              </div>

              {/* Departamento */}
              <div className="relative">
                <select 
                  value={currentCiudad}
                  onChange={(e) => handleSelect('ciudad', e.target.value)}
                  className={`w-full appearance-none pl-2.5 pr-6 py-1.5 rounded-xl text-[11.5px] font-semibold truncate outline-none cursor-pointer border shadow-sm transition-colors ${
                    theme === 'night' 
                      ? 'bg-slate-800/90 border-white/10 text-white focus:border-blue-500' 
                      : 'bg-white border-slate-200 text-slate-800 focus:border-blue-500'
                  }`}
                >
                  <option value="">Depto: Todos</option>
                  {ciudades.map(c => (
                    <option key={c.id} value={c.id}>{c.nombre}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
              </div>

              {/* Área */}
              <div className="relative">
                <select 
                  value={currentArea}
                  onChange={(e) => handleSelect('area', e.target.value)}
                  className={`w-full appearance-none pl-2.5 pr-6 py-1.5 rounded-xl text-[11.5px] font-semibold truncate outline-none cursor-pointer border shadow-sm transition-colors ${
                    theme === 'night' 
                      ? 'bg-slate-800/90 border-white/10 text-white focus:border-blue-500' 
                      : 'bg-white border-slate-200 text-slate-800 focus:border-blue-500'
                  }`}
                >
                  <option value="">Área: Todas</option>
                  {categorias.map(c => (
                    <option key={c.id} value={c.id}>{c.nombre}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
              </div>
            </div>

            {/* Buscador compacto a la derecha en horizontal */}
            <div className="relative w-48 sm:w-60 shrink-0">
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`} />
              <input 
                type="text"
                placeholder="Buscar..."
                value={currentQ}
                onChange={handleSearch}
                className={`w-full pl-8 pr-3 py-1.5 rounded-xl text-xs outline-none transition-colors border shadow-sm ${
                  theme === 'night' 
                    ? 'bg-slate-800/70 border-white/10 text-white focus:border-blue-500/50 placeholder-slate-400' 
                    : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500 placeholder-slate-400'
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          TABLET VERTICAL VIEW (md to xl)
          - Logo alineado a la izquierda arriba
          - Logo de Facebook (solo su logotipo) alineado a la derecha arriba
          - Buscador y las 3 categorías (País, Depto, Área) abajo del logotipo,
            centrados en la visual horizontal
          ======================================================== */}
      <div className="hidden md:flex xl:hidden flex-col w-full gap-3 pt-1 pb-2">
        {/* Fila 1: Logotipo a la izquierda + Logo Facebook y Cambio de Modo a la derecha */}
        <div className="flex items-center justify-between w-full">
          {/* Logotipo oficial alineado a la izquierda */}
          <Link to="/inicio" className="flex items-center gap-2.5 shrink-0 group cursor-pointer" title="Ir al Inicio - Presentación">
            <Logo className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform" />
            <div className="text-left">
              <h1 className="font-display text-[16px] sm:text-[18px] font-extrabold tracking-tight text-[#00FF00] flex items-center leading-none">
                PORTAL&nbsp;&nbsp;DIGITAL&nbsp;&nbsp;DE&nbsp;&nbsp;CV
              </h1>
              <p className="text-[11px] uppercase font-bold tracking-[0.14em] mt-1 text-[#F15A24]">
                Currictorio Profesional
              </p>
            </div>
          </Link>

          {/* Acciones a la derecha: Compartir + Solo logotipo de Facebook + Modo Día/Noche */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Botón de Compartir */}
            <ShareButton size="md" />

            {/* Solo logotipo de Facebook (sin la palabra facebook) */}
            <a 
              href="https://www.facebook.com/daviko.curriculum" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Facebook - Daviko Curriculum" 
              aria-label="Facebook"
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shadow-md shrink-0 ${
                theme === 'night' 
                  ? 'bg-slate-800/80 text-slate-300 hover:text-[#1877F2] border border-white/5' 
                  : 'bg-white text-slate-700 hover:text-[#1877F2] border border-slate-200'
              }`}
            >
              <Facebook size={20} className="text-[#1877F2]" />
            </a>

            {/* Botón de cambio de modo Día / Noche */}
            <button 
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-md ${
                theme === 'night' ? 'bg-white text-slate-900 shadow-white/10' : 'bg-slate-900 text-white shadow-slate-900/20'
              }`}
              title="Cambiar Modo"
              aria-label="Cambiar Modo"
            >
              {theme === 'night' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Fila 2: Buscador y las 3 categorías abajo del logotipo, centrados en la visual horizontal */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 w-full mx-auto">
          {/* Botón de búsqueda / Buscador */}
          <div className="relative flex-1 min-w-[150px] max-w-[240px]">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${theme === 'night' ? 'text-slate-400' : 'text-slate-500'}`} />
            <input 
              type="text"
              placeholder="Buscar..."
              value={currentQ}
              onChange={handleSearch}
              className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs outline-none transition-colors border shadow-sm ${
                theme === 'night' 
                  ? 'bg-slate-800/70 border-white/10 text-white focus:border-blue-500/50 placeholder-slate-400' 
                  : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500 placeholder-slate-400'
              }`}
            />
          </div>

          {/* Categoría: País */}
          <div className="relative shrink-0">
            <select 
              value={currentPais}
              onChange={(e) => handleSelect('pais', e.target.value)}
              className={`appearance-none pl-2.5 pr-6 py-2 rounded-xl text-[12px] font-semibold outline-none cursor-pointer border shadow-sm transition-colors ${
                theme === 'night' 
                  ? 'bg-slate-800/90 border-white/10 text-white focus:border-blue-500' 
                  : 'bg-white border-slate-200 text-slate-800 focus:border-blue-500'
              }`}
            >
              <option value="">País: Todos</option>
              {paises.map(p => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </select>
            <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
          </div>

          {/* Categoría: Departamento */}
          <div className="relative shrink-0">
            <select 
              value={currentCiudad}
              onChange={(e) => handleSelect('ciudad', e.target.value)}
              className={`appearance-none pl-2.5 pr-6 py-2 rounded-xl text-[12px] font-semibold outline-none cursor-pointer border shadow-sm transition-colors ${
                theme === 'night' 
                  ? 'bg-slate-800/90 border-white/10 text-white focus:border-blue-500' 
                  : 'bg-white border-slate-200 text-slate-800 focus:border-blue-500'
              }`}
            >
              <option value="">Depto: Todos</option>
              {ciudades.map(c => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>
            <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
          </div>

          {/* Categoría: Área */}
          <div className="relative shrink-0">
            <select 
              value={currentArea}
              onChange={(e) => handleSelect('area', e.target.value)}
              className={`appearance-none pl-2.5 pr-6 py-2 rounded-xl text-[12px] font-semibold outline-none cursor-pointer border shadow-sm transition-colors ${
                theme === 'night' 
                  ? 'bg-slate-800/90 border-white/10 text-white focus:border-blue-500' 
                  : 'bg-white border-slate-200 text-slate-800 focus:border-blue-500'
              }`}
            >
              <option value="">Área: Todas</option>
              {categorias.map(c => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>
            <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
          </div>
        </div>
      </div>

      {/* ========================================================
          DESKTOP VIEW (xl:flex)
          Layout horizontal estándar para pantallas amplias
          ======================================================== */}
      <div className="hidden xl:flex h-[80px] items-center justify-between w-full">
        {/* Branding */}
        <Link to="/inicio" className="flex items-center gap-3 shrink-0 group cursor-pointer" title="Ir al Inicio - Presentación">
          <Logo className="w-12 h-12 group-hover:scale-105 transition-transform" />
          <div>
            <h1 className="font-display text-[18px] font-extrabold tracking-tight text-[#00FF00] flex items-center leading-none">
              PORTAL&nbsp;&nbsp;DIGITAL&nbsp;&nbsp;DE&nbsp;&nbsp;CV
            </h1>
            <p className="text-[12px] uppercase font-bold tracking-[0.15em] mt-1 text-[#F15A24]">
              Currictorio Profesional
            </p>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-[450px] mx-6 lg:mx-8 relative">
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
          <div className="relative">
            <select 
              value={currentPais}
              onChange={(e) => handleSelect('pais', e.target.value)}
              className={`pl-4 pr-8 py-2 rounded-lg text-[13px] font-medium outline-none appearance-none cursor-pointer transition-colors ${
                theme === 'night' 
                  ? 'bg-slate-800/70 border border-white/10 text-white hover:bg-slate-800' 
                  : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50'
              }`}
            >
              <option value="">País: Todos</option>
              {paises.map(p => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
          </div>

          <div className="relative">
            <select 
              value={currentCiudad}
              onChange={(e) => handleSelect('ciudad', e.target.value)}
              className={`pl-4 pr-8 py-2 rounded-lg text-[13px] font-medium outline-none appearance-none cursor-pointer transition-colors ${
                theme === 'night' 
                  ? 'bg-slate-800/70 border border-white/10 text-white hover:bg-slate-800' 
                  : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50'
              }`}
            >
              <option value="">Departamento: Todos</option>
              {ciudades.map(c => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
          </div>

          <div className="relative">
            <select 
              value={currentArea}
              onChange={(e) => handleSelect('area', e.target.value)}
              className={`pl-4 pr-8 py-2 rounded-lg text-[13px] font-medium outline-none appearance-none cursor-pointer transition-colors ${
                theme === 'night' 
                  ? 'bg-slate-800/70 border border-white/10 text-white hover:bg-slate-800' 
                  : 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50'
              }`}
            >
              <option value="">Área: Todas</option>
              {categorias.map(c => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
          </div>

          {/* Botón Compartir a la izquierda de Facebook */}
          <ShareButton size="lg" />

          {/* Facebook logo (solo logotipo) */}
          <a 
            href="https://www.facebook.com/daviko.curriculum" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Facebook - Daviko Curriculum" 
            aria-label="Facebook"
            className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all shadow-md shrink-0 ${
              theme === 'night' 
                ? 'bg-slate-800/80 text-slate-300 hover:text-[#1877F2] border border-white/5' 
                : 'bg-white text-slate-700 hover:text-[#1877F2] border border-slate-200'
            }`}
          >
            <Facebook size={20} className="text-[#1877F2]" />
          </a>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105 shadow-xl ${
              theme === 'night' ? 'bg-white text-slate-900 shadow-white/10' : 'bg-slate-900 text-white shadow-slate-900/20'
            }`}
            title="Cambiar Modo"
            aria-label="Cambiar Modo"
          >
            {theme === 'night' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
