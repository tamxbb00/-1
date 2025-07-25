

document.addEventListener('DOMContentLoaded', function () {

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      420: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }


  });

  const faqheader = document.querySelectorAll(".faq_header");
  var currentlyOpenedContent = null;
  var currentlyOpenedIcon = null;
  faqheader.forEach(faq => {


    faq.addEventListener('click', () => {

      const faqcontent = faq.nextElementSibling;
      const icon = faq.querySelector(".faqicon");

      if (currentlyOpenedContent && currentlyOpenedContent !== faqcontent) {
        currentlyOpenedContent.style.display = 'none';
        currentlyOpenedIcon.textContent = '+';
      }

      if (faqcontent.style.display === 'block') {
        faqcontent.style.display = 'none';
        currentlyOpenedContent = null;
        currentlyOpenedIcon=null;
        icon.textContent = '+';
      }
      else {
        faqcontent.style.display = 'block';
        currentlyOpenedContent = faqcontent;
        currentlyOpenedIcon = icon;
        icon.textContent = '-';
      }

    });

  });

  const menuopenbtn = document.getElementById("menuopen");
  const menuclosebtn = document.getElementById("menuclose");
  const menu_container = document.getElementById("menu_container");

  menuopenbtn.addEventListener("click", () => {

    menu_container.classList.add("active");

  });
  menuclosebtn.addEventListener("click", () => {

    menu_container.classList.remove("active");

  });


  const sb = ScrollReveal({

    duration: 2500,
    delay: 800,
    mobile: false,
    origin: 'bottom',
    distance: '60px',
    // reset:true
  });

  sb.reveal('.hero_container .col:nth-child(1),.header_left,.faq_content_container .col:nth-child(1) .faq_collapse,.about_hero_container .col:nth-child(1),.contact_container .col:nth-child(1)', { origin: 'left' });
  sb.reveal('.hero_container .col:nth-child(2),.header_right,.faq_content_container .col:nth-child(2) .faq_collapse,.about_hero_container .col:nth-child(2),.contact_container .col:nth-child(2)', { origin: 'right' });
  sb.reveal('.categories_card,.course_content_container .course_card,.popular_courses_content_container,.testimonials_content,.footer_logo_container,.footer_list_container,.social_media_btn,address,.team_card,.pagination_container button,.map', { origin: 'bottom' });
  sb.reveal('.section_header_container', { origin: 'bottom', delay: 900 });
  sb.reveal('.section_header_container .main_head', { origin: 'bottom', delay: 900 });
  sb.reveal('.section_header_container .sub_head', { origin: 'bottom', delay: 800 });


});