$('.carousel').carousel({
    interval: 3000
})


const showForm = document.querySelector('.form__wrapper');
const contactUs = document.querySelector('.bottom-btn');
let isOpen = false;
contactUs.addEventListener("click", () => {
    if (!isOpen) {
        showForm.style = "display:block";
        isOpen = !isOpen;
    } else {
        showForm.style = "display:none";
        isOpen = !isOpen
    };

})

/*------filter galareja---*/

$('.features__items').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});
$('.features-menu ul li').click(function () {
    $('.features-menu ul li').removeClass('active');
    $(this).addClass('active');

    let selector = $(this).attr('data-filter');
    $('.features__items').isotope({
        filter: selector
    });
    return false;
});

/*------totop---*/

mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}
