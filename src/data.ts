import { Pais, Categoria, Ciudad, Persona, Rol } from "./types";

export const paises: Pais[] = [
  { id: "1", nombre: "Bolivia" },
  { id: "2", nombre: "Argentina" },
  { id: "3", nombre: "Perú" },
  { id: "4", nombre: "Chile" },
  { id: "5", nombre: "Colombia" },
  { id: "6", nombre: "México" },
  { id: "7", nombre: "España" },
  { id: "8", nombre: "Estados Unidos" },
];

export const categorias: Categoria[] = [
  { id: "1", nombre: "Salud" },
  { id: "3", nombre: "Electricidad" },
  { id: "4", nombre: "Administración" },
  { id: "5", nombre: "Construcción" },
  { id: "6", nombre: "Educación" },
  { id: "7", nombre: "Tecnología" },
  { id: "8", nombre: "Mecánica" },
  { id: "9", nombre: "Comercio Exterior" },
  { id: "10", nombre: "Agronomía" },
  { id: "11", nombre: "Contaduría" },
  { id: "12", nombre: "Comunicación" },
  { id: "13", nombre: "Derecho" },
  { id: "14", nombre: "Psicología" },
  { id: "15", nombre: "Marketing y Ventas" },
  { id: "16", nombre: "Trabajo Social" },
  { id: "17", nombre: "Industrial" },
  { id: "18", nombre: "Comercial" },
];

export const ciudades: Ciudad[] = [
  { id: "1", nombre: "La Paz" },
  { id: "2", nombre: "Cochabamba" },
  { id: "3", nombre: "Santa Cruz" },
  { id: "4", nombre: "Oruro" },
  { id: "5", nombre: "Potosí" },
  { id: "6", nombre: "Tarija" },
  { id: "7", nombre: "Sucre" },
  { id: "8", nombre: "Pando" },
];

export const roles: Rol[] = [
  { id: "1", nombre: "Administrador" },
  { id: "2", nombre: "Editor" },
  { id: "3", nombre: "Usuario" },
  { id: "4", nombre: "Empresa" },
];

export const personas: Persona[] = [
  {
    "id": "vicky-rivera-calvimontes-0",
    "nombre": "Vicky",
    "apellido": "Rivera Calvimontes",
    "foto": "/vickyriveracalvimontes_rostro.jpg",
    "portada": "/vickyriveracalvimontes_portadita_web.jpg",
    "profesion": "Contadora Pública",
    "paisId": "1",
    "areaId": "11",
    "ciudadId": "7",
    "telefono": "+591 793",
    "email": "vicky@gmail.com",
    "descripcion": "Licenciada en Contaduría Pública, con sólida formación académica y experiencia como Auxiliar Contable. Competente en análisis financiero, conciliaciones bancarias y preparación de informes contables. Hábil en el uso de software contable y en la aplicación de normativas fiscales. Comprometida con la precisión y la integridad en la gestión financiera.",
    "experiencia": [
      {
        "cargo": "Auxiliar Contable - Auxiliar de Tesorería",
        "empresa": "Cadena de Farmacias San Agustín",
        "duracion": "Julio 2024 – 2026 (Actualmente)"
      },
      {
        "cargo": "Pasantía",
        "empresa": "Mancomunidad de Municipios Chuquisaca Centro MMCHC",
        "duracion": "2022"
      },
      {
        "cargo": "Auxiliar Contable",
        "empresa": "Consultores & Auditores EDAX Ltda.",
        "duracion": "Ene 2021 – Sep 2023"
      },
      {
        "cargo": "Cajera",
        "empresa": "Resto Bar del Río",
        "duracion": "2022 – 2023"
      },
      {
        "cargo": "Cajera",
        "empresa": "Café Concert",
        "duracion": "2021 – 2022"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura en Contaduría Pública",
        "institucion": "Universidad Mayor, Real y Pontificia de San Francisco Xavier de Chuquisaca",
        "ano": "2023"
      }
    ],
    "cursos": [
      "Curso, Ley 1178 – Ley SAFCO (2024)",
      "Curso, Decreto Supremo 23318-A – Reglamento de Responsabilidad por la Función Pública (2024)",
      "Curso, Decreto Supremo 0181 SABS (2024)",
      "Curso, Ley 341 de Políticas Públicas (2024)",
      "Curso, Sistema de Administración de Bienes y Servicios – Ley SAFCO 1178 (2024)",
      "Curso, Sistema de Tesorería y Crédito Público – Ley SAFCO 1178 (2024)",
      "Curso, Sistema de Contabilidad Integrada – Ley SAFCO 1178 (2024)",
      "Curso, Sistema de Control Gubernamental – Ley SAFCO 1178 (2024)",
      "Curso, Órganos rectores y Responsabilidad Institucional – Ley SAFCO 1178 (2024)",
      "Curso, Llenado de Formularios Impositivos – Asistente Tributario Contable (2024)",
      "Curso, Elaboración de Planillas Laborales y Contables (2024)",
      "Curso, Microsoft Excel (2024)",
      "Curso, Microsoft Word (2024)",
      "Curso, Neuromarketing 3.0 (2018)",
      "Curso, Training en Neuro motivación (2018)",
      "Curso, Marketing Digital (2018)",
      "Curso, Acción Empresarial y Liderazgo Productivo (2018)",
      "Curso, Metodología de la Investigación Científica (2018)",
      "Curso, La Magia de la Atención y el Servicio al Cliente (2018)",
      "Curso, Tecnología, Educación y Sociedad (2018)",
      "Curso, Responsabilidad Social Empresarial (2018)",
      "Jornadas Técnicas de Actualización Contable Tributaria (2015)"
    ],
    "habilidades": [
      "Trabajo en equipo",
      "Adaptación al cambio",
      "Pensamiento crítico y analítico",
      "Buena comunicación",
      "Resolución de conflictos",
      "Atención al detalle",
      "Gestión del tiempo",
      "Resiliencia",
      "Operador de computadoras",
      "Manejo de Paquetes MS Office (Word, Excel, Power Point)",
      "Sistema ContaGEN | Resto Tech",
      "Manejo del Sistema TR4 y el Sistema Lolfar",
      "Castellano (nativo)",
      "Quechua (intermedio)",
      "Evaluar e interpretar datos financieros",
      "Documentar con precisión todas las operaciones financieras en los libros contables",
      "Calcular y presentar declaraciones fiscales",
      "Supervisar y ajustar presupuestos",
      "Calcular y verificar la exactitud de los registros financieros internos"
    ],
    "cv_pdf": "https://cv-vicky-rivera-calvimontes.netlify.app/",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "gustavo-cansaya-valero-2",
    "nombre": "Gustavo",
    "apellido": "Cansaya Valero",
    "foto": "/gustavocansayavalero_rostro.jpg",
    "portada": "/gustavocansayavalero_portadita_web.jpg",
    "profesion": "Agropecuario",
    "paisId": "1",
    "areaId": "10",
    "ciudadId": "1",
    "telefono": "+591 681",
    "email": "gustavo@gmail.com",
    "descripcion": "Técnico Superior en Agropecuaria con experiencia en gestión ambiental, producción sostenible y manejo de recursos naturales. Especializado en implementación de sistemas de riego eficientes, manejo de invernaderos, producción orgánica y uso de bioinsumos para la reducción de impacto ambiental. Experiencia en instalación de biodigestores, conservación de suelos, sanidad animal y desarrollo de huertas familiares. Con conocimientos en balances hídricos, optimización del uso del agua y prácticas agroecológicas. Profesional orientado a la sostenibilidad, protección del medio ambiente y desarrollo rural, con capacidad de trabajo en campo y ejecución de proyectos ambientales.",
    "experiencia": [
      {
        "cargo": "TECNICO DE CAMPO",
        "empresa": "Fundación NUNA Bolivia Conciencia",
        "duracion": "03/06/2024 - 31/05/2025"
      },
      {
        "cargo": "MANEJO DEL AGUA (Pasantía)",
        "empresa": "Universidad Mayor de San Andrés UMSA - Instituto de Investigaciones Agropecuarias y Recursos Naturales - Estación Experimental Patacamaya - Escuela de Riego de Agronomía",
        "duracion": "05/12/2022 - 03/02/2023"
      },
      {
        "cargo": "PRODUCCION AGRICOLA ORGANICA (Pasantía)",
        "empresa": "Universidad Mayor de San Andrés UMSA - Instituto de Investigaciones Agropecuarias y Recursos Naturales - Estación Experimental Patacamaya - Escuela de Riego de Agronomía",
        "duracion": "05/12/2022 - 03/02/2023"
      },
      {
        "cargo": "CRIANZA Y SANIDAD ANIMAL (Pasantía)",
        "empresa": "Universidad Mayor de San Andrés UMSA - Instituto de Investigaciones Agropecuarias y Recursos Naturales - Estación Experimental Patacamaya - Escuela de Riego de Agronomía",
        "duracion": "05/12/2022 - 03/02/2023"
      },
      {
        "cargo": "PRODUCCION DE ALIMENTO BALANCEADO (Pasantía)",
        "empresa": "Universidad Mayor de San Andrés UMSA - Instituto de Investigaciones Agropecuarias y Recursos Naturales - Estación Experimental Patacamaya - Escuela de Riego de Agronomía",
        "duracion": "05/12/2022 - 03/02/2023"
      }
    ],
    "formacion": [
      {
        "titulo": "TECNICO SUPERIOR EN AGROPECUARIA",
        "institucion": "Instituto Tecnológico Idelfonso de las Muñecas de Titicachi",
        "ano": "2024"
      },
      {
        "titulo": "BACHILLER EN HUMANIDADES",
        "institucion": "Colegio Llachisquia",
        "ano": "2018"
      }
    ],
    "cursos": [
      "PRODUCCION DE DIESEL Y GASOLINA MEDIANTE PIROLISIS DE PLASTICOS - Colegio de Ingenieros Petroleros y Energías Cochabamba (CIPEC)",
      "IMPLEMENTACION DE VIVEROS FORESTALES - Asociación CEJUPA Area Agropecuaria CEJUPA LEGRAIN",
      "LOMBRICULTURA Y PRODUCCION DE HUMUS - Asociación CEJUPA Area Agropecuaria CEJUPA LEGRAIN",
      "PREPARADOS NATURALES PARA EL CONTROL DE PLAGAS Y ENFERMEDADES - Asociación CEJUPA Area Agropecuaria CEJUPA LEGRAIN",
      "ELABORACION DE SUPLEMENTOS NUTRICIONALES PARA GANADO DE LECHE Y CARNE - Agro Aulas Centro de Formación Agropecuaria",
      "FLORICULTURA - Universidad Pública de El Alto Asociación Centro Juvenil para el Desarrollo Humano",
      "PRODUCCIÓN PISCÍCOLA (TRUCHA, TILAPIA, PACU) - Punto de Educación Digital Green Academy",
      "LESIONES Y TIPOS DE LESIONES LEY 348 - Sociedad de Altos Estudios Capacitación y Consultoría (SAEC)",
      "ELITOS DE VIOLENCIA CONTRA LAS MUJERES LEY 348 - Sociedad de Altos Estudios Capacitación y Consultoría (SAEC)",
      "ABORDAJE SOCIAL LEY 348 - Sociedad de Altos Estudios Capacitación y Consultoría (SAEC)",
      "ABORDAJE LEGAL LEY 348 - Sociedad de Altos Estudios Capacitación y Consultoría (SAEC)",
      "ABORDAJE PSICOLOGICO LEGAL LEY 348 - Sociedad de Altos Estudios Capacitación y Consultoría (SAEC)",
      "PERSECUSIÓN Y SANCION PENAL LEY 348 - Sociedad de Altos Estudios Capacitación y Consultoría (SAEC)",
      "PREVENCIÓN, ATENCIÓN, Y PROTECCIÓN LEY 348 - Sociedad de Altos Estudios Capacitación y Consultoría (SAEC)",
      "DEFINICIONES DE TIPOS DE VIOLENCIA LEY 348 - Sociedad de Altos Estudios Capacitación y Consultoría (SAEC)",
      "LEY 348 LEY INTEGRAL PARA GARANTIZAR A LAS MUJERES UNA VIDA LIBRE DE VIOLENCIA - Sociedad de Altos Estudios Capacitación y Consultoría (SAEC)",
      "CENSO DE POBLACIÓN Y VIVIENDA 2024 - Instituto Nacional de Estadística INE",
      "SALUD INTEGRAL Y PRODUCCIÓN APICOLA - Instituto Tecnológico Idelfonso de las Muñecas de Titicachi",
      "LIDERAZGO, GESTION Y ELABORACIÓN DE PROYECTOS AGROPECUARIOS - Instituto Tecnológico Idelfonso de las Muñecas de Titicachi",
      "DESARROLLO AGROPECUARIO - Instituto Tecnológico Idelfonso de las Muñecas de Titicachi",
      "PRODUCCIÓN Y COMERCIALIZACION DE HORTALIZAS - Instituto Tecnológico Idelfonso de las Muñecas de Titicachi",
      "MANEJO Y PRODUCCIÓN DE FRUTALES - Instituto Tecnológico Idelfonso de las Muñecas de Titicachi",
      "PRODUCCIÓN Y MANEJO DE ANIMALES MENORES - Instituto Tecnológico Idelfonso de las Muñecas de Titicachi",
      "BIOINSUMOS - Instituto Tecnológico Idelfonso de las Muñecas de Titicachi",
      "SISTEMAS DE RIEGO - Instituto Tecnológico Idelfonso de las Muñecas de Titicachi"
    ],
    "habilidades": [
      "Mantenimiento preventivo de aceite y filtros",
      "Licencia de conducir categoría A en movilidades",
      "Licencia de conducir categoría M en motocicleta",
      "Microsoft Office Suite (Word, Excel, PowerPoint)",
      "Administración y cálculo de dosis en sanidad animal",
      "Poda e injerto de árboles frutales y ornamentales",
      "Manejo de técnicas de Almacigo",
      "Aplicación de abonos orgánicos, sistémicos"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "graciela-orellana-soruco-1",
    "nombre": "Graciela",
    "apellido": "Orellana Soruco",
    "foto": "/gracielaorellanasoruco_rostro.jpg",
    "portada": "/gracielaorellanasoruco_portadita_web.jpg",
    "profesion": "Auxiliar de Enfermería",
    "paisId": "1",
    "areaId": "1",
    "ciudadId": "2",
    "telefono": "+591 607",
    "email": "graciela@gmail.com",
    "descripcion": "Profesional Auxiliar de Enfermería con experiencia en atención hospitalaria, asistencia clínica y apoyo integral al paciente en instituciones públicas y privadas de salud. Cuento con trayectoria en el Hospital del Sud y clínicas particulares, desempeñándome en áreas de emergencia, terapia infusional, inmunización y bioseguridad. Poseo conocimientos actualizados en normativa sanitaria y administración pública, complementados con capacitaciones en manejo de software de salud, control epidemiológico y atención en situaciones de emergencia. Me caracterizo por mi vocación de servicio, responsabilidad, empatía y capacidad para trabajar bajo presión, brindando atención humanizada y eficiente orientada al bienestar y recuperación de los pacientes.",
    "experiencia": [
      {
        "cargo": "Auxiliar de Enfermería",
        "empresa": "HOSPITAL DEL SUD CONTRATO ALCALDÍA",
        "duracion": "27 de noviembre 2024"
      },
      {
        "cargo": "Auxiliar de Enfermería",
        "empresa": "HOSPITAL DEL SUD CONTRATO ALCALDÍA",
        "duracion": "07 de noviembre 2023"
      },
      {
        "cargo": "Auxiliar de Enfermería",
        "empresa": "HOSPITAL DEL SUD CONTRATO ALCALDÍA",
        "duracion": "21 de julio 2023"
      },
      {
        "cargo": "Auxiliar de Enfermería",
        "empresa": "HOSPITAL DEL SUD CONTRATO ALCALDÍA",
        "duracion": "10 de febrero 2022"
      },
      {
        "cargo": "Auxiliar de Enfermería",
        "empresa": "HOSPITAL DEL SUD CONTRATO AISEM",
        "duracion": "2021"
      },
      {
        "cargo": "Auxiliar de Enfermería",
        "empresa": "HOSPITAL UNIVALLE",
        "duracion": "2021"
      },
      {
        "cargo": "Auxiliar de Enfermería",
        "empresa": "Clínica Particular",
        "duracion": "01 de agosto 2020 - 10 de agosto 2021"
      },
      {
        "cargo": "Auxiliar de Enfermería",
        "empresa": "CLINICA DR. LUIS MORALES ARNEZ",
        "duracion": "15 de mayo 2019 - 15 de diciembre 2021"
      },
      {
        "cargo": "Auxiliar de Enfermería",
        "empresa": "CLINICA DR. LUIS MORALES ARNEZ",
        "duracion": "15 de mayo 2019 - 02 de julio 2020"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura en Enfermería (Egresada)",
        "institucion": "Universidad José Ballivián - Beni",
        "ano": "2025"
      },
      {
        "titulo": "Auxiliar de Enfermería",
        "institucion": "Ministerio de Salud y Deportes",
        "ano": "2017"
      },
      {
        "titulo": "Auxiliar de Enfermería",
        "institucion": "Instituto Técnico Ignacia Zeballos",
        "ano": "2016"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio República de Venezuela",
        "ano": "-"
      }
    ],
    "cursos": [
      "LEY Nº 475 - Consultora Multidisciplinar DMM",
      "LEY Nº 004-MARCELO QUIROGA SANTA CRUZ - Consultora Multidisciplinar DMM",
      "LEY Nº 482 - Consultora Multidisciplinar DMM",
      "Certificado de Antecedentes Penales - Organo Judicial",
      "Certificado de No Violencia - Organo Judicial",
      "DECRETO SUPREMO Nº 23318-A REGLAMENTO DE LA RESPONSABILIDAD POR LA FUNCION PUBLICA - Consultora Multidisciplinar DMM",
      "LEY Nº 1178-SAFCO - Consultora Multidisciplinar DMM",
      "SIAF - Consultora Multidisciplinar DMM",
      "SICE - Consultora Multidisciplinar DMM",
      "PAI – PROGRAMA AMPLIADO DE INMUNIZACION - Consultora Multidisciplinar DMM",
      "DOMINANDO EL TRAUMA EN EMERGENCIAS - Sociedad de Emergensiología de Cochabamba",
      "ENFERMEDADES ESTACIONALES Y ABORDAJE CLINICO DENGUE – INFLUENZA - Universidad Católica Boliviana",
      "MANEJO Y ACTUALIZACION SOFTWARE DE SALUD (SALMI) - Universidad Católica Boliviana",
      "TALLER DE FORTALECIMIETNO DEPARAMENTAL DE BIOSEGURIDAD Y GESTION DE RESIDUOS SOLIDOS - Universidad Adventista de Bolivia",
      "CERTIFICADO DE RECONOCIMIENTO POR SU BRILLANTE TRABAJO DUARANTE LA EMERGENCIA SANITARIA COVID-19 - Hospital del Sud",
      "TALLER DE CAPACITACION TERAPIA INFUSIONAL - Servicio Departamental de Salud",
      "MEDICINA ALTERNATIVA Y COMPLEMENTARIA - Universidad Adventista de Bolivia",
      "CURSO DEPARTAMENTAL LEY 1152 DEL SISTEMA UNICO DE SALUD - DISMED",
      "CURSO BÁSICO DE QUECHUA - Grupo ÍCARO",
      "CURSO BÁSICO DE QUECHUA - Centro de Capacitación Técnica \"ALIFE\""
    ],
    "habilidades": [
      "Responsabilidad",
      "Empatía",
      "Trabajo bajo presión",
      "Atención humanizada",
      "Vocación de servicio",
      "Castellano",
      "Quechua"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-06-17T19:50:12.000Z"
  },
  {
    "id": "carlos-boris-ger-saenz",
    "nombre": "Carlos Boris",
    "apellido": "Ger Saenz",
    "foto": "/carlosborisgersaenz_rostro.jpg",
    "portada": "/carlosborisgersaenz_portada_web.jpg",
    "profesion": "Contador Público",
    "paisId": "1",
    "areaId": "11",
    "ciudadId": "3",
    "telefono": "+591 77498875",
    "email": "chaliger7@gmail.com",
    "descripcion": "Contador Público e Ingeniero Comercial con sólida experiencia en gerencia de ventas, logística y administración. Experto en gestión de almacenes, adquisiciones y logística de transporte.",
    "experiencia": [
      {
        "cargo": "FREE LANCE",
        "empresa": "Grupo Avícola Navallo A.L.G. Bolivia",
        "duracion": "Ago 2017 - Oct 2024"
      },
      {
        "cargo": "Gerente de Ventas-Administrativo",
        "empresa": "Grupo Avícola Navallo A.L.G.",
        "duracion": "May 2014 - May 2017"
      },
      {
        "cargo": "Gerente de Logística y Distribución",
        "empresa": "Grupo Avícola Navallo A.L.G.",
        "duracion": "May 2010 - May 2015"
      },
      {
        "cargo": "Encargado Adquisiciones y Almacenes",
        "empresa": "Grupo Avícola Navallo A.L.G.",
        "duracion": "Ene 2008 - Dic 2010"
      }
    ],
    "formacion": [
      {
        "titulo": "Logística y Operaciones Supply Chain Management",
        "institucion": "ADECI",
        "ano": "Feb 2021 - Ago 2021"
      },
      {
        "titulo": "Formación de Consultores para Adquisiciones",
        "institucion": "ADECI",
        "ano": "Feb 2021 - Ago 2021"
      },
      {
        "titulo": "Gestión de Almacenes & Logística de transporte",
        "institucion": "UNICEN",
        "ano": "Jun 2017 - Dic 2017"
      },
      {
        "titulo": "Ingeniería Comercial",
        "institucion": "Universidad Domingo Savio",
        "ano": "Feb 2009 - Nov 2015"
      },
      {
        "titulo": "Contaduría Pública",
        "institucion": "Universidad Mayor de San Simón",
        "ano": "Feb 1998 - Dic 2005"
      }
    ],
    "cursos": [
      "Seguridad, Medio Ambiente y Salud Ocupacional, CAMIND",
      "Análisis y tratamiento de No conformidades en ISO 9001, IBNORCA",
      "Primeros Auxilios, CRUZ ROJA",
      "Haccp y Control de Calidad en la Industria Alimentaria, SEDESEM",
      "Gestión de Stocks y Almacenes, UNICEN"
    ],
    "habilidades": [
      "Liderazgo",
      "Empatía",
      "Resolución de conflictos",
      "Negociación",
      "Atención al cliente",
      "Compromiso",
      "Responsabilidad",
      "Trabajo en equipo",
      "Excel, MS Word, Power Point, Access, Publisher",
      "Manejo de información estadística y diagnósticos",
      "Español, Inglés, Quechua"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "jessica-ventas-0",
    "nombre": "Jessica",
    "apellido": "Gaspar",
    "foto": "/jessicagaspar.jpg",
    "portada": "/portada_web_jessicagaspar.jpg",
    "profesion": "Especialista en ventas, marketing y negocios",
    "paisId": "1",
    "areaId": "15",
    "ciudadId": "1",
    "telefono": "+591 72576619",
    "email": "jessica.gaspar77@gmail.com",
    "descripcion": "Profesional en ventas, marketing y atención al cliente con amplia experiencia en el sector financiero, inmobiliario y académico. Destaco por mi orientación a resultados, capacidad de negociación y habilidades comunicativas.",
    "experiencia": [
      {
        "cargo": "Agente de Call Center",
        "empresa": "Call Novio",
        "duracion": "2025 - 2026"
      },
      {
        "cargo": "Asesora Académica",
        "empresa": "Universidad Siglo XX",
        "duracion": "2022 - 2024"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura en Ingeniería Comercial",
        "institucion": "Universidad Privada del Valle",
        "ano": "2012"
      }
    ],
    "cursos": [
      "MBA (en curso)",
      "Diplomado en Negocios - Experto en Creación y Desarrollo de Empresas",
      "Diplomado en Educación Superior"
    ],
    "habilidades": [
      "Atención al cliente",
      "Marketing",
      "Técnicas de venta"
    ],
    "cv_pdf": "https://cv-jessica-gaspar.netlify.app/",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "brenda-alvarez-1",
    "nombre": "Luis Fernando",
    "apellido": "Mollinedo Peralta",
    "foto": "/luisfernando.jpg",
    "portada": "/portada_web_luisfernandomollinedo.jpg",
    "profesion": "Administrador de Empresas / Abogado",
    "paisId": "1",
    "areaId": "4",
    "ciudadId": "1",
    "telefono": "+591 71298351 - 70122196",
    "email": "luis.mollinedop@gmail.com",
    "descripcion": "Profesional con amplia experiencia en gestión administrativa, comercial y de recursos humanos en instituciones públicas y empresas estratégicas del Estado. Especialista en planificación institucional, administración de personal, compensaciones, desarrollo organizacional y aplicación de normativa pública como la Ley 1178 (SAFCO) y la Ley General del Trabajo. Experiencia en liderazgo de equipos multidisciplinarios.",
    "experiencia": [
      {
        "cargo": "Responsable de Zona Comercial Uyuni",
        "empresa": "YPFB",
        "duracion": "Jul 2024 - Mar 2026"
      },
      {
        "cargo": "Técnico de Servicios Generales",
        "empresa": "YPFB",
        "duracion": "Dic 2023 - Jun 2024"
      },
      {
        "cargo": "Director de Gestión de Personal",
        "empresa": "YPFB",
        "duracion": "2018 - Nov 2023"
      },
      {
        "cargo": "Director de Compensaciones",
        "empresa": "YPFB",
        "duracion": "2016 - 2018"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura en Derecho",
        "institucion": "Universidad Mayor de San Andrés",
        "ano": "2024"
      },
      {
        "titulo": "Licenciatura en Administración de Empresas",
        "institucion": "Universidad Mayor de San Andrés",
        "ano": "1998"
      }
    ],
    "cursos": [
      "Diplomado Experto en Seguridad Social Corporativa",
      "Diplomado en Derecho Laboral Corporativo",
      "Maestría en Ciencias de Gestión Industrial y Empresarial"
    ],
    "habilidades": [
      "Planificación estratégica",
      "Administración de personal",
      "Ley 1178 (SAFCO)",
      "Ley General del Trabajo",
      "Liderazgo",
      "Gestión de abastecimiento"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "carlos-alvarez-2",
    "nombre": "Alvaro Rubén",
    "apellido": "Gutierrez Lopez",
    "foto": "/alvarorubengutierrezlopez.jpg",
    "portada": "/portada_web_alvaroruben.jpg",
    "profesion": "Ingeniero Industrial",
    "paisId": "1",
    "areaId": "17",
    "ciudadId": "5",
    "telefono": "+591 60478509",
    "email": "rubenguti1015@gmail.com",
    "descripcion": "Mi nombre es Alvaro Ruben Gutierrez Lopez, con profesión Ingeniero Industrial, orgullosamente nacido en Tupiza, Potosí. Soy titulado de la Universidad Privada Domingo Savio - Regional Tarija, donde adquirí una sólida formación técnica y estratégica en gestión de procesos productivos.",
    "experiencia": [
      {
        "cargo": "Ayudante en el área de Producción",
        "empresa": "Empresa Bodega \"Juan Diablo\"",
        "duracion": "2025"
      },
      {
        "cargo": "Ayudante en el área de Calidad",
        "empresa": "Empresa Flexyplas S.A.",
        "duracion": "2024"
      },
      {
        "cargo": "Becario del Área de Extensión Universitaria",
        "empresa": "Universidad Privada Domingo Savio",
        "duracion": "2021 - 2024"
      },
      {
        "cargo": "Ayudante de repartidor",
        "empresa": "Tienda de productos \"Pil Chuquisaca\"",
        "duracion": "2017 - 2020"
      },
      {
        "cargo": "Taller de metal mecánica, chapa y pintura",
        "empresa": "Tienda de productos \"Pil Chuquisaca\"",
        "duracion": "2010 - 2017"
      }
    ],
    "formacion": [
      {
        "titulo": "Ingeniería Industrial",
        "institucion": "Universidad Privada Domingo Savio",
        "ano": "2025"
      },
      {
        "titulo": "Técnico Medio en Sistemas Informáticos",
        "institucion": "",
        "ano": "2019"
      }
    ],
    "cursos": [
      "Certificado de Administración de Almacenes y Control de Inventarios con Aplicación en Microsoft Excel",
      "Certificado de Participación del Conversatorio del día Mundial de la Seguridad y Salud en el Trabajo",
      "Certificado de Reconocimiento por las funciones brindadas en las Prácticas Profesionales en Bodega Juan Diablo",
      "Certificado de Reconocimiento por la Funciones brindadas en Flexyplas S.A."
    ],
    "habilidades": [
      "AutoCad",
      "Python",
      "Microsoft Office",
      "Trabajo bajo presión",
      "Atención al cliente",
      "Líder autocrático"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "daniela-alvarez-3",
    "nombre": "Jhosel",
    "apellido": "Patiño Reinaga",
    "foto": "/jhosselpatinoreinaga.jpg",
    "portada": "/portada_web_jhosselpatinoreinaga.jpg",
    "profesion": "Secretaria Administrativa",
    "paisId": "1",
    "areaId": "4",
    "ciudadId": "2",
    "telefono": "+591 65774587",
    "email": "jpatinoreinaga@gmail.com",
    "descripcion": "Profesional con experiencia en atención al cliente, servicio en restaurantes, limpieza y apoyo operativo. Destaco por mi responsabilidad, organización y buen trato al público. Cuento con habilidades en comunicación asertiva y resolución de problemas.",
    "experiencia": [
      {
        "cargo": "Mesera y Encargada de Limpieza",
        "empresa": "CARBÓN COCHALA",
        "duracion": "Nov 2025 - Mar 2026"
      },
      {
        "cargo": "Encargada de Limpieza",
        "empresa": "MAGNUS",
        "duracion": "Ago 2025 - Oct 2025"
      }
    ],
    "formacion": [
      {
        "titulo": "Secretaria Administrativa",
        "institucion": "Instituto técnico \"CEICOM\"",
        "ano": "2015"
      }
    ],
    "cursos": [
      "Taller motivaciones de auto empleo y generación de ideas de negocio",
      "Seminario Coaching con Visión Empresarial",
      "Conferencia Value Branding Marketing"
    ],
    "habilidades": [
      "Buen trato al cliente",
      "Comunicación asertiva",
      "Resolución de problemas"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "ernesto-alvarez-4",
    "nombre": "Jorge Ricardo",
    "apellido": "Beltrán Sáenz",
    "foto": "/jorgericardo.jpg",
    "portada": "/portada_web_jorgericardobeltran.jpg",
    "profesion": "Médico Cirujano",
    "paisId": "1",
    "areaId": "1",
    "ciudadId": "5",
    "telefono": "+591 71817996",
    "email": "beltransaenzjorgericardo@gmail.com",
    "descripcion": "Persona proactiva con espíritu emprendedor, dispuesto a asumir retos, contando con una experiencia laboral de más de 10 años en diferentes áreas de salud. Además de un alto conocimiento en programas y leyes de salud actualizados según el Ministerio de Salud y Deportes.",
    "experiencia": [
      {
        "cargo": "Médico Salud Ocupacional",
        "empresa": "EMPRESA MINERA MANQUIRI",
        "duracion": "2026"
      },
      {
        "cargo": "Seguridad Industrial",
        "empresa": "EMPRESA MINERA MANQUIRI",
        "duracion": "2023 - 2025"
      },
      {
        "cargo": "Consulta en Medicina General",
        "empresa": "POLICÍA BOLIVIANA - Policlínico Policial Potosí",
        "duracion": "2021 - 2022"
      },
      {
        "cargo": "Emergencias y Urgencias Médicas",
        "empresa": "POLICÍA BOLIVIANA - Policlínico Policial Potosí",
        "duracion": "2018 - 2021"
      }
    ],
    "formacion": [
      {
        "titulo": "MÉDICO CIRUJANO",
        "institucion": "U.A.T.F – Facultad de Medicina, Potosí",
        "ano": "2010"
      },
      {
        "titulo": "BACHILLER EN HUMANIDADES",
        "institucion": "Instituto de Educación Bancaria",
        "ano": "2013"
      }
    ],
    "cursos": [
      "Diplomado en Seguridad Industrial y Salud Ocupacional",
      "Diplomado en Urgencias y Emergencias Médicas",
      "Curso Virtual Medicina Laboral",
      "1er. Congreso Internacional de Actualización Médica"
    ],
    "habilidades": [
      "Word",
      "Excel",
      "Power Point",
      "Catellano",
      "Inglés",
      "Quechua"
    ],
    "cv_pdf": "https://cv-jorge-ricardo-beltran-saenz.netlify.app/",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "fabiana-alvarez-5",
    "nombre": "Viviana",
    "apellido": "Vaca Quiroz",
    "foto": "/vivianvacaquiroz.jpg",
    "portada": "/portada_web_vivianavacaquiroz.jpg",
    "profesion": "Abogada",
    "paisId": "1",
    "areaId": "13",
    "ciudadId": "6",
    "telefono": "+591 77191702",
    "email": "vivianita.986@hotmail.com",
    "descripcion": "Abogada titulada con amplia experiencia en asesoría legal, gestión pública y atención a poblaciones vulnerables en el ámbito municipal. Desempeñando funciones en el Servicio Legal Integral Municipal (SLIM), administración de personal y gestión institucional. Profesional comprometida con la defensa de derechos, la resolución de conflictos y el servicio a la comunidad.",
    "experiencia": [
      {
        "cargo": "Abogada del Servicio Legal Integral Municipal (SLIM)",
        "empresa": "Gobierno Autónomo Municipal de Yacuiba",
        "duracion": "2024 - 2025"
      },
      {
        "cargo": "Abogada Independiente",
        "empresa": "Oficina Jurídica Vaca Quiroz",
        "duracion": "Abr 2022 - Sep 2024"
      },
      {
        "cargo": "Jefe de la Unidad de Asuntos Generacionales",
        "empresa": "Gobierno Autónomo Municipal de Yacuiba",
        "duracion": "Jun 2019 - Feb 2020"
      },
      {
        "cargo": "Directora de Defensa Social e Igualdad de Oportunidades",
        "empresa": "Gobierno Autónomo Municipal de Yacuiba",
        "duracion": "Jun 2018 - May 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Diplomado en Derecho Laboral",
        "institucion": "Universidad Privada Domingo Savio",
        "ano": "2026"
      },
      {
        "titulo": "Licenciada en Derecho",
        "institucion": "Universidad Privada Domingo Savio",
        "ano": "2025"
      }
    ],
    "cursos": [
      "Curso Ley 348: su procedimiento y aplicación",
      "Procesos Extraordinarios y de Estructura Monitoria",
      "Derecho Catastral y Derecho Municipal"
    ],
    "habilidades": [
      "Derecho Laboral",
      "Derecho Municipal",
      "Resolución de conflictos",
      "Gestión Pública",
      "Microsoft Office",
      "Adobe Photoshop"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "gabriel-alvarez-6",
    "nombre": "Diana Lauren",
    "apellido": "Leaño Alanoka",
    "foto": "/dianalaurenleano.jpg",
    "portada": "/portada_web_dianalaurenleano.jpg",
    "profesion": "Médica Cirujana e Internista",
    "paisId": "1",
    "areaId": "1",
    "ciudadId": "3",
    "telefono": "+591 71078385",
    "email": "Inga773@Hotmail.Com",
    "descripcion": "Especialista en medicina interna a través de un diagnóstico y tratamiento integral de adultos con enfermedades complejas y crónicas en áreas de consulta externa, emergencia, internacion y áreas críticas como UTI y UCI. Sólida formación, ética, capacidad analítica y empatía para manejar patologías multisistémicas.",
    "experiencia": [
      {
        "cargo": "Médico Internista área de Emergencias",
        "empresa": "Hospital Universitario Martin Dockweiler",
        "duracion": "Nov 2023 - Dic 2025"
      },
      {
        "cargo": "Médico Internista",
        "empresa": "Hospital Militar COSSMIL",
        "duracion": "Sep 2022 - May 2023"
      },
      {
        "cargo": "Médico Internista Unidad de cuidados intermedios",
        "empresa": "Hospital Villa Primero de Mayo",
        "duracion": "Jul 2021 - Presente"
      },
      {
        "cargo": "Médico Internista Unidad de terapia intensiva Covid",
        "empresa": "Hospital San Juan de Dios",
        "duracion": "Ene 2021 - May 2021"
      }
    ],
    "formacion": [
      {
        "titulo": "Médico Internista (Residencia Médica)",
        "institucion": "Hospital Caja Petrolera de Salud Santa Cruz",
        "ano": "Concluida"
      },
      {
        "titulo": "Médico Cirujano General",
        "institucion": "Universidad Gabriel Rene Moreno",
        "ano": "Egresada"
      }
    ],
    "cursos": [
      "Actualización en uso de antibióticos y probióticos",
      "Congreso Internacional de Medicina Interna",
      "Jornada Internacional de Medicina Critica y Terapia Intensiva",
      "Curso Taller de Ventilación Mecánica y Manejo Hemodinámico AVENTHO"
    ],
    "habilidades": [
      "Diagnóstico y tratamiento integral",
      "Manejo de situaciones de estrés",
      "Comunicación y empatía",
      "Cuidados multidisciplinarios",
      "Atención en emergencias y UTI"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "helena-alvarez-7",
    "nombre": "Elmer",
    "apellido": "Huayra Picachuri",
    "foto": "/elmerhuayrapicachuri.jpg",
    "portada": "/portada_web_elmerhuayrapicachuri.jpg",
    "profesion": "Fontanero - Plomero",
    "paisId": "1",
    "areaId": "3",
    "ciudadId": "4",
    "telefono": "+591 78608602",
    "email": "elmerhuayrapicachuri66@gmail.com",
    "descripcion": "Técnico en Electricidad Industrial y Mecánica Automotriz con experiencia en instalaciones eléctricas residenciales e industriales, mantenimiento preventivo y trabajos técnicos independientes. Con conocimientos en automatización industrial, instalaciones hidráulicas sanitarias y mantenimiento de equipos y vehículos. Destaco por mi responsabilidad, capacidad de diagnóstico técnico y cumplimiento de normas de seguridad en trabajos eléctricos. Profesional proactivo, orientado a la solución de problemas y al trabajo eficiente.",
    "experiencia": [
      {
        "cargo": "Instalaciones Residenciales",
        "empresa": "Independiente",
        "duracion": "Actualmente"
      },
      {
        "cargo": "Trabajo de Plomería",
        "empresa": "Edificio Girasoles",
        "duracion": ""
      },
      {
        "cargo": "Instalaciones Hidráulicas",
        "empresa": "Edificio Sermaht",
        "duracion": ""
      }
    ],
    "formacion": [
      {
        "titulo": "Electricidad Industrial",
        "institucion": "Facultad Técnica de Oruro",
        "ano": "2024"
      },
      {
        "titulo": "Mecánica Automotriz",
        "institucion": "Instituto Tecnológico de Aprendizaje Industrial I.A.I.",
        "ano": "2022"
      },
      {
        "titulo": "Técnico Auxiliar en Electricidad Industrial",
        "institucion": "Instituto \"Simón Bolívar\"",
        "ano": "2019"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio \"Mariscal Antonio José de Sucre\"",
        "ano": "2013"
      }
    ],
    "cursos": [
      "Automatización Industrial",
      "Capacitación de Defensa de Grado",
      "Mantenimiento de Coplex",
      "Certificado de seguridad industrial UTO"
    ],
    "habilidades": [
      "Instalaciones Eléctricas (Domiciliaria e Industrial)",
      "Instalaciones Hidráulicas Sanitarias",
      "Mantenimiento Preventivo de Vehículo",
      "Inglés (Básico)",
      "Quechua (Intermedio)"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "ignacio-alvarez-8",
    "nombre": "José Carlos",
    "apellido": "Gonzales Alfaro",
    "foto": "/josecarlosgonzales_comercioexterior_sucre.jpg",
    "portada": "/portada_web_josecarlosgonzalesalfaro.jpg",
    "profesion": "Comercio Exterior",
    "paisId": "1",
    "areaId": "9",
    "ciudadId": "7",
    "telefono": "+591 70000000",
    "email": "josecarlos.gonzales@email.com",
    "descripcion": "Profesional en Comercio Exterior con experiencia en gestión aduanera, logística internacional y desarrollo de estrategias de exportación e importación en Sucre.",
    "experiencia": [
      {
        "cargo": "Especialista en Comercio Exterior",
        "empresa": "Agencia Despachante",
        "duracion": "2020 - Presente"
      },
      {
        "cargo": "Asistente de Logística",
        "empresa": "Empresa Importadora",
        "duracion": "2017 - 2020"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura en Comercio Exterior",
        "institucion": "Universidad San Francisco Xavier de Chuquisaca",
        "ano": "2017"
      }
    ],
    "cursos": [
      "Actualización en Normativa Aduanera",
      "Logística Internacional"
    ],
    "habilidades": [
      "Gestión Aduanera",
      "Logística Internacional",
      "Negociación",
      "Inglés (Avanzado)"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "julia-alvarez-9",
    "nombre": "José Luis",
    "apellido": "Parada Oliva",
    "foto": "/joseluisparadaoliva_agronomia_pando.jpg",
    "portada": "/portada_web_joseluisparadaoliva.jpg",
    "profesion": "Agronomía",
    "paisId": "1",
    "areaId": "10",
    "ciudadId": "8",
    "telefono": "+591 70000000",
    "email": "joseluis.parada@email.com",
    "descripcion": "Profesional en Agronomía con experiencia en sostenibilidad, desarrollo de cultivos y proyectos agropecuarios en Pando.",
    "experiencia": [
      {
        "cargo": "Especialista en Agronomía",
        "empresa": "Proyectos Agropecuarios Pando",
        "duracion": "2020 - Presente"
      },
      {
        "cargo": "Asistente Agrónomo",
        "empresa": "Consultora Agrícola Nacional",
        "duracion": "2017 - 2020"
      }
    ],
    "formacion": [
      {
        "titulo": "Ingeniería Agronómica",
        "institucion": "Universidad Autónoma de Pando",
        "ano": "2017"
      }
    ],
    "cursos": [
      "Agricultura Sostenible",
      "Manejo de Cultivos Tropicales"
    ],
    "habilidades": [
      "Producción Agrícola",
      "Gestión de Proyectos",
      "Sostenibilidad",
      "Manejo de Suelos"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "andres-bustamante-10",
    "nombre": "Juan Carlos",
    "apellido": "Rodas Carballo",
    "foto": "/juancarlosrodascarballo_contador_sucre.jpg",
    "portada": "/portada_web_juancarlosrodascarballo.jpg",
    "profesion": "Contador Público",
    "paisId": "1",
    "areaId": "11",
    "ciudadId": "7",
    "telefono": "+591 70000000",
    "email": "juancarlos.rodas@email.com",
    "descripcion": "Profesional en Contaduría Pública con sólida experiencia en auditoría, gestión financiera y tributaria en la ciudad de Sucre.",
    "experiencia": [
      {
        "cargo": "Contador General",
        "empresa": "Firma Auditora Sucre",
        "duracion": "2018 - Presente"
      },
      {
        "cargo": "Auditor Junior",
        "empresa": "Estudio Contable del Sur",
        "duracion": "2015 - 2018"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura en Contaduría Pública",
        "institucion": "Universidad San Francisco Xavier de Chuquisaca",
        "ano": "2015"
      }
    ],
    "cursos": [
      "Especialización en Tributación",
      "Normas Internacionales de Información Financiera (NIIF)"
    ],
    "habilidades": [
      "Auditoría Financiera",
      "Gestión Tributaria",
      "Análisis de Estados Financieros",
      "Software Contable"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "brenda-bustamante-11",
    "nombre": "José",
    "apellido": "Durán Subia",
    "foto": "/joseduransubia_contador_santacruz.jpg",
    "portada": "/portada_web_joseduransubia.jpg",
    "profesion": "Contador General",
    "paisId": "1",
    "areaId": "11",
    "ciudadId": "3",
    "telefono": "+591 77372777",
    "email": "jd4462793@gmail.com",
    "descripcion": "Contador General con más de 30 años de experiencia en la gestión administrativa, financiera y estratégica de organizaciones públicas y privadas, con amplia trayectoria en el sector hospitalario. Profesional con sólida capacidad de liderazgo, toma de decisiones, planificación estratégica y gestión eficiente orientada a resultados y mejora continua.",
    "experiencia": [
      {
        "cargo": "Gestor del hospital Geriátrico",
        "empresa": "Hospital Geriátrico",
        "duracion": "2022 - 2026"
      },
      {
        "cargo": "Sub Director",
        "empresa": "Hospital Municipal Villa Primero de Mayo",
        "duracion": "2019 - 2021"
      }
    ],
    "formacion": [
      {
        "titulo": "Administración de Empresas",
        "institucion": "Universidad Autónoma Gabriel René Moreno",
        "ano": "1979"
      },
      {
        "titulo": "Contaduría General",
        "institucion": "Universidad Autónoma Gabriel René Moreno",
        "ano": "1977"
      }
    ],
    "cursos": [
      "Elaboración y Control de Presupuesto"
    ],
    "habilidades": [
      "Análisis e Interpretación de Estados Financieros",
      "Manejo de Sistemas ADM, Contables, RRHH (SAP)",
      "Dominio de la Ley General del Trabajo",
      "Resolución de conflictos y negociación"
    ],
    "cv_pdf": "https://cv-jose-duran-subia.netlify.app/",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "carlos-bustamante-12",
    "nombre": "Maribel Leandra",
    "apellido": "Castro Choque",
    "foto": "/maribelleandracastrocoque_contabilidadyfinanzas_potosi.jpg",
    "portada": "/portada_web_maribelleandracastrochoque.jpg",
    "profesion": "Contabilidad y Finanzas",
    "paisId": "1",
    "areaId": "11",
    "ciudadId": "5",
    "telefono": "+591 74237846",
    "email": "maribelleandrac97@hotmail.com",
    "descripcion": "Lic. Contabilidad y Finanzas. Persona proactiva, organizada y responsable, con buenas relaciones interpersonales. Destaca por el buen trabajo en equipo, la rápida toma de decisiones y el buen manejo de la presión.",
    "experiencia": [
      {
        "cargo": "Administración Contable, Recursos Humanos y Marketing",
        "empresa": "MEGA MALL La Joya del Cielo S.R.L",
        "duracion": "Jul 2024 - Ene 2026"
      },
      {
        "cargo": "Recepcion y Atencion al Cliente",
        "empresa": "MEGA MALL La Joya del Cielo S.R.L",
        "duracion": "Nov 2023 - Jul 2024"
      }
    ],
    "formacion": [
      {
        "titulo": "Diplomado en Banca y Finanzas",
        "institucion": "Universidad Privada del Valle UNIVALLE",
        "ano": "2025"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio Liceo de Señoritas, Potosí",
        "ano": "2014"
      }
    ],
    "cursos": [
      "Banca y Finanzas",
      "Administracion de Recursos Humanos",
      "Estratega en Visualizacion de Datos con PowerBI"
    ],
    "habilidades": [
      "Microsoft Excel, Word y Power Point",
      "Liderazgo y manejo de personal",
      "Sistema Contable Eicap",
      "Orientacion al resultado"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "daniela-bustamante-13",
    "nombre": "Noelia Stefany",
    "apellido": "Avila Villanueva",
    "foto": "/noeliastefanyavilavillanueva_psicologia_tarija.jpg",
    "portada": "/portada_web_noeliastefanyavilavillanueva.jpg",
    "profesion": "Psicóloga",
    "paisId": "1",
    "areaId": "14",
    "ciudadId": "6",
    "telefono": "+591 73350681",
    "email": "noe271196@gmail.com",
    "descripcion": "Psicóloga con formación especializada en atención integral a niños con capacidades diferentes, con conocimientos en Trastorno del Espectro Autista, Asperger, discapacidades específicas del aprendizaje y otros trastornos del desarrollo. Cuenta con capacitación en estimulación temprana, intervención psicológica y comunicación mediante lenguaje de señas.",
    "experiencia": [
      {
        "cargo": "Apoyo a niños autistas",
        "empresa": "Centro Niños Con un mejor Desarrollo",
        "duracion": "2023"
      },
      {
        "cargo": "Apoyo en Estimulación Temprana",
        "empresa": "Centro Manitos Pegadas",
        "duracion": "2021"
      }
    ],
    "formacion": [
      {
        "titulo": "Lic. en Psicología",
        "institucion": "Universidad Autónoma Juan Misael Saracho",
        "ano": "2023"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "U.E. Defensores del Chaco Villa Montes",
        "ano": "2014"
      }
    ],
    "cursos": [
      "Lenguas de Señas",
      "Herramientas Digitales (Word, Excel y PowerPoint)",
      "Desarrollo de Habilidades Básicas en niños con autismo"
    ],
    "habilidades": [
      "Atención integral a niños",
      "Estimulación temprana",
      "Intervención psicológica",
      "Trabajo interdisciplinario"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "ernesto-bustamante-14",
    "nombre": "Sonia Casta",
    "apellido": "Rivero Nuñez Vela",
    "foto": "/soniacastarivero_comunicacionsocial_pando.jpg",
    "portada": "/portada_web_soniacastarivero.jpg",
    "profesion": "Comunicadora Social",
    "paisId": "1",
    "areaId": "12",
    "ciudadId": "8",
    "telefono": "+591 77101701",
    "email": "fotografiauap2023@gmail.com",
    "descripcion": "Licenciada en Ciencias de la Comunicación Social con amplia experiencia en gestión de comunicación institucional, relaciones públicas y producción de contenidos en el sector público, académico y social. Especialista en planificación estratégica de comunicación y manejo de redes sociales.",
    "experiencia": [
      {
        "cargo": "Responsable y Asistente de Comunicación",
        "empresa": "Gobierno Autónomo Municipal de Cobija",
        "duracion": "2022 - Presente"
      },
      {
        "cargo": "Jefe Protocolo y Comunicación",
        "empresa": "Vicerrectorado Universidad Amazónica de Pando",
        "duracion": "2020 - 2021"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciada en Ciencias de la Comunicación Social",
        "institucion": "Universidad Católica Boliviana San Pablo",
        "ano": "2002"
      },
      {
        "titulo": "Diplomado en Educación Superior",
        "institucion": "Universidad Amazónica de Pando",
        "ano": "2017"
      }
    ],
    "cursos": [
      "Políticas de Atención al Cliente y Empleabilidad",
      "Organización de Eventos Corporativos"
    ],
    "habilidades": [
      "Planificación estratégica de comunicación",
      "Manejo de redes sociales",
      "Producción audiovisual y guionización",
      "Protocolo institucional"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "fabiana-bustamante-15",
    "nombre": "Tania Raquel",
    "apellido": "Lopez Sequeiros",
    "foto": "/taniaraquellopez_abogada_oruro.jpg",
    "portada": "/portada_web_taniaraquellopez.jpg",
    "profesion": "Abogada",
    "paisId": "1",
    "areaId": "13",
    "ciudadId": "4",
    "telefono": "+591 76155309",
    "email": "lopezsequeirostr@gmail.com",
    "descripcion": "Abogada comprometida con sólidas habilidades de liderazgo, oratoria y comunicación fluida. Capaz de trabajar en equipo, con amplio interés por el aprendizaje rápido y continuo en el ámbito de las Leyes y el Derecho.",
    "experiencia": [
      {
        "cargo": "Auxiliar Juzgado de Instrucción Penal 4",
        "empresa": "Tribunal Departamental de Justicia de Oruro",
        "duracion": "Ago 2023 - Ago 2025"
      },
      {
        "cargo": "Pasante Ad-Honorem",
        "empresa": "Juzgado Público de Familia Primero de la Capital Oruro",
        "duracion": "Feb 2019 - Abr 2021"
      }
    ],
    "formacion": [
      {
        "titulo": "Abogado",
        "institucion": "Universidad Técnica de Oruro",
        "ano": "2025"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio de Señoritas Donato Vasquez",
        "ano": "2010"
      }
    ],
    "cursos": [
      "Proceso de Enseñanza y Aprendizaje de Abogados",
      "Litigación para Abogados Junior",
      "Etapa Preliminar y Preparatoria en Materia Penal"
    ],
    "habilidades": [
      "Liderazgo",
      "Oratoria",
      "Comunicación fluida",
      "Trabajao en equipo"
    ],
    "cv_pdf": "#",
    "estado": "inactivo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "gabriel-bustamante-16",
    "nombre": "Victor Hugo",
    "apellido": "Claure Vera",
    "foto": "/victorhugoclaure_laboratorioclinico_.jpg",
    "portada": "/portada_web_victorhugoclaurevera.jpg",
    "profesion": "Técnico Superior Laboratorio Clínico",
    "paisId": "1",
    "areaId": "1",
    "ciudadId": "2",
    "telefono": "+591 74416982",
    "email": "hugoclaure1985@gmail.com",
    "descripcion": "Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales y gran trabajo en equipo orientado a resultados. Busco mejorar constantemente y sumar experiencia en mi trabajo. Disponibilidad inmediata.",
    "experiencia": [
      {
        "cargo": "Representante Comercial y Visitador Médico",
        "empresa": "EMPRESA SALUR",
        "duracion": "Dic 2025 - Presente"
      },
      {
        "cargo": "Encargado de ventas y cobranzas",
        "empresa": "Punto Móvil Supermercado AMÉRICA",
        "duracion": "Abr 2025 - Dic 2025"
      }
    ],
    "formacion": [
      {
        "titulo": "Diplomado en Visita Médica y Marketing Farmacéutico",
        "institucion": "Universidad Nacional Siglo XX",
        "ano": "2026"
      },
      {
        "titulo": "Carrera de Laboratorio Clínico",
        "institucion": "Real y Pontificia de San Fco. Xavier de Chuquisaca",
        "ano": "2009"
      }
    ],
    "cursos": [
      "Instrumentación Quirúrgica",
      "Gestión Comercial y Trading Farmacéutico con enfoque en visita médica",
      "Responsable Servicio de Laboratorio"
    ],
    "habilidades": [
      "Liderazgo",
      "Comunicación asertiva",
      "Investigación y análisis",
      "Resolución de problemas"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "helena-bustamante-17",
    "nombre": "Arilson",
    "apellido": "Vacaury Sucre",
    "foto": "/arilsonvacaurysucre_peritoadministrativo_sc.jpg",
    "portada": "/portada_web_arilsonvacaurysucre.jpg",
    "profesion": "Perito Administrativo",
    "paisId": "1",
    "areaId": "4",
    "ciudadId": "3",
    "telefono": "+591 73396472",
    "email": "arilsonvacaury23@gmail.com",
    "descripcion": "Estudiante de Ingeniería Industrial y egresado de la carrera técnica en Perito Administrativo, con experiencia en gestión de archivo de mantenimiento y control de activos. Profesional organizado, responsable y orientado a resultados, con capacidad de trabajo en equipo.",
    "experiencia": [
      {
        "cargo": "Encargado Archivo de mantenimiento",
        "empresa": "AGRONEULAND DEL SUR SRL",
        "duracion": "Oct 2024 - Abr 2026"
      },
      {
        "cargo": "Área de producción",
        "empresa": "Empresa Apícola DEL BOSQUE",
        "duracion": "2023 - 2024"
      }
    ],
    "formacion": [
      {
        "titulo": "Ingeniería Industrial",
        "institucion": "Universidad Privada Domingo Savio UPDS",
        "ano": "Actualmente"
      },
      {
        "titulo": "Carrera Técnica Perito Administrativo",
        "institucion": "Instituto Técnico Domingo Savio ITDS",
        "ano": "2025"
      }
    ],
    "cursos": [
      "Manejo de AUTOCAD 2D Y 3D | ARQSCALE",
      "Operador del sistema TR4 y Octopus",
      "Operador de office | Técnico básico, auxiliar y medio"
    ],
    "habilidades": [
      "Gestión de mantenimiento preventivo y correctivo",
      "Sistema de Software Inteligencia TR4",
      "Control de activos fijos",
      "Elaboración de Planilla de Personal"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "ignacio-bustamante-18",
    "nombre": "Bladimir",
    "apellido": "Condori",
    "foto": "/bladimircondori_administracion_cbba.jpg",
    "portada": "/portada_web_bladimircondori.jpg",
    "profesion": "Administración",
    "paisId": "1",
    "areaId": "4",
    "ciudadId": "2",
    "telefono": "+591 70000000",
    "email": "bladimir.condori@gmail.com",
    "descripcion": "Profesional en Administración con experiencia en la gestión de recursos y optimización de procesos. Capaz de liderar equipos y enfocado en el cumplimiento de objetivos organizacionales. (Nota: Información no disponible en el último mensaje).",
    "experiencia": [
      {
        "cargo": "Administrador",
        "empresa": "Empresa Comercial",
        "duracion": "2020 - Presente"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura en Administración de Empresas",
        "institucion": "Universidad Mayor de San Simón",
        "ano": "2019"
      }
    ],
    "cursos": [
      "Gestión de Proyectos",
      "Liderazgo y Habilidades Directivas"
    ],
    "habilidades": [
      "Trabajo en equipo",
      "Resolución de problemas",
      "Liderazgo",
      "Comunicación efectiva"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "julia-bustamante-19",
    "nombre": "Carlos Santo",
    "apellido": "Cuaniay Segales",
    "foto": "/carlosantoscuaniay_contacor_cbba.jpg",
    "portada": "/portada_web_carlossantocuaniay.jpg",
    "profesion": "Contador Público",
    "paisId": "1",
    "areaId": "11",
    "ciudadId": "2",
    "telefono": "+591 73365353",
    "email": "cuaniaycarlos57@gmail.com",
    "descripcion": "Licenciado en Contaduría Pública con capacidad de trabajo en equipo, fortaleza para tomar decisiones con objetividad, disposición para el aprendizaje, hábil para cumplir objetivos y garantizar los procedimientos de la entidad. Orientado a resultados.",
    "experiencia": [
      {
        "cargo": "Contador Junior",
        "empresa": "CONSULTORA \"MENDOZAGO SRL.\" AUDITORES Y CONSULTORES",
        "duracion": "Sept 2024 - Sept 2025"
      },
      {
        "cargo": "Encargado de Presupuesto, Tesorería y Almacenes",
        "empresa": "GAMSR",
        "duracion": "Jun 2015 - Abr 2016"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciado en Contaduría Pública",
        "institucion": "Universidad Autónoma del Beni \"José Ballivián\"",
        "ano": "2025"
      },
      {
        "titulo": "Auxiliar Contable",
        "institucion": "Centro de Educación Alternativa \"Tarumá\"",
        "ano": "2013"
      }
    ],
    "cursos": [
      "Clasificador Presupuestario",
      "SICOES - Sistema de Contratación del Estado",
      "Responsabilidad Civil en la Gestión Pública"
    ],
    "habilidades": [
      "Oratoria",
      "Organización en grupo",
      "Liderazgo",
      "Comunicación fluida"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": "2026-05-20T03:46:59.137Z"
  },
  {
    "id": "claudia-acha-gonzales",
    "nombre": "Claudia",
    "apellido": "Achá Gonzales",
    "foto": "/claudiaachagonzales_rostro.jpg",
    "portada": "/claudiaachagonzales_portada_web.jpg",
    "profesion": "Médica Cirujana",
    "paisId": "1",
    "areaId": "1",
    "ciudadId": "2",
    "telefono": "+591 79779335",
    "email": "alejandra_m27@hotmail.com",
    "descripcion": "Profesional de la Salud como Médico General con más de 10 años de experiencia en atención primaria en salud. Experta en el manejo de pacientes con una evaluación, diagnóstico y tratamientos complejos, manejo del soporte vital avanzado y procedimientos de emergencia, con un firme compromiso por la mejora continua de la calidad asistencial y el bienestar integral del paciente, con mucha paciencia, empatía y trabajo en equipo.",
    "experiencia": [
      {
        "cargo": "Responsable Comité del DIT-CDI",
        "empresa": "CENTRO DE SALUD TARATA, POSTA HUAYCULI, IZATA, HUERTA MAYU, PUJYUNI",
        "duracion": "01/07/2024 - 13/10/2025"
      },
      {
        "cargo": "Responsable y Coordinadora Programa AIDA",
        "empresa": "CENTRO DE SALUD TARATA, POSTA HUAYCULI, IZATA, HUERTA MAYU, PUJYUNI",
        "duracion": "05/05/2025 - 13/10/2025"
      },
      {
        "cargo": "Responsable Comité de Inmunización y Esavis del Municipio de Tarata",
        "empresa": "CENTRO DE SALUD TARATA, POSTA HUAYCULI, IZATA, HUERTA MAYU, PUJYUNI",
        "duracion": "01/01/2024 - 13/10/2025"
      },
      {
        "cargo": "Apoyo en el Comité Técnico Administrativo",
        "empresa": "CENTRO DE SALUD TARATA, POSTA HUAYCULI, IZATA, HUERTA MAYU, PUJYUNI",
        "duracion": "22/05/2022 - 22/05/2023"
      },
      {
        "cargo": "Responsable del Programa Chagas",
        "empresa": "CENTRO DE SALUD TARATA, POSTA HUAYCULI, IZATA, HUERTA MAYU, PUJYUNI",
        "duracion": "23/11/2017 - 13/10/2025"
      },
      {
        "cargo": "Responsable Presidenta del Comité de Lactancia Materna",
        "empresa": "CENTRO DE SALUD TARATA, POSTA HUAYCULI, IZATA, HUERTA MAYU, PUJYUNI",
        "duracion": "12/08/2019 - 13/10/2025"
      },
      {
        "cargo": "Médico Bono Juana Azurduy",
        "empresa": "CENTRO DE SALUD TARATA, CENTRO DE SALUD AMBULATORIO HUAYCULI, POSTA IZATA, POSTA HUERTA MAYU, POSTA PUJYUNI",
        "duracion": "23/11/2017 - 13/10/2025"
      },
      {
        "cargo": "Responsable Presidenta del Comité de Lactancia Materna",
        "empresa": "HOSPITAL DE ENTRE RIOS, POSTA ANDINO, POSTA CHANCADORA, POSTA ALTO LINARES",
        "duracion": "06/04/2015 - 22/11/2017"
      },
      {
        "cargo": "Médico Comunitario BJA Municipio de Entre Ríos",
        "empresa": "HOSPITAL DE ENTRE RIOS, POSTA ANDINO, POSTA CHANCADORA, POSTA ALTO LINARES",
        "duracion": "06/04/2015 - 22/11/2017"
      },
      {
        "cargo": "Médico de Planta",
        "empresa": "CENTRO DE SALUD RIO BLANCO",
        "duracion": "12/01/2015 - 30/03/2015"
      },
      {
        "cargo": "Médico de Planta",
        "empresa": "CENTRO DE SALUD RIO BLANCO",
        "duracion": "03/01/2014 - 31/12/2014"
      },
      {
        "cargo": "Ad-Honores",
        "empresa": "CENTRO DE SALUD ENTRE RIOS",
        "duracion": "01/10/2013 - 31/12/2013"
      }
    ],
    "formacion": [
      {
        "titulo": "Diplomado en Salud Materno Infantil",
        "institucion": "UNIVERSIDAD PRIVADA DEL VALLE",
        "ano": "2025"
      },
      {
        "titulo": "Médica Cirujana",
        "institucion": "UNIVERSIDAD MAYOR DE SAN SIMON",
        "ano": "2013"
      }
    ],
    "cursos": [
      "III Congreso Científico Internacional Materno Infantil Bono Juana Azurduy",
      "Curso Nacional de Actualización del Programa Ampliado de Inmunización 2025",
      "Actualización en el Manejo Clínico Integral y Preventivo del Dengue",
      "Programa de Formación Excel básico e intermedio",
      "Ley de Administración y Control Gubernamental Ley Safco 1178",
      "Tallr Práctico y Clínico de pruebas rápidas VIH",
      "Curso introductorio del enfoque Cuidado para el Desarrollo Infantil",
      "Curso Internacional de Nutrición Infantil",
      "Capacitación de Agente Censal",
      "I Congreso Científico Internacional Materno Infantil Bono Juana Azurduy",
      "Cursos Departamental de Actualización de Manejo del Programa Integral VIH",
      "Atención de Chagas Crónico, Chagas Congénito",
      "Prevención de la Violencia",
      "Jornada Internacional de Pediatría",
      "Jornada Internacional de Actualización en Manejo de Pacientes en Emergencia",
      "Ley 1152 Sistema Único de Salud",
      "Ley 475",
      "Curso Política Safci",
      "Taller de Capacitación Protocolizada del Paciente",
      "Simposio Internacional Enfermedades Degenerativas",
      "Seminario Taller Orientación y Prevención en Diabetes",
      "Ley Safco",
      "Curso de Quechua",
      "Taller de Lactancia Materna",
      "Legislación y Proceso Parlamentario y Protocolo",
      "Simposio de Electrocardiografía Básica",
      "Atención Primaria en Salud, Nutrición e Interculturalidad",
      "Capacitación en el Sistema Soaps",
      "Taller de Capacitación en Carpetas Familiares Safci",
      "Comisión de Calificación de Productos Farmacéuticos de Insumos de Laboratorio"
    ],
    "habilidades": [
      "Responsabilidad",
      "Puntualidad",
      "Liderazgo",
      "Capacidad analítica",
      "Manejo de datos",
      "Trabajo en equipo",
      "Castellano - Nativo",
      "Quechua - Básico"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "claudio-masavi-cabrera",
    "nombre": "Claudio",
    "apellido": "Masavi Cabrera",
    "foto": "/claudiomasavicabrera_rostro.jpg",
    "portada": "/claudiomasavicabrera_portada_web.jpg",
    "profesion": "Administrador y Abogado",
    "paisId": "1",
    "areaId": "4",
    "ciudadId": "3",
    "telefono": "+591 60921615",
    "email": "claudiomasavi@hotmail.com",
    "descripcion": "Persona dinámica, con alto estándar de responsabilidad, honestidad, con gran sentido ético y moral, capaz de generar grandes ideas que contribuya a la mejora y la resolución de conflicto y mejoramiento de la empresa y o personal de la misma. Tras años de experiencia, he tomado la decisión de reorientar mi carrera profesional con el ánimo de continuar aprendiendo y, también, aportar toda mi experiencia adquirida. Considero que el cambio es un signo de capacidad de superación y, por ello, creo que siempre sería capaz de aportar valor en la empresa en la que me encuentre. Mi objetivo principal es desarrollarme profesionalmente y evolucionar en mi sector, de modo que busco oportunidades que me permitan hacerlo, al tiempo que trataré de alinearme completamente con los objetivos de la empresa.",
    "experiencia": [
      {
        "cargo": "Administrador",
        "empresa": "DEMDE INVERSIONES SRL",
        "duracion": "2017 - 2026 (Actualmente)"
      },
      {
        "cargo": "Gerente Administrativo",
        "empresa": "CIPSA JARDINERÍA Y FUMIGACIÓN",
        "duracion": "Agosto 2016 - Junio 2017"
      },
      {
        "cargo": "Asesor Legal",
        "empresa": "FÉNIX CONSULTORES",
        "duracion": "Enero 2009 - Noviembre 2015"
      }
    ],
    "formacion": [
      {
        "titulo": "Técnico Medio en Administración de Empresas",
        "institucion": "Universidad Domingo Savio",
        "ano": "2016"
      },
      {
        "titulo": "Licenciado en Derecho",
        "institucion": "Universidad Autónoma Gabriel René Moreno",
        "ano": "2012"
      },
      {
        "titulo": "Técnico Medio en Auxiliar Contable",
        "institucion": "Instituto Incor",
        "ano": "2010"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio San Sebastián",
        "ano": "2005"
      }
    ],
    "cursos": [
      "Derecho Laboral, Centro de Ciencia y Tecnología, Santiago de Chile Post Grado",
      "Resolución de Conflictos Empresariales, Centro de Ciencia y Tecnología, Santiago de Chile Post Grado",
      "Contrato y Sociedades Comerciales, Centro de Ciencia y Tecnología, Santiago de Chile Post Grado",
      "Derecho Tributario, Centro de Ciencia y Tecnología, Santiago de Chile Post Grado",
      "Bancarización Da Vinci, KABEZ CONTACTO & EXIT BRISTISH",
      "Normas Básicas del Sistema de Administración de Bienes y Servicios, Facultad de Ciencias Jurídicas y Políticas UMSS",
      "Proceso de Inmunización Covid-19, Facultad de Ciencias Jurídicas y Políticas UMSS",
      "Derecho Autonómico, Facultad de Derecho y Ciencias Políticas Universidad Mayor de San Andrés",
      "Incorporación de cláusulas compromisorias en los contratos, Centro de Conciliación y Arbitraje",
      "La Institucionalización del Funcionario Público en la Ley General del Trabajo, Facultad de Derecho y Ciencias Políticas Universidad Mayor de San Andrés",
      "Ética en el ejercicio de la Función Pública frente a la corrupción, Centro Jurídico de Investigación y Formación PROBIDAD"
    ],
    "habilidades": [
      "Honesto",
      "Responsable",
      "Emprendedor",
      "Español: Nativo",
      "Ingles: Básico"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "daniel-rodolfo-ramirez-rivero",
    "nombre": "Daniel Rodolfo",
    "apellido": "Ramirez Rivero",
    "foto": "/danielrodolforamirezrivero_rostro.jpg",
    "portada": "/danielrodolforamirezrivero_portada_web.jpg",
    "profesion": "Abogado",
    "paisId": "1",
    "areaId": "13",
    "ciudadId": "1",
    "telefono": "+591 76758152",
    "email": "rodo150385@gmail.com",
    "descripcion": "Licenciado en Derecho con experiencia en asesoría jurídica, estrategias legales y coordinación institucional. Especializado en derecho penal, civil, familiar, administrativo y constitucional, con formación en políticas públicas, función pública y normativa vigente y Especialista en Materia Internacional Público y Privado. Experiencia en análisis jurídico, gestión de casos y relacionamiento interinstitucional. Profesional orientado a resultados, cumplimiento normativo y mejora de procesos legales.",
    "experiencia": [
      {
        "cargo": "Coordinador de la Organizacion Fuerza y Legado",
        "empresa": "Organizacion Fuerza y Legado",
        "duracion": "15 de agosto de 2025 - 15 de enero de 2026"
      },
      {
        "cargo": "Asesoria Juridica",
        "empresa": "TRIFARMA Distribuidora de Medicamentos",
        "duracion": "01 de noviembre de 2022 - 15 de julio de 2023"
      },
      {
        "cargo": "Estudio Juridico y Estrategias Juridicas",
        "empresa": "MARIÑO&ASOCIADOS",
        "duracion": "04 de junio de 2022 - 04 de junio de 2025"
      }
    ],
    "formacion": [
      {
        "titulo": "Diplomado en Educacion Superior en Formacion Por Competencias",
        "institucion": "Universidad Union Bolivariana",
        "ano": "02 de mayo de 2024"
      },
      {
        "titulo": "Licenciado en Derecho",
        "institucion": "Universidad San Francisco de Asis",
        "ano": "28 de diciembre de 2020"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio Particular La Paz",
        "ano": "22 de julio de 2009"
      }
    ],
    "cursos": [
      "Curso Nacional en Microsoft Office Word - Nivel Avanzado, LEADBO CONSULTING",
      "Curso Nacional en Microsoft Office Excel - Nivel Avanzado, LEADBO CONSULTING",
      "Curso Nacional en Microsoft Office Power Point - Nivel Avanzado, LEADBO CONSULTING",
      "Ley N.070, Ley de la Educacion \"Avelino Siñani-Elizardo Perez\", LEADBO CONSULTING",
      "Ley No.548 Codigo Niña, Niño y Adolescente, LEADBO CONSULTING",
      "Ley No.1173 Lucha Integral contra la Violencia a Niñas, Niños, Adolescentes y Mujeres, LEADBO CONSULTING",
      "Ley No.348 Ley Integral para Garantizar a las mujeres una Vida Libre de Violencia, LEADBO CONSULTING",
      "Ley No.2341 Ley del Procedimiento Administrativo, LEADBO CONSULTING",
      "Prevencion de la Violencia en el marco del Decreto Supremo No.3981, LEADBO CONSULTING",
      "Responsabilidad por la Funcion Pública Decreto Supremo No.23318-A, LEADBO CONSULTING",
      "Politicas Públicas en el Estado Plurinacional de Bolivia, LEADBO CONSULTING",
      "Ley No.1178 SAFCO Ley de Administracion y Contriol Gubernamentales, LEADBO CONSULTING",
      "Ley No.045 Ley Contra el Racismo y Toda Forma de Discriminacion, LEADBO CONSULTING",
      "Ley No.439 Código Procesal Civil, LEADBO CONSULTING",
      "Ley No. 004 Ley de Lucha Contra la Corrupcion, Enriquecimiento Ilícito e Investigación de Fortunas \"Marcelo Quiroga Santa Cruz\", LEADBO CONSULTING",
      "Ley No. 12760 Código Civil, LEADBO CONSULTING",
      "Certificado \"Sociologia Comprometida de Pierre Bourdieu\", Carrera de Sociologia, IDIS UMSA",
      "Certificado Seminario \"El rol del Tribunal Constitucional de Bolivia\", Universidad San Francisco de Asis",
      "Certificado \"¿Autonomías Indígenas o Campesinas?\", Facultad de Ciencias Sociales \"UMSA\"",
      "Certificado de Participación en el \"Taller sobre líneas jurisdiccionales\", OCADEM & PE",
      "Certificado en Especializacion \"II FORO DE CRIMINOLOGIA\", USFSA",
      "Certificado \"Los nuevos liderazgos y las perspectivas epistemológicas\", UMSA",
      "Reconocimiento Condecoracion \"EMBLEMA DE ORO\", Comando General De La Policia Nacional",
      "Reconocimiento Condecoracion \"EMBLEMA DE ORO\", Comado Departamental de la Policia Nacional"
    ],
    "habilidades": [
      "Derecho Penal",
      "Derecho Civil",
      "Derecho Familiar",
      "Derecho Administrativo Ley SAFCO",
      "Politicas y funcion Publica",
      "Derecho Constitucional",
      "Derecho Internacional Publico y Privado"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "delia-huanapaco-gutierrez",
    "nombre": "Delia",
    "apellido": "Huañapaco Gutierrez",
    "foto": "/deliahuanapacogutierrez_rostro.jpg",
    "portada": "/deliahuanapacogutierrez_portada_web.jpg",
    "profesion": "Ingeniería Comercial",
    "paisId": "1",
    "areaId": "18",
    "ciudadId": "1",
    "telefono": "+591 67062148",
    "email": "deliagutierrez108@gmail.com",
    "descripcion": "Ingeniera Comercial con experiencia en gestión administrativa y atención al cliente en instituciones públicas del ámbito cultural y de salud. Con conocimientos en procesos administrativos, manejo documental, apoyo operativo y cumplimiento de normativa pública, incluyendo la Ley 1178 SAFCO. Capacitada en contabilidad básica, operaciones financieras y servicio al cliente, con formación complementaria en idioma aymara. Profesional organizada, responsable y orientada a resultados, con habilidades de comunicación, trabajo en equipo y compromiso con la eficiencia en la gestión administrativa y la atención al usuario.",
    "experiencia": [
      {
        "cargo": "Asistente Administrativo",
        "empresa": "MUSEO NACIONAL DE ETNOGRAFÍA Y FOLKLORE",
        "duracion": "13/04/2017 - 31/12/2017"
      },
      {
        "cargo": "Asistente Administrativo",
        "empresa": "MUSEO NACIONAL DE ETNOGRAFÍA Y FOLKLORE",
        "duracion": "29/09/2016 - 31/12/2016"
      },
      {
        "cargo": "Asistente Administrativo",
        "empresa": "GOBIERNO AUTÓNOMO MUNICIPAL DE LA PAZ \"HOSPITAL MUNICIPAL LA MERCED\"",
        "duracion": "01/03/2012 - 31/07/2013"
      }
    ],
    "formacion": [
      {
        "titulo": "Ingeniería Comercial",
        "institucion": "UNIVERSIDAD TECNOLÓGICA BOLIVIANA",
        "ano": "2016"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "TÉCNICO HUMANÍSTICO \"FRANZ TAMAYO\"",
        "ano": ""
      }
    ],
    "cursos": [
      "Aymara, CENTRO SOCIAL DE CAPACITACIÓN SUPERIOR",
      "Formación Práctica de Cajeros Bancos y Entidades Financieras, CENTRO SOCIAL DE CAPACITACIÓN SUPERIOR",
      "Oficiales de Crédito de Bancos y Entidades Financieras, CENTRO SOCIAL DE CAPACITACIÓN SUPERIOR",
      "Contabilidad Básica, CENTRO SOCIAL DE CAPACITACIÓN SUPERIOR",
      "Atención al Cliente, CENTRO SOCIAL DE CAPACITACIÓN SUPERIOR",
      "Ley 1178 SAFCO, CENTRO SOCIAL DE CAPACITACIÓN SUPERIOR",
      "Seminario Taller \"El nuevo debate y la oratoria, olvidando viejos paradigmas\", UNIVERSIDAD TECNOLÓGICA BOLIVIANA",
      "Simposio Internacional \"Visión estratégica de negocios\". (La clave del éxito asiático), UNIVERSIDAD TECNOLÓGICA BOLIVIANA",
      "Financiación, Cobros y Pagos Internacionales, UNIVERSIDAD TECNOLÓGICA BOLIVIANA",
      "Desarrolla tu agilidad mental, UNIVERSIDAD TECNOLÓGICA BOLIVIANA",
      "Internacionalización Empresarial, UNIVERSIDAD TECNOLÓGICA BOLIVIANA",
      "Congreso Nacional de la Sociedad de Ingenieros de Bolivia, COLEGIO DE INGENIEROS COMERCIAL (COCHABAMBA)"
    ],
    "habilidades": [],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "dennys-guillermo-paz-rivera",
    "nombre": "Dennys Guillermo",
    "apellido": "Paz Rivera",
    "foto": "/dennysguillermopazrivera_rostro.jpg",
    "portada": "/dennysguillermopazrivera_portada_web.jpg",
    "profesion": "Comunicador Social",
    "paisId": "1",
    "areaId": "12",
    "ciudadId": "3",
    "telefono": "+591 70963720",
    "email": "dennyspazsc@gmail.com",
    "descripcion": "Profesional con amplia experiencia en seguridad aeroportuaria y atención al cliente, desempeñando funciones en control de equipaje y pasajeros mediante sistemas de inspección por rayos X, garantizando el cumplimiento de normas de seguridad y procedimientos operativos. Experiencia en áreas de servicio, logística e importación y exportación, con formación en normativa pública, políticas públicas y responsabilidad por la función pública. Me caracterizo por mi responsabilidad, disciplina, capacidad de observación y orientación al servicio, comprometido con la seguridad, el orden y la atención eficiente al usuario.",
    "experiencia": [
      {
        "cargo": "Cajero y Atención al Cliente",
        "empresa": "Hipermaxi",
        "duracion": "1995 - 1996"
      },
      {
        "cargo": "Compaginador e impresión de material",
        "empresa": "Imprenta El País",
        "duracion": "1997 - 1998"
      },
      {
        "cargo": "Importador y Exportador",
        "empresa": "Trans del Oriente",
        "duracion": "2000 - 2005"
      },
      {
        "cargo": "Atención al Cliente",
        "empresa": "Restaurante Toborochi",
        "duracion": "2006 - 2007"
      },
      {
        "cargo": "Seguridad aeronáutica",
        "empresa": "Asfade integral",
        "duracion": "2008 - 2010"
      },
      {
        "cargo": "Seguridad Aeroportuaria Sección Rayos X",
        "empresa": "Sabsa",
        "duracion": "2020 - 2022"
      },
      {
        "cargo": "Seguridad Aeroportuaria Sección Rayos X",
        "empresa": "Naabol",
        "duracion": "2022 - 2025"
      }
    ],
    "formacion": [
      {
        "titulo": "Comunicación Social",
        "institucion": "Universidad Autónoma Gabriel René Moreno",
        "ano": "Egresado"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio Roberto Alvarado Daza",
        "ano": "1988"
      }
    ],
    "cursos": [],
    "habilidades": [
      "Word",
      "Excel",
      "Power Point",
      "AutoCad"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "dimelsa-melissa-quiroga-poma",
    "nombre": "Dimelsa Melissa",
    "apellido": "Quiroga Poma",
    "foto": "/dimelsamelissaquirogapoma_rostro.jpg",
    "portada": "/dimelsamelissaquirogapoma_portada_web.jpg",
    "profesion": "Trabajo Social",
    "paisId": "1",
    "areaId": "16",
    "ciudadId": "4",
    "telefono": "+591 76159662",
    "email": "quirogamelissa1993@gmail.com",
    "descripcion": "Profesional en el área de Trabajo Social con experiencia en apoyo de gabinete y acompañamiento socioeducativo en instituciones educativas y universitarias, brindando orientación y seguimiento a estudiantes en contextos sociales y comunitarios. Cuento con formación técnica en electricidad y automatización industrial, lo que fortalece mi capacidad para el trabajo operativo y resolución de problemas. Me caracterizo por mi responsabilidad, vocación de servicio, trabajo en equipo y adaptación a diferentes entornos laborales. Tengo disposición para realizar trabajo de campo y apoyo en proyectos sociales y comunitarios.",
    "experiencia": [
      {
        "cargo": "Apoyo de Gabinete Trabajadora social",
        "empresa": "UTO departamento de asuntos estudiantes",
        "duracion": "2025"
      },
      {
        "cargo": "Apoyo de Gabinete Trajadora Social",
        "empresa": "Unidad Educativa Llallagua",
        "duracion": "2024"
      },
      {
        "cargo": "Apoyo de Gabinete Trajadora Social",
        "empresa": "Unidad Educativa Eduardo Avaroa",
        "duracion": "2023"
      },
      {
        "cargo": "Técnico electricista",
        "empresa": "Empresa Metalúrgica Vinto",
        "duracion": "2020 - 2021"
      },
      {
        "cargo": "Servicios Mantenimiento Eléctrico",
        "empresa": "Comibol",
        "duracion": "2019 - 2020"
      }
    ],
    "formacion": [
      {
        "titulo": "Trabajo Social",
        "institucion": "Universidad Autónoma Tomás Frías",
        "ano": "2025"
      },
      {
        "titulo": "Técnico Superior Automatización Industrial",
        "institucion": "Instituto Tecnológico IAI",
        "ano": "2020"
      },
      {
        "titulo": "Técnico Auxiliar Electricidad Industrial",
        "institucion": "Centro de Educación Alternativa Simón Bolívar",
        "ano": "2019"
      },
      {
        "titulo": "Técnico Medio en Gestión Administrativa",
        "institucion": "Escuela Profesional de la Sagrada Familia Málaga - España",
        "ano": "2014"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Instituto de Educación Secundaria EL PALO de Málaga – España",
        "ano": "2011"
      }
    ],
    "cursos": [
      "Capacitación para AUXILIARES DE DOCENCIA, 10 al 13 de febrero del 2025",
      "Capacitación en la ELABORACIÓN DE PERFILES DE INVESTIGACIÓN PARA AUXILIARES DE INVESTIGACIÓN, 07 de febrero del 2025",
      "DIVORCIO, GUARDA, TUTELA, Junio del 2024",
      "PROCESO DE DIVORCIO EN EL AMBITO NOTARIAL Y JUDICIAL, 10, 11, 12 de mayo de 2024",
      "Proceso Oral Agrario en Bolivia, 10, 11, 12 de mayo del 2024",
      "MEDIOS DE IMPUGNACIÓN O RECURSOS EN MATERIAL CIVIL EN BOLIVIA, 10, 11, 12 de mayo del 2024",
      "DERECHOS HUMANOS Y ACESSO A LA JUSTICIA, 10, 11, 12 de mayo del 2024",
      "IBEROAMERICANO DE EDUCACIÓN SOCIEDAD Y TECNOLOGÍA, 24, 25, 26 de abril del 2024",
      "Capacitación para AUXILIARES DE DOCENCIA, 29 al 31 de enero del 2024",
      "Capacitación ''NEURO ORATORIA'', Enero del 2024",
      "TRABAJO SOCIAL E INSTRUMENTOS DE INTERVENCIÓN MICROSOCIAL, 07 de noviembre del 2023",
      "PROGRAMA EDUCATIVO CONTRA EL CONSUMO DE ALCOHOL Y CONTRA LA VIOLENCIA-DARE, Noviembre del 2003",
      "REACCIÓN CIENTÍFICA Y EL USO DE LAS NORMAS APA 7MA, Octubre del 2023",
      "DERECHOS HUMANOS Y POBLACIONES EN SITUACIONES DE VUNERABILIDAD, 6, 7, 8, 9 de octubre del 2023",
      "ASISTENCIA FAMILIAR A FAVOR DE LOS FAMILIARES CON DISCAPACIDAD, 6, 7, 8, 9 de octubre del 2023",
      "LOS ORGANISMOS ELECTORALES Y EL ESTADO DE LA DEMOCRACIA EN AMÉRICA LATINA, 6, 7, 8, 9 de octubre del 2023",
      "ANÁLISIS DEL TIPO PENAL 'DELITO CONTRA LA VIDA Y LA INTEGRIDAD CORPORAL', 6, 7, 8, 9 de octubre del 2023",
      "INTELIGENCIA ARTIFICIAL - CHAT GPT APLICADA A LA INVESTIGACIÓN Y EDUCACIÓN, 13 de septiembre del 2023",
      "METODOLOGÍA DE LA MOCHILADA AIDA, Septiembre del 2023",
      "NUEVOS DESAFÍOS DE INTERVENCIÓN EN TRABAJO SOCIAL, Junio del 2023",
      "Capacitación para AUXILIARES DE DOCENCIA, 29 al 31 de marzo del 2023",
      "SOCIALIZACIÓN DE LA LEY SAFCO 1178 ADMINISTRACIÓN Y CONTROL GUBERNAMENTAL, 16, 17 de marzo del 2023",
      "CIENTÍFICO Y TÉCNICA DE MUESTREO EN INTERVENCIÓN CUANTITATIVA, 8 de noviembre del 2022",
      "Taller REDACCIÓN CIENTÍFICA Y MANEJO DE NORMAS APA, 29, 30 de junio del 2022"
    ],
    "habilidades": [
      "Castellano - Nativo",
      "Quechua - Intermedio",
      "Inglés - Básico",
      "Profesional categoría A. para 10 pasajeros",
      "Profesional categoría M. Motocicleta, Triciclos, Cuadriciclos"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "eddy-favio-quispe-condori",
    "nombre": "Eddy Favio",
    "apellido": "Quispe Condori",
    "foto": "/eddyfavioquispecondori_rostro.jpg",
    "portada": "/eddyfavioquispecondori_portada_web.jpg",
    "profesion": "Lic. Comercio Internacional",
    "paisId": "1",
    "areaId": "9",
    "ciudadId": "1",
    "telefono": "+591 77574032",
    "email": "faviocondori2025@outlook.com",
    "descripcion": "Egresado de la carrera de Comercio Internacional con experiencia en gestiones administrativas y operativas en agencia despachante de aduanas. Con conocimientos en procesos de archivo, trámites aduaneros y logística vinculada al comercio exterior. Participación en seminarios y talleres sobre comercio internacional y relaciones comerciales. Manejo intermedio de herramientas Microsoft Office. Me caracterizo por mi responsabilidad, orientación al detalle, capacidad de comunicación y resolución de problemas, con interés en desarrollarme profesionalmente en el área de comercio exterior, logística y operaciones aduaneras.",
    "experiencia": [
      {
        "cargo": "Gestoría",
        "empresa": "LOGADEX SRL Agencia Despachante de Aduanas",
        "duracion": "2025"
      },
      {
        "cargo": "Archivo",
        "empresa": "LOGADEX SRL Agencia Despachante de Aduanas",
        "duracion": "2024"
      },
      {
        "cargo": "Pasantía",
        "empresa": "LOGADEX SRL Agencia Despachante de Aduanas",
        "duracion": "2024"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura en Comercio Internacional (Egresado)",
        "institucion": "Universidad Tecnológica Boliviana",
        "ano": "2020"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio Mixto Topater",
        "ano": "2012"
      }
    ],
    "cursos": [
      "Seminario - El Comercio Internacional de Bolivia - Desarollo y Perspectivas, 25 / 11 / 2025",
      "Simposio - Los Nuevos Desafíos del Comercio Internacional, 12 / 04 / 2016",
      "Simposio - Relaciones Comerciales entre Bolivia y China, 07 / 04 / 2015",
      "Simposio - Actualidad y Perspectiva del Comercio Exterior, 01 / 07 / 2014",
      "Taller - Operativa y Logística Portuaria en Iquique, Chile, 21 - 24 / 11 / 2013",
      "Primera semana de las carreras de Ingeniería Comercial y Comercio Internacional, 18 / 11 / 2013"
    ],
    "habilidades": [
      "MS Word Internedio",
      "MS Excel Internedio",
      "MS PowerPoint Internedio",
      "Comunicación: Habilidad para expresar ideas de manera clara y persuasiva",
      "Resolución de problemas: Habilidad para identificar y resolver problemas de manera eficiente, utilizando un enfoque analítico y creativo",
      "Orientación al detalle: Atención meticulosa a los detalles en todas las tareas y proyectos"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "edson-norbin-hualampa-arequipa",
    "nombre": "Edson Norbin",
    "apellido": "Hualampa Arequipa",
    "foto": "/edsonnorbinhualampaarequipa_rostro.jpg",
    "portada": "/edsonnorbinhualampaarequipa_pagina_web.jpg",
    "profesion": "Electromecánico Industrial",
    "paisId": "1",
    "areaId": "17",
    "ciudadId": "3",
    "telefono": "+591 75063035",
    "email": "hualampa2509@gmail.com",
    "descripcion": "Profesional Técnico Superior en Electromecánica Industrial con amplia experiencia en operaciones industriales, gestión de almacenes y mantenimiento eléctrico domiciliario e industrial. Cuento con amplia trayectoria en el sector manufacturero y textil, desempeñándome durante varios años como operario de planta y posteriormente como encargado de almacén de repuestos, fortaleciendo competencias en control logístico, administración de inventarios y coordinación operativa. Poseo conocimientos en instalaciones eléctricas, electromecánica industrial y automotriz, así como capacitación en logística y gestión de almacenes. Destaco por su responsabilidad, compromiso, capacidad de organización y orientación al trabajo eficiente, adaptándome a entornos industriales y técnicos de alta exigencia.",
    "experiencia": [
      {
        "cargo": "Electricista domiciliario e industrial",
        "empresa": "INDEPENDIENTE PARTICULAR",
        "duracion": "2026 Actualmente"
      },
      {
        "cargo": "Encargado de Almacén de Repuestos",
        "empresa": "TEXTILES INDUSTRIALES SANTA CRUZ LTDA.",
        "duracion": "Junio 2018 – Mayo 2026"
      },
      {
        "cargo": "Operario de Planta",
        "empresa": "TEXTILES INDUSTRIALES SANTA CRUZ LTDA.",
        "duracion": "Junio 2007 – Junio 2018"
      }
    ],
    "formacion": [
      {
        "titulo": "Electromecánica Industrial (Técnico Superior)",
        "institucion": "Fundación Infocal Santa Cruz",
        "ano": "Gestión 2017"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Unidad Educativa Elvira Parada “C”",
        "ano": "Gestión 2008"
      }
    ],
    "cursos": [
      "Iluminación inteligente y eficiente en edificaciones, Colegio de Ingenieros Electricistas y Electrónicos de Santa Cruz, Junio 2015",
      "Logística y gestión de almacenes, INEGAS (UAGRM), 21 de enero – 04 de febrero 2019",
      "Electromecánica industrial automotriz, Centro de Capacitación Técnica Privada AVAROA, 2026",
      "Logística y gestión de almacenes, INEGAS (UAGRM), 12 de diciembre 2018",
      "Simposio de soluciones eléctricas de baja tensión, INFOCAL SANTA CRUZ, 10 de mayo 2016"
    ],
    "habilidades": [],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "fabricio-eduardo-padilla-munguia",
    "nombre": "Fabricio Eduardo",
    "apellido": "Padilla Munguia",
    "foto": "/fabricioeduardopadillamunguia_rostro.jpg",
    "portada": "/fabricioeduardopadillamunguia_portada_web.jpg",
    "profesion": "Egresado de Contabilidad",
    "paisId": "1",
    "areaId": "11",
    "ciudadId": "1",
    "telefono": "+591 79505790",
    "email": "fabriciopadilla79@gmail.com",
    "descripcion": "Profesional con experiencia en gestión administrativa, ventas y logística en el sector farmacéutico y comercial. Con conocimientos en atención al cliente, seguimiento de cuentas por cobrar, coordinación de entregas, elaboración de cotizaciones y trámites institucionales ante AGEMED, Ministerio de Salud, Ministerio de Trabajo, AFP y CNS. Experiencia en control de almacenes y manejo del Sistema Administrativo Integrado (SAI). Egresado de Contabilidad, orientado a la organización, cumplimiento de procesos y fortalecimiento de relaciones comerciales con instituciones públicas y privadas.",
    "experiencia": [
      {
        "cargo": "Apoyo en cuentas especiales",
        "empresa": "LABORATORIOS IFA S.A.",
        "duracion": "2021 - 2024"
      },
      {
        "cargo": "Vendedor de medicamentos",
        "empresa": "LEXFARMA",
        "duracion": "2020"
      },
      {
        "cargo": "Área de almacenes",
        "empresa": "JEB TECNOLOGÍA SRL",
        "duracion": "2018 - 2020"
      },
      {
        "cargo": "Auxiliar de oficina",
        "empresa": "IMPORTADORA DISMEDIN",
        "duracion": "2014 - 2018"
      },
      {
        "cargo": "Encargado de almacenes",
        "empresa": "BLONDEL S.A.",
        "duracion": "2012 - 2013"
      }
    ],
    "formacion": [],
    "cursos": [],
    "habilidades": [
      "Trámites en Notaria de Gobierno",
      "Atención al cliente",
      "Elaboración de cotizaciones",
      "Coordinación de entregas",
      "Seguimiento de Cuentas por Cobrar",
      "Trámites en AGEMED",
      "Manejo del Sistema Administrativo Integrado (SAI)"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "fausto-leandro-villanueva",
    "nombre": "Fausto",
    "apellido": "Leandro Villanueva",
    "foto": "/faustoleandrovillanueva_rostro.jpg",
    "portada": "/faustoleandrovillanueva_portada_web.jpg",
    "profesion": "Administración de Empresas",
    "paisId": "1",
    "areaId": "4",
    "ciudadId": "5",
    "telefono": "+591 68388530",
    "email": "faustoleandro155@gmail.com",
    "descripcion": "Estudio la carrera Administración de Empresas en la Universidad Autónoma “Tomás Frías” y me encuentro en la etapa final de mi educación académica. He participado activamente en diversos congresos y cursos de actualización. Cuento con conocimiento en Gestión de Recursos Humanos, Inteligencia Artificial, Evaluación y Riesgos Financieros, Contabilidad Financiera, Liderazgo, Neuromarketing, Emprendimiento y Demografía Empresarial. También asistí al Foro de Crisis de la Administración Pública y Pacto Fiscal. Estas experiencias me han dotado de una visión integral y actualizada del mundo empresarial, y me han ayudado en la preparación para enfrentar los desafíos del mercado laboral con una sólida base teórica y práctica.",
    "experiencia": [],
    "formacion": [
      {
        "titulo": "Licenciatura en Administración de Empresas",
        "institucion": "Universidad Autónoma Tomás Frias",
        "ano": "Cursando actualmente 2026"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio Nacional Fray Segio Castelly de Totora",
        "ano": ""
      }
    ],
    "cursos": [
      "Gestión de Recursos Humanos por Competencia",
      "Evaluación de Riesgos Financieros",
      "Contabilidad Petrolera",
      "Inteligencia Artificial y sus aplicaciones",
      "Metodología de la Investigación",
      "Emprendimiento (Creación de Empresas)",
      "Crisis en la Administración Pública del Estado Plurinacional de Bolivia y Pacto Fiscal",
      "Transformando dificultades en oportunidades",
      "Las mil y una idea que hicieron historia en el management y los negocios",
      "Educación Financiera de Banco FIE “Despega”"
    ],
    "habilidades": [
      "Responsabilidad",
      "Aprendizaje continuo",
      "Motivación",
      "Compromiso",
      "Español nativo"
    ],
    "cv_pdf": "#",
    "estado": "inactivo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "franklin-portugal-camacho",
    "nombre": "Franklin",
    "apellido": "Portugal Camacho",
    "foto": "/franklinportugalcamacho_rostro.jpg",
    "portada": "/franklinportugalcamacho_portada_web.jpg",
    "profesion": "Administración de Empresas",
    "paisId": "1",
    "areaId": "4",
    "ciudadId": "5",
    "telefono": "+591 71534004",
    "email": "portugal.franklin@gmail.com",
    "descripcion": "Profesional con sólida trayectoria en dirección administrativa y financiera en instituciones públicas, organismos internacionales y entidades estatales. Experto en gestión estratégica, planificación institucional, administración financiera, control gubernamental y ejecución de programas y proyectos. Amplia experiencia en liderazgo de equipos, formulación y seguimiento presupuestario, cumplimiento de normativa pública (Ley 1178 SAFCO) y coordinación interinstitucional. Con formación de posgrado y maestría en administración de empresas, orientado a resultados, transparencia institucional y fortalecimiento de la gestión pública.",
    "experiencia": [
      {
        "cargo": "Director Administrativo Financiero",
        "empresa": "AUTORIDAD JURISDICCIONAL ADMINISTRATIVA MINERA - AJAM",
        "duracion": "Mar 2023 a Jul 2025"
      },
      {
        "cargo": "Director Nacional Administrativo, Financiero y Comercial",
        "empresa": "ADMINISTRACIÓN DE AEROPUERTOS Y SERVICIOS AUXILIARES A LA NAVEGACIÓN AEREA – A.A.S.A.N.A.",
        "duracion": "Sep 2017 a Mar 2019"
      },
      {
        "cargo": "Director General Ejecutivo - MAE",
        "empresa": "ADMINISTRACIÓN DE AEROPUERTOS Y SERVICIOS AUXILIARES A LA NAVEGACIÓN AÉREA – A.A.S.A.N.A.",
        "duracion": "Mar 2019 a Nov 2019"
      },
      {
        "cargo": "Director General de Asuntos Administrativos",
        "empresa": "PROCURADURIA GENERAL DEL ESTADO - PGE",
        "duracion": "Dic 2014 a Ene 2016"
      }
    ],
    "formacion": [
      {
        "titulo": "Magister en Administración de Empresas",
        "institucion": "Universidad de Chile. Santiago de Chile",
        "ano": "Jun 1992"
      },
      {
        "titulo": "Licenciado en Administración de Empresas",
        "institucion": "Universidad Mayor de San Andrés - UMSA",
        "ano": "Sep 1988"
      },
      {
        "titulo": "Contador General",
        "institucion": "Instituto de Educación Bancaria y el Comité Ejecutivo - Universidad Boliviana",
        "ano": "Nov 1982"
      }
    ],
    "cursos": [
      "Diplomado Internacional a la Excelencia en “Gestión y Administración Pública”",
      "Certificado Internacional en Gestión y Administración Pública",
      "CONTABILIDAD BÁSICA BANCARIA, realizado en el B.C.B.",
      "PLANIFICACIÓN ECONÓMICA, realizado en el I.S.A.P.",
      "PREPARACIÓN Y EVALUACIÓN DE PROYECTOS, realizado en el I.S.A.P."
    ],
    "habilidades": [
      "Gestión estratégica",
      "Planificación institucional",
      "Administración financiera",
      "Control gubernamental",
      "Liderazgo de equipos"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "gadiel-wilbor-capriles-quiroz",
    "nombre": "Gadiel Wilbor",
    "apellido": "Capriles Quiroz",
    "foto": "/gadielwilborcaprilesquiroz_rostro.jpg",
    "portada": "/gadielwilborcaprilesquiroz_portada_web.jpg",
    "profesion": "Ingeniero Civil",
    "paisId": "1",
    "areaId": "5",
    "ciudadId": "3",
    "telefono": "+591 67465130",
    "email": "gadiel.capriles@gmail.com",
    "descripcion": "Ingeniero Civil con amplia experiencia en control de calidad, ingeniería geotécnica y supervisión de obras civiles en proyectos de infraestructura, energía, hidrocarburos y transporte. Especialista en estudios geotécnicos, mecánica de suelos, pavimentos y control de laboratorio. Experiencia en gestión técnica de proyectos, aseguramiento de calidad, monitoreo SMS y elaboración de informes técnicos. Formación de posgrado en gerencia de la construcción y pavimentos. Orientado a cumplimiento normativo, optimización de procesos y ejecución eficiente de proyectos de gran envergadura.",
    "experiencia": [
      {
        "cargo": "Especialista en Control de Calidad",
        "empresa": "CHINA STATE CONSTRUCTION ENGRG. CORP. LTD",
        "duracion": "Ene 2020 - Mar 2026"
      },
      {
        "cargo": "Especialista en Control de Calidad",
        "empresa": "CHINA HARZONE INDUSTRY CORP. LTD",
        "duracion": "Oct 2015 - Dic 2019"
      },
      {
        "cargo": "Encargado de Sitio / Ingeniero Geotecnista / Monitor SMS",
        "empresa": "INGENIERÍA DE SUELOS Ingenieros Consultores en Fundaciones y Pilotaje",
        "duracion": "Dic 2006 - Sep 2015"
      },
      {
        "cargo": "Ingeniero Júnior en Laboratorio de Suelos y Hormigones",
        "empresa": "CONSA SRL Consultores Asociados",
        "duracion": "Sep - Nov 2006"
      }
    ],
    "formacion": [
      {
        "titulo": "DIPLOMADO EN GERENCIA DE LA CONSTRUCCIÓN",
        "institucion": "Universidad del Valle",
        "ano": "2024"
      },
      {
        "titulo": "DIPLOMADO EN INGENIERÍA DE PAVIMENTOS",
        "institucion": "Universidad Autónoma del Beni “José Ballivián”",
        "ano": "2017"
      },
      {
        "titulo": "DIPLOMADO EN PROYECTOS DE INGENIERÍA GEOTÉCNICA",
        "institucion": "Universidad San Sebastián de Chile",
        "ano": "2016"
      },
      {
        "titulo": "DIPLOMADO EN GEOTECNIA APLICADA",
        "institucion": "Universidad Autónoma del Beni “José Ballivián”",
        "ano": "2016"
      },
      {
        "titulo": "LICENCIADO EN INGENIERÍA CIVIL",
        "institucion": "Universidad Mayor de San Simón",
        "ano": "2007"
      }
    ],
    "cursos": [
      "Curso Construcción y Rehabilitación de Pavimentos Rígidos",
      "Elaboración e Interpretación de Informes Técnicos de Ensayos SPT",
      "Tercer Taller Nacional de Laboratorio de Mecánica de Suelos",
      "Seminario “Patología de Pavimentos Flexibles, Causas y soluciones”",
      "Curso Patologías en Estructuras de Hormigón Armado"
    ],
    "habilidades": [
      "Control de calidad",
      "Ingeniería geotécnica",
      "Supervisión de obras civiles",
      "Mecánica de suelos",
      "Gerencia de la construcción"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "gary-gutierrez-saucedo",
    "nombre": "Gary",
    "apellido": "Gutierrez Saucedo",
    "foto": "/garygutierrezsaucedo_rostro.jpg",
    "portada": "/garygutierrezsaucedo_portada_web.jpg",
    "profesion": "Administrador de Empresas",
    "paisId": "1",
    "areaId": "4",
    "ciudadId": "3",
    "telefono": "+591 63316329",
    "email": "garigutier@gmail.com",
    "descripcion": "Egresado de la carrera de administración de empresas con 17 años de experiencia de trabajo en el área de Logistica y adquisiciones (2008-2025) en la actualidad gestionando requerimiento de diferentes área internas y externas, con amplia experiencia en interacción con personas, negociación y resolución de conflictos, trabajo orientado al cumplimiento de objetivos mediante indicadores.",
    "experiencia": [
      {
        "cargo": "Asistente de adquisiciones",
        "empresa": "Dpto. Adquisiciones y Logistica Ingenio Azucarero Guabira SA.",
        "duracion": "Desde 2008-2025"
      },
      {
        "cargo": "Auxiliar- Asistente",
        "empresa": "Dpto. Adquisiciones y Logística a nivel Bolivia Ingenio Azucarero Guabirá S.A.",
        "duracion": "Desde 2010-2023"
      },
      {
        "cargo": "Auxiliar-Ayudante",
        "empresa": "Dpro. de Almacén de materiales y Repuestos Ingenio Azucarero Guabirá S.A.",
        "duracion": "Desde 2007-2010"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura en “Administracion de empresas”",
        "institucion": "Universidad Nur",
        "ano": "2021"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio Marceliano Montero",
        "ano": "2003"
      }
    ],
    "cursos": [
      "Taller de excel nivel, básico, intermedio, avanzado",
      "Taller Seminario Emprende Ya",
      "Curso Gestión de Talento Humano",
      "Curso Power BI Analisis de Datos e Inteligencia Empresarial",
      "Seminario Taller, oficial de crédito financiero",
      "Curso funciones avanzadas Excel",
      "Curso manejo de tablas dinámicas avanzada en Excel",
      "Curso de introducción a la economía",
      "Curso evaluador de indicadores clave (KPI)",
      "Curso Evaluador de procesos",
      "Curso de Excel Express",
      "Curso de capacitación, emprendedor empresarial",
      "Cursos en Excel avanzado en la corporación educativa INGENIUM",
      "Taller de Bancarización en transacción de compra y ventas superior a los 50,000 bolivianos"
    ],
    "habilidades": [
      "Honestidad",
      "Comunicación Efectiva",
      "Trabajo en Equipo",
      "Resolución de Problemas",
      "Gestión del Tiempo",
      "Liderazgo",
      "Adaptabilidad al Cambio",
      "Manejo de Sistema Informático, Oracle, SAP",
      "Manejo de Plataforma Tributaria SIAT",
      "Manejo de Power BI"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "genaro-saavedra-suarez",
    "nombre": "Genaro",
    "apellido": "Saavedra Suárez",
    "foto": "/genarosaavedrasuarez_rostro.jpg",
    "portada": "/genarosaavedrasuarez_portada_web.jpg",
    "profesion": "Auxiliar Contable",
    "paisId": "1",
    "areaId": "11",
    "ciudadId": "3",
    "telefono": "+591 72609416",
    "email": "saavedrasuarezgenaro@gmail.com",
    "descripcion": "Soy Auxiliar Contable con amplia experiencia en el área administrativa y financiera, desempeñando funciones en registro contable, manejo de documentación, control de cuentas, cobranzas y apoyo en procesos contables en empresas comerciales y entidades financieras. Con trayectoria laboral sostenida en el sector contable, destacando por mi responsabilidad, organización y manejo confidencial de la información. Capaz de trabajar con precisión en el control de registros, conciliaciones y gestión documental, contribuyendo a la correcta administración de recursos y cumplimiento de procedimientos contables. Profesional comprometido, proactivo y orientado a resultados, con habilidades para el trabajo en equipo y la eficiencia operativa en el área administrativa y contable.",
    "experiencia": [
      {
        "cargo": "Auxiliar Contable",
        "empresa": "Motores y Repuestos DIESEL SANTA CRUZ",
        "duracion": "Abr 2016 - Ene 2025"
      },
      {
        "cargo": "Auxiliar de Contabilidad",
        "empresa": "Cooperativa \"El Buen Samaritano\"",
        "duracion": "Jul 2003 - Dic 2015"
      },
      {
        "cargo": "Departamento de Cobranza",
        "empresa": "Créditos e Inversiones Personales ACCESO S.A. FFP",
        "duracion": "May 1999 - May 2000"
      },
      {
        "cargo": "Auxiliar Mensajero",
        "empresa": "Importaciones - Representaciones SAFERMAR",
        "duracion": "Ene 1998 - Dic 1998"
      },
      {
        "cargo": "Vendedor",
        "empresa": "Ferretería \"Saavedra\"",
        "duracion": "Ene 1996 - May 1997"
      },
      {
        "cargo": "Mensajero y Archivo",
        "empresa": "Empresa Constructora \"Crismaco\"",
        "duracion": "Mar 1995 - Jul 1995"
      }
    ],
    "formacion": [
      {
        "titulo": "Auxiliar Contable",
        "institucion": "Instituto Cumbre",
        "ano": "1994"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio \"Noel Kempf Mercado\", Montero",
        "ano": "1994"
      }
    ],
    "cursos": [],
    "habilidades": [
      "Registro contable",
      "Manejo de documentación",
      "Control de cuentas",
      "Cobranzas",
      "Conciliaciones",
      "Gestión documental",
      "Trabajo en equipo"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  },
  {
    "id": "giovanna-gutierrez-heredia",
    "nombre": "Giovanna",
    "apellido": "Gutierrez Heredia",
    "foto": "/giovannagutierrezheredia_rostro.jpg",
    "portada": "/giovannagutierrezheredia_portada_web.jpg",
    "profesion": "Ingeniera Comercial",
    "paisId": "1",
    "areaId": "18",
    "ciudadId": "2",
    "telefono": "+591 65348684",
    "email": "yovi.ita1113@gmail.com",
    "descripcion": "Soy Ing. Comercial de profesión con experiencia laboral en banca y finanzas área operativa y de créditos con conocimiento en la venta de productos y servicios financieros con actitud de servicio. Cuento con experiencia en el negocio del sector de la construcción y en la Docencia en Institutos.",
    "experiencia": [
      {
        "cargo": "Administrador y Ventas",
        "empresa": "Ferretería (San Borja)",
        "duracion": "Mayo 2021 - Diciembre 2025"
      },
      {
        "cargo": "Docente",
        "empresa": "Instituto Tecnico (San Borja)",
        "duracion": "Febrero 2019 - Noviembre 2025"
      },
      {
        "cargo": "Asesor Comercial",
        "empresa": "Banco Prodem S.A. (San Borja)",
        "duracion": "Marzo 2017 - Noviembre 2020"
      },
      {
        "cargo": "Cajero",
        "empresa": "Banco Prodem S.A. (Cochabamba)",
        "duracion": "Mayo 2014 - Abril 2016"
      }
    ],
    "formacion": [
      {
        "titulo": "Diseño de Interiores y Mobiliario (Diplomado)",
        "institucion": "Universidad Autónoma Gabriel René Moreno (UAGRM)",
        "ano": "Mayo 2023 - Noviembre 2023"
      },
      {
        "titulo": "Educación Superior por Competencias (Diplomado)",
        "institucion": "Universidad Privada de Ciencias Administrativas y Tecnológicas (UCATEC)",
        "ano": "Octubre 2021 - Octubre 2022"
      },
      {
        "titulo": "Ingenieria Comerical (Licenciatura)",
        "institucion": "Escuela Militar de Ingeniería (EMI)",
        "ano": "Febrero 2004 - Noviembre 2008"
      },
      {
        "titulo": "Dirección en Marketing y Ventas (Diplomado)",
        "institucion": "Universidad Privada de Ciencias Administrativas y Tecnológicas (UCATEC)",
        "ano": "Mayo 2004 - Octubre 2004"
      },
      {
        "titulo": "Bachiller en Humanidades",
        "institucion": "Colegio Vida Abundante",
        "ano": "Febrero 1992 - Noviembre 2003"
      }
    ],
    "cursos": [],
    "habilidades": [
      "Paquete Microsoft Office (Medio)",
      "Canva (Básico)",
      "Manejo de Efectivo y Billetaje (Avanzado)",
      "Atención al Cliente y Cajera (Avanzado)",
      "Enseñanza a Jóvenes (Medio)",
      "Armado de Crédito (Avanzado)"
    ],
    "cv_pdf": "#",
    "estado": "activo",
    "fecha_registro": new Date().toISOString()
  }
];
