$('.slider_owl').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: true
        },
        600: {
            items: 3,
            nav: true,
            dots: true
        },
        1000: {
            items: 5
        }
    }
});

// section 5 slider

$('.card_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: true
        },
        600: {
            items: 2,
            nav: true,
            dots: true
        },
        1000: {
            items: 4
        }
    }
});


// section 6 


$('.card2_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: true
        },
        600: {
            items: 2,
            nav: true,
            dots: true
        },
        1000: {
            items: 4
        }
    }
});

// slider 3

$('.founder_slider').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3
        }
    }
});

// popup


var pop = document.querySelector('.pop');
var iconremove = document.querySelector('.pop i');

function popupp() {
    pop.classList.toggle('activepop');
};

iconremove.addEventListener('click', () => {

    pop.classList.remove('activepop');

});

