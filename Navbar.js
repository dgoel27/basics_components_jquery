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

    $("li").hover(() => {

        $("ul").show();
        $(".item4").css("backgroundColor", "#2980B9");

    })

    $(".list1").hover(() => {

        $(".list1").css({"backgroundColor":"#515A5A","color":"white"});

    })

    $(".list1").mouseout(() => {

        $(".list1").css({"backgroundColor":"#D5DBDB","color":"black"});

    })    

    $(".list2").hover(() => {

        $(".list2").css({"backgroundColor":"#515A5A","color":"white"});

    })

    $(".list2").mouseout(() => {

        $(".list2").css({"backgroundColor":"#D5DBDB","color":"black"});

    })   

    $(".list3").hover(() => {

        $(".list3").css({"backgroundColor":"#515A5A","color":"white"});

    })

    $(".list3").mouseout(() => {

        $(".list3").css({"backgroundColor":"#D5DBDB","color":"black"});

    })     
}) // end doc ready