import "express-async-errors";
import express, { Express } from "express";
import routes from "@/routers";

const app: Express = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
