import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import WhatsAppCTA from './WhatsAppCTA';
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
      <div className="relative z-10 flex flex-col md:flex-row w-full min-h-screen md:h-screen p-3 sm:p-4 md:p-6 overflow-x-hidden">
        {/* Sidebar Menu (Desktop only) */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:h-full md:overflow-hidden relative ml-0 md:ml-6 w-full">
          <Header />
          <main className="flex-1 md:overflow-y-auto pb-10 pr-0 md:pr-2">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Floating WhatsApp Call To Action (Bottom Right) */}
      <WhatsAppCTA />
    </div>
  );
}
