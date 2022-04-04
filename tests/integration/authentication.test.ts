import request, { SuperTest, Test } from "supertest";
import httpStatus from "http-status";
import { app } from "@/app";

let server: SuperTest<Test> = null;

beforeAll(async () => {
  const initialized = await app.init();
  server = request(initialized);
});

describe("Server tests", () => {
  describe("GET /login", () => {
    it(`should respond with status ${httpStatus.UNAUTHORIZED} with username and password invalid`, async () => {
      const payload = {
        username: "admin2",
        password: "admin1",
      };

      const res = await server.post("/login").send(payload);

      expect(res.status).toBe(httpStatus.UNAUTHORIZED);
    });
  });

  describe("POST /login", () => {
    it(`should respond with status ${httpStatus.BAD_REQUEST} when username not informed`, async () => {
      const payload = {
        password: "admin1",
      };

      const res = await server.post("/login").send(payload);

      expect(res.status).toBe(httpStatus.BAD_REQUEST);
    });

    it(`should respond with status ${httpStatus.BAD_REQUEST} when password not informed`, async () => {
      const payload = {
        username: "admin1",
      };

      const res = await server.post("/login").send(payload);

      expect(res.status).toBe(httpStatus.BAD_REQUEST);
    });

    it(`should respond with status ${httpStatus.OK} with username and password valid`, async () => {
      const payload = {
        username: "admin",
        password: "admin",
      };

      const res = await server.post("/login").send(payload);

      expect(res.status).toBe(httpStatus.OK);
    });
  });
});
