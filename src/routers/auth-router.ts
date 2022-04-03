import { Router, Request, Response, NextFunction } from "express";
import { authController } from "@/controllers";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
  const response = authController.login(username, password);

  res.status(200).json(response);
});

export default router;
