
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const digits = [hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1]];

    for (let i = 0; i < 6; i++) {
        const digitElement = document.getElementById(`digit${i + 1}`);
        const digitValue = digits[i];
        const currentDigit = digitElement.innerText;

        if (currentDigit !== digitValue) {
            digitElement.style.backgroundImage = `url(images/${digitValue}.png)`;
        }
    }
}

setInterval(updateClock, 1000);
