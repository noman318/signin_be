import { Request, Response, NextFunction } from "express";
import { prisma } from "../utils/db";
import { Session } from "express-session"; // Import Session type from express-session

const testUserController = (req: Request, res: Response) => {
  res.json({ message: "User Controller is running" });
};

const getUserById = async (nEmailUserID: string) => {
  try {
    const userId = parseInt(nEmailUserID);
    const user = await prisma.memailuser.findUnique({
      where: { nEmailUserID: userId },
    });

    return user;
  } catch (error) {
    return null;
  }
};
const getUser = async (req: Request, res: Response) => {
  try {
    console.log("calling");
    const users = await prisma.memailuser.findMany();
    console.log("users", users);
    res.json(users);
  } catch (error) {
    console.log("error", error);
  }
};

const getSingleUserByID = async (req: Request, res: Response) => {
  // console.log("req.params", req.params);
  const { id } = req.params;
  // console.log("id", id);
  try {
    console.log("calling");
    const user = await prisma.memailuser.findUnique({
      where: { nEmailUserID: +id },
    });
    // console.log("user", user);
    res.json(user);
  } catch (error) {
    console.log("error", error);
  }
};
interface CustomRequest extends Request {
  session: Session & { user?: any }; // Make sure session property matches Session type
}
const loginUser = async (req: CustomRequest, res: Response) => {
  try {
    const { email } = req.body;
    // console.log("req.body", req.body);
    // if (!user || !account) {
    //   return res.status(400).json({ message: "Invalid request body" });
    // }
    const existingUser = await prisma.memailuser.findUnique({
      where: { sEmail: email },
    });
    // console.log("existingUser", existingUser);
    if (!existingUser || existingUser.bEmailVerified === 0) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.session.user = existingUser;
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error processing login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default {
  testUserController,
  loginUser,
  getSingleUserByID,
  getUser,
};
