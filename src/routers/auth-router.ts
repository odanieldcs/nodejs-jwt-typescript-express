import { Router, Request, Response } from "express";
import { authController } from "@/controllers";
import { validateBody } from "@/middlewares";
import { authenticationSchema } from "@/schemas";

const router = Router();

router.post(
  "/login",
  validateBody(authenticationSchema),
  (req: Request, res: Response) => {
    const { username, password } = req.body;
    const response = authController.login(username, password);

    res.status(200).json(response);
  }
);

export default router;
