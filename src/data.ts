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
  { id: "2", nombre: "Ingeniería" },
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
    "cv_pdf": "#",
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
    "areaId": "2",
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
    "nombre": "Jhossel",
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
    "cv_pdf": "#",
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
    "cv_pdf": "#",
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
    "estado": "activo",
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
    "id": "andres-caceres-20",
    "nombre": "Andres",
    "apellido": "Caceres",
    "foto": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=600",
    "profesion": "Arquitecto",
    "paisId": "1",
    "areaId": "5",
    "ciudadId": "3",
    "telefono": "+591 74465590",
    "email": "andres.caceres20@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Arquitecto. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Arquitecto",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Arquitecto",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "brenda-caceres-21",
    "nombre": "Brenda",
    "apellido": "Caceres",
    "foto": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    "profesion": "Profesora de Física",
    "paisId": "1",
    "areaId": "6",
    "ciudadId": "4",
    "telefono": "+591 78381452",
    "email": "brenda.caceres21@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Profesor de Física. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Profesor de Física",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Profesor de Física",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "carlos-caceres-22",
    "nombre": "Carlos",
    "apellido": "Caceres",
    "foto": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
    "profesion": "Administrador de Base de Datos",
    "paisId": "1",
    "areaId": "7",
    "ciudadId": "5",
    "telefono": "+591 73542841",
    "email": "carlos.caceres22@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Administrador de BD. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Administrador de BD",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Administrador de BD",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "daniela-caceres-23",
    "nombre": "Daniela",
    "apellido": "Caceres",
    "foto": "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=600",
    "profesion": "Mecánica Industrial",
    "paisId": "1",
    "areaId": "8",
    "ciudadId": "6",
    "telefono": "+591 73658590",
    "email": "daniela.caceres23@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Mecánico Industrial. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Mecánico Industrial",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Mecánico Industrial",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "ernesto-caceres-24",
    "nombre": "Ernesto",
    "apellido": "Caceres",
    "foto": "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=600",
    "profesion": "Psicólogo",
    "paisId": "1",
    "areaId": "14",
    "ciudadId": "1",
    "telefono": "+591 73701106",
    "email": "ernesto.caceres24@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Psicólogo. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Psicólogo",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Psicólogo",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "fabiana-caceres-25",
    "nombre": "Fabiana",
    "apellido": "Caceres",
    "foto": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    "profesion": "Ingeniera Industrial",
    "paisId": "1",
    "areaId": "2",
    "ciudadId": "2",
    "telefono": "+591 77111340",
    "email": "fabiana.caceres25@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Ingeniero Industrial. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Ingeniero Industrial",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Ingeniero Industrial",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "gabriel-caceres-26",
    "nombre": "Gabriel",
    "apellido": "Caceres",
    "foto": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    "profesion": "Ingeniero Eléctrico",
    "paisId": "1",
    "areaId": "3",
    "ciudadId": "3",
    "telefono": "+591 79153912",
    "email": "gabriel.caceres26@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Ingeniero Eléctrico. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Ingeniero Eléctrico",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Ingeniero Eléctrico",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "helena-caceres-27",
    "nombre": "Helena",
    "apellido": "Caceres",
    "foto": "https://images.unsplash.com/photo-1505503693641-1926193e8d57?auto=format&fit=crop&q=80&w=600",
    "profesion": "Especialista en Marketing",
    "paisId": "1",
    "areaId": "4",
    "ciudadId": "4",
    "telefono": "+591 71800006",
    "email": "helena.caceres27@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Especialista en Marketing. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Especialista en Marketing",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Especialista en Marketing",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "ignacio-caceres-28",
    "nombre": "Ignacio",
    "apellido": "Caceres",
    "foto": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=600",
    "profesion": "Maestro de Obra",
    "paisId": "1",
    "areaId": "5",
    "ciudadId": "5",
    "telefono": "+591 74987030",
    "email": "ignacio.caceres28@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Maestro de Obra. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Maestro de Obra",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Maestro de Obra",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "julia-caceres-29",
    "nombre": "Julia",
    "apellido": "Caceres",
    "foto": "https://images.unsplash.com/photo-1543132220-4bf52924743a?auto=format&fit=crop&q=80&w=600",
    "profesion": "Tutora Académica",
    "paisId": "1",
    "areaId": "6",
    "ciudadId": "6",
    "telefono": "+591 72283676",
    "email": "julia.caceres29@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Tutor Académico. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Tutor Académico",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Tutor Académico",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "andres-delgado-30",
    "nombre": "Andres",
    "apellido": "Delgado",
    "foto": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600",
    "profesion": "Desarrollador Frontend",
    "paisId": "1",
    "areaId": "7",
    "ciudadId": "1",
    "telefono": "+591 74670120",
    "email": "andres.delgado30@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Desarrollador Frontend. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Desarrollador Frontend",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Desarrollador Frontend",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "brenda-delgado-31",
    "nombre": "Brenda",
    "apellido": "Delgado",
    "foto": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    "profesion": "Técnica en Maquinaria Pesada",
    "paisId": "1",
    "areaId": "8",
    "ciudadId": "2",
    "telefono": "+591 75126319",
    "email": "brenda.delgado31@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Técnico en Maquinaria Pesada. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Técnico en Maquinaria Pesada",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Técnico en Maquinaria Pesada",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "carlos-delgado-32",
    "nombre": "Carlos",
    "apellido": "Delgado",
    "foto": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    "profesion": "Fisioterapeuta",
    "paisId": "1",
    "areaId": "1",
    "ciudadId": "3",
    "telefono": "+591 77396080",
    "email": "carlos.delgado32@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Fisioterapeuta. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Fisioterapeuta",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Fisioterapeuta",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "daniela-delgado-33",
    "nombre": "Daniela",
    "apellido": "Delgado",
    "foto": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
    "profesion": "Ingeniera Mecatrónica",
    "paisId": "1",
    "areaId": "2",
    "ciudadId": "4",
    "telefono": "+591 73851160",
    "email": "daniela.delgado33@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Ingeniero Mecatrónico. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Ingeniero Mecatrónico",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Ingeniero Mecatrónico",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "ernesto-delgado-34",
    "nombre": "Ernesto",
    "apellido": "Delgado",
    "foto": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    "profesion": "Auditor de Energía",
    "paisId": "1",
    "areaId": "3",
    "ciudadId": "5",
    "telefono": "+591 78149592",
    "email": "ernesto.delgado34@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Auditor de Energía. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Auditor de Energía",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Auditor de Energía",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "fabiana-delgado-35",
    "nombre": "Fabiana",
    "apellido": "Delgado",
    "foto": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    "profesion": "Administradora de Empresas",
    "paisId": "1",
    "areaId": "4",
    "ciudadId": "6",
    "telefono": "+591 78305534",
    "email": "fabiana.delgado35@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Administrador de Empresas. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Administrador de Empresas",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Administrador de Empresas",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "gabriel-delgado-36",
    "nombre": "Gabriel",
    "apellido": "Delgado",
    "foto": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=600",
    "profesion": "Ingeniero Civil",
    "paisId": "1",
    "areaId": "5",
    "ciudadId": "1",
    "telefono": "+591 76139007",
    "email": "gabriel.delgado36@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Ingeniero Civil. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Ingeniero Civil",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Ingeniero Civil",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "helena-delgado-37",
    "nombre": "Helena",
    "apellido": "Delgado",
    "foto": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    "profesion": "Docente Universitaria",
    "paisId": "1",
    "areaId": "6",
    "ciudadId": "2",
    "telefono": "+591 78311241",
    "email": "helena.delgado37@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Docente Universitario. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Docente Universitario",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Docente Universitario",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "ignacio-delgado-38",
    "nombre": "Ignacio",
    "apellido": "Delgado",
    "foto": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
    "profesion": "Ingeniero DevOps",
    "paisId": "1",
    "areaId": "7",
    "ciudadId": "3",
    "telefono": "+591 74554737",
    "email": "ignacio.delgado38@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Ingeniero DevOps. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Ingeniero DevOps",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Ingeniero DevOps",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
    "id": "julia-delgado-39",
    "nombre": "Julia",
    "apellido": "Delgado",
    "foto": "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=600",
    "profesion": "Chapista",
    "paisId": "1",
    "areaId": "8",
    "ciudadId": "4",
    "telefono": "+591 71049070",
    "email": "julia.delgado39@email.com",
    "descripcion": "Profesional comprometido con la excelencia. Amplia experiencia en Chapista. Dispuesto a aportar soluciones efectivas y trabajar en equipo.",
    "experiencia": [
      {
        "cargo": "Especialista en Chapista",
        "empresa": "Empresa Líder S.A.",
        "duracion": "2019 - Presente"
      },
      {
        "cargo": "Asistente / Junior",
        "empresa": "Consultora Nacional",
        "duracion": "2016 - 2019"
      }
    ],
    "formacion": [
      {
        "titulo": "Licenciatura / Técnico en Chapista",
        "institucion": "Universidad / Instituto Reconocido",
        "ano": "2016"
      }
    ],
    "cursos": [
      "Actualización profesional",
      "Herramientas digitales"
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
  }
];

