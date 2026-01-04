console.log("Frontend JS");

let createField = document.getElementById("create-field");

function itemTemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              O'zgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm"
            >
              O'chirish
            </button>
          </div>
        </li>`;
}

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios // fetch, ajax ham iwlatsa buladi.
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = " ";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan harakat qiling");
    });
});

//Axios - bu traditional post emas, bu modern post request (pcg)

//click tugmalarini birortasini tanlash un: console.log(e); yozsak aynan nima bosilganini qulga kiritib beradi.

document.addEventListener("click", function (e) {
  // console.log(e);
  console.log(e.target);

  //DELETE oper
  if (e.target.classList.contains("delete-me")) {
    if (confirm("aniq uchirmoqchimisz")) {
      axios
        .post(
          "/delete-item",
          {
            id: e.target.getAttribute("data-id"),
          } /*endi buni backendga post qilamiz(const id = req.body.id - shu yusinda) bu body. kngi id*/
        )
        .then((response) => {
          console.log(response.data);
          //Endi view qismidan uchirish:
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qiling");
        });
    }

    // if (confirm("aniq uchirmoqchimisz")) {
    //   alert("yes deb javob berildi");
    // } else {
    //   alert("no deb javob berildi");
    // }
  }

  //EDIT oper
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Ozgartirish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    // console.log(userInput);
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qiling");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function () {
  axios
    .post("/delete-all", { delete_all: true })
    .then((response) => {
      // console.log(response.data);
      alert(response.data.state);
      //databasedan uchirib "Hamma rejalar uchirildi" zaprosdan kelgandan sung, biz frontend dan ham uchiriwimiz kk, buni 2ta usuli bor, 1-chi hamma viewlarni uchiriw yoki 2-chi soddaroq usuli shunchaki pagemizni reload qiliwimiz mumkin.
      document.location.reload();
    })
    .catch();
});

//{delete_all: true} - xavfsizlik nuqtai nazaridan qilish (body qismiga yuboriw.)
