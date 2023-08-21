const userBtn = document.querySelector('.user-btn')
const guestBtn = document.querySelector('.guest-btn')
const formBox = document.querySelector('.form-box')
const body = document.body

guestBtn.addEventListener('click', (e) => {
  formBox.classList.add('active')
  body.classList.add('active')
})

userBtn.addEventListener('click', (e) => {
  formBox.classList.remove('active')
  body.classList.remove('active')
})

// Добавьте этот код для обработки отправки формы входа пользователя
const userForm = document.querySelector('.form_user');
userForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Предотвращаем отправку формы по умолчанию
  const username = userForm.querySelector('.form__input[type="text"]').value;
  const password = userForm.querySelector('.form__input[type="password"]').value;

  // Здесь вы должны реализовать проверку логина и пароля.
  // Предположим, что логин "user" и пароль "password" для примера.
  if (username === 'root' && password === 'root') {
    window.location.href = 'user.html'; // Перенаправляем на страницу пользователя
  }
});

// Добавьте этот код для обработки отправки формы гостя
const guestForm = document.querySelector('.form_guest');
guestForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Предотвращаем отправку формы по умолчанию

  // Здесь можно выполнить какую-либо логику для гостя, если это необходимо.
  // После этого можно перенаправить на страницу гостя.
  window.location.href = 'guest.html'; // Перенаправляем на страницу гостя
});