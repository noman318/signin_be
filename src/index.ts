import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import UserRoutes from "./routes/user.route";
import session from "express-session";
import { CustomRequest } from "./controller/user.controller";

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
    secret: process.env.SESSION_SECRET || "Noman123",
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

app.get("/protected-route", (req: CustomRequest, res: Response): void => {
  // console.log("req.session.user", req.session.user);
  if (req.session && req.session.user) {
    // Session data exists, user is authenticated
    res.send("You are logged in!");
  } else {
    // Session data doesn't exist, user is not authenticated
    res.status(401).send("Unauthorized");
  }
});

// port defined for listening at port configured from process env
app.listen(PORT, () => console.log(`Server is running at PORT:${PORT}`));
