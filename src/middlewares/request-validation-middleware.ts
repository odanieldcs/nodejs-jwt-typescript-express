import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@/errors";
import { ObjectSchema } from "joi";

type ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

function validate(
  schema: ObjectSchema,
  type: "body" | "params" | "query"
): ValidationMiddleware {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type]);

    if (error) throw new BadRequestError(error.details[0].message);

    next();
  };
}

export function validateBody(schema: ObjectSchema): ValidationMiddleware {
  return validate(schema, "body");
}

export function validateParams(schema: ObjectSchema): ValidationMiddleware {
  return validate(schema, "params");
}

export function validateQuery(schema: ObjectSchema): ValidationMiddleware {
  return validate(schema, "query");
}
