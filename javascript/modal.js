$(document).ready(function(){

    var stopAutohide;

    function showWindow(){
        $('#cover').show();

        $('html body').css('overflow','hidden');
    }
    showWindow()

    //stopAutohide = setTimeout(hideWindow,50000);

    function hideWindow(){
        $('#cover').hide();

        $('html body').css('overflow','scroll');
    }

    $("#close-btn").click(function(){
        hideWindow();
        //clearTimeout(stopAutohide);
    })
})