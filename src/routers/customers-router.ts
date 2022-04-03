import { Router, Request, Response } from "express";
import { validateAuthorization } from "@/middlewares";
import { customersController } from "@/controllers";

const router = Router();

router.get(
  "/customers",
  validateAuthorization(),
  (req: Request, res: Response) => {
    const customers = customersController.getAll();

    res.status(200).json(customers);
  }
);

export default router;
