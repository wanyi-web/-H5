$(function(){
    $(".butDiv").click(function(){
        $(".page1").hide();
        $(".page2").show();
    });
    times = 0;
    $(".ans-p").click(function(){
        var index = $(this).index();
        if (index == 0 && (times == 0)){
            $(".qus-p").eq(0).text("薪");
            times++;
            // console.log(index,times);
        }else if (index == 4 && (times ==1)){
            $(".qus-p").eq(1).text("水");
            console.log(index,times);
            times++;
        }else {
            $("#wrap").addClass("shake");
            //console.log($("#wrap").addClass("shake"));
            window.setTimeout(function() {
                $("#wrap").removeClass("shake");
            }, 400)
        }
    });
});