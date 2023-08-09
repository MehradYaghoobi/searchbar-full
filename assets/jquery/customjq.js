
//open-search-window-and-clearbtn-txt
$(".opn-search").on("click", function () {
    $(".search-box").addClass("open", 1000);
    $('input').keyup(function(){
        if($.trim(this.value).length > 0)
            $(".clear").show();
         else
            $(".clear").hide();
     });

     $(".clear").on("click", function () {
        $(".clear").hide();
     });

});

$(".close").on("click", function () {
    $(".search-box").removeClass("open", 1000);
});



//change lang
$(".change-lang").on("click", function () {
    if($(".change-lang").text().trim() == "change(rtl)")
    {
        $("#lang-style").attr('href','assets/css/style-rtl.css');
        $(".change-lang").text("change(ltr)");
    }else{
        $("#lang-style").attr('href','assets/css/style-ltr.css');
        $(".change-lang").text("change(rtl)");
    }
});
