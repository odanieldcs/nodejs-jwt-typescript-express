import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { BadRequestError, UnauthorizedError } from "@/errors";

export const apiFormatError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let status = httpStatus.INTERNAL_SERVER_ERROR;
  let shouldLog = false;

  if (error instanceof UnauthorizedError) status = httpStatus.UNAUTHORIZED;
  else if (error instanceof BadRequestError) status = httpStatus.BAD_REQUEST;
  else shouldLog = true;

  shouldLog && console.log(error);

  res.status(status).json({ name: error.name, message: error.message });
};
