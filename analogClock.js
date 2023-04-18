function updateTime() {
    const nowTime = new Date();

    const secHand = document.querySelector('.hand.second');
    const sec = nowTime.getSeconds();
    secHand.style.rotate = `${sec * 6}deg`;

    const min = nowTime.getMinutes();
    const minHand = document.querySelector('.hand.minute');
    minHand.style.rotate = `${min * 6}deg`;

    const hour = nowTime.getHours();
    const hourHand = document.querySelector('.hand.hour');
    hourHand.style.rotate = `${(hour + min / 60) * 30}deg`;
    // this comment is exclusive for 'main' branch only!
}

setInterval(updateTime, 1000);