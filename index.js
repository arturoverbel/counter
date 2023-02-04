const count = () => {
    const a = countdown(new Date(2023, 1, 5, 21, 30, 0, 0));
    document.getElementById("days").innerText = a.days,
        document.getElementById("hours").innerText = a.hours,
        document.getElementById("minutes").innerText = a.minutes,
        document.getElementById("seconds").innerText = a.seconds;

    return a.value

}

const finish =  () => {
    document.getElementById("headline").innerText = "Tiempo del Amor !!";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";

}

(function () {

    if (count() > 0) {finish(); return; }
    
    x = setInterval(() => {
        if (count() > 0) {
            finish()
            clearInterval(x);
        }
    }, 1000)

}());

