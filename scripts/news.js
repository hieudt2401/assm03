"use strict";
let doc = [];
const newContainer = document.querySelector("#news-container");
let currentPage = 1;
let perPage = newPerPage;
let totalPage = doc.length / perPage;
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const api =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0e4999fce3d41fbba13d367ae4f8f0d";
var arr = [];
const btnPrev = document.querySelector(".page-item__prev");
const bntNext = document.querySelector(".page-item__next");
import { newPerPage } from "./setting.js";
function start() {
  getListDoc();
}

start();

function getListDoc(callback) {
  fetch(api)
    .then(function (response) {
      return response.json();
    })
    .then(function (docs) {
      arr = docs.articles;
      doc = arr.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
      );
      renderDocs();
      renderPageNum();
    })
    .then(callback);
}

function renderDocs() {
  const htmls = doc.map(function (doc) {
    return `<div class="card flex-row flex-wrap">
      <div class="card mb-3" style="">
          <div class="row no-gutters">
              <div class="col-md-4">
                  <img src="${doc.urlToImage}"
                      class="card-img"
                      alt="${doc.content}">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title">${doc.title}</h5>
                      <p class="card-text">${doc.description}</p>
                      <a href="${doc.url}"
                          class="btn btn-primary">View</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
      `;
  });
  newContainer.innerHTML = htmls.join("");
}

function renderPageNum() {
  totalPage = arr.length / perPage;
  for (let i = 1; i <= totalPage; i++) {
    document.querySelector(".item-num").innerHTML += `
    <li data-num="${i}" onclick="handlePageNum(${i})" class="page-item page-item__num disabled">
    <a class="page-link" id="page-num-${i}">${i}</a>
  </li>`;
  }
}

function handlePageNum(num) {
  totalPage = arr.length / perPage;
  currentPage = num;
  if (currentPage === totalPage) {
    bntNext.classList.add("hiden");
  } else bntNext.classList.remove("hiden");
  if (currentPage === 1) {
    btnPrev.classList.add("hiden");
  } else btnPrev.classList.remove("hiden");
  const item = document.querySelectorAll(".page-link");
  for (let i = 1; i <= item.length - 1; i++) {
    item[i].classList.remove("item-active");
  }
  const itemNum = document.querySelector("#page-num-" + num);
  itemNum.classList.add("item-active");
  doc = arr.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  renderDocs();
}
bntNext.onclick = function () {
  currentPage++;
  btnPrev.classList.remove("hiden");
  if (currentPage === totalPage) {
    bntNext.classList.add("hiden");
  } else bntNext.classList.remove("hiden");
  const item = document.querySelectorAll(".page-link");
  for (let i = 1; i <= item.length - 1; i++) {
    item[i].classList.remove("item-active");
  }
  const itemNum = document.querySelector("#page-num-" + currentPage);
  itemNum.classList.add("item-active");
  doc = arr.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  renderDocs();
  console.log(currentPage);
};
btnPrev.onclick = function () {
  currentPage--;
  bntNext.classList.remove("hiden");
  if (currentPage === 1) {
    btnPrev.classList.add("hiden");
  } else btnPrev.classList.remove("hiden");
  const item = document.querySelectorAll(".page-link");
  for (let i = 1; i <= item.length - 1; i++) {
    item[i].classList.remove("item-active");
  }
  const itemNum = document.querySelector("#page-num-" + currentPage);
  itemNum.classList.add("item-active");
  doc = arr.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  renderDocs();
};
