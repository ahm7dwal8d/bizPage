// Header Fixed 
let Header = document.querySelector(".header")


// BurgerIcon Header 

let BurgerIcon = document.querySelector(".header i")
let Headerlinks = document.querySelector(".header ul")

BurgerIcon.onclick = function () {
    Headerlinks.classList.toggle("active")
}

// Skills ProgHolder
let SkillsSction = document.querySelector(".skill")
let SkillsElement = document.querySelectorAll(".skill .prog-holder .prog")


// Fact Section 

let FactSection = document.querySelector(".fact")
let FactCounte = document.querySelectorAll(".fact .counte")
let Started = false ;

function StartCounter(el) {
    let goal = el.dataset.goal;
    let Counter = setInterval(function () {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(Counter)
        }
    }, 10)
}

window.onscroll = function () {
    if (window.scrollY >= FactSection.offsetTop) {
        if (!Started) {
            FactCounte.forEach((span)=> {
                StartCounter(span)
            })
        }
        Started = true
    }

    // Skill Section 
    let SectionOffsetTop = SkillsSction.offsetTop;
    let SectionOffHeight = SkillsSction.offsetHeight;
    let PageHeight = innerHeight;
    if (window.scrollY > (SectionOffsetTop + SectionOffHeight - PageHeight)) {
        SkillsElement.forEach((div)=> {
            div.style.width = div.dataset.width
        })
    } 
    if (window.scrollY < (SectionOffsetTop + SectionOffHeight - PageHeight)) {
        SkillsElement.forEach((div)=> {
            div.style.width = "0"
        })
    } 
    // Header Fixed
    if (window.scrollY >= 800) {
        Header.classList.add("fixed")
    } else {
        Header.classList.remove("fixed")
    }

}


// landing Section 

let laningSection = document.querySelector(".landing")

let MyArry = ["1.jpg" , "2.jpg" , "3.jpg" , "4.jpg" , "5.jpg"]

let RandomNumber = Math.floor(Math.random() * MyArry.length)

setInterval (function () {

    let RandomNumber = Math.floor(Math.random() * MyArry.length)
    laningSection.style.backgroundImage = "url(../images/hero-carousel/"+ MyArry[RandomNumber] +")"
} , 5000)



// PortfolioSection Fillter 

let PortfolioHead = document.querySelectorAll(".portfolio .container .head button")
let portfolioBoxs = document.querySelectorAll(".portfolio .container .portfolio-content .box")

// Remove Active Class And Add Active To Click Element 

PortfolioHead.forEach((li) => {
    li.addEventListener("click" , RemoveActiveClass)
    li.addEventListener("click" , RemoveBoxs)
})

function RemoveActiveClass() {
    PortfolioHead.forEach((li)=> {
        li.classList.remove("active")
        this.classList.add("active")
    })
}

function RemoveBoxs() {
    portfolioBoxs.forEach((box)=> {
        box.style.display = "none"
    })
    document.querySelectorAll(this.dataset.class).forEach((el)=> {
        el.style.display = "block"
        el.style.transition = "all 0.4s linear"
    })
}