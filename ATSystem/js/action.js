$(document).ready(function(){

    /*--- 顯示 TOP 返回頂端 按鈕---*/
    $(document).scroll(function(e){
        var value = $(this).scrollTop();

        if(value>300){
            $("#go-top").addClass("visible");
        }else{
            $("#go-top").removeClass("visible")
        }
    });

    /*--- 在功能選單頁面，點擊功能選單的功能時，關閉整個導覽單 ---*/
    $("body#function-intro").on('click', '#function-menu a', function(e){
        $(this).closest('#function-menu').removeClass('show'); //先關閉功能目錄
        $(this).closest('#hamburger-menu').removeClass('show'); // 在關導覽目錄
    });
});