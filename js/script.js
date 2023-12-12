let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  searchIcon.classList.remove("fa-times");
  searchForm.classList.remove("active");
};

let searchIcon = document.querySelector("#search-icon");
let searchForm = document.querySelector(".search-form");

searchIcon.onclick = () => {
  searchIcon.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  searchIcon.classList.remove("fa-times");
  searchForm.classList.remove("active");
};

let mainText = document.querySelector("h1");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value < 100) {
    mainText.style.animation = "disappear 1s ease-out forwards";
  } else {
    mainText.style.animation = `slide 1s ease-out`;
  }
});

let posttext = document.querySelector(".post");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value < 200) {
    posttext.style.animation = "appear 1s ease-out";
  } else {
    posttext.style.animation = `fadein 1s ease-out`;
  }
});

(function ($) {
  "use strict";
  $(function () {
    function animated_contents() {
      $(".zt-skill-bar > div ").each(function (i) {
        var $this = $(this),
          skills = $this.data("width");

        $this.css({ width: skills + "%" });
      });
    }

    if (jQuery().appear) {
      $(".zt-skill-bar")
        .appear()
        .on("appear", function () {
          animated_contents();
        });
    } else {
      animated_contents();
    }
  });
})(jQuery);

document.querySelectorAll(".toolbar a").forEach((aE1) =>
  aE1.addEventListener("click", function (e) {
    e.preventDefault();
    const command = aE1.dataset.command;

    if (command == "h1" || command == "h2" || command == "h3") {
      document.execCommand("formatBlock", false, command);
    } else {
      document.execCommand(command);
    }
  })
);

const slides = document.querySelector(".slides"); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll(".slides li"); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector(".prev"); //이전 버튼
const next = document.querySelector(".next"); //다음 버튼
const slideWidth = 500; //한개의 슬라이드 넓이
const slideMargin = 100; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = (slideWidth + slideMargin) * slideCount + "px";

function moveSlide(num) {
  slides.style.left = -num * 400 + "px";
  currentIdx = num;
}

prev.addEventListener("click", function () {
  /*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener("click", function () {
  /* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});

let btn1 = document.querySelector("#contact #btn-1");
let btn2 = document.querySelector("#contact #btn-2");
let btn3 = document.querySelector("#contact #btn-3");

btn1.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('images/img1.jpg)";
});

btn2.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('images/img2.jpg)";
});

btn3.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('images/img3.jpg)";
});

setInterval(function () {
  $("#slide1>ul").delay(2500);
  $("#slide1>ul").animate({ marginLeft: "-1200px" });
  $("#slide1>ul").delay(2500);
  $("#slide1>ul").animate({ marginLeft: "-2400px" });
  $("#slide1>ul").delay(2500);
  $("#slide1>ul").animate({ marginLeft: "0px" });
});

element = document.getElementById("hey");

element.addEventListener(
  "click",
  function (e) {
    e.preventDefault;

    // -> removing the class
    element.classList.remove("bounce");

    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    element.offsetWidth = element.offsetWidth;

    // -> and re-adding the class
    element.classList.add("bounce");
  },
  false
);
