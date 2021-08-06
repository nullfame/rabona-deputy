const { nanoid } = require("nanoid");

const hive = require("../lib/hive.lib");

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
// Main
//

const scout = () => {
  const result = hive.broadcastJson({
    username: hive.username,
    type: "scout_players",
    command: { tr_var1: hive.username },
    nonce: nanoid(),
  });
  return result;
};

//
//
// Export
//

module.exports = scout;
