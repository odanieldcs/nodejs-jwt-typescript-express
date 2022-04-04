import { Request, Response, NextFunction } from "express";
import { authenticationService } from "@/services";
import { UnauthorizedError, BadRequestError } from "@/errors";

export const validateAuthorization = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization;

    if (!authorization)
      throw new UnauthorizedError("Authorization header is missing");

    const [, token] = authorization.split(" ");

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
        throw new UnauthorizedError("Invalid Token");
      }
    } else {
      throw new BadRequestError("No Token Provided");
    }
  };
};
