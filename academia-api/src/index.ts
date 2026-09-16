import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

type Course = {
  id: number;
  title: string;
  capacity: number;
};

const courses: Course[] = [
  { id: 1, title: "Programacion V - Backend", capacity: 30 },
  { id: 2, title: "Bases de Datos Avanzadas", capacity: 25 },
  { id: 3, title: "Arquitectura de Software", capacity: 20 }
];

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.get("/version", (_req: Request, res: Response) => {
  res.status(200).json({ version: "1.0.0" });
});

app.get("/courses", (_req: Request, res: Response) => {
  res.status(200).json(courses);
});

app.get("/courses/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).json({ error: "Curso no encontrado" });
  }

  return res.status(200).json(course);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
