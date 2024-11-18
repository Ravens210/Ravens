// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})

// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(5.546039916283439, 95.32112254911011),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

// zoom image
document.addEventListener('DOMContentLoaded', function() {
    const elementclose = document.getElementsByClassName('overlay');

    for (let i = 0; i < elementclose.length; i++) {
        elementclose[i].addEventListener('click', function () {
            // Mendapatkan URL saat ini tanpa hash
            let url = window.location.href.substr(0, window.location.href.indexOf('#'));
            
            // Jika tidak ada hash, gunakan URL penuh
            if (url === '') {
                url = window.location.href; // Fallback ke URL penuh jika tidak ada hash
            }
            
            // Redirect ke URL tanpa hash
            window.location.href = url;
        });
        
        // Menangani klik pada gambar di dalam overlay untuk mencegah penutupan
        const images = elementclose[i].getElementsByTagName('img');
        for (let j = 0; j < images.length; j++) {
            images[j].addEventListener('click', function(event) {
                event.stopPropagation(); // Mencegah event klik dari propagasi ke overlay
            });
        }
    }
});

