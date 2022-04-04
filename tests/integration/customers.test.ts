import request, { SuperTest, Test } from "supertest";
import httpStatus from "http-status";
import { app } from "@/app";

let server: SuperTest<Test> = null;

beforeAll(async () => {
  const initialized = await app.init();
  server = request(initialized);
});

describe("Server tests", () => {
  describe("GET /customers", () => {
    it(`should respond with status ${httpStatus.UNAUTHORIZED} without token auth`, async () => {
      const res = await server.get("/customers").send();

      expect(res.status).toBe(httpStatus.UNAUTHORIZED);
    });
  });
});
