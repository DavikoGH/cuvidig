import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useTheme } from '../contexts/ThemeContext';

export default function Layout() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen w-full relative transition-colors duration-500 ${
      theme === 'night' ? 'bg-[#05070a] text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Background with overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            theme === 'night' ? 'bg-[radial-gradient(circle_at_top_left,#111827,#020617)]' : 'bg-[radial-gradient(circle_at_top_left,#e2e8f0,#f8fafc)]'
          }`}
        />
        <div className={`absolute inset-0 transition-opacity duration-500 opacity-5 pointer-events-none`}
             style={{ backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex w-full h-screen p-4 md:p-6">
        {/* Sidebar Menu */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden relative ml-4 md:ml-6">
          <Header />
          <main className="flex-1 overflow-y-auto pb-10 pr-2">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
