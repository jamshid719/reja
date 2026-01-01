// // 18. EXPRESS FRAMEWORK VA FRAMEWORK ORQALI WEB SERVER QURAMIZ.
console.log("Web serverni boshlash!");

// //Expressni install qlamiz => npm i express
// const express = require("express");
// // documentation qarasak, expressning objectini oliw un const app = express(); foydalaniwimiz kk.
// const app = express();
// //bu objecti orqali biz web server quramiz va uni shartli raviwda 4 ta bosqichga bulamiz.

// const http = require("http");

// //1. Kirish code: express ga kirib kelayotgan malumotlarimiz yoziladi kodlar bn.
// app.use(express.static("public"));
// //bu har qanday browser dan kirib kelayotgan zaproslar un public folder ochiq deyiladi, yani userlar kura oladi
// app.use(express.json());
// //bu bizga kirib kelayotgan json formatdagi data ni bizga object holatiga ugirib beradi.
// // chunki client va web erver orasidagi data json format da
// app.use(express.urlencoded({ extended: true }));
// // bu traditional request qiliw instrumenti,yani html formdan biror narsani post qilsak, bizning express serverimiz qabul qila oladi, bu kod bulmasa neglect qiladi.

// //2.Session (bu misolda yuq)

// //3. Views code: bunda BSSR (Backend side site render, which is more commonly known as Server-Side Rendering (SSR)) yunaliwda backend da frontend yasaymiz (view). Yani backend da html yasab uni client ga yuboramiz.
// // buning un view ni yasaw un EJS dan foydalanamiz(npm i ejs).
// app.set("views", "views"); // bu yerda "views" folderni kursatayapmiz (2chi "views")
// app.set("view engine", "ejs"); // view engine ni ejs qilib ketamiz.

// //4. Routing code: bunda EJS orqali html frontendni yasaymiz backend ni ichida.

// app.get("/hello", function (req, res) {
//   res.end(`<h1 style = "background: grey">Hello World</h1>`);
// });
// //yana slush dan kn bowqa pagelarni hosil qilsak. tepadagi kod ga slushdan kn hello yozib, yani, hello page bulsin.
// app.get("/gift", function (req, res) {
//   res.end(`<h1 style="background: blue">Siz sovgalar bulimidasiz!</h1>`);
// });

// //serverni hosil qilamiz.
// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(`The server is running succesfully on port: ${PORT}`);
// }); // agar server muvofaqqiyatli ochsa wu funksiya bash da iwga tuwadi.

// //// bu applicationni run qiliw un nodemon dan foydalanib, json ga script qismiga "dev": "nodemon server.js"
// //shaklida kiritib, npm run dev yozib applicationni iwga tuwuramiz.

// //npm i nodemon => "dev": "nodemon server.js" (json da) => npm run dev

//Bu server ni nodeJS ning express framework orqali qurdik. Bunday frameworklar aslida kop, masalan: NodeJS da express, nest, Koa yoki meteor.   Phyton da Django flask | java da Spring |PHPda CodeIgniter.

//(Git) Loyihalarda Master va develop branchlari mavjud bb, odatda Master branch da iwlanmaydi, develop branchda loyihani qurib kn master branch ga merge qilinadi.(bizning loyihamiz primitiv bulganligi un master bn iwlaymiz).
// git branch => branch lar nomini chiqaradi
// git log --oneline => commit larni kursatadi.
// git commit --amend(hali remotega ulanmagan holatdagina yoziladi) => :wq
// git pull origin master (remote dagi eng ohirgi source ni uzimizga yuklab oliwimz mumkin.)

////======================================================================================================//

//19. EJS FRAMEWORK ORQALI ANAVIY FRONTEND QURAMIZ

// const express = require("express");
// const app = express();
// const http = require("http");

// // //1. Kirish code:
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // //2.Session

// // //3. Views code:
// app.set("views", "views");
// app.set("view engine", "ejs");

// // //4. Routing code:

// // app.get("/hello", function (req, res) {
// //   res.end(`<h1 style = "background: grey">Hello World</h1>`);
// // });

// // app.get("/gift", function (req, res) {
// //   res.end(`<h1 style="background: blue">Siz sovgalar bulimidasiz!</h1>`);
// // });

// app.post("/create-item", (req, res) => {
//   console.log(req.body); // bu kelgan narsani body qismini tekwiriw deyiladi.
//   res.json({ test: "success" }); // va json waklida malumotni qaytarib yuboriw
// });

// app.get("/", function (req, res) {
//   res.render("reja");
// }); // harid.ejs faylini "view" papkada hosil qilib olamiz.

// //serverni hosil qilamiz.
// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(
//     `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
//   );
// });

// GET va POST requestlarning farqi:

//GET - database dan malumotni oliw un iwlatiladi.
//POST - malumotni uzi bn olib keladi va database ga yozadi.

////NOTE: git reset --hard => bu filemizning ohirgi commit qilingan versiyasiga qaytadi.
////      git clean -df => folder va filelarimizni uchirib yuboradi(ohirgi commit qilngan versiya gacha)

////======================================================================================================//

//20. EJS FRAMEWORKDA PORTFOLIO PUBLISHING QILISH.

// const express = require("express");
// const app = express();
// const http = require("http");
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// // //1. Kirish code:
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // //2.Session

// // //3. Views code:
// app.set("views", "views");
// app.set("view engine", "ejs");

// // //4. Routing code:

// // app.post("/create-item", (req, res) => {
// //   console.log(req.body); // bu kelgan narsani body qismini tekwiriw deyiladi.
// //   res.json({ test: "success" }); // va json waklida malumotni qaytarib yuboriw
// // });

// app.get("/author", function (req, res) {
//   res.render("author", { user: user });
// }); // bu user publishing un kk buladigan malumot.

// // //serverni hosil qilamiz.
// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(
//     `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
//   );
// });

//============================================================================////

//23-24. MongoDB atlasni sozlaymiz va reja loyihasini MongoDB databasega connection quramiz.

// MongoDB ini iwlatiw usuli 2 xil: tugridan-tugri || mongoose package orqali.

// Bu loyohada(reja) tugridan tugri iwlatamiz, kngi loyihada(FoodDelivery) mangoose orqali iwlatamiz.

const express = require("express");
const app = express();
const http = require("http");

//MongoDB call
const db = require("./server").db();

// //1. Kirish code:
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// //2.Session

// //3. Views code:
app.set("views", "views");
app.set("view engine", "ejs");

// //4. Routing code:

// app.get("/hello", function (req, res) {
//   res.end(`<h1 style = "background: grey">Hello World</h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1 style="background: blue">Siz sovgalar bulimidasiz!</h1>`);
// });

app.post("/create-item", (req, res) => {
  console.log(req.body); // bu kelgan narsani body qismini tekwiriw deyiladi.
  // res.json({ test: "success" }); // va json waklida malumotni qaytarib yuboriw
  // res.end("success"); //"/create-item" ga wu suzni yuboriw

  //endi mongoDB ga malumot kiritsak, kiritgan malumotimiz req.body dan chiqadigan reja bn birxil nom bn quwilsin:
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong"); //wu yozuvda userlarga bildiriw(API da)
    } else {
      console.log(data);
      res.end("succesfully added");
    }
  });
});

app.get("/", function (req, res) {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
}); // harid.ejs faylini "view" papkada hosil qilib olamiz.

module.exports = app;

//217-225da bizda MongoDB Atlas databaseda hech qanaqa "plans" collection bulmaganligi un bizga pustoy data ([]) qaytarayapti.

//databasega malumot yozsak 204-210da.

// databasega malumot kiritgandan sung, yana bir bor locahostga kirib chiqsak bizga endi bush arraymas, biz kiritgan malumotlarni kursatadi terminalda. endi ularni terminalda emas reja.ejs ga kiritiwimiz kk. uni un  res.render ga {items: data} ni kiritiwimiz kk

//Va undan kn reja.ejs ga <%= items[0].reja %> orqali birma bir kiritiwimiz mumkin. bu yerda reja form inputdagi "name".

//reje.ejs da:
// - data-id="<%=item._id%>" buttonlarga kiritiliwimizga sabab biz kelajakda qaysi item ni uchiriw yo uzgartiriwimz mumkin,
//    database dagi item _id isi orqali
