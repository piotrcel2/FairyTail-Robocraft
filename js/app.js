document.addEventListener("DOMContentLoaded", function(){
    
    var mobileheaderbox = $('#mobileheaderbox');
    
    
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
                // DUŻE OKNO!!!!!
            }
        }
    }


    match_media_with_listener();
    
    
});