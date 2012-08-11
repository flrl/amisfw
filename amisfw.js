$(document).ready(function() {
    $("#spacer").css("margin-top", window.innerHeight * 0.45);
    $("#spacer").show();

    $("#submission").show();

    $("#buttonzoomin").bind("click", function() {
        var img = $("#amisfw");
        var p = parseInt(img.css("padding-left"))   +
                parseInt(img.css("padding-right"))  +
                parseInt(img.css("border-left-width"))    +
                parseInt(img.css("border-right-width"));
        var max_w = img.parent().innerWidth() - p;
        var w = img.width() * 1.5;
        if (w > max_w) w = max_w;
        img.animate({ width: w }, 200);
    });

    $("#buttonzoomout").bind("click", function() {
        var img = $("#amisfw");
        var w = img.width() * 0.75;
        if (w <= 16) w = 16;
        img.animate({ width: w }, 200);
    });

    $("#buttonomg").bind("click", function() {
        show_image();
    });

    var url = get_url_from_query(window.location.search);
    show_image(url);
});

$(window).resize(function() {
    $("#spacer").css("margin-top", window.innerHeight * 0.45);
});

function get_url_from_query(q) {
    q = q.replace(/^\?q=/, '');

    if (!q) return;

    q = decodeURIComponent(q);
    if (q.search(/^\w+:\/\//) == -1) {
        q = 'http://' + q;
    }
    return q;
}

function show_image(url) {
    if (url) {
        var img = new Image();
        img.src = url;
        img.id = 'amisfw';
        img.style.width = "16px";

        $("#help").hide();
        $("#output").empty();
        $("#output").append(img);
        $("#output").show();
        $("#buttons").show();
    }
    else {
        $("#buttons").hide();
        $("#output").hide();
        $("#help").show();
    }
}
