const axios = require("axios").default;

//
//
// Function Definition
//

// eslint-disable-next-line consistent-return
async function players(user = process.env.HIVE_USERNAME, params = {}) {
  // eslint-disable-next-line no-param-reassign
  if (!params.user) params.user = user;

  try {
    const response = await axios({
      method: "get",
      url: `https://${process.env.RABONA_API_HOST}/team`,
      params,
    });
    return response.data.players;
  } catch (error) {
    return [];
  }
}

//
//
// Export
//

module.exports = players;
