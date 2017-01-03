document.addEventListener("DOMContentLoaded", function(){
    
    
    var imgindex = 0;
    var littleimgs = $('.gallerybox').children();
    var numberofimgs = littleimgs.length;
    
    var images = $('.galleryimgs').children();
    
    var leftarrow = $('.fa-arrow-circle-left');
    var rightarrow = $('.fa-arrow-circle-right');
    
    console.log(images[0]);
    
    
    function setimage(){
        
        images.addClass('setdisnone');
        
        //images[imgindex].removeClass('setdisnone');
        //dlaczego to nie działa to jeszcze nie rozgryzłem bo obiekt jest dobrze wyznaczony -_-
    }
    
    
    leftarrow.on('click', function(){
        
        if ( imgindex == 0){
            imgindex = numberofimgs - 1;
        } else {
            imgindex -= 1;
        }
        
        setimage();
        
    })
    
    rightarrow.on('click', function(){
        
        if ( imgindex == numberofimgs - 1){
            imgindex = 0;
        } else {
            imgindex += 1;
        }
        
        setimage();
        
    })
    
    
})