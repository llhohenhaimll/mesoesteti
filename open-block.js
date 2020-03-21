$(document).ready(function(){

    $(".nav-products").click(function () { 
        $(".product-links").toggleClass("active");
        $(".nav-products").toggleClass("nav-norm-active");
    });

    $(".burger").click(function () { 
        $(".burger").toggleClass("burger-active");
        $(".nav-links").toggleClass("nav-active");
    });

});