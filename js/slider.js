$(function(){
    $('.partners-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,

        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]

    })
})

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