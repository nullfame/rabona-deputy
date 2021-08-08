const hive = require("../lib/hive.lib");

//
//
// Main
//

const heal = (player) => {
  const playerId = typeof player === "object" ? player.id : player;

  const result = hive.broadcastJson({
    username: hive.username,
    type: "heal_for_RBN",
    command: { tr_var1: playerId },
  });
  return result;
};

//
//
// Export
//

module.exports = heal;
