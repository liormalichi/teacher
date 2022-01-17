const card1 = document.querySelector(".card__inner1")
const card2 = document.querySelector(".card__inner2")
const card3 = document.querySelector(".card__inner3")
const recoCard1 = document.querySelector(".reco-inner1")
const recoCard2 = document.querySelector(".reco-inner2")
const recoCard3 = document.querySelector(".reco-inner3")
const recoCard4 = document.querySelector(".reco-inner4")
const recoCard5 = document.querySelector(".reco-inner5")

card1.addEventListener("click", function(){
    card1.classList.toggle("is-flipped1");
});

card2.addEventListener("click", function(){
    card2.classList.toggle("is-flipped2");
});
card3.addEventListener("click", function(){
    card3.classList.toggle("is-flipped3");
});

recoCard1.addEventListener("click", function(){recoCard1.classList.toggle("reco-is-flipped1")})
recoCard2.addEventListener("click", function(){recoCard2.classList.toggle("reco-is-flipped2")})
recoCard3.addEventListener("click", function(){recoCard3.classList.toggle("reco-is-flipped3")})
recoCard4.addEventListener("click", function(){recoCard4.classList.toggle("reco-is-flipped4")})
recoCard5.addEventListener("click", function(){recoCard5.classList.toggle("reco-is-flipped5")})



const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener('click', ()=>{
        //toggle nav
        nav.classList.toggle('nav-active')
        console.log("heher")
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

