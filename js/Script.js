var body = document.querySelector("body")
var navBar = document.querySelector("nav");

var menuIcon = document.querySelector("#menu");
var closeIcon = document.querySelector("#closeMenu");
var navListOpt = document.querySelectorAll("nav ul li");

menuIcon.addEventListener("click", () => {
    var navList = document.querySelector("nav ul");
    navList.style.transform = "translateY(0)";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";


})

closeIcon.addEventListener("click", () => {
    var navList = document.querySelector("nav ul");
    navList.style.transform = "translateY(-500px)";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
})


window.addEventListener("resize", (a) => {

    var navWidth = a.target.innerWidth;

    navWidth <= 600 ?
        navListOpt.forEach(el => {
            el.addEventListener("click", () => {
                var navList = document.querySelector("nav ul");
                navList.style.transform = "translateY(-500px)";
                menuIcon.style.display = "block";
                closeIcon.style.display = "none";
            })

        }) : navWidth > 600 ?
            navListOpt.forEach(el => {
                el.addEventListener("click", () => {
                    var navList = document.querySelector("nav ul");
                    navList.style.transform = "translateY(0)";
                    menuIcon.style.display = "none";
                    closeIcon.style.display = "none";
                })

            }) : null

})






function typeWriter() {
    var TypeWriters = document.querySelectorAll(".effect_TypeWriter");

    TypeWriters.forEach(el => {

        var i = 0;
        var text = el.innerHTML;
        var textL = text.length;
        el.innerHTML = " ";
        var Bcolor = el.style.color;
        textL < 30 ? el.style.borderRight = '1px solid' + Bcolor : null;
        el.style.animation = 'blink infinite linear .8s';
        var speed = 150;

        function type() {
            el.innerHTML += text.charAt(i);
            i++
            i == textL ? null :

                setTimeout(type, textL > 30 ? speed = 20 : speed);
        }
        type();

    });
}


window.addEventListener('DOMContentLoaded', typeWriter);




function revalup() {
    var revals = document.querySelectorAll('.effect_revalup');

    revals.forEach(el => {
        var windowHight = window.innerHeight;
        var elTop = el.getBoundingClientRect().top;
        var elVisible = 100;
        elTop < windowHight - elVisible ? el.classList.add('effect_revalupActive') :
            el.classList.remove('effect_revalupActive');
    })

}

function revalLeft() {
    var revals = document.querySelectorAll('.effect_revalLeft');

    revals.forEach(el => {
        var windowHight = window.innerHeight;
        var elTop = el.getBoundingClientRect().top;
        var elVisible = 100;
        elTop < windowHight - elVisible ? el.classList.add('effect_revalLeftActive') :
            el.classList.remove('effect_revalLeftActive');
    })

}

function revalRight() {
    var revals = document.querySelectorAll('.effect_revalRight');

    revals.forEach(el => {
        var windowHight = window.innerHeight;
        var elTop = el.getBoundingClientRect().top;
        var elVisible = 100;
        elTop < windowHight - elVisible ? el.classList.add('effect_revalRightActive') :
            el.classList.remove('effect_revalRightActive');
    })

}

function visible() {
    var revals = document.querySelectorAll('.effect_visible');

    revals.forEach(el => {
        var windowHight = window.innerHeight;
        var elTop = el.getBoundingClientRect().top;
        var elVisible = 200;
        elTop < windowHight - elVisible ? el.classList.add('effect_visibleActive') :
            el.classList.remove('effect_visibleActive');
    })

}

function socialshow(){
    var aboutSection=document.querySelector('#about');
    var socialsection=document.querySelector('.socialMediaCont')
    var windowHight = window.innerHeight;
    var elTop = aboutSection.getBoundingClientRect().top;
    var elVisible = 500;
    elTop < windowHight - elVisible ? socialsection.classList.add('socialshow_active') :
    elTop > windowHight - elVisible  ? socialsection.classList.remove('socialshow_active'):
    socialsection.classList.add('socialshow_active');
}




window.addEventListener('scroll', revalup)
window.addEventListener('scroll', revalLeft)
window.addEventListener('scroll', revalRight)
window.addEventListener('scroll', visible)
window.addEventListener('scroll', socialshow)





