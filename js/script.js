// jquery tolong carikan saya el pg-scrl kalo nemu
$('.page-scroll').on('click', function (e) {

    // ambil href
    var tujuan = $(this).attr('href');
    //elemen yang bersangkutan
    var elemenTujuan = $(tujuan);


    //move the scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 888, 'easeInOutQuart');


    e.preventDefault();

});