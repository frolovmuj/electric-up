const burger = document.querySelector('#js-burger');
const burgerClose = document.querySelector('#js-burger-close');
const menu = document.querySelector('.header__menu');
burger.addEventListener('click', function () {
  menu.classList.add('header__menu--active');
  burger.classList.add('shake');
});
burgerClose.addEventListener('click', function () {
  menu.classList.remove('header__menu--active');
  burger.classList.remove('shake');
});

const handleQuestionClick = (event) => {
  if (event.target.classList.contains('questions__right-item')) {
    const container = event.target.closest('.questions__right-container');
    const containerText = container.querySelector(
      '.questions__right-description'
    );
    containerText.classList.toggle('questions__right-description-close');
    const plus = container.querySelector('.questions__right-item');
    plus.classList.toggle('questions__right-item-turn-down-degree');
  }
};
document.addEventListener('click', handleQuestionClick);

const anchors = document.querySelectorAll('.btn-to-questions');

anchors.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
