/*global $, console, alert*/
$(function () {
    "use strict";
    //Adjust Header height
    var myHeader = $("header");
    myHeader.height($(window).height());
    $(window).resize(function () {
        myHeader.height($(window).height());
    });
    //links add class active
    $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});

