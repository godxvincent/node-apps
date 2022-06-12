// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    console.log("Connexion exitosa");
    insertions(db);
    setTimeout(() => {
      client.close();
      console.log("Connexion cerrada con exito");
    }, 10000);
  }
);

/**
 * Insert data in mongodb
 * @param {object} db Db connection
 */
function insertions(db) {
  db.dropCollection("users");
  db.dropCollection("tasks");
  db.collection("users").insertOne(
    {
      name: "Andrew",
      age: 27
    },
    (error, result) => {
      if (error) {
        return console.log("Unable to insert user");
      }

      console.log(result);
    }
  );

  db.collection("users").insertMany(
    [
      {
        name: "Jen",
        age: 28
      },
      {
        name: "Gunther",
        age: 27
      }
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert documents!");
      }

      console.log(result);
    }
  );

  db.collection("tasks").insertMany(
    [
      {
        description: "Clean the house",
        completed: true
      },
      {
        description: "Renew inspection",
        completed: false
      },
      {
        description: "Pot plants",
        completed: false
      }
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert tasks!");
      }

      console.log(result);
    }
  );
}

/**
 * Adds two numbers together.
 * @param {object} db Db connection
 */
function deletes(db) {
  // db.collection('users').deleteMany({
  //     age: 27
  // }).then((result) => {
  //     console.log(result)
  // }).catch((error) => {
  //     console.log(error)
  // })

  db.collection("tasks")
    .deleteOne({
      description: "Clean the house"
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
}

/**
 * Queries information in mongo
 * @param {object} db Db connection
 */
function queries(db) {
  // db.collection('users').findOne({ _id: new ObjectID("5c1113239cbfe605241f9071") }, (error, user) => {
  //     if (error) {
  //         return console.log('Unable to fetch')
  //     }

  //     console.log(user)
  // })

  // db.collection('users').find({ age: 27 }).toArray((error, users) => {
  //     console.log(users)
  // })

  db.collection("tasks").findOne(
    { _id: new ObjectID("5c0fec243ef6bdfbe1d62e2f") },
    (error, task) => {
      console.log(task);
    }
  );

  db.collection("tasks")
    .find({ completed: false })
    .toArray((error, tasks) => {
      console.log(tasks);
    });
}

/**
 * Updates data in mongodb
 * @param {object} db Db connection
 */
function updates(db) {
  // db.collection('users').updateOne({
  //     _id: new ObjectID("5c0fe6634362c1fb75b9d6b5")
  // }, {
  //     $inc: {
  //         age: 1
  //     }
  // }).then((result) => {
  //     console.log(result)
  // }).catch((error) => {
  //     console.log(error)
  // })

  db.collection("tasks")
    .updateMany(
      {
        completed: false
      },
      {
        $set: {
          completed: true
        }
      }
    )
    .then(result => {
      console.log(result.modifiedCount);
    })
    .catch(error => {
      console.log(error);
    });
}
