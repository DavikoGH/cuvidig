export interface Pais {
  id: string;
  nombre: string;
}

export interface Categoria {
  id: string;
  nombre: string;
}

export interface Ciudad {
  id: string;
  nombre: string;
}

export interface Rol {
  id: string;
  nombre: string;
}

export interface Experiencia {
  cargo: string;
  empresa: string;
  duracion: string;
}

export interface Formacion {
  titulo: string;
  institucion: string;
  ano: string;
}

export interface Persona {
  id: string;
  nombre: string;
  apellido: string;
  foto: string;
  portada?: string;
  profesion: string;
  paisId: string;
  areaId: string;
  ciudadId: string;
  telefono: string;
  email: string;
  descripcion: string;
  experiencia: Experiencia[];
  formacion: Formacion[];
  cursos: string[];
  habilidades: string[];
  cv_pdf: string;
  estado: "activo" | "inactivo";
  fecha_registro: string;
}
