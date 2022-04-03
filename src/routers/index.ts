import { Router } from "express";

import authRouter from "./auth-router";
import customersRouter from "./customers-router";
import helloRouter from "./hello-router";

const router = Router();

router.use(authRouter);
router.use(customersRouter);
router.use(helloRouter);

export default router;
