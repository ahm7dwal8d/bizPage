// Header Section   

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

$(".header i").on("click" , function () {

    $(".header ul").slideToggle()


})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 800) {

        $(".header").addClass("active")

    } else {

        $(".header").removeClass("active")

    }

})



// landing Section 

// let laningSection = document.querySelector(".landing ")

// let MyArry = ["1.jpg" , "2.jpg" , "3.jpg" , "4.jpg" , "5.jpg"]

// let RandomNumber = Math.floor(Math.random() * MyArry.length)

// setInterval (function () {

//     let RandomNumber = Math.floor(Math.random() * MyArry.length)

//     laningSection.style.backgroundImage = "url(../images/hero-carousel/"+ MyArry[RandomNumber] +")"
// } , 5000)

let slider = document.querySelector(".landing .slider")

let Slide = slider.getElementsByClassName("slide")

function next() {

    slider.append(Slide[0])

}

function prev() {

    slider.prepend(Slide[Slide.length - 1])

}

$(window).ready(function () {

    $(".landing .hidden").animate({

        opacity: 1

    })


})


// Box Model Section 

$(".box-model .icon i").click(function () {

    $(".box-model").toggleClass("active")

})

$(".box-model .color ul div").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

})

document.body.classList.add(localStorage.getItem("bodycolor"))

let el = document.querySelectorAll(".box-model .color div")

let ColorArrey = []

for (let i = 0; i < el.length; i++) {

    ColorArrey.push(el[i].getAttribute("data-color"))

    el[i].addEventListener("click" , function () {

        document.body.classList.remove(...ColorArrey)

        document.body.classList.add(el[i].getAttribute("data-color"))

        localStorage.setItem("bodycolor" , this.getAttribute("data-color"))

        console.log(localStorage.getItem("bodycolor"))

    })

}

// feature Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".feature").offset().top - 500) {

        $(".feature .top").animate({

            top: 0,

            opacity: 1

        })

        $(".feature .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// About Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".about").offset().top - 400) {

        $(".about .hidden").animate({

            opacity: 1

        })

        $(".about .top").animate({

            top: 0,

            opacity: 1

        })

        $(".about .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// services Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".services").offset().top - 400) {

        $(".services .hidden").animate({

            opacity: 1

        })

        $(".services .left").animate({

            left: 0,

            opacity: 1

        })

        $(".services .top").animate({

            top: 0,

            opacity: 1

        })

        $(".services .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".services .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Skills ProgHolder
let SkillsSction = document.querySelector(".skill")
let SkillsElement = document.querySelectorAll(".skill .prog-holder .prog")

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".skill").offset().top - 400) {

        $(".skill .hidden").animate({

            opacity: 1

        })

        $(".skill .left").animate({

            left: 0,

            opacity: 1

        })

        $(".skill .top").animate({

            top: 0,

            opacity: 1

        })

        $(".skill .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".skill .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

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

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".fact").offset().top - 400) {

        $(".fact .hidden").animate({

            opacity: 1

        })

        $(".fact .left").animate({

            left: 0,

            opacity: 1

        })

        $(".fact .right").animate({

            right: 0,

            opacity: 1

        })

        $(".fact .top").animate({

            top: 0,

            opacity: 1

        })

    }

})

// PortfolioSection Fillter 


$(".portfolio .container .head button").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var Class = $(this).data("class")

    $(".portfolio .container .portfolio-content .box").hide()

    $(".portfolio .container .portfolio-content ." + Class).show()

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

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".portfolio").offset().top - 400) {

        $(".portfolio .hidden").animate({

            opacity: 1

        })

        $(".portfolio .left").animate({

            left: 0,

            opacity: 1

        })

        $(".portfolio .right").animate({

            right: 0,

            opacity: 1

        })

        $(".portfolio .top").animate({

            top: 0,

            opacity: 1

        })

        $(".portfolio .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Client Section 


let clientSlider = document.querySelector(".client .slider")

let clientItems = clientSlider.getElementsByClassName("img")

function clientNext() {

    clientSlider.append(clientItems[0])

}
function clientPrev() {

    clientSlider.prepend(clientItems[clientItems.length - 1])

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".client").offset().top - 400) {

        $(".client .left").animate({

            left: 0,

            opacity: 1

        })

        $(".client .top").animate({

            top: 0,

            opacity: 1

        })

        $(".client .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".client .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Testimonlis Section 

let testSlider = document.querySelector(".testimonials .slider")
let testBox = testSlider.getElementsByClassName("box")

function testNext() {

    testSlider.append(testBox[0])

}
function testPrev() {

    testSlider.prepend(testBox[testBox.length - 1])

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".testimonials").offset().top - 400) {

        $(".testimonials .hidden").animate({

            opacity: 1

        })

        $(".testimonials .left").animate({

            left: 0,

            opacity: 1

        })

        $(".testimonials .top").animate({

            top: 0,

            opacity: 1

        })

        $(".testimonials .right").animate({

            right: 0,

            opacity: 1

        })

        $(".testimonials .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Team Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".team").offset().top - 400) {

        $(".team .hidden").animate({

            opacity: 1

        })

        $(".team .left").animate({

            left: 0,

            opacity: 1

        })

        $(".team .top").animate({

            top: 0,

            opacity: 1

        })

        $(".team .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".team .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Contact Section 

let nameInput = document.querySelector(".contact input[name=name]")

let emailInput = document.querySelector(".contact input[name=mail]")

let subjectInput = document.querySelector(".contact input[name=sub]")

window.onsubmit = function (Event) {

    let Valid = false

    if (Valid === false) {

        Event.preventDefault()

    }

    if (nameInput !== "") {

        localStorage.setItem("UserName" , nameInput.value)

        Valid = true

    }

    if (emailInput !== "") {

        localStorage.setItem("Email" , emailInput.value)

        Valid = true

    }

    if (subjectInput !== "") {

        localStorage.setItem("Subject" , subjectInput.value)

        Valid = true

    }


}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".contact").offset().top - 400) {

        $(".contact .hidden").animate({

            opacity: 1

        })

        $(".contact .left").animate({

            left: 0,

            opacity: 1

        })

        $(".contact .top").animate({

            top: 0,

            opacity: 1

        })

        $(".contact .right").animate({

            right: 0,

            opacity: 1

        })

        $(".contact .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Footer Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".footer").offset().top - 400) {

        $(".footer .hidden").animate({

            opacity: 1

        })

        $(".footer .left").animate({

            left: 0,

            opacity: 1

        })

        $(".footer .top").animate({

            top: 0,

            opacity: 1

        })

        $(".footer .right").animate({

            right: 0,

            opacity: 1

        })

        $(".footer .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

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

window.onscroll = function () {

    if (window.scrollY >= FactSection.offsetTop - 400) {

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

}