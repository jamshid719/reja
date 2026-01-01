const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://jshaymanov786_db_user:bdFUgBHVTfN30O7N@cluster0.jz3gqv1.mongodb.net/Reja?appName=Cluster0";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      // console.log(client);
      module.exports = client;
      const app = require("./app");
      //serverni hosil qilamiz.
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

//else ichiga const = app bn const = server ni joylawtiriwimizdan maqsad, birinchi database(MongoDB) ga muvofaqiyatli ulangandan kn app va server iwga tuwiriwdir.

// MongoDB qanaqa instance qaytariwini biliw un console.log(client);
//buda client nimadan iboratligini kuriw un. buni biz kop iwlatamiz.

// wuning un server.js file dan export qilib, app.js dan chaqiriw un reqire qiliw kk. bu bizga knchalik databasega turli xil malumotalr CRUD amallarni qilsak buladi.
