const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElemts = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function () {
    console.log('click btnHamburger');

    if (header.classList.contains('open')) { //close hambrger
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElemts.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }

    else { ///open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElemts.forEach(function (element) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });

    }
});

// console.log('Helloworld!')