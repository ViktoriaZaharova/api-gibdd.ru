$('.btn-burger').on('click', function () {
    $('.menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.menu').fadeOut();
});

// активная ссылка меню
$('.menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});

$('.menu-sidebar li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

$('.btn-sidebar').on('click', function () {
   $('.main-sidebar').fadeToggle();
});

$('.sidebar-close').on('click', function () {
    $('.main-sidebar').fadeOut();
});

$('[data-toggle="tooltip"]').tooltip();