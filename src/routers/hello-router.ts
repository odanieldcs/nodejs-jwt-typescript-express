import { Router, Request, Response } from "express";

const router = Router();

router.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello World, this is a public route! :)" });
});

export default router;
