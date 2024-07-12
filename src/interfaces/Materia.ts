export interface Materia {
  _id: string;  
  tema: string;
    fecha: Date;
    descripcion: string;
    precio: string;
    link: string;
    foto: string;
    tutorId?: string;
  }