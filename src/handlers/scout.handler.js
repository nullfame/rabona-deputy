const { scout } = require("../lib/rabona");

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

const handler = async (event) => {
  // console.log("event :>> ", event);
  const result = { transactions: [] };

  // TODO: validate command.count is number
  for (let i = 0; i < Number(event.command.count); i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const transaction = await scout();
    result.transactions.push(transaction.id);
    // eslint-disable-next-line no-await-in-loop
    await new Promise((r) => setTimeout(r, 1000));
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};

//
//
// Export
//

module.exports = handler;
