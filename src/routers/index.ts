import { Router } from "express";

import authRouter from "./auth-router";
import customersRouter from "./customers-router";
import helloRouter from "./hello-router";
import { apiFormatError } from "@/middlewares";

const router = Router();

router.use(authRouter);
router.use(customersRouter);
router.use(helloRouter);
router.use(apiFormatError);

export default router;
