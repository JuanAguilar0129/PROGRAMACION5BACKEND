export type Course = {
  id: number;
  title: string;
  capacity: number;
};

export const courses: Course[] = [
  { id: 1, title: "Programacion V - Backend", capacity: 30 },
  { id: 2, title: "Bases de Datos Avanzadas", capacity: 25 },
  { id: 3, title: "Arquitectura de Software", capacity: 20 }
];
