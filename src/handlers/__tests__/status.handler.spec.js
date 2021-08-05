const status = require("../status.handler");

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

describe("Hello Handler", () => {
  it("Works", async () => {
    const response = await status();
    expect(response.statusCode).toBe(200);
  });

  it("Returns available=true", async () => {
    const response = await status();
    expect(response.body).toBeString();
    const body = JSON.parse(response.body);
    expect(body.available).toBeTrue();
  });
});
