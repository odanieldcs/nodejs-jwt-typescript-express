import request, { SuperTest, Test } from "supertest";
import httpStatus from "http-status";
import { app } from "@/app";

let server: SuperTest<Test> = null;

beforeAll(async () => {
  const initialized = await app.init();
  server = request(initialized);
});

describe("Server tests", () => {
  describe("GET /hello", () => {
    it("should respond with status 200", async () => {
      const res = await server.get("/hello").send();

      expect(res.status).toBe(httpStatus.OK);
    });
  });
});
