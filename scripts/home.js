"use strict";
const loginmodal = document.querySelector("#login-modal");
var maincontent = document.querySelector("#main-content");

renderuserArr();
const submitBT = document.querySelector(".btn_logout");

btnLogout();

function btnLogout() {
  submitBT.onclick = function () {
    localStorage.removeItem("USER_namelogin");
    loginmodal.classList.remove("hiden");
    maincontent.classList.add("hiden");
  };
}
function renderuserArr() {
  let userArrlogin = localStorage.getItem("USER_namelogin")
    ? JSON.parse(localStorage.getItem("USER_namelogin"))
    : [];
  var maincontent = document.querySelector("#main-content");
  var htmls = userArrlogin.map(function (user) {
    if (localStorage.getItem("USER_name")) {
      loginmodal.classList.add("hiden");
      return ` <div id="main-content">
      <p id="welcome-message">welcome ${user.id}</p>
      
	<button class="btn_logout" onclick="deleteItem()">logout</button>
    </div>
              
              `;
    }
  });
  maincontent.innerHTML = htmls.join("");
}
