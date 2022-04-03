import joi from "joi";

export const authenticationSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});
