// // 18. Express framework va framework orqali web server quramiz.
console.log("Web serverni boshlash");

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
// // bu traditional request qiliw instrumenti,yani html forumdan biror narsani post qilsak, bizning express serverimiz qabul qila oladi, bu kod bulmasa neglect qiladi.

// //2.Session (bu misolda yuq)

// //3. Views code: bunda BSSR yunaliwda backend da frontend yasaymiz (view). Yani backend da html yasab uni client ga yuboramiz.
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
// git pull origin master (remote dagi eng ohirgi source ni uzimizga yuklab oliwimz mumkin)
