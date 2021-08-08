const { players } = require("../lib/rabona");

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
  //
  //
  // Preprocess
  //

  const allPlayers = await players();

  //
  //
  // Process
  //

  // eslint-disable-next-line no-shadow
  const blockedPlayers = allPlayers.reduce((blockedPlayers, player) => {
    if (player.games_blocked || player.games_injured) {
      blockedPlayers.push({
        name: player.name,
        type: player.type,
        gamesInjured: player.games_injured,
        gamesBlocked: player.games_blocked,
        id: player.uid,
      });
    }
    return blockedPlayers;
  }, []);

  //
  //
  // Return
  //

  return {
    players: blockedPlayers,
  };
};

//
//
// Export
//

module.exports = handler;
