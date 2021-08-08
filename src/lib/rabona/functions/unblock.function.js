const hive = require("../lib/hive.lib");

//
//
// Main
//

const unblock = (player) => {
  const playerId = typeof player === "object" ? player.id : player;

  const result = hive.broadcastJson({
    username: hive.username,
    type: "unblock_for_RBN",
    command: { tr_var1: playerId },
  });
  return result;
};

//
//
// Export
//

module.exports = unblock;
