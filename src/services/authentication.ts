import { sign, verify } from "jsonwebtoken";

// TODO: Load params from env file
const auth = {
  secret: "secret",
  expiresIn: "1m",
};

class AuthenticationService {
  tokenGenerate = (payload: any) => {
    return sign(payload, auth.secret, { expiresIn: auth.expiresIn });
  };

  tokenVerify = (token: string) => {
    return verify(token, auth.secret);
  };
}

export const authenticationService = new AuthenticationService();
