// kiểu dữ liệu JSON < xml
// cú pháp kiểu dữ liệu JSON
//"key": "value";

//kiểu JSON thì key và value sẽ được bọc trong dấu ngoặc kép (bắt buộc)

// const users = [
//     {
//         "userId":1,
//         "userName": "Nguyen Duc Hung",
//     }
// ]

//khi gửi dữ liệu lên local thì bắt được đổi type từ js sang JSON

// cách chuyển đổi Js sang Json

// const user = {
//   userId: 1,
//   userName: "Nguyen Duc Hung",
// };

// JSON.stringify(user);

// // cách chuyển đổi Json sang Js

// JSON.parse(user);

//Cách lưu trữ dữ liệu trên localStorage

// const users = [
//   {
//     userId: 1,
//     userName: "Nguyen Duc Hung",
//   },
// ];

// const Products = [
//   {
//     productId: 1,
//     productName: "táo",
//     price: 2000,
//   },
//   {
//     productId: 2,
//     productName: "áo",
//     price: 3000,
//   },
// ];

// bước 1: chuyển đổi type JS sang JSON
// JSON.stringify(users);

// bước 2: gửi dữ liệu lên
// localStorage.setItem("users", JSON.stringify(users));
// localStorage.setItem("Products", JSON.stringify(Products));

//Cách lấy dữ liệu từ local
// const userLocal = localStorage.getItem("users");

// ép kiểu từ JSON sang JS
// const userLocalParse = JSON.parse(userLocal);
// console.log(userLocalParse);

//Cách xóa dữ liệu của local
// localStorage.removeItem("users");

//form len local
let usernameInput = document.querySelector("#username");
let genderInput = document.querySelectorAll("input[name=gender]");

let dateOfBirthInput = document.querySelector("#dateOfBirth");
let emailInput = document.querySelector("#Email");
let passwordInput = document.querySelector("#password");
let btnSubmit = document.querySelector("#btnSubmit");
let btnLogOut = document.querySelector("#btnLogOut");
let tbody = document.getElementById("tbody");

// lắng nghe sự kiện nút button
btnSubmit.addEventListener("click", (e) => {
  //ngăn chặn sự kiện
  e.preventDefault();
  //biến lưu trữ gái trị gender
  let genderValue = "0";
  genderInput.forEach((gender) => {
    if (gender.checked) {
      genderValue = gender.value; // Gán lại gía trị cho ô input được check
    }
  });

  // lấy dữ liệu từu trên  local
  const userLocal = JSON.parse(localStorage.getItem("users")) || [];

  const newUser = {
    userId: uuidv4(),
    username: usernameInput.value,
    gender: genderValue,
    dateOfBirth: dateOfBirthInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  // push đối tượng user vào trong mảng
  userLocal.push(newUser);

  //gửi lại gía trị lên local
  localStorage.setItem("users", JSON.stringify(userLocal));
  renderData();
});

// đăng xuất

btnLogOut.addEventListener("click", () => {
  localStorage.removeItem("users");
});

//Render dữ liệu

function renderData() {
  //lấy dữ liệu từ trên local về và ép kiểu vể type js
  const userLocal = JSON.parse(localStorage.getItem("users")) || [];

  const trHTMLs = userLocal.map((user, index) => {
    return ` <tr><td>${index + 1}</td>
    <td>${user.username}</td>
    <td>${user.gender}</td>
    <td>${user.dateOfBirth}</td>
    <td>${user.email}</td>
    <td>${user.password}</td></tr>`;
  });
  const trHTML = trHTMLs.join("");
  //append tr vao trong tbody
  tbody.innerHTML = trHTML;
}

renderData();
