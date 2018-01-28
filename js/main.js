(function($) {    
    $(document).ready(function(){
        //After refrash force the page to load at the top
        $(this).scrollTop(0);

        //Responsive menu
        $('#menu-btn').click(function() {
            $("#menu").slideToggle();
        });
    }); 

})(jQuery);
// Smooth scoll page effect
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});