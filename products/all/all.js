$(document).ready(function(){
    // $(".nav-products").click(function () { 
    //     $(".product-links").toggleClass("active");
    // });
    $(".problematic").click(function () { 
        $(".problem-list").toggleClass("problem-list-active");
    });

    $(".problem-item-all").click(function () {

        $(".problem-title").removeClass("problem-title-active");
        $(".problem-title-all").toggleClass("problem-title-active");

        $(".problem-item-acne").removeClass("problem-item-active");
        $(".problem-item-all").toggleClass("problem-item-active");
        $(".problem-list").removeClass("problem-list-active");
        $(".product").show();
    });

    $(".problem-item-acne").click(function () { 

        $(".problem-title").removeClass("problem-title-active");
        $(".problem-title-acne").toggleClass("problem-title-active");

        $(".problem-item-all").removeClass("problem-item-active");
        $(".problem-item-acne").toggleClass("problem-item-active");

        $(".problem-list").removeClass("problem-list-active");

        $(".product").hide();
        $(".product-acne").show();
    });

});