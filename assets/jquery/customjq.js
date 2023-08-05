
//open-search-window-and-clearbtn-txt
$(".opn-search").on("click", function () {
    $(".search-box").addClass("open", 1000);
    $(".clear").hide();
    $('input').keyup(function(){
        if($.trim(this.value).length > 0)
            $(".clear").show()
         else
            $(".clear").hide()
     });

     $(".clear").on("click", function () {
        $(".clear").hide();
     });

});

$(".close").on("click", function () {
    $(".search-box").removeClass("open", 1000);
});

