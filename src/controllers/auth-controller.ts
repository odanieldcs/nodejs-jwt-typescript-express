import { authenticationService } from "@/services";

class AuthController {
  login(username, password) {
    if (username === "admin" && password === "admin") {
      const payload = {
        name: "admin",
        id: 1,
      };

      const token = authenticationService.tokenGenerate(payload);

      return { message: "Login Successful", token };
    } else {
      return { message: "Login Failed" };
    }
  }
}

export const authController = new AuthController();
