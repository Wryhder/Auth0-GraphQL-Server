const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");

let database = null;

async function startDatabase() {
  const mongo = new MongoMemoryServer();
  const MongoDBURL = await mongo.getConnectionString();
  const connection = await MongoClient.connect(MongoDBURL, {
    useNewUrlParser: true
  });

  if (!database) {
    database = connection.db();
    await database.collection("events").insertMany([
      {
        id: 1,
        title: "The Grandmaster of Demonic Cultivation",
        description: "Chinese cultivation-themed novel",
        date: "2020-01-30T19:20:35+00:00",
        attendants: [
          {
            id: 1,
            name: "Wei WuXian",
            age: 23
          },
          {
            id: 2,
            name: "Lan Wangji",
            age: 32
          }
        ]
      },
      {
        id: 2,
        title: "The Grandmaster of Demonic Cultivation",
        description: "Chinese cultivation-themed novel",
        date: "2020-01-30T19:20:35+00:00",
        attendants: [
          {
            id: 1,
            name: "Lan SiZhui",
            age: 17
          },
          {
            id: 2,
            name: "Jin Ling",
            age: 15
          }
        ]
      },
    ]);
  }

  return database;
}

module.exports = startDatabase;
