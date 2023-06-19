/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/

var swiperPopular = new Swiper(".popular__container", {
    spaceBetween:32,
    grabCursor:true,
    centeredSlides:true,
    slidesPreview:'auto',
    loop:true,



    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  


/*=============== VALUE ACCORDION ===============*/
const accordion_items=document.querySelectorAll(".value__accordion-item");
accordion_items.forEach((item) =>{
    const accordion_header=  item.querySelector(".value__accordion-header");
  accordion_header.addEventListener("click",()=>{
    // collect the data which one is open
      const openItem=document.querySelector(".accordion-open");
    //   open the selected one
    toggleItem(item);
    // close the opened one
        if(openItem && openItem!==item){
    
    //      
          toggleItem(openItem);

        }
       

    })
} )
const toggleItem=(item) =>{
   const accordionContent= item.querySelector(".value__accordion-content");
   if(item.classList.contains("accordion-open")){
    accordionContent.removeAttribute('style');
    item.classList.remove("accordion-open");

   }else{
   accordionContent.style.height=accordionContent.scrollHeight +'px';
   item.classList.add("accordion-open");

   }
}



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2200,
  delay:300,
  reset:true
});
sr.reveal('.home__title , .popular__container , .subscribe__container , .footer__container');
sr.reveal('.home__description , .footer__info' , {delay:400});
sr.reveal('.home__search', {delay:500});
sr.reveal('.home__value', {delay:600});
sr.reveal('.home__images' , {delay:700 , origin:'bottom'});
sr.reveal('.logos-img' , {interval:100});
sr.reveal('.contact__content , .value__images' , {origin:'left'});
sr.reveal('.contact__images , .value__content' , {origin:'right'});
/*=============== HOME VALUE AUTOMATIC INCREASE===============*/
let valueDisplays=document.querySelectorAll(".home-value-number");
let interval=3000;
valueDisplays.forEach((valueDisplay) =>{
  let start_data=0;
  let end_data=parseInt(valueDisplay.getAttribute('data-val'));
  let duration = Math.floor(interval/end_data );
  let count= setInterval(()=>{
   start_data += 1;
   valueDisplay.innerHTML = start_data +"k <span>+</span>"
   if(start_data===end_data){
    clearInterval(count);
   }
  },duration)

}

)