"use strict";
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSubmitST = document.getElementById("btn-submit");
newPerPage();
function newPerPage() {
  this.perpage = function () {
    return inputPageSize.value;
  };
}
btnSubmitST.addEventListener("click", function () {
  newPerPage();
});
module.exports = newPerPage;
