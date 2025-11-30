// script.js — Практична робота №7 Форма підписки (100 балів)

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const dialog = document.querySelector('dialog');
const userEmailSpan = document.getElementById('user-email');
const closeBtn = document.querySelector('.close-modal');

// Регулярний вираз ТОЧНО з умови завдання
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Зупиняємо перезавантаження сторінки
    
    const email = emailInput.value.trim();

    // Перевірка на порожнє поле
    if (email === '') {
        alert('Будь ласка, введіть email');
        return;
    }

    // Валідація за регулярним виразом
    if (!emailRegex.test(email)) {
        alert('Введіть коректний email (наприклад: example@gmail.com)');
        return;
    }

    // Успіх: ховаємо форму, показуємо <dialog>
    form.style.display = 'none';
    userEmailSpan.textContent = email;
    dialog.showModal();
});

// Закриття діалогу по кнопці
closeBtn.addEventListener('click', function() {
    dialog.close();
    form.style.display = 'flex'; // Повертаємо форму
    emailInput.value = ''; // Очищуємо поле
});

// Закриття по кліку поза діалогом
dialog.addEventListener('click', function(e) {
    if (e.target === dialog) {
        dialog.close();
        form.style.display = 'flex';
        emailInput.value = '';
    }
});
