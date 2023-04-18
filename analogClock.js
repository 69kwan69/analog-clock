function updateTime() {
    const nowTime = new Date();

    const hour = nowTime.getHours();
    const hourHand = document.querySelector('.hand.hour');
    hourHand.style.rotate = `${hour * 30}deg`;

    const min = nowTime.getMinutes();
    const minHand = document.querySelector('.hand.minute');
    minHand.style.rotate = `${min * 6}deg`;

    const secHand = document.querySelector('.hand.second');
    const sec = nowTime.getSeconds();
    secHand.style.rotate = `${sec * 6}deg`;
}

setInterval(updateTime, 1000);