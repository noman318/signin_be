import { Router } from "express";
import UserController from "../controller/user.controller";

const router = Router();

router.get("/", UserController.testUserController);
router.get("/all", UserController.getUser);
router.post("/login", UserController.loginUser);
router.get("/one/:id", UserController.getSingleUserByID);

export default router;
