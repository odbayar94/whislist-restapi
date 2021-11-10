import request from "supertest";
import mongoose from "mongoose";

import app from "../src/app";
beforeAll((done) => {
  done();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  done();
});

describe("Service", () => {
  test("default service", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ name: "user1" }, { name: "user2" }]);
  });

  test("Get single monita group", async () => {
    const res = await request(app).get(
      "/api/v1/monitas/61758b48c084dab83d306e53"
    );
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      success: true,
      statusCode: 200,
      messageCode: "POST201",
      message: "Амжилттай",
      data: {
        _id: "61758b48c084dab83d306e53",
        name: "beleg ogoh",
        description: "",
        endDate: "2021-10-24T16:30:32.575Z",
        selectedUsers: [
          {
            email: "odko@yhao.com",
            name: null,
            imageUrl: null,
            active: false,
            _id: "61758b48c084dab83d306e54",
          },
          {
            email: "odbayar@monpass.mn",
            name: null,
            imageUrl: null,
            active: false,
            _id: "61758b48c084dab83d306e55",
          },
        ],
        shortenUri: "61bcx",
        createdAt: "2021-10-24T16:35:20.790Z",
        updatedAt: "2021-10-24T16:35:20.790Z",
        __v: 0,
      },
    });
  });
});
