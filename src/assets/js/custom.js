  $(document).ready(function(){
        var h = $(".middle-middle").height();
        var w = $("#div").width();
        //alert(h);
        $(".middle-left").css("height",h+10);        
        $(".middle-right").css("height",h+10);
        $(".middle-middle").css("height",h+10);

        var h = $(".middle-middle2").height();
        $(".middle-left2").css("height",h+10);        
        $(".middle-right2").css("height",h+10);
        $(".middle-middle2").css("height",h+10);        

        var h = $(".middle-middle-offer").height();
        $(".middle-left-offer").css("height",h+10);        
        $(".middle-right-offer").css("height",h+10);
        $(".middle-middle-offer").css("height",h+10);


        $(".modal").css("display","none");                
// pink
        var h = $(".middle-middle-pink").height();
        //var w = $("#div").width();
        //alert(h);
        $(".middle-left-pink").css("height",h+10);        
        $(".middle-right-pink").css("height",h+10); 

        var sticky = $("#footer").height(); 
        $("#sticky-footer-space").css("height",sticky+5);    //border px keu count kore keu kore na, browser                  

;})
  