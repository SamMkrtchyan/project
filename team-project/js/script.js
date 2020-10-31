// const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 750 ||
//     document.documentElement.scrollTop > 750
//   ) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   //   pure js
//   //   document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   //   document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   $("html,body").animate({ scrollTop: 0 }, "slow"); //fast jQuery
// }

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const colorCh = document.querySelectorAll(".colorCh");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  if (this.scrollY >= 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

//               ----scroll using jquery----
// $(function () {
//   $(".nav a").on("click", function () {
//     $("html, body").animate(
//       { scrollTop: $($.attr(this, "href")).offset().top },
//       500
//     );
//   });
// });
