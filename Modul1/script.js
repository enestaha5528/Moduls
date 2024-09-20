$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 0,
        stagePadding: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1, // Mobil ekranlarda 1 öğe göster
                nav: false
            },
            600: {
                items: 3, // Orta boy ekranlarda 3 öğe göster
                nav: true
            },
            1000: {
                items: 7, // Geniş ekranlarda 5 öğe göster
            }},
        onChanged: function(event) {
            var items = owl.find('.owl-item');
            var centerIndex = Math.floor((event.item.index + 3) % items.length);
            
            items.css('opacity', '0.5');
            items.css('color', 'black');

            // Ortaya gelen elemana sınıf ekle
            $(items[centerIndex]).addClass('ortaeleman');

            // Diğer tüm öğelerden sınıfı kaldır
            items.not(items[centerIndex]).removeClass('ortaeleman');

            $(items[centerIndex]).css('opacity', '1');
            $(items[centerIndex]).css('color', 'white');
            $(items[centerIndex]).css('font-weight', '700');

            var itemId = $('.ortaeleman > .item').attr('id');
            $('#productImage').attr('src', 'img/' + itemId + '.png'); 
        }
    });

    owl.on('initialized.owl.carousel', function(event) {
        var items = owl.find('.owl-item');
        var centerIndex = Math.floor(event.item.index / 2);
        var centerItem = $(items[centerIndex]);
        centerItem.css('opacity', '1');
        centerItem.addClass('ortaeleman'); // İlk yüklemede de sınıfı ekle
    });
});
