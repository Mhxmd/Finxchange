$(document).ready(function() {
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        $("#mainListDiv").fadeIn();
    });

    $(window).scroll(function() {
        var nav = $("nav");
        if ($(this).scrollTop() > 50) {
            nav.addClass("scrolled");
        } else {
            nav.removeClass("scrolled");
        }
    });
});

