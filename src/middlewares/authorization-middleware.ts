import { Request, Response, NextFunction } from "express";
import { authenticationService } from "@/services";

export const validateAuthorization = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const [, token] = req.headers.authorization.split(" ");

    if (token) {
      try {
        const decoded = (await authenticationService.tokenVerify(token)) as any;

        req.auth = {
          userId: decoded.id,
          name: decoded.name,
          expiresIn: decoded.exp,
        };

        next();
      } catch (error) {
        res.status(401).json({ message: "Invalid Token" });
      }
    } else {
      res.status(401).json({ message: "No Token Provided" });
    }
  };
};
