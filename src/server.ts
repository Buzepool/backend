import express, { Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";
import { router } from "./routes";
import e from "express";

const app = express();
app.use(express.json()); // Mover o middleware express.json() antes do uso do router
app.use(cors());
app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(
  (err: Error, req: Request, res: Response, next: express.NextFunction) => {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({
      status: "error",
      info: "Internal Server Error",
    });
  }
);

app.listen(3333, () => console.log("Server is running on port 3333"));
