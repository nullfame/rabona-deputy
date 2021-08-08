/* eslint-disable global-require */

//
//
// Mock constants
//

//
//
// Mock modules
//

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

describe("Unblock Handler", () => {
  it.skip("Works", async () => {
    const unblock = require("../unblock.handler");
    const response = await unblock();
    expect(response).toBeObject();
    expect(response.transactions).toBeArray();
  });
});
