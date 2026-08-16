setInterval(setClock, 1);

const fnd = document.querySelector('.clock')
const reper = document.querySelectorAll('.repere')
const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

let vAleat = 0

fnd.addEventListener('click', () => {
    // const vAleat = Math.floor(Math.random() * 2)
    const fond = document.querySelector(':root')
    const rep = vAleat % 3
    switch (rep % 3) {
        case 0:
            fond.style.setProperty('--imgFond', "url('soldier.png')")
            reper.forEach(element => {
                element.style.setProperty('visibility', 'visible')
            });
            vAleat++
            break;
        case 1:
            fond.style.setProperty('--imgFond', "url('racines.png')")
            vAleat++
            break;
        case 2:
            fond.style.setProperty('--imgFond', "url('')")
            reper.forEach(element => {
                element.style.setProperty('visibility', 'hidden')
            });
            vAleat++
            break;
    }
})

function setClock() {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds();
    const secRatio = (Date.now() / 10000) * 60;

    const minutesRatio = currentDate.getMinutes() + secondsRatio / 60;
    const hoursRatio =
        (secondsRatio / 60 + currentDate.getMinutes()) / 12 +
        currentDate.getHours() * 5;

    setRotation(secondHand, secRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio);
}
