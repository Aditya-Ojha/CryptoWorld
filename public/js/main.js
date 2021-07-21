const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}


// document.querySelector('.popular-tags').style.background="black";

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

// signin -------------login-------
// const el = document.getElementById('loged');
// const list = document.getElementById('navList');
// let items = list.childNodes;
// let i;
// for (i = 0, size = items.length - 1; i < size - 1; i++) {
// }
// if (el.className === "sign") {
//   items[i].innerHTML = "<a href='signup'>Signin/Login</a>";
// } else {
//   items[i].innerHTML = "👤<%=user%> <div onclick='logout()'><a href='#' >Logout</a></div>"

// }
// function logout() {
//   items[i].innerHTML = "<a href='signup'>Signin/Login</a>";
// }
// //      SignUp---------------


// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//     moreText.style.fontFamily = "Lexend";
//   }
// }
// function myFunction2() {
//   var dots = document.getElementById("dots2");
//   var moreText = document.getElementById("more2");
//   var btnText = document.getElementById("myBtn2");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//     moreText.style.fontFamily = "Lexend";
//   }
// }

// function myFunction3() {
//   var dots = document.getElementById("dots3");
//   var moreText = document.getElementById("more3");
//   var btnText = document.getElementById("myBtn3");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//     moreText.style.fontFamily = "Lexend";
//   }
// }

// function myFunction4() {
//   var dots = document.getElementById("dots4");
//   var moreText = document.getElementById("more4");
//   var btnText = document.getElementById("myBtn4");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//     moreText.style.fontFamily = "Lexend";
//   }
// }

// let slide_data = [
//   {

//     'src': 'https://source.unsplash.com/1600x900/?cryptocurrencies,bitcoin,trading',
//     'title': 'An Introduction to Cryptocurrency.',
//     'copy': ''
//   },
//   {
//     'src': 'https://source.unsplash.com/1600x900/?cryptocurrencies,coin,finance',
//     'title': 'Cryptocurrency & Legal Ethics',
//     'copy': ''
//   },
//   {
//     'src': 'https://source.unsplash.com/1600x900/?cryptocurrencies,money,Electronic',
//     'title': 'FinCEN and State Money Transmitter Regulations.',
//     'copy': ''
//   },
//   {
//     'src': 'https://source.unsplash.com/1600x900/?cryptocurrencies,crypto,gold',
//     'title': 'The Intersection of Cryptocurrency',
//     'copy': 'This is a new day'
//   },

// ];
// let slides = [],
//   captions = [];

// let autoplay = setInterval(function () {
//   nextSlide();
// }, 5000);
// let container = document.getElementById('container2');
// let leftSlider = document.getElementById('left-col2');
// // console.log(leftSlider);
// let down_button = document.getElementById('down_button2');
// // let caption = document.getElementById('slider-caption');
// // let caption_heading = caption.querySelector('caption-heading');

// down_button.addEventListener('click', function (e) {
//   e.preventDefault();
//   clearInterval(autoplay);
//   nextSlide();
//   autoplay;
// });

// for (let i = 0; i < slide_data.length; i++) {
//   let slide = document.createElement('div'),
//     caption = document.createElement('div'),
//     slide_title = document.createElement('div');

//   slide.classList.add('slide');
//   slide.setAttribute('style', 'background:url(' + slide_data[i].src + ')');
//   caption.classList.add('caption');
//   slide_title.classList.add('caption-heading');
//   slide_title.innerHTML = '<h1>' + slide_data[i].title + '</h1>';

//   switch (i) {
//     case 0:
//       slide.classList.add('current');
//       caption.classList.add('current-caption');
//       break;
//     case 1:
//       slide.classList.add('next');
//       caption.classList.add('next-caption');
//       break;
//     case slide_data.length - 1:
//       slide.classList.add('previous');
//       caption.classList.add('previous-caption');
//       break;
//     default:
//       break;
//   }
//   caption.appendChild(slide_title);
//   caption.insertAdjacentHTML('beforeend', '<div class="caption-subhead"><span>dolor sit amet, consectetur adipiscing elit. </span></div>');
//   slides.push(slide);
//   captions.push(caption);
//   leftSlider.appendChild(slide);
//   container.appendChild(caption);
// }
// // console.log(slides);

// function nextSlide() {
//   // caption.classList.add('offscreen');

//   slides[0].classList.remove('current');
//   slides[0].classList.add('previous', 'change');
//   slides[1].classList.remove('next');
//   slides[1].classList.add('current');
//   slides[2].classList.add('next');
//   let last = slides.length - 1;
//   slides[last].classList.remove('previous');

//   captions[0].classList.remove('current-caption');
//   captions[0].classList.add('previous-caption', 'change');
//   captions[1].classList.remove('next-caption');
//   captions[1].classList.add('current-caption');
//   captions[2].classList.add('next-caption');
//   let last_caption = captions.length - 1;

//   // console.log(last);
//   captions[last].classList.remove('previous-caption');

//   let placeholder = slides.shift();
//   let captions_placeholder = captions.shift();
//   slides.push(placeholder);
//   captions.push(captions_placeholder);
// }

// let heading = document.querySelector('.caption-heading');


// // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
// function whichTransitionEvent() {
//   var t,
//     el = document.createElement("fakeelement");

//   var transitions = {
//     "transition": "transitionend",
//     "OTransition": "oTransitionEnd",
//     "MozTransition": "transitionend",
//     "WebkitTransition": "webkitTransitionEnd"
//   }

//   for (t in transitions) {
//     if (el.style[t] !== undefined) {
//       return transitions[t];
//     }
//   }
// }

// var transitionEvent = whichTransitionEvent()
// caption.addEventListener(transitionEvent, customFunction);

// function customFunction(event) {
//   caption.removeEventListener(transitionEvent, customFunction);
//   console.log('animation ended');

  // Do something when the transition ends
// }

// *************SIGNUP - LOGIN*******************
document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
