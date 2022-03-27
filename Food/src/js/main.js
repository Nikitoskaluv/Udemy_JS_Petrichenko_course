
window.addEventListener('DOMContentLoaded', () => {

    //Tabs
    const tabsContent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items');


    function hideTabsContent() {
        tabsContent.forEach((item) => {
            item.classList.remove('show');
            item.classList.add('hide');
        })
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        })
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent()

    tabsParent.addEventListener('click', (event) => {
        target = event.target;
        tabs.forEach((item, i) => {
            if (item == target) {
                hideTabsContent();
                showTabsContent(i);
            }
        });
    })

    //Timer

    const deadline = '2022-03-27';

    function getTimeRemaining(endtime) {
        // const currentTime = new Date();
        // const endtimeRun = new Date(endtime);
        // remainingTime = endtimeRun.getTime() - currentTime.getTime();
        remainingTime = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
            hours = Math.floor((remainingTime / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((remainingTime / 1000 / 60) % 60),
            seconds = Math.floor((remainingTime / 1000) % 60);
        return {
            'total': remainingTime,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');
        timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days),
                hours.innerHTML = getZero(t.hours),
                minutes.innerHTML = getZero(t.minutes),
                seconds.innerHTML = getZero(t.seconds)

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);

    //Modal

    // const modalOpenElements = document.querySelectorAll('[data-modal]'),
    //     modalWindow = document.querySelector('.modal'),
    //     closeElement = document.querySelector('[data-close]');



    // function openModal() {
    //     modalWindow.style.display = "block"
    // }
    // function closeModal() {
    //     modalWindow.style.display = "none"
    // }

    // modalOpenElements.forEach((button) => {
    //     button.addEventListener('click', openModal)
    // });

    // closeElement.addEventListener('click', closeModal);


    const modalTriggers = document.querySelectorAll('[data-modal]'),
        closeBTN = document.querySelector('[data-close]'),
        modalWindow = document.querySelector('.modal');

    function openModal() {
        // modalWindow.classList.add('show');
        // modalWindow.classList.remove('hide');
        modalWindow.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(timerId)
    }
    function closeModal() {
        // modalWindow.classList.add('hide');
        // modalWindow.classList.remove('show');
        modalWindow.classList.toggle('show');
        document.body.style.overflow = '';

    }
    closeBTN.addEventListener('click', closeModal);
    modalTriggers.forEach((btn => {
        btn.addEventListener('click', openModal);
    }));

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    })

    const timerId = setTimeout(openModal, 15000);

    function showModalByScroll() {
        if ((window.pageYOffset + document.documentElement.clientHeight) >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll)
        }
    }
    window.addEventListener('scroll', showModalByScroll);


    // Cards

    class Card {
        constructor(src, alt, title, descr, price, parentEl) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 104;
            this.parentEl = document.querySelector(parentEl);
            this.changeToRub();
        }
        changeToRub() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="menu__item">
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> руб./день</div>
            </div>
        </div>
            `;
            this.parentEl.append(element);
        }
    }

    const srcs = ["img/tabs/vegy.jpg", "img/tabs/elite.jpg", "img/tabs/post.jpg"];
    const alts = ["vegy", "elite", "post"];
    const titles = ['Меню "Фитнес"', 'Меню “Премиум”', 'Меню "Постное"'];
    const descrs = ['Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.'
    ];
    const prices = [2, 5, 4];


    for (let i = 0; i <= 2; i++) {
        new Card(srcs[i], alts[i], titles[i], descrs[i], prices[i], '.menu .container').render();
    }

    // new Card(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.Продукт активных и здоровых людей.Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     229,
    //     '.menu .container'
    // ).render();






})