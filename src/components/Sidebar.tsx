import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FileText } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Sidebar() {
  const { theme } = useTheme();

  const NAV_ITEMS = [
    { to: '/inicio', label: 'Inicio', icon: <Home size={22} /> },
    { to: '/cv-digital', label: 'CV Digitales', icon: <FileText size={22} /> },
  ];

  return (
    <aside className={`is-desktop-device hidden md:flex w-[80px] shrink-0 h-full backdrop-blur-md rounded-[20px] flex-col items-center py-6 border transition-all duration-500 z-20 ${
      theme === 'night' 
        ? 'bg-slate-900/80 border-white/5 shadow-xl shadow-black/20' 
        : 'bg-white/80 border-slate-200 shadow-xl shadow-slate-200/50'
    }`}>
      <nav className="flex-1 flex flex-col gap-4 w-full px-4 items-center mt-2">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            title={item.label}
            className={({ isActive }) => twMerge(clsx(
              "w-[70px] py-3 rounded-xl flex flex-col items-center justify-center transition-all duration-200 group cursor-pointer gap-1",
              isActive 
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : (theme === 'night' ? "text-slate-400 hover:bg-white/5 hover:text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900")
            ))}
          >
            <span className="shrink-0">{item.icon}</span>
            <span className="text-[9px] font-medium text-center leading-tight px-1">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
