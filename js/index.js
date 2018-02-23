function fillMeter(percent) {
      var pixels = (percent/100) * 90;
      $(".fill").css('top', (90-pixels) + "px");
      $(".level").css('top', (77-pixels) + "px"); 
      $(".fill").css('height', pixels + "px");
      
      
         if (percent <= 0) {
            $(".level").css("top", "67px");
            $(".level").text("Beginner");
        } else if (percent <= 25) {
            $(".fill").css('background', "#FF6D3E");
            $(".level").text("Beginner");
        } else if (percent <= 50) {
            $(".fill").css('background', "#F2C548");
            $(".level").text("Intermediate");
        } else if (percent <= 75) {
            $(".fill").css('background', "#2F9CE1");
            $(".level").text("Expert");
        } else if (percent <= 100) {
            $(".level").text("All Star");
            $(".fill").css('background', "#287EB6");
        } else if (percent <= 99) {
            $(".level").css("top", "0");
        }
      
}

fillMeter(65);