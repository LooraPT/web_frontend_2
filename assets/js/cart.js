const basket = document.querySelector('.basket__header--title');
const basketItems = basket.querySelector('.dropdown__list-basket');
const shopIcon = document.querySelectorAll('[data-item]');
data = '';



if(basket) {
    basket.addEventListener("click", function () {
        basket.classList.toggle('_active')
    });
}


shopIcon.forEach((elem) => {
    elem.addEventListener("click", function () {
        
        elem.style.backgroundColor = 'red'
        const a = elem.closest('.shop__hover').querySelector('.shop__text').textContent
        data += `<li class="dropdown__link-basket"><span class="minus__item"></span>${a}</li>`
        
        basketItems.innerHTML = data;

        sumBasket()
    });
})

function sumBasket() {
    const moneyItem = document.querySelectorAll('.col__rano')
    //data += `<li class="dropdown__link-basket"><span class="minus__item"></span>Sum: </li>`
    basketItems.insertAdjacentHTML("beforeend", '<li class="dropdown__link-basket"><span class="minus__item"></span>Sum: </li>')
    
    moneyItem.forEach((elem) => {
        a = elem.querySelector('.cena__posiomn').textContent
        
    })
}