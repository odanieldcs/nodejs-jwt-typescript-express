import { app } from "./app";

async function initServer(): Promise<void> {
  try {
    await app.init();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

initServer();
