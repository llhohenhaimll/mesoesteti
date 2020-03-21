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

    $(".filter-item-face").click(function () { 
        $(".filter-title").removeClass("filter-title-active");
        $(".filter-title-face").toggleClass("filter-title-active");

        $(".filter-item").removeClass("filter-item-active");
        $(".filter-item-face").toggleClass("filter-item-active");

        $(".filter-list").removeClass("filter-list-active");
        $(".filter-svg").removeClass("filter-svg-active");

        $(".product").hide();
        $(".product-face").show();
    });

    $(".filter-item-body").click(function () { 
        $(".filter-title").removeClass("filter-title-active");
        $(".filter-title-body").toggleClass("filter-title-active");

        $(".filter-item").removeClass("filter-item-active");
        $(".filter-item-body").toggleClass("filter-item-active");

        $(".filter-list").removeClass("filter-list-active");
        $(".filter-svg").removeClass("filter-svg-active");

        $(".product").hide();
        $(".product-body").show();
    });

    $(".filter-item-tricology").click(function () { 
        $(".filter-title").removeClass("filter-title-active");
        $(".filter-title-tricology").toggleClass("filter-title-active");

        $(".filter-item").removeClass("filter-item-active");
        $(".filter-item-tricology").toggleClass("filter-item-active");

        $(".filter-list").removeClass("filter-list-active");
        $(".filter-svg").removeClass("filter-svg-active");

        $(".product").hide();
        $(".product-tricology").show();
    });

});