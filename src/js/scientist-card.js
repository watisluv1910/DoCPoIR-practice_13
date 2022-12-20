const card = document.querySelector('.scientist-card'),
    cardImg = card.querySelector('.img-container');

cardImg.addEventListener('click', () => {
    card.classList.toggle('active');
});

card.addEventListener('mouseleave', () => {
    card.classList.remove('active');
});