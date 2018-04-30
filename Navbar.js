$(document).ready(() => {

    var menuFlag = 1;

    $(".menu").click(() => {

        if(menuFlag%2 == 1) {
            $(".item2").show();
            $(".item3").show();
            $(".item4").show();
            $(".item5").show();
            $(".item6").show();
            $(".item7").show();
        }
        else {
            $(".item2").hide();
            $(".item3").hide();
            $(".item4").hide();
            $(".item5").hide();
            $(".item6").hide();
            $(".item7").hide();            
        }

        menuFlag++;

    })

    $(".item2").hover(() => {

        $(".item2").css("backgroundColor", "#2980B9");

    }) 

    $(".item2").mouseout(() => {

        $(".item2").css("backgroundColor", "#1F618D");

    })

    $(".item3").hover(() => {

        $(".item3").css("backgroundColor", "#2980B9");

    }) 

    $(".item3").mouseout(() => {

        $(".item3").css("backgroundColor", "#1F618D");

    })

    $(".item4").hover(() => {

        $(".item4").css("backgroundColor", "#2980B9");

    }) 

    $(".item4").mouseout(() => {

        $(".item4").css("backgroundColor", "#1F618D");

    })      
  
}) // end doc ready