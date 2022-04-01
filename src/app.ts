import express, { Router, Express, Request, Response } from "express";

const app: Express = express();

const router = Router();

router.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.use(router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
