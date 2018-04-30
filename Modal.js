$(document).ready(() => {


    $(".modalBtn").click(() => {

        $(".modal").slideDown("fast");
        $(".modalBtn").css("opacity", "0.7");
        $("body").css("backgroundColor","#D7DBDD");

    })


    $(".modalHeader button").click(() => {

        $(".modal").hide();
        $(".modalBtn").css("opacity", "1");
        $("body").css("backgroundColor","white");

    })


    $(".modalFooter button").click(() => {

        $(".modal").hide();
        $(".modalBtn").css("opacity", "1");
        $("body").css("backgroundColor","white");

    }) 


}) // end doc ready