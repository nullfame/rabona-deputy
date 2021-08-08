/* eslint-disable global-require */

//
//
// Mock constants
//

const MOCK = {
  PLAYERS: [
    {
      name: "Grant Hill",
      uid: "#33",
      games_blocked: 0,
      games_injured: 2,
      type: 4,
    },
  ],
};

//
//
// Mock modules
//

const mockPlayers = jest.fn();
jest.mock("../../lib/rabona", () => ({
  players: () => {
    mockPlayers();
    return MOCK.PLAYERS;
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
});

//
//
// Run tests
//

describe("Blocked Handler", () => {
  it("Works", async () => {
    const blocked = require("../blocked.handler");
    const response = await blocked();
    expect(response).toBeObject();
    expect(response.players).toBeArray();
  });
});
