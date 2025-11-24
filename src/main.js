import './css/style.scss';

addEventListener("DOMContentLoaded", () => {
  const popularVacancy = document.querySelector('.popular-vacancy');
  const applyButtons = popularVacancy.querySelectorAll('.card__btn-plane');
  const swiper = new Swiper('.popular-vacancy__slider', {
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 'auto',
      },
      1231: {
        slidesPerView: 4,
      }
    },
    navigation: {
      prevEl: '.popular-vacancy__prev .button',
      nextEl: '.popular-vacancy__next .button',
    },
  });

  if (popularVacancy) {
    const likeButtons = popularVacancy.querySelectorAll('.card__btn-like');

    likeButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('card__btn-like--active');
      });
    });


    applyButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (document.querySelector('.success-alert')) {
          return;
        }

        const alert = document.createElement('div');
        alert.className = 'success-alert';
        alert.textContent = 'Отклик успешно отправлен';
        document.body.appendChild(alert);

        setTimeout(() => {
          if (alert.parentNode) {
            alert.parentNode.removeChild(alert);
          }
        }, 2000);
      });
    });
  }
});
