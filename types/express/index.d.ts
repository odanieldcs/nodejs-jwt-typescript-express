declare namespace Express {
  interface Request {
    auth: {
      userId: string;
      name: string;
      expiresIn: string;
    };
  }
}
