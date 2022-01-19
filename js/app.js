document.addEventListener("DOMContentLoaded", function(event) { 
    const card1 = document.querySelector(".card__inner1")
    const card2 = document.querySelector(".card__inner2")
    const card3 = document.querySelector(".card__inner3")
    
    const reco__innerA1 = document.querySelector(".reco__innerA1")
    const reco__innerA2 = document.querySelector(".reco__innerA2")
    const reco__innerA3 = document.querySelector(".reco__innerA3")
    
    // const recoCard1 = document.querySelector(".reco-inner1")
    // const recoCard2 = document.querySelector(".reco-inner2")
    // const recoCard3 = document.querySelector(".reco-inner3")
    // const recoCard4 = document.querySelector(".reco-inner4")
    // const recoCard5 = document.querySelector(".reco-inner5")
    const clickMeCard1 = document.querySelector(".clickMeCard1")
    const clickMeCard2 = document.querySelector(".clickMeCard2")
    const clickMeCard3 = document.querySelector(".clickMeCard3")
    
    const clickMeReco1 = document.querySelector(".clickMeReco1")
    const clickMeReco2 = document.querySelector(".clickMeReco2")
    const clickMeReco3 = document.querySelector(".clickMeReco3")
    
    
    reco__innerA1.addEventListener("click", function(){    
        clickMeReco1.innerHTML = ""
        reco__innerA1.classList.toggle("reco-is-flipped1")
    });
    
    reco__innerA2.addEventListener("click", function(){    
        clickMeReco2.innerHTML = ""
        reco__innerA2.classList.toggle("reco-is-flipped2")
    });
    
    reco__innerA3.addEventListener("click", function(){    
        clickMeReco3.innerHTML = ""
        reco__innerA3.classList.toggle("reco-is-flipped3")
    });
    
    card1.addEventListener("click", function(){
        clickMeCard1.innerHTML = ""
        card1.classList.toggle("is-flipped1");
    });
    
    card2.addEventListener("click", function(){
        clickMeCard2.innerHTML = ""
        card2.classList.toggle("is-flipped2");
    });
    card3.addEventListener("click", function(){    
        clickMeCard3.innerHTML = ""
        card3.classList.toggle("is-flipped3");
    });
    
    
    
    // recoCard1.addEventListener("click", function(){recoCard1.classList.toggle("reco-is-flipped1")})
    // recoCard2.addEventListener("click", function(){recoCard2.classList.toggle("reco-is-flipped2")})
    // recoCard3.addEventListener("click", function(){recoCard3.classList.toggle("reco-is-flipped3")})
    // recoCard4.addEventListener("click", function(){recoCard4.classList.toggle("reco-is-flipped4")})
    // recoCard5.addEventListener("click", function(){recoCard5.classList.toggle("reco-is-flipped5")})
    
    
    
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
    
      });
  
  
