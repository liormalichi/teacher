const card1 = document.querySelector(".card__inner1")
const card2 = document.querySelector(".card__inner2")
const card3 = document.querySelector(".card__inner3")

card1.addEventListener("click", function(){
    card1.classList.toggle("is-flipped1");
});
card2.addEventListener("click", function(){
    card2.classList.toggle("is-flipped2");
});
card3.addEventListener("click", function(){
    card3.classList.toggle("is-flipped3");
});



const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener('click', ()=>{
        //toggle nav
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) =>{
            if(link.style.animation) {
                link.style.animation ='';
            }
            else{
                link.style.animation =`navLinkFade 0.5s ease forwards ${ 0.4+ index/5}s`
            }
        });   
        //burger animation
        burger.classList.toggle("toggle");
    });    

}

const app = () =>{
    navSlide();

}
app();

const onClickResume = () => {
    const awesome = document.querySelector(".awesome")
    
    awesome.textContent="YOU ARE AWESOME!!!";       
}

const toSection = (num) =>{
    document.getElementById(num).scrollIntoView();
    
}

