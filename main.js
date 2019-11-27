
const ONE_SECOND = 1000;

function getCurrentTime() {
    // Definiuje zmienną, która pobiera zbiór informacji
    const dzisiaj = new Date();

    const dzien = dzisiaj.getDate();
    const miesiac = dzisiaj.getMonth() + 1;
    const rok = dzisiaj.getFullYear();

    const godzina = dzisiaj.getHours();
    const minuta = dzisiaj.getMinutes();
    const sekunda = dzisiaj.getSeconds();

    return dzien + "/" + miesiac + "/" + rok + " " + godzina + ":" + minuta + ":" + sekunda;
}

function displayCurrentTime() {
    const $clock = document.querySelector('#zegar');
    $clock.textContent = getCurrentTime();
}

function main() {
    displayCurrentTime();
    setInterval(displayCurrentTime, ONE_SECOND);
}

main();

