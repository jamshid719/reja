const http = require("http"); // bu bizni qurgan serverimzni(backend)  yurgizib beradi malum bir PORT ga.
const mongodb = require("mongodb"); //backend ni database ga ulab beradi, faqt wu iwni qiladi.

let db; //bu TCP tarzda ulab beradi, bu doimiy boglanish deyiladi. HTTP esa bir marta ulanadi.
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

//SQL and NoSQL databases

//SQL (Structered Query Language) - relative boglaniw tuwuniladi
// SQL = RDBMS (table kurinishda buladi): MySql / Postgre SQL / MariaDB / SQLServer(microsoft)...

//NoSQL - distributive boglanish tuwuniladi.
// NoSQL:  MongoDB / Redis / Cassandra / CouchDB / Firebase...

//Advantages NoSQL:
//Nosql is better for Big Data Applications
//Fast Performance
//Easy Replication
//High Scalability and High Availabilty

// Chatting tizimida datalar record qilinganda asosan Redis database iwlatiladi. chunki uta katta tezlikda iwlaydi.
//va bunaqa tizimda iwlatiladigan databaselar key-value va wide-column mexanzmida iwlaydi.

// Searching mehanizmida iwlatiladigan database: ElasticSearch

//MongoDB: CLUSTER > DATABASE > COLLECTION > DOCUMENT > DATASET

//MySQL: CLUSTER > DATABASE > TABLE > RECORD > DATASET
