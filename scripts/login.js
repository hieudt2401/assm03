"use strict";
const inputUserName = document.getElementById("input-username");
const inputPassWord = document.getElementById("input-password");
const btnsubmit = document.getElementById("btn-submit");

btnsubmit.addEventListener("click", function (e) {
  let userArr = localStorage.getItem("USER_name")
    ? JSON.parse(localStorage.getItem("USER_name"))
    : [];
  const data1 = {
    id: inputUserName.value,
    pass: inputPassWord.value,
  };
  inputUserName.value = "";
  inputPassWord.value = "";
  validateData(data1);
  function validateData(data1) {
    let userArrlogin = localStorage.getItem("USER_namelogin")
      ? JSON.parse(localStorage.getItem("USER_namelogin"))
      : [];
    let isVAlidate = true;
    for (let i = 0; i < userArr.length; i++) {
      const usename = userArr[i];
      if (data1.id != usename.id && data1.pass != usename.pass) {
        alert("tai khoan hoac mk khong dung");
        isVAlidate = false;
        break;
      }
      if (isVAlidate) {
        userArrlogin.push(data1);

        localStorage.setItem("USER_namelogin", JSON.stringify(userArrlogin));

        window.location.href = "../index.html";
      }
    }

    // if (localStorage.getItem("USER_name")) {
    //   row.remove("col-md-3");
    // }
  }
});
