import React, { useState } from 'react';
import { Share2, Check, Copy, X, MessageCircle, Send, Mail, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ShareButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ShareButton({ size = 'md', className = '' }: ShareButtonProps) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const getShareData = () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://cuvidig.com';
    const title = typeof document !== 'undefined' && document.title 
      ? document.title 
      : 'Cuvidig - Portal Digital de CV | Currictorio Profesional';
    const text = 'Descubre y comparte perfiles y currículums digitales en Cuvidig.';
    return { url, title, text };
  };

  const handleShareClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const { url, title, text } = getShareData();

    // Check if native Web Share is available
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (err: unknown) {
        // If aborted by user, do nothing
        if ((err as Error)?.name === 'AbortError') return;
        // If error (such as iframe permission restriction), open our custom share modal
        setIsOpen(true);
        return;
      }
    }

    // Fallback: open modal
    setIsOpen(true);
  };

  const handleCopy = async () => {
    const { url } = getShareData();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const { url, title, text } = getShareData();

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: (
        <span className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
          <MessageCircle size={22} className="fill-current" />
        </span>
      ),
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(text + '\n' + url)}`,
      color: 'hover:border-[#25D366] hover:bg-[#25D366]/10'
    },
    {
      name: 'Facebook',
      icon: (
        <span className="w-10 h-10 rounded-xl bg-[#1877F2]/15 text-[#1877F2] flex items-center justify-center">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </span>
      ),
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:border-[#1877F2] hover:bg-[#1877F2]/10'
    },
    {
      name: 'X (Twitter)',
      icon: (
        <span className="w-10 h-10 rounded-xl bg-slate-500/15 text-slate-800 dark:text-slate-200 flex items-center justify-center">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </span>
      ),
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      color: 'hover:border-slate-500 hover:bg-slate-500/10'
    },
    {
      name: 'LinkedIn',
      icon: (
        <span className="w-10 h-10 rounded-xl bg-[#0A66C2]/15 text-[#0A66C2] flex items-center justify-center">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </span>
      ),
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'hover:border-[#0A66C2] hover:bg-[#0A66C2]/10'
    },
    {
      name: 'Telegram',
      icon: (
        <span className="w-10 h-10 rounded-xl bg-[#229ED9]/15 text-[#229ED9] flex items-center justify-center">
          <Send size={20} className="fill-current" />
        </span>
      ),
      url: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      color: 'hover:border-[#229ED9] hover:bg-[#229ED9]/10'
    },
    {
      name: 'Correo',
      icon: (
        <span className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center">
          <Mail size={20} />
        </span>
      ),
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`,
      color: 'hover:border-amber-500 hover:bg-amber-500/10'
    }
  ];

  // Button sizes
  const btnSizeClass = 
    size === 'lg' ? 'w-11 h-11 rounded-2xl' :
    size === 'sm' ? 'w-8 h-8 rounded-xl' :
    'w-10 h-10 rounded-2xl';

  const iconSize = 
    size === 'lg' ? 22 :
    size === 'sm' ? 19 :
    21;

  return (
    <>
      <button
        onClick={handleShareClick}
        type="button"
        title="Compartir"
        aria-label="Compartir este portal"
        className={`flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md cursor-pointer ${btnSizeClass} ${
          theme === 'night'
            ? 'bg-slate-800/80 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 border border-white/5'
            : 'bg-white text-blue-600 hover:text-blue-700 hover:bg-blue-50 border border-slate-200 shadow-sm'
        } ${className}`}
      >
        <Share2 size={iconSize} strokeWidth={2.3} className="shrink-0" />
      </button>

      {/* Share Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className={`w-full max-w-md rounded-3xl p-6 border shadow-2xl relative transition-all ${
              theme === 'night' 
                ? 'bg-slate-900 border-white/10 text-white' 
                : 'bg-white border-slate-200 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/15 text-blue-500 flex items-center justify-center">
                  <Share2 size={22} strokeWidth={2.3} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg">
                    Compartir
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Elige dónde deseas compartir este enlace
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                title="Cerrar"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>
            </div>

            {/* Redes y Destinos */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 my-4">
              {shareOptions.map((opt) => (
                <a
                  key={opt.name}
                  href={opt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-200 ${opt.color} ${
                    theme === 'night'
                      ? 'bg-slate-800/60 border-white/5 text-slate-200'
                      : 'bg-slate-50 border-slate-200 text-slate-800'
                  }`}
                >
                  {opt.icon}
                  <span className="mt-2 text-xs font-semibold">{opt.name}</span>
                </a>
              ))}
            </div>

            {/* Enlace directo para copiar */}
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                O copia el enlace directo:
              </p>
              <div className={`flex items-center gap-2 p-1.5 pl-3 rounded-2xl border ${
                theme === 'night' ? 'bg-slate-800/90 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <Globe size={16} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  readOnly
                  value={url}
                  className="bg-transparent text-xs outline-none flex-1 truncate text-slate-700 dark:text-slate-200"
                />
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    copied 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={14} strokeWidth={3} />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
