$(function() {
    //$(window).resize(function() {
    //    $("body").css("width",$(window).width()*0.80);
    //});
    //$("body").css("width",$(window).width()*0.80);
    $("body").flowtype({fontRatio:35,minFont:20});
    var pic_real_width, pic_real_height;
    $("figure img").each(function() {; // Get my img elem
                                     var img = $(this);
                                     $("<img/>") // Make in memory copy of image to avoid css issues
                                     .attr("src", $(this).attr("src"))
                                     .load(function() {
                                         pic_real_width = this.width;   // Note: $(this).width() will not
                                         pic_real_height = this.height; // work for in memory images.
                                         if (pic_real_width > $(window).width()) {
                                             img.css("max-width",$(window).width());
                                             img.parent().offset({left:0}).css("max-width",$(window).width());
                                         }
                                         else {
                                             img.parent().offset({left:0}).css("max-width",$(window).width());
                                             var x = $(window).width() - img.width();
                                             img.offset({left:x});
                                         }
                                     });
                                    });
    $("figcaption").css({"font-family":"sans-serif","font-size":"50%","text-align":"right"});
});
