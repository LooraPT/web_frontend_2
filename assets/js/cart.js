const basket = document.querySelector('.basket__header--title');
const basketItems = basket.querySelector('.dropdown__list-basket');
const shopIcon = document.querySelectorAll('[data-item]');
const whatUBuy = [];

if(basket) {
    basket.addEventListener("click", function () {
        basket.classList.toggle('_active')
    });
}

shopIcon.forEach((elem) => {
    elem.addEventListener('click', function () {
        elem.classList.toggle("__active");

        if (!whatUBuy.includes(elem.dataset.item)) {
            whatUBuy.push(elem.dataset.item);
        
        } else {
            whatUBuy.forEach((i, index) => {
                if (elem.dataset.item === i) {
                    whatUBuy.splice(index, 1)
                };
            });
            
        };

        updatecart()
        
    });
});

function updatecart() {
    let data = '';
    let sum = 0;
    
    if (whatUBuy) {
        whatUBuy.forEach((elem) => {
            let a = document.querySelector(`[data-item="${elem}"]`).closest('.shop__hover').querySelector('.shop__text').textContent
            let cena = document.querySelector(`[data-item="${elem}"]`).closest('.col__rano').querySelector('.cena__posiomn').textContent
            let c = cena.replace(/[^.\d]/g, '');
            sum += Number(c);
            data += `<li class="dropdown__link-basket"><span class="minus__item"></span>${a}</li>`
            
        })
    } else {
        data = '<li class="dropdown__link-basket-empty">empty</li>'
        console.log(data)
    }
    basketItems.innerHTML = data;
    basketItems.insertAdjacentHTML("beforeend", `<li class="dropdown__link-basket"><span class="minus__item"></span>Sum: ${sum}</li>`)
    console.log(sum)   
}