$(document).ready(() => {

    $(".item1").hover(() => {

        $(".item1").css("backgroundColor", "#2980B9");

    }) 

    $(".item1").mouseout(() => {

        $(".item1").css("backgroundColor", "#1A5276");

    }) 

    $(".item2").hover(() => {

        $(".item2").css("backgroundColor", "#2980B9");

    }) 

    $(".item2").mouseout(() => {

        $(".item2").css("backgroundColor", "#1A5276");

    })

    $(".item3").hover(() => {

        $(".item3").css("backgroundColor", "#2980B9");

    }) 

    $(".item3").mouseout(() => {

        $(".item3").css("backgroundColor", "#1A5276");

    })

    $(".item4").hover(() => {

        $(".item4").css("backgroundColor", "#2980B9");
        $("ul").show();

    }) 

    $(".item4").mouseout(() => {

        $(".item4").css("backgroundColor", "#1A5276");
        $("ul").hide();

    })      

}) // end doc ready