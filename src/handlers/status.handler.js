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
const handler = async (event) => {
  const response = { available: true };
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

//
//
// Export
//

module.exports = handler;
