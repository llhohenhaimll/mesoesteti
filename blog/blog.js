$(document).ready(function(){

    $(".filter-inner").click(function () { 
        $(".blog-list").toggleClass("blog-list-active");
        $(".filter-svg").toggleClass("filter-svg-active");
    });

    $(".blog-item-all").click(function () { 
        $(".blog-title").removeClass("blog-title-active");
        $(".blog-title-all").toggleClass("blog-title-active");

        $(".blog-item").removeClass("blog-item-active");
        $(".blog-item-all").toggleClass("blog-item-active");

        $(".blog-list").removeClass("blog-list-active");
        $(".filter-svg").removeClass("filter-svg-active");

        $(".post").show();
    });

    $(".blog-item-skin").click(function () { 
        $(".blog-title").removeClass("blog-title-active");
        $(".blog-title-skin").toggleClass("blog-title-active");

        $(".blog-item").removeClass("blog-item-active");
        $(".blog-item-skin").toggleClass("blog-item-active");

        $(".blog-list").removeClass("blog-list-active");
        $(".filter-svg").removeClass("filter-svg-active");

        $(".post").hide();
        $(".post-skin").show();
    });

    $(".blog-item-events").click(function () { 
        $(".blog-title").removeClass("blog-title-active");
        $(".blog-title-events").toggleClass("blog-title-active");

        $(".blog-item").removeClass("blog-item-active");
        $(".blog-item-events").toggleClass("blog-item-active");

        $(".blog-list").removeClass("blog-list-active");
        $(".filter-svg").removeClass("filter-svg-active");

        $(".post").hide();
        $(".post-event").show();
    });

    $(".blog-item-new").click(function () { 
        $(".blog-title").removeClass("blog-title-active");
        $(".blog-title-new").toggleClass("blog-title-active");

        $(".blog-item").removeClass("blog-item-active");
        $(".blog-item-new").toggleClass("blog-item-active");

        $(".blog-list").removeClass("blog-list-active");
        $(".filter-svg").removeClass("filter-svg-active");

        $(".post").hide();
        $(".post-new").show();
    });

});