window.addEventListener('DOMContentLoaded', () => {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 10500;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.changeUSD()
        }

        changeUSD(){
            this.price = (this.price / this.transfer).toFixed(2);
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = 'menu-item';
                element.classList.add(this.classes)
            } else {
                element.forEach(className => {this.classes.add(className)})
            }

            element.innerHTML = `
                    <div class="menu__item">
                        <img src="${this.src}" alt="${this.alt}">
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> $</div>
                        </div>
                    </div>
                `
            this.parent.appendChild(element)
        }
    }

    new MenuCard (
        'img/tabs/audi.jpg',
        'audi',
        'Audi',
        'Немецкая автомобилестроительная компания в составе концерна Volkswagen Group, специализирующаяся на выпуске автомобилей под маркой Audi. Штаб-квартира расположена в городе Ингольштадт (Германия).',
        100000000,
        '.menu .container'
    ).render();

    new MenuCard (
        'img/tabs/bmw.jpg',
        'bmw',
        'BMW',
        'Немецкий производитель легковых автомобилей премиального класса, грузовых автомобилей, автобусов и других транспортных средств, входящая в состав немецкого концерна. Является одним из самых узнаваемых автомобильных брендов во всём мире',
        1000000000,
        '.menu .container'
    ).render();

    new MenuCard (
        'img/tabs/merc.jpg',
        'mers',
        'Mers',
        'Немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов. Председателем компании с 2006 по 2015 год был Норберт Райтхофер, с мая 2015 года — Харальд Крюгер, а с 18 июля 2019 года — Оливер Ципсе.',
        10000000000,
        '.menu .container'
    ).render();
})