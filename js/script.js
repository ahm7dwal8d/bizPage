// Header Fixed 
let Header = document.querySelector(".header")


// BurgerIcon Header 


$(".header i").on("click" , function () {

    $(".header ul").slideToggle(1000)

    $(".header ul li a").css("width","fit-content")

})

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


var PortfolioHead = $(".portfolio .container .head button")

PortfolioHead.click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    console.log($(this).data("class"))

    var BoxClass = $(this).data("class")

    $(".portfolio .container .portfolio-content .box").fadeOut()

    $(".portfolio .container .portfolio-content ." + BoxClass).delay(200).fadeIn()

})


let BoxImg = document.querySelectorAll(".portfolio img")

BoxImg.forEach((img) => {

    img.addEventListener("click" , function () {

        let BoxOverly = document.createElement("div");

        BoxOverly.className = "box-overly"

        document.body.appendChild(BoxOverly)

        let box = document.createElement("div")

        box.className = "img-box"

        let overlyimg = document.createElement("img")
        overlyimg.src = img.src;

        box.appendChild(overlyimg)
        
        BoxOverly.appendChild(box)

        let CloseButton = document.createElement("span");
        
        CloseButton.className = "close-button"

        let CloseButtonText = document.createTextNode("X")

        CloseButton.appendChild(CloseButtonText)

        box.appendChild(CloseButton)

        document.addEventListener("click" , (el) => {

            if (el.target.className === "close-button") {

                box.remove()

                BoxOverly.remove()

            }

        })

    })

})


$(".header ul li a").click(function (e) {

    e.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

    var HeaderScroll = $(this).data("scroll")

    console.log("." +HeaderScroll)

    var HeaderHeight = $(".header").innerHeight()

    $("html , body").animate({

        scrollTop: $("." +HeaderScroll).offset().top - HeaderHeight

    })

})

// Button Scroll To Top

$(".up").click(function () {

    $("html , body").animate({

        scrollTop: 0

    } , 600)

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 800) {

        $(".up").show()

    } else {

        $(".up").hide()

    }
})


