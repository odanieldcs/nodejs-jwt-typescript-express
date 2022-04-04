import request, { SuperTest, Test } from "supertest";
import httpStatus from "http-status";
import { app } from "@/app";
import { authenticationService } from "@/services";

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

    it(`should respond with status ${httpStatus.UNAUTHORIZED} with token auth invalid`, async () => {
      const res = await server
        .get("/customers")
        .set("Authorization", "Bearer 12345")
        .send();

      expect(res.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it(`should respond with status ${httpStatus.OK} with token auth valid`, async () => {
      const payload = {
        id: 1,
      };
      const tokenValid = authenticationService.tokenGenerate(payload);

      const res = await server
        .get("/customers")
        .set("Authorization", `Bearer ${tokenValid}`)
        .send();

      expect(res.status).toBe(httpStatus.OK);
    });
  });
});
