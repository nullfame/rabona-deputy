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

describe("Scout Handler", () => {
  it("Works", async () => {
    const scout = require("../scout.handler");
    const response = await scout();
    console.log("response :>> ", response);
    expect(response.statusCode).toBe(200);
  });
});
