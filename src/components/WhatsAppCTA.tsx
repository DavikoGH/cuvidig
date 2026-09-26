import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if it was already unlocked in this session
    const previouslyUnlocked = sessionStorage.getItem('wa_cta_unlocked') === 'true';
    if (previouslyUnlocked) {
      setIsVisible(true);
      return;
    }

    // Appears after exactly 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem('wa_cta_unlocked', 'true');
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Close tooltip when clicking outside or scrolling anywhere
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowTooltip(false);
      }
    };

    const handleScroll = () => {
      setShowTooltip(false);
    };

    document.addEventListener('pointerdown', handleOutsideClick);
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  const phoneNumber = '59177042436';
  const message = 'Me gustó mucho el PORTAL DIGITAL DE CV. Quiero que realicen un Currículum para mi persona.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-auto"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip / Mensaje contextual (Desktop & Tablets) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="hidden sm:flex items-center px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-xs font-semibold shadow-2xl border border-slate-200 dark:border-slate-700 whitespace-nowrap relative select-none pointer-events-none"
          >
            <span>Necesito un Currículum Digital.</span>
            {/* Puntero de flecha hacia el botón */}
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-t border-r border-slate-200 dark:border-slate-700 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button */}
      <div className="relative flex flex-col items-center">
        {/* Tooltip móvil ubicado arriba del botón */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="sm:hidden absolute bottom-16 right-0 mb-1 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-xs font-semibold shadow-2xl border border-slate-200 dark:border-slate-700 whitespace-nowrap z-50 pointer-events-none"
            >
              <span>Necesito un Currículum Digital.</span>
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white dark:bg-slate-800 border-b border-r border-slate-200 dark:border-slate-700 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onTouchStart={() => setShowTooltip(true)}
          title="Necesito un Currículum Digital."
          aria-label="Necesito un Currículum Digital."
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/35 hover:shadow-emerald-500/50 transition-all cursor-pointer"
        >
          {/* Sutil animación de pulso */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 group-hover:opacity-60 animate-ping pointer-events-none" />

          {/* Ícono oficial de WhatsApp */}
          <svg 
            viewBox="0 0 24 24" 
            width="32" 
            height="32" 
            stroke="currentColor" 
            strokeWidth="0" 
            fill="currentColor"
            className="relative z-10 drop-shadow-sm"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.948.825 2.796.826h.005c3.179 0 5.765-2.586 5.767-5.766 0-1.541-.6-2.99-1.69-4.08-1.09-1.09-2.539-1.693-4.082-1.693zm6.953 10.147c-.29.816-1.42 1.5-1.954 1.597-.52.096-1.197.135-3.834-.949-2.251-.925-3.708-3.21-3.82-3.36-.113-.15-1.002-1.332-1.002-2.54 0-1.209.636-1.802.863-2.043.226-.242.493-.303.658-.303.164 0 .329.002.473.01.152.008.356-.058.558.428.207.498.705 1.722.767 1.848.062.126.103.273.021.439-.082.165-.124.269-.247.414-.124.145-.26.325-.372.436-.123.123-.252.257-.109.504.144.247.64 1.055 1.374 1.708.946.842 1.744 1.103 1.992 1.226.247.124.391.103.535-.062.145-.165.618-.722.783-.97.165-.247.33-.206.556-.123.227.082 1.442.68 1.69.803.247.124.412.186.474.289.062.103.062.6-.228 1.416z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.981-1.398A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.174c-1.644 0-3.18-.466-4.493-1.274l-.322-.198-2.969.832.846-2.903-.217-.346A8.136 8.136 0 0 1 3.826 12c0-4.507 3.667-8.174 8.174-8.174 4.507 0 8.174 3.667 8.174 8.174 0 4.507-3.667 8.174-8.174 8.174z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
