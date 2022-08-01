const name = "Bohdan";
let age = 29;

age = 19;

// ! Метод вибірки елемента(getElementById, querySelector)
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav__link");
const btn = document.querySelector("#btn");
console.log(navLinks);


function sayHello() {
    let message = "Hello, " + name;
    console.log(message);
}

sayHello();


function simpleMath(a, b) {
    let result = a + b;
    return result;
}

let sum = simpleMath(11, 22);
console.log(sum);

















// ! Добавити клас-Add; Забрати клас - remove; заміна класу - toggle.

// ! Скорочений запис обробника подій з використанням функції
window.addEventListener('scroll', checkScroll);


document.addEventListener('DOMContentLoaded', function () {
    checkScroll();
});

// !Функція дляобробника подій
function checkScroll() {
    let scrollPos = window.scrollY;
    if (scrollY > 0) {
        header.classList.add('green');
    } else {
        header.classList.remove('green');

    }
};


btn.addEventListener('click', function () {
    console.log('click');
});


// ! Щоб накинути обробник подій на декілька обєктів
for (let navItem of navLinks) {
    navItem.addEventListener('click', function () {
        console.log(navItem.text);
    });
}