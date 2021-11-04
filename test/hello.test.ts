// const mathOperations = require('./calculator')
import * as service from "../src/services";
// const { getUser } = require('../src/services/user.ts')

describe("Service testing", () => {
  test("Service", () => {
    var result = service.getMonitaGroup("61758b48c084dab83d306e53");
    expect(result).toBe({
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

import { sum } from "./foo";

test("basic", () => {
  expect(sum()).toBe(0);
});

test("basic again", () => {
  expect(sum(1, 2)).toBe(3);
});
