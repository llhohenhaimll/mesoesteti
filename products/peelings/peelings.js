$(document).ready(function(){

    $(".filter-inner").click(function () { 
        $(".filter-list").toggleClass("filter-list-active");
        $(".filter-svg").toggleClass("filter-svg-active");
    });

    $(".filter-item-all").click(function () { 
        $(".filter-title").removeClass("filter-title-active");
        $(".filter-title-all").toggleClass("filter-title-active");

        $(".filter-item").removeClass("filter-item-active");
        $(".filter-item-all").toggleClass("filter-item-active");

        $(".filter-list").removeClass("filter-list-active");
        $(".filter-svg").removeClass("filter-svg-active");

        $(".product").show();
    });

    $(".filter-item-surface").click(function () { 
        $(".filter-title").removeClass("filter-title-active");
        $(".filter-title-surface").toggleClass("filter-title-active");

        $(".filter-item").removeClass("filter-item-active");
        $(".filter-item-surface").toggleClass("filter-item-active");

        $(".filter-list").removeClass("filter-list-active");
        $(".filter-svg").removeClass("filter-svg-active");

        $(".product").hide();
        $(".product-surface").show();
    });

    $(".filter-item-comb").click(function () { 
        $(".filter-title").removeClass("filter-title-active");
        $(".filter-title-comb").toggleClass("filter-title-active");

        $(".filter-item").removeClass("filter-item-active");
        $(".filter-item-comb").toggleClass("filter-item-active");

        $(".filter-list").removeClass("filter-list-active");
        $(".filter-svg").removeClass("filter-svg-active");

        $(".product").hide();
        $(".product-comb").show();
    });

    $(".filter-item-mid").click(function () { 
        $(".filter-title").removeClass("filter-title-active");
        $(".filter-title-mid").toggleClass("filter-title-active");

        $(".filter-item").removeClass("filter-item-active");
        $(".filter-item-mid").toggleClass("filter-item-active");

        $(".filter-list").removeClass("filter-list-active");
        $(".filter-svg").removeClass("filter-svg-active");

        $(".product").hide();
        $(".product-mid").show();
    });

});