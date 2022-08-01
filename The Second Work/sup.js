const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown");

//Починаєм дату відрахунку
let countdownDate = new Date(2023, 1, 8 , 22, 50, 0).getTime();

function getCountdownTime(){
    //отримати даний час
    const now = new Date().getTime();

    //Знайти різницю в часі
    const distance = countdownDate - now

    //створюємо змінні в мілісекундах
    const oneDay = 24 * 60 *60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //Підрахунок для днів, годин, хвилин
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    //створюємо масив зі змінними 
    const values = [days, hours, minutes, seconds];

    //Добавляєм значення змінних на сторінку
    items.forEach(function(item, index){
        item.textContent = values[index];
    });
    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class='expired'>Час вийшов</h4>";
    }
}

//Оновлення відрахунка кожну секунду
let countdown = setInterval(getCountdownTime, 1000);

//Ініціалізація даного часу
getCountdownTime();