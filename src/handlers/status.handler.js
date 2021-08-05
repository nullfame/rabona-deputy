//
//
// Constants
//

//
//
// Helper Functions
//

//
//
// Handler
//

// eslint-disable-next-line no-unused-vars
const handler = async (event) =>
  // console.log("event :>> ", event);
  ({
    statusCode: 200,
    body: JSON.stringify({ available: true }),
  });

//
//
// Export
//

module.exports = handler;
