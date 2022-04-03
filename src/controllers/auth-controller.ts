import { authenticationService } from "@/services";
import { UnauthorizedError } from "@/errors";

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
      throw new UnauthorizedError("Login Failed");
    }
  }
}

export const authController = new AuthController();
