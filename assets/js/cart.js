const basket = document.querySelector('.basket__header--title');
const shopIcon = document.querySelectorAll('[data-item]');


if(basket) {
    basket.addEventListener("click", function () {
        basket.classList.toggle('_active')
    });
}


shopIcon.forEach((elem) => {
    elem.addEventListener("click", function () {
        elem.style.backgroundColor = 'red'
    });
})