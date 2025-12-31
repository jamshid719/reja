console.log(`TRAIN AREA`);
// const countLetter = function (a) {
//   const c = a.split("").filter((ele) => ele !== "string");
//   console.log(c.length);
// };

// countLetter("Eng1inee2r");

// const countDigit = (n) {
//   for
// }

// function countLetter(a, b) {
//   let count = 0;
//   a = a.toLowerCase();

//   for (let i = 0; i < b.length; i++) {
//     if (b[i].toLowerCase() === a) {
//       count++;
//     }
//   }

//   return count;
// }

function countDigit(a) {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    if (a[i] === i) {
      count++;
    }
  }

  return count;
}

countDigit("engin1ee4r32");

//TASK A:
/* Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi. MASALAN countLetter("e", "engineer") 3ni return qiladi. */

// Masalani yechimi:

// const countLetter = function (a, b) {
//   const c = b
//     .toLowerCase()
//     .split("")
//     .filter((ele) => ele === a);
//   console.log(c.length);
// };

// countLetter("e", "Engineer");

////==================================================================================//

// 21. NodeJS event loop va CALLBACK functionlarni o'rganamiz.

// Callback funksiyalarni iwlatiw maqsadi, kop userlar tomonidan  single-threadga zapros berilganda single-threadni band qilmaslik un iwlatiladi.

//NodeJS single thread metodi orqali iwlaydi. va uning mexanizmi (yani, NodeJS Single THREAD, Multi PROCESS!):
/* Initialize program =>
              Execute "top-level" code =>
                                Require modules =>
                                        Register event callbacks =>
                                                    Start event loop => thread pool(4 threads or more) 
 */

//Single-thread ni mantigini yahwi tawkillawtiriw kk, agar aksi bulsa muommolarga olib keladi. Mantigini yahwi tawkillawtiriw un Asynchronous  va callback functionlar yahwi biliwimiz kk.

console.log("Jack Ma maslahatlari");
const list = [
  "yahshi talaba buling", //0-20
  "tugri boshliq tanlang va koproq xato qiling", //20-30
  "uzingizga ishlashni boshlang", //30-40
  "siz kuchli bulgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yuq endi", //60
];

//endi callback function tuzamiz, u 2 ta paramaterli buladi, a(bu number) va callback.

// function maslahatBering(a, callback) {
//   //error        data   bu yerda a son bulmasa err beradi, data
//   if (typeof a !== "number") callback("insert a number", null);
//   // //mavjud bulmasa null beradi. hozi data yuq
//   else if (a <= 20) callback(null, list[0]);
//   // buyerda endi err bumaydi,chunki a son bb, wuning un kngi qism null ga utadi.(data bormi
//   //yuqmi tekwirib, undan kn mavjud datamizga utqazvoradi.)
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// //demak, callback ning 1-qismi errorga tegiwli, 2-qismi biz qaytarayotgan data ga tegiwli.

// // Call qismi. bu yerda parametr sifatida function iwga tuwadi. agar a ni urniga string quysak unda:
// maslahatBering("10", (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// }); //result: ERROR: insert a number
// //javob: null

//
//bizga faqat err ni kursatiw un console.log("javob:", data); else ni ichiga quysak buldi.

// maslahatBering("10", (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// }); //result: ERROR: insert a number

// // Endi a ni urniga son quyib call qilsak:

// console.log("passed here 1");

// maslahatBering(10, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });                                   //javob: yahshi talaba buling

// console.log("passed here 2");

// Endi a ni urniga 65 quyganda:

// console.log("passed here 1");

// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here 2");

// Endi javobning ketma ketligi quyidagicha buladi, chunki define qismida 5 sekundlik "setTimeout" module bulgani un.

// result: passed here 1
//         passed here 2
//         javob: endi dam oling, foydasi yuq endi

// Bu callback functionimizni foydali tarafidir.

////==================================================================================//

//22. ASYNCHRONOUS functionlarni qo'llash.

// - Async functionlar sync functionlar iwga tuwgangandan kn iwga tuwadi.

// - Async functionlarda core functionlar (setTimeout, setInterval) iwlamaydi, bular promise func. da iwlaydi. core functionlar async functionda iwlawi un ana wu promise func.ni async func.ni ichiga joylaw kk buladi.

// - Async functionlarning call turlari:

// 1) .then/.catch - kamchiligi nested bup ketadi, uqiwga qiyin (promise hell) bup ketadi.

// 2) async/await - qulay va sodda, shuning un kuproq wu iwlatiladi .then/.catch ga nisbatan. Kamchiligi esa qaerdadir 1ta xato ketsa catch  qilolmay crash berib yuboradi.

// 3) .try/.catch - bu ham sodda va qulay. ammo .async/await ularoq xato ketganda butunlay crash bervormaydi, aksincha sistema iwlaveradi va aynan qaerda xato ketganini catch qilib kursatadi.(debug qiliwni yengillawtiradi). Asosan async functionlarni call qilganda wu usulda foydaliw tavsiya etiladi.

// FORMULA (tavsiya):    DEFINE                CALL
//                     callback        >     callback
//                     async/await     >     then/catch || async/await
//                     promise         >     then/catch || async/await

// const list = [
//   "yahshi talaba buling", //0-20
//   "tugri boshliq tanlang va koproq xato qiling", //20-30
//   "uzingizga ishlashni boshlang", //30-40
//   "siz kuchli bulgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yuq endi", //60
// ];

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 3000);
//     }); // Promise ning kuch tarafi setTimeout iwlaydi, lekn setInterval iwlamaydi.
//     // (setInterval callback functionda iwlaydi)

//     // setTimeout(function () {
//     //   callback(null, list[5]);
//     // }, 5000);
//   }
// }

// CALL via .then/.catch

// console.log("passed here 1");

// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 2"); // result: passed here 1
//         passed here 2
//         javob: tugri boshliq tanlang va koproq xato qiling

//Bunda 1- bb sync.functionlar iwga tuwib, undan kn async function iwga tuwayapti.

// .then/.catch kamshiligi agar 20 yowlikni surab undan 30 va 40 yowliklarni surasak, unda funksiya kodimiz nested (yani, zaproslar ichma-ich bup ketadi) bup ketib uqiliwni qiyinlawtiradi (promise hell ga olib keladi). masalan:

// maslahatBering(25)
//   .then((data) => {
//     maslahatBering(32)
//       .then((data) => {
//         maslahatBering(42)
//           .then((data) => {
//             console.log("javob:", data);
//           })
//           .catch((err) => {
//             console.log("ERROR:", err);
//           });
//         console.log("javob:", data);
//       })
//       .catch((err) => {
//         console.log("ERROR:", err);
//       });
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// Bu chalkashlikni oldini oliw un alternativ call usulidan foydalaniw kk, yani async/await

// CALL via async/await

// async function run() {
//   let javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run(); //result: javob: tugri boshliq tanlang va koproq xato qiling
// //       javob: uzingizga ishlashni boshlang
// //        javob: siz kuchli bulgan narsalarni qiling

//Bunda kodlar juda sodda va qulay yozilgan hamda result ketma ket buyicha call bulayapti.

// Agar yoshning urniga son bulmagan masalan string ni yozsak bu butunlay crash ni beradi, wu crash ni oldini oliw un try/.catch call usulidan foydalaniw maqsadga muvofiq.

// async function run() {
//   try {
//     console.log(await maslahatBering("string"));
//   } catch (err) {
//     console.error("70 uchun xato:", err);
//   }

//   try {
//     console.log(await maslahatBering(31));
//   } catch (err) {
//     console.error("31 uchun xato:", err);
//   }

//   try {
//     console.log(await maslahatBering(41));
//   } catch (err) {
//     console.error("41 uchun xato:", err);
//   }
// }

// run();

// Bu call usulining foydali tomoni wundaki, xato ketganda faqat uwa qismgina error berib va uwa xatoni kursatadi, ammo qolgan mantiqlar bajarilb ketaveradi butunlay crash bermasdan.
