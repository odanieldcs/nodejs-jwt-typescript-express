import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { NotFoundError, UnauthorizedError } from "@/errors";

export const apiFormatError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let status = httpStatus.INTERNAL_SERVER_ERROR;
  let shouldLog = false;

  if (error instanceof NotFoundError) status = httpStatus.NOT_FOUND;
  if (error instanceof UnauthorizedError) status = httpStatus.UNAUTHORIZED;
  else {
    console.log(error);
    error = new Error("Internal Server Error");
  }

  res.status(status).json({ name: error.name, message: error.message });
};
