import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Search, 
  Globe, 
  ChevronDown, 
  Zap, 
  MessageCircle, 
  FileText, 
  Phone,
  Layers,
  Award
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { personas, categorias } from '../data';

function AscendingCounter({ target, duration = 1500, prefix = "+" }: { target: number; duration?: number; prefix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationFrameId: number;

    const startCounting = () => {
      setCount(0);
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        // smooth cubic ease-out curve
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(easeProgress * target));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      animationFrameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);

  return <span ref={elementRef}>{prefix}{count}</span>;
}

export default function Inicio() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => prev === index ? null : index);
  };

  const whatsappUrl = "https://wa.me/59177042436?text=" + encodeURIComponent(
    "Hola, estuve viendo la presentación en el PORTAL DIGITAL DE CV (Cuvidig) y me gustaría tener mi propio Currículum Digital profesional."
  );

  const faqs = [
    {
      q: "¿En qué se diferencia un CV Digital de un CV en PDF?",
      a: "A diferencia de un archivo PDF estático que se pierde o pesa demasiado, tu CV Digital tiene su propio enlace web único, botones de contacto directo a tu WhatsApp y llamada telefónica, galería multimedia, y está indexado para que empresas de tu ciudad o país te encuentren al instante."
    },
    {
      q: "¿Cómo me contactan las empresas o clientes que ven mi perfil?",
      a: "De forma directa e inmediata. Cada perfil cuenta con botones integrados de WhatsApp y llamada. Con solo un toque, los reclutadores inician una conversación contigo sin necesidad de copiar y pegar números ni llenar formularios eternos."
    },
    {
      q: "¿Puedo compartir mi CV Digital en mis redes sociales o imprimirlo?",
      a: "¡Totalmente! Tu perfil cuenta con un enlace web corto y personalizado ideal para colocar en tu biografía de Instagram, perfil de LinkedIn, enviarlo por chat o vincularlo a un código QR."
    },
    {
      q: "¿Cómo puedo solicitar mi propio Currículum Digital en el portal?",
      a: "Es muy fácil y rápido: solo debes hacer clic en el botón 'Solicitar mi CV Digital' y escribirnos por Whatsapp. Nuestro equipo se encargará de darte información de nuestros planes y realizar la maquetación y la publicación de tu perfil para que quede impecable."
    },
    {
      q: "¿Quiénes pueden publicar su perfil en Cuvidig?",
      a: "Está abierto a todo profesional, técnico, estudiante, consultor, experto independiente, modelo, azafata o emprendedor que desee destacar en el mercado laboral y proyectar una imagen DIFERENTE e INNOVADORA."
    }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto pb-24 text-slate-800 dark:text-slate-100 transition-colors">
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-16">
        {/* Glow de fondo decorativo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-[#00FF00]/15 via-[#F15A24]/10 to-blue-500/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
          
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 dark:bg-white/10 border border-slate-700/50 dark:border-white/15 text-xs font-bold tracking-wide uppercase shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#00FF00] animate-ping" />
            <span className="text-white font-bold">EL PRIMER DIRECTORIO PROFESIONAL DE TALENTOS</span>
          </div>

          {/* Título Principal de la Presentación */}
          <h1 className="font-display font-extrabold tracking-tight text-3xl sm:text-5xl lg:text-6xl leading-[1.12]">
            Tu Trayectoria en una{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] via-emerald-400 to-[#00cc00] drop-shadow-[0_0_20px_rgba(0,255,0,0.3)]">
              Dimensión Digital
            </span>
          </h1>

          {/* Subtítulo con marcas de color corporativas */}
          <p className="mt-3 font-display font-bold text-lg sm:text-2xl text-[#F15A24] tracking-wide uppercase">
            EXPERIENCIAS &bull; CURSOS &bull; PROYECTOS &bull; HABILIDADES
          </p>

          {/* Texto explicativo persuasivo */}
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Dile adiós a los currículums de papel y a los PDFs que se quedan olvidados en bandejas de entrada. 
            <strong className="text-slate-900 dark:text-white font-semibold"> Esta WEB </strong> 
            es la plataforma interactiva donde los profesionales presentan su perfil con enlace propio, 
            portafolio multimedia y contacto directo a WhatsApp en un solo clic.
          </p>

          {/* Botones de Acción (CTAs) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
            <Link
              to="/cv-digital"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explorar CVs Digitales</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle size={19} className="fill-white" />
              <span>Quiero mi CV Digital</span>
            </a>
          </div>

          {/* Indicador de confianza rápido */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-slate-600 dark:text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[#00FF00] shrink-0" />
              <span>Sin descargas obligatorias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[#00FF00] shrink-0" />
              <span>Visible en celulares y PC</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[#00FF00] shrink-0" />
              <span>Contacto directo sin intermediarios</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          CONTADORES / METRICAS DESTACADAS
          ========================================================================= */}
      <section className="py-6 sm:py-8 border-y border-slate-200/70 dark:border-white/10 my-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#00FF00] drop-shadow-sm">
              <AscendingCounter target={personas.length} />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Currículums Registrados
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F15A24] drop-shadow-sm">
              <AscendingCounter target={categorias.length} />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Áreas Profesionales
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-500 drop-shadow-sm">
              100%
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Interactivo & Digital
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500 drop-shadow-sm">
              24/7
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Disponibilidad Inmediata
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN: COMPARATIVA (EL CV TRADICIONAL VS CUVIDIG)
          ========================================================================= */}
      <section className="py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl">
            ¿Por qué el CV en papel ya están{' '}
            <span className="block text-[#F15A24] mt-1">quedando atrás?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            En un mercado laboral altamente competitivo, quien llega más rápido y con mayor impacto visual es quien consigue el trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* El CV de antes */}
          <div className="rounded-3xl p-6 sm:p-8 bg-red-50/50 dark:bg-red-950/20 border border-red-200/80 dark:border-red-900/40">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400">
                <FileText size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Currículum Tradicional (PDF / Papel)
              </h3>
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>Se pierde en bandejas de correo saturadas o carpetas físicas.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>Estático y frío: no muestra evidencias ni portafolios interactivos.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>El reclutador debe copiar manualmente tu teléfono para contactarte.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>Si cambias de número o curso, debes reenviar un nuevo archivo a todos.</span>
              </li>
            </ul>
          </div>

          {/* Tu CV en Cuvidig */}
          <div className="rounded-3xl p-6 sm:p-8 bg-emerald-50/60 dark:bg-emerald-950/25 border-2 border-[#00FF00]/60 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-[#00FF00] to-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider rounded-bl-xl shadow-sm">
              Recomendado
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-[#00FF00]">
                <Sparkles size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Tu CV Digital en Cuvidig
              </h3>
            </div>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#00FF00] shrink-0 mt-0.5" />
                <span><strong>Enlace Web Personal:</strong> Compartelo por Whatsapp y demás redes sociales.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#00FF00] shrink-0 mt-0.5" />
                <span><strong>Contacto en 1 Clic:</strong> Conexión directa a tu WhatsApp y llamada directa.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#00FF00] shrink-0 mt-0.5" />
                <span><strong>Portafolio & Fotos:</strong> Muestra tus proyectos, certificados y experiencia real.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#00FF00] shrink-0 mt-0.5" />
                <span><strong>Siempre Actualizado:</strong> Los cambios se reflejan inmediatamente en tu enlace.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECCIÓN: BENEFICIOS PRINCIPALES (TARJETAS MODERNAS)
          ========================================================================= */}
      <section className="py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm uppercase tracking-wider mb-2">
            <Zap size={16} />
            <span>Ventajas Exclusivas</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl">
            Todo lo que necesitas para{' '}
            <span className="text-[#00FF00]">Brillar Profesionalemente</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Diseñado pensando tanto en los profesionales que buscan oportunidades como en las empresas que necesitan contratar con rapidez.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all shadow-sm hover:shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Presencia Web Personal 24/7
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Tu currículum vive en internet. Envía tu link a reclutadores sin preocuparte de si tienen espacio en su celular o lector de PDF.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 transition-all shadow-sm hover:shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Contacto Inmediato por WhatsApp
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Botones directos de llamada y WhatsApp programados para que la empresa o cliente te hable en segundos sin pérdida de tiempo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-orange-500/50 transition-all shadow-sm hover:shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#F15A24]/10 text-[#F15A24] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Search size={24} />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Filtros por País & Departamento
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Las empresas buscan talento geolocalizado en Santa Cruz, La Paz, Cochabamba y más. Tu perfil aparece clasificado exactamente donde se necesita.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-purple-500/50 transition-all shadow-sm hover:shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Layers size={24} />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Portafolio & Galería de Trabajos
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              No solo digas lo que sabes hacer: muéstralo con fotografías de proyectos, certificados, eventos y portadas corporativas personalizadas.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-amber-500/50 transition-all shadow-sm hover:shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Smartphone size={24} />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              100% Adaptado a Celulares
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Más del 85% de los reclutadores revisan perfiles en sus teléfonos móviles. Tu CV Digital se visualiza perfecto tanto vertical como horizontalmente.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-[#00FF00]/50 transition-all shadow-sm hover:shadow-xl group">
            <div className="w-12 h-12 rounded-2xl bg-[#00FF00]/15 text-emerald-600 dark:text-[#00FF00] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Award size={24} />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Diferenciación Total
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Destácate del 95% de postulantes tradicionales con una imagen tecnológica, profesional y de vanguardia que genera recordación inmediata.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECCIÓN: CÓMO FUNCIONA (PASO A PASO)
          ========================================================================= */}
      <section className="py-12 sm:py-16 rounded-3xl bg-slate-100/70 dark:bg-slate-900/30 p-6 sm:p-10 border border-slate-200/80 dark:border-white/5 my-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl">
            Tener tu CV Digital es{' '}
            <span className="text-[#F15A24]">Fácil y Rápido</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            En solo 3 pasos estarás listo para compartir tu perfil con el mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Paso 1 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#00FF00] to-emerald-400 text-slate-950 font-black text-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-4">
              1
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Envíanos tu Información
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Nos escribes por WhatsApp con tus datos de contacto, foto profesional, experiencia laboral y habilidades.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F15A24] to-amber-500 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-orange-500/20 mb-4">
              2
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Digitalizamos tu Perfil
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Diseñamos tu página web interactiva con botones directos, paleta corporativa y optimización para todos los dispositivos.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4">
              3
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Publica y Comparte
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Recibes tu enlace personal para enviarlo a empresas, empresarios, banca, entrevistas y colocarlo en tus redes.
            </p>
          </div>

        </div>

        {/* Botón dentro del paso a paso */}
        <div className="mt-10 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] transition-all"
          >
            <MessageCircle size={17} className="fill-white" />
            <span>Comenzar mi CV Digital por WhatsApp</span>
          </a>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN: CATEGORÍAS POPULARES
          ========================================================================= */}
      <section className="py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
              Explora por Especialidad Profesional
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Talentos organizados por rubros y campos laborales activos.
            </p>
          </div>
          <Link
            to="/cv-digital"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-500 hover:text-blue-600 transition-colors"
          >
            <span>Ver todo el directorio</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {categorias.map(cat => (
            <Link
              key={cat.id}
              to={`/cv-digital?area=${cat.id}`}
              className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-500 transition-all shadow-sm"
            >
              {cat.nombre}
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN: PREGUNTAS FRECUENTES (FAQ)
          ========================================================================= */}
      <section className="py-12 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Resolvemos tus dudas sobre el funcionamiento de Cuvidig y tu CV Digital.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/50 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} 
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          BANNER FINAL DE LLAMADO A LA ACCIÓN (CTA)
          ========================================================================= */}
      <section className="mt-10 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white p-8 sm:p-12 border border-white/10 shadow-2xl">
        {/* Decoración luminosa */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00FF00]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F15A24]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#00FF00] uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Únete a la evolución profesional</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl leading-tight">
            ¿Listo para que tu Currículum hable por ti las{' '}
            <span className="text-[#00FF00]">24 horas del día</span>?
          </h2>

          <p className="mt-3 text-sm sm:text-lg text-slate-300 leading-relaxed">
            Obtén tu propio perfil profesional digital interactivo en Cuvidig y destaca frente a cualquier reclutador o cliente.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle size={19} className="fill-white" />
              <span>Solicitar mi CV Digital ahora</span>
            </a>

            <Link
              to="/cv-digital"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Ver Catálogo de CVs</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
