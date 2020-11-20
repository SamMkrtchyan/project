$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".scrollToTop").fadeIn(100);
    } else {
      $(".scrollToTop").fadeOut(100);
    }
  });

  $(".scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });
});

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const colorCh = document.querySelectorAll(".colorCh");
const cancelBtn = document.querySelector(".cancel-btn");
const smooth = document.querySelectorAll(".smooth-goto");
const scrollblog = document.querySelectorAll(".scrblog-etc");


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
smooth.forEach(element => {
  element.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  };
});
scrollblog.forEach(element => {
  element.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  };
});
window.onscroll = () => {
  if (this.scrollY >= 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

$(".smooth-goto").on("click", function () {
  $("html, body").animate({ scrollTop: $(this.hash).offset().top - 250 }, 100);
  return false;
});

$(".scrblog-etc").on("click", function () {
  $("html, body").animate({ scrollTop: $(this.hash).offset().top - 110 }, 100);
  return false;
});

// Statistic counter

let counters = document.querySelectorAll('.counter');

counters.forEach(number => {
	let numberTop = number.getBoundingClientRect().top,
  start = +number.innerHTML, end = +number.dataset.target;
    
	window.addEventListener('scroll', function onScroll() {
		if(window.pageYOffset > numberTop - window.innerHeight / 2) {
			this.removeEventListener('scroll', onScroll);
			let interval = setInterval(function() {
				number.innerHTML = ++start;
				if(start == end) {
					clearInterval(interval);
				}
			}, 6);
		}
	});
});

// // Timer
// const timer = (id, deadline) => {
//   const addZero = (num) => {
//     if(num <= 9) {
//       return `0${num}`;
//     } else {
//       return num;
//     }
//   };

//   const getTimeRemaining = (endtime) => {
//     const t = Date.parse(endtime) - Date.parse(new Date()),
//           seconds = Math.floor((t/1000) % 60),
//           minutes = Math.floor((t/1000/60) % 60),
//           hours = Math.floor((t/(1000 * 60* 60)) % 24),
//           days = Math.floor((t/(1000 * 60* 60 *24)));

//     return {
//       'total': t,
//       'days': days,
//       'hours': hours,
//       'minutes': minutes,
//       'seconds': seconds
//     };
//   };

//   const setClock = (selector, endtime) => {
//     const timer = document.querySelector(selector)
//           days = timer.querySelector('.days'),
//           hours = timer.querySelector('.hours'),
//           minutes = timer.querySelector('.minutes'),
//           seconds = timer.querySelector('.seconds'),
//           timeInterval = setInterval(updateClock, 1000);
    
//     updateClock();

//     function updateClock() {
//       const t = getTimeRemaining(endtime);

//       days.textContent = addZero(t.days);
//       hours.textContent = addZero(t.hours);
//       minutes.textContent = addZero(t.minutes);
//       seconds.textContent = addZero(t.seconds);

//       if(t.total <= 0) {
//         days.textContent = "00";
//         hours.textContent = "00";
//         minutes.textContent = "00";
//         seconds.textContent = "00";
        
//         clearInterval(timeInterval);
//       };
//     };
//   };

//   setClock(id, deadline);

// };

// let deadline = '2021-01-01';

// timer('#timer', deadline);


// let deadline2 = '2020-12-12';

// timer('#timer-2', deadline2)

