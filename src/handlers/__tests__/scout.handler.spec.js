/* eslint-disable global-require */

//
//
// Mock constants
//

const MOCK = {
  EVENT: {
    command: {
      count: 1,
    },
    SCOUT_TWO: {
      command: {
        count: 2,
      },
    },
  },
  SCOUT: {
    id: "mockScoutId",
  },
};

//
//
// Mock modules
//

const mockScout = jest.fn();
jest.mock("../../lib/rabona", () => ({
  scout: () => {
    mockScout();
    return MOCK.SCOUT;
  },
}));

//
//
// Mock environment
//

const DEFAULT_ENV = process.env;
beforeEach(() => {
  process.env = { ...process.env };
});
afterEach(() => {
  process.env = DEFAULT_ENV;
  jest.clearAllMocks();
});

//
//
// Run tests
//

describe("Scout Handler", () => {
  it("Works", async () => {
    const scout = require("../scout.handler");
    const response = await scout(MOCK.EVENT);
    expect(response).toBeObject();
    expect(response.transactions).toBeArray();
  });
  it("Uses scout function", async () => {
    const scout = require("../scout.handler");
    const response = await scout(MOCK.EVENT);
    expect(mockScout).toBeCalled();
    expect(response.transactions).toBeArrayOfSize(1);
  });
  it("Can scout multiple", async () => {
    const scout = require("../scout.handler");
    const response = await scout(MOCK.EVENT.SCOUT_TWO);
    expect(response.transactions).toBeArrayOfSize(2);
  });
});
