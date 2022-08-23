//Popoper
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

//Tooltips
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

//Loader
$(document).ready(function () {
    setTimeout(function () {
        var container = $("#myloader");
        container.hide();
    }, 4000)
});
//hide containers when loader loading
$(window).on("load", function (e) {
    var div1 = $("#header");
    var div2 = $("#contents");
    var div3 = $("#userdetails");
    var div4 = $("#users");
    var div5 = $("#progressbar");
    var div6 = $("#months");
    var div7 = $("#paginations");
    div1.hide();
    div2.hide();
    div3.hide();
    div4.hide();
    div5.hide();
    div6.hide();
    div7.hide();
    setTimeout(function () {
        div1.show();
        div2.show();
        div3.show();
        div4.show();
        div5.show();
        div6.show();
        div7.show();
    }, 4000)
})