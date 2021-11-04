import request from "supertest";
import makeApp from "../src/server";
import { jest } from "@jest/globals";

const getMonita = jest.fn();
const app = makeApp({
  createUser,
  getUser,
});

describe("POST /users", () => {
  beforeEach(() => {
    createUser.mockReset();
    createUser.mockResolvedValue(0);
  });

  describe("given a username and password", () => {
    test("should save the username and password to the database", async () => {
      const bodyData = [
        { username: "username1", password: "password1" },
        { username: "username2", password: "password2" },
        { username: "username3", password: "password3" },
      ];
      for (const body of bodyData) {
        createUser.mockReset();
        await request(app).post("/users").send(body);
        expect(createUser.mock.calls.length).toBe(1);
        expect(createUser.mock.calls[0][0]).toBe(body.username);
        expect(createUser.mock.calls[0][1]).toBe(body.password);
      }
    });
  });
});
