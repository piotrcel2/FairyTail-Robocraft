document.addEventListener("DOMContentLoaded", function(){
    
    var mobileheaderbox = $('#mobileheaderbox');
    var menubutton = $('#menubutton');
    var navsmall = $('.navsmall');
    
    
    function match_media_with_listener() {

        var mq = window.matchMedia("(max-width: 768px)");

        mq.addListener(WidthChange);
        WidthChange(mq);


        function WidthChange(mediaQuery) {

            if (mediaQuery.matches) {
                
                mobileheaderbox.removeClass('setdisnone');
                // MAŁE OKNO
                
            } else {
                
                mobileheaderbox.addClass('setdisnone');
                navsmall.addClass('setdisnone');
                // DUŻE OKNO!!!!!
            }
        }
    }
    
    menubutton.on('click', function(){
        
        navsmall.toggleClass('setdisnone');
    })


    match_media_with_listener();
    
    
});