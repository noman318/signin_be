import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import UserRoutes from "./routes/user.route";
import session from "express-session";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,PUT,PATCH,POST,DELETE",
  })
);
app.use(
  session({
    secret: "Noman123",
    resave: false,
    saveUninitialized: false,
  })
);
const PORT = Number(process.env.PORT) || 4000;

// adding routing middleware
app.use("/users", UserRoutes);

//@ Testing root route
app.get("/ping", (req: Request, res: Response): void => {
  res.status(200).json({ message: "Root Route Working" });
});

// port defined for listening at port configured from process env
app.listen(PORT, () => console.log(`Server is running at PORT:${PORT}`));
