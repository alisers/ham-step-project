"use strict"
// Our Services
document.getElementById("section-list-ul").addEventListener("click", function (event) {
    event.preventDefault()
    if (event.target.tagName === "LI") {
        document.getElementsByClassName("list-active")[0].classList.toggle("list-active");
        event.target.classList.toggle("list-active");
        document.getElementsByClassName("section-three")[0].classList.toggle("section-three");
        document.querySelector(`.switch-tab-shown[data-tab=${event.target.dataset.tab}]`).classList.toggle("section-three");
        
    }
});


const filterByCollection = function(collection) {
    const allCards = Array.from(document.getElementsByClassName("filter-card"));
    allCards.forEach(item => item.classList.remove("filter-card-shown"));

    Array.from(collection).forEach(item => item.classList.add("filter-card-shown"));
    preventDefault()
}

const getCollectionByFilterClass = function(filter) {
    const allCards = Array.from(document.getElementsByClassName("filter-card"));
    return allCards.filter(item => item.dataset.filter.includes(filter));
    
    
}

// Our Amazing work

const gallerItems = document.querySelectorAll(".portfolio-div")
const buttonEl = document.querySelector(".section-photo-button")
const tab = document.querySelectorAll(".gallery-ul")

const button = document.querySelector(".gallery")
const graph = document.querySelectorAll("div[data-image='graphic']")

function onClick() {
    gallerItems.forEach(function (item) {
        if(item.classList.contains("portfolio-div-class")){
            item.classList.toggle("active")
            buttonEl.classList.add("active")
        }
            
            
        
   })
   
}

buttonEl.addEventListener("click", onClick)


const listItem = document.querySelector(".gallery-ul")
listItem.addEventListener("click", (event => {
    if (event.target.tagName !== "A") {
        return false;
    };
    let filterClass = event.target.dataset["name"];
    
    gallerItems.forEach(function (item) {
        item.classList.remove("active")
        if (!item.classList.contains(filterClass) && filterClass !== "all") {
            item.classList.add("active")
            buttonEl.classList.add("active")
            
        } 
   })
}))


//What People Say About theHam

let offset = 0
const slide = document.querySelector(".slider-ul");
document.querySelector(".js-button").addEventListener("click", function () {
    offset = offset +178;
    if (offset > 720) {
        offset = 0;
    }
    slide.style.left = -offset + "px"
})



document.querySelector(".ist-img-button").addEventListener("click", function () {
   console.log("alisa");
    offset = offset - 180;
    if (offset < 0) {
        offset = 720;
    }
    slide.style.left = -offset + "px"
})






const miniImagesArray = document.querySelectorAll(".list-li");

// функция, которая возвращает нам индекс выбранной на текущий момент картинки
function getCurrentSliderIndex() {
    for (let i = 0; i < miniImagesArray.length; i++) {
        if (miniImagesArray[i].classList.contains("current")) {
            return i;
        }
    }
}

// эта функция будет менять офсет слайдера в зависимости от переданного индекса
function setSliderOffset(index) {
    let slide = document.querySelector(".slider-ul");
    let offset = index * 178;
    slide.style.left = -offset + "px";
}

// тут достаем UL список с кнопками вперед назад и вешаем на него onclick функцию
document.querySelector(".list-ul").onclick = function(event) {
    // в event.target будет img по которому мы нажали,
    // поэтому чтобы достать элемент LI обращаемся к родительскому элементу img по которому нажали
    let target = event.target.parentElement;

    // проверяем, чтобы картинка на которую нажали НЕ была 'current'
    // и что наш элемент это LI, а не кнопки Next/Prev
    // Если все ок - меняем 'current' и обновляем офсет слайдера
    if (!target.classList.contains("current") && target.tagName === "LI") {
        let currentIndex = getCurrentSliderIndex();
        miniImagesArray[currentIndex].classList.remove("current");
        target.classList.add("current");
        currentIndex = getCurrentSliderIndex();
        setSliderOffset(currentIndex);
    }
};

// логика для кнопки Next
const buttonNext = document.querySelector(".js-button");
buttonNext.addEventListener("click", onButtonNextclick);

function onButtonNextclick() {
    let currentIndex = getCurrentSliderIndex();
    let newIndex = (currentIndex === miniImagesArray.length - 1) ? 0 : currentIndex + 1;
    miniImagesArray[currentIndex].classList.remove("current");
    miniImagesArray[newIndex].classList.add("current");
    setSliderOffset(newIndex);
}

// логика для кнопки Prev
const buttonPrev = document.querySelector(".ist-img-button");
buttonPrev.addEventListener("click", onButtonPrevClick);

function onButtonPrevClick() {
    let currentIndex = getCurrentSliderIndex();
    let newIndex = (currentIndex === 0) ? miniImagesArray.length - 1 : currentIndex - 1;
    miniImagesArray[currentIndex].classList.remove("current");
    miniImagesArray[newIndex].classList.add("current");
    setSliderOffset(newIndex);
}


