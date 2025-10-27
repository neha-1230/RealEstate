var search_type_btn = document.querySelectorAll(".search_type_btn");

search_type_btn.forEach((search_btn)=>{
    search_btn.addEventListener("click",()=>{
        search_type_btn.forEach((btn)=>{btn.classList.remove("active")});
        search_btn.classList.add("active");
    })
})


document.addEventListener('DOMContentLoaded',() => {
    var tabsbtn = document.querySelectorAll(".menu_list li button");
    var tabs = document.querySelectorAll(".featured_tab");

    tabsbtn.forEach((tabbtn)=>{
        tabbtn.addEventListener("click",()=>{
            tabsbtn.forEach((btn)=>{btn.classList.remove("active")});
            tabs.forEach((tab)=>{tab.classList.remove("active")});

            document.getElementById(tabbtn.data.tab).classList.add("active");
            tabbtn.classList.add("active");
        })
    })
})



var swiper = new Swiper(".citiesSwiper", {
      spaceBetween: 30,
    //   centeredSlides: true,
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
});


var swiper = new Swiper(".testSwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
  });


var swiper = new Swiper(".brandSwiper", {
      spaceBetween: 30,
    //   centeredSlides: true,
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
});


var open_menu = document.querySelector("#open_menu");
var close_menu = document.querySelector("#close_menu");
var navbar = document.querySelector("#navbar");

open_menu.addEventListener("click", ()=>{
  navbar.classList.add("active");
})

close_menu.addEventListener("click", ()=>{
  navbar.classList.remove("active");
})