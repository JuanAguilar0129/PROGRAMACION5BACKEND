import express, { Request, Response } from "express";
import courseRoutes from "./routes/course.routes";
import instructorRoutes from "./routes/instructor.routes";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.get("/version", (_req: Request, res: Response) => {
  res.status(200).json({ version: "1.0.0" });
});

app.use("/courses", courseRoutes);
app.use("/instructors", instructorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
