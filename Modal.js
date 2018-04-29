$(document).ready(() => {


    $(".modalBtn").click(() => {

        $(".modal").slideDown("fast");
        $(".modalBtn").css("opacity", "0.5");
        $("body").css("backgroundColor","#DC7633");

    })


    $(".modalHeader button").click(() => {

        $(".modal").hide();
        $(".modalBtn").css("opacity", "1");
        $("body").css("backgroundColor","#D35400");

    })


    $(".modalFooter button").click(() => {

        $(".modal").hide();
        $(".modalBtn").css("opacity", "1");
        $("body").css("backgroundColor","#D35400");

    }) 


}) // end doc ready