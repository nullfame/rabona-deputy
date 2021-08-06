const { Client, PrivateKey } = require("@hiveio/dhive");

const KEY = {
  MEMO: "memo",
  POSTING: "posting",
  ACTIVE: "active",
  OWNER: "owner",
};

const client = new Client([
  "https://api.hive.blog",
  "https://api.hivekings.com",
  "https://anyx.io",
  "https://api.openhive.network",
]);

// TODO: validate username is present or error
const postingKey = process.env.HIVE_POSTING_KEY
  ? PrivateKey.from(process.env.HIVE_POSTING_KEY)
  : PrivateKey.fromLogin(
      process.env.HIVE_USERNAME,
      process.env.HIVE_PASSWORD,
      KEY.POSTING
    );

async function broadcastJson(
  json = {},
  {
    id = "rabona",
    key = postingKey,
    requiredAuths = [],
    requiredPostingAuths = [process.env.HIVE_USERNAME],
  } = {}
) {
  try {
    const result = await client.broadcast.json(
      {
        id,
        json: JSON.stringify(json),
        required_auths: requiredAuths,
        required_posting_auths: requiredPostingAuths,
      },
      key
    );
    return result;
  } catch (error) {
    // TODO throw an error
    console.log("error :>> ", error);
  }
  return { error: "Hive broadcast failed" };
}

module.exports = {
  broadcastJson,
  // client,
  // postingKey,
  username: process.env.HIVE_USERNAME,
};
