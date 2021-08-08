const blockedFunction = require("./blocked.handler");
const { heal, unblock } = require("../lib/rabona");

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

const handler = async () => {
  const blocked = await blockedFunction();
  // console.log("blocked :>> ", blocked);

  const transactions = [];
  for (let i = 0; i < blocked.players.length; i += 1) {
    /* eslint-disable no-await-in-loop */
    const player = blocked.players[i];
    if (player.gamesInjured) {
      const transaction = await heal(player);
      const result = {
        action: "heal",
        id: player.id,
        name: player.name,
        tx: transaction.id,
      };
      transactions.push(result);
    }
    if (player.gamesBlocked) {
      const transaction = await unblock(player);
      const result = {
        action: "unblock",
        id: player.id,
        name: player.name,
        tx: transaction.id,
      };
      transactions.push(result);
    }
    /* eslint-enable no-await-in-loop */
  }

  return {
    transactions,
  };
};

//
//
// Export
//

module.exports = handler;
