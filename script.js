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


// 1. Use $('.navTrigger') to toggle the navigation menu selector.
//Event: select
//Actions: The script switches the active class on an element that has the class navTrigger on it when the element is clicked. Depending on your CSS, you might utilize this to show whether the menu is open or closed.
//"Clicked menu" is recorded to the console.
//When an element with the ID mainListDiv is toggled, the show_list class is activated. Most commonly, this is used to display or hide the menu.
//The mainListDiv is displayed smoothly with the use of fadeIn(). Keep in mind that although fadeIn() offers a smooth transition, it may be unnecessary in this case if show_list manages visibility.
//2. The Navigation Selector's Scroll Effect: $(window)
//Event: scroll
//Actions: The script uses $(this) to verify the vertical scroll position when the window is scrolled.scrollTop().
//The scrolled class is added to the nav element if the scroll position is more than 50 pixels. Applying several styles when the user scrolls down the page might be done with this.
//The scrolled class is removed from the nav element if the scroll position is less than or equal to 50 pixels.





