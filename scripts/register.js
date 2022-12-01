"use strict";
const inputFirstName = document.getElementById("input-firstname");
const inputlastname = document.getElementById("input-lastname");
const inputUserName = document.getElementById("input-username");
const inputPassWord = document.getElementById("input-password");
const inputPassWordConfirm = document.getElementById("input-password-confirm");
const btnsubmit = document.getElementById("btn-submit");
const userArr = [];
btnsubmit.addEventListener("click", function () {
  let userArr = localStorage.getItem("USER_name")
    ? JSON.parse(localStorage.getItem("USER_name"))
    : [];
  const data = {
    firstname: inputFirstName.vale,
    lastname: inputlastname.value,
    id: inputUserName.value,
    pass: inputPassWord.value,
    passconfirm: inputPassWordConfirm.value,
  };

  // localStorage.setItem("USER_ARRAY", JSON.stringify(userArr));
  inputFirstName.value = "";
  inputlastname.value = "";
  inputUserName.value = "";
  inputPassWord.value = "";
  inputPassWordConfirm.value = "";
  validateData(data);
  function validateData(data) {
    let userArr = localStorage.getItem("USER_name")
      ? JSON.parse(localStorage.getItem("USER_name"))
      : [];
    const listusename = localStorage.getItem("USER_name")
      ? JSON.parse(localStorage.getItem("USER_name"))
      : [];
    let isVAlidate = true;
    for (let i = 0; i < userArr.length; i++) {
      const usename = userArr[i];
      if (data.id === usename.id) {
        alert("Khong được trung usename đã sử dụng");
        isVAlidate = false;
        break;
      }
    }
    if (data.id.trim().length === 0) {
      alert("Khong duoc de trong truong UseName!");
      isVAlidate = false;
    }
    if (data.pass.trim().length <= 8) {
      alert("pass phai tren 8 ky tu");
      isVAlidate = false;
    }
    if (data.pass != data.passconfirm) {
      alert("Confirm Password phải giống Password");
      isVAlidate = false;
    }
    if (isVAlidate) {
      userArr.push(data);
      localStorage.setItem("USER_name", JSON.stringify(userArr));
      window.location.href = "../pages/login.html";
      return;
    }
  }
  // function parseUser(userData) {
  //   const user = new User(userData.firstname, userData.lastname, userData.username, userData.password)

  //   return user
  // }
});

// function validateData(data) {
//   const userArr = localStorage.getItem("USER_ARRAY")
//     ? JSON.parse(localStorage.getItem("USER_ARRAY"))
//     : [];
//   const listusename = localStorage.getItem("USER_name")
//     ? JSON.parse(localStorage.getItem("USER_name"))
//     : [];
//    userArr.map(function (usename) {
//     if (data.id === usename.id) {
//       alert("Khong được trung usename đã sử dụng");
//     }
//    });
//   console.log(typeof data.pass.trim().length);
//   let isVAlidate = true;
//   if (data.id.trim().length === 0) {
//     alert("Khong duoc de trong truong UseName!");
//     isVAlidate = false;
//   }
//   if (data.pass.trim().length <= 8) {
//     alert("pass phai tren 8 ky tu");
//     isVAlidate = false;
//   }
//   if (data.pass != data.passconfirm) {
//     alert("Confirm Password phải giống Password");
//     isVAlidate = false;
//   } else {
//     userArr.push(data);
//     return localStorage.setItem("USER_ARRAY", JSON.stringify(data));
//   }
// }
