function darkMode(){
    let element = document.body;
    element.classList.toggle("darkmode");
    console.log("Button Pressed");
}












    // var responsiveSlider = function() {

    //     var slider = document.getElementById("slider");
    //     var sliderWidth = slider.offsetWidth;
    //     var slideList = document.getElementById("slideWrap");
    //     var count = 1;
    //     var items = 11;
    //     var prev = document.getElementById("prev");
    //     var next = document.getElementById("next");
        
    //     window.addEventListener('resize', function() {
    //       sliderWidth = slider.offsetWidth;
    //     });
        
    //     var prevSlide = function() {
    //       if(count > 1) {
    //         count = count - 2;
    //         slideList.style.left = "-" + count * (sliderWidth/10) + "px";
    //         count++;
    //       }
    //       else if(count = 1) {
    //         count = items - 1;
    //         slideList.style.left = "-" + count * (sliderWidth/10) + "px";
    //         count++;
    //       }
    //     };
        
    //     var nextSlide = function() {
    //       if(count < items) {
    //         slideList.style.left = "-" + count * (sliderWidth/10) + "px";
    //         count++;
    //       }
    //       else if(count = items) {
    //         slideList.style.left = "0px";
    //         count = 1;
    //       }
    //     };
        
    //     next.addEventListener("click", function() {
    //       nextSlide();
    //     });
        
    //     prev.addEventListener("click", function() {
    //       prevSlide();
    //     });
        
        
    //     setInterval(function() {
    //       nextSlide()
    //     }, 6000);
    //     };
        
    //     window.onload = function() {
    //     responsiveSlider();  
    //     }
        