const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');


//square
//c.fillRect(100, 100, 100, 100)
//c.fillRect(300, 100, 150, 100)

//line
//c.moveTo(60, 70);
//c.lineTo(300, 90);
//c.strokeStyle = 'red'
//c.stroke();

//circle
c.beginPath();
c.arc(400, 400, 30, 0, Math.PI * 2, false)
c.stroke();

for (let i = 0; i < 100; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;




    c.beginPath();
    c.fillStyle = 'red'
    c.strokeRect(x, y, 100, 100)
}

c.beginPath();
c.fillStyle = 'red'
c.strokeRect(150, 200, 100, 100)


function animate() {
    requestAnimationFrame(animate)
}

animate();















//fillRect(x, y, width, height)
//Рисование заполненного прямоугольника.
//strokeRect(x, y, width, height)
//Рисование прямоугольного контура.
//clearRect(x, y, width, height)
//Очистка  прямоугольной области, делая содержимое совершенно прозрачным