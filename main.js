const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const birthday = new Date('2024-12-12T00:00:00'); // дата Дня Рождения

// Основная функция обратного отсчета
function updateCountdown() {
    const now = new Date();
    const timeLeft = birthday - now;

    if (timeLeft <= 0) {
        clearInterval(timerInterval); // Останавливаем таймер
        showBirthdayMessage();        // Показываем поздравление
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

// Показываем сообщение с поздравлением
function showBirthdayMessage() {
    document.getElementById('countdown-container').classList.add('hidden');
    document.getElementById('birthday-message').classList.remove('hidden');
}

// Слайд-шоу
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    if (currentSlide >= slides.length) {
        alert('Все слайды просмотрены!');
        return;
    }
    slides[currentSlide].classList.add('active');
}

// Обработчики событий
document.getElementById('start-slides-btn').addEventListener('click', () => {
    document.getElementById('birthday-message').classList.add('hidden');
    document.getElementById('slides-container').classList.remove('hidden');
    slides[0].classList.add('active');
});

document.querySelectorAll('.next-slide-btn').forEach(button => {
    button.addEventListener('click', showNextSlide);
});

// Запуск таймера обратного отсчёта
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
