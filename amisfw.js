$(document).ready(function(){
    $("#submission").show();

    var url = get_url_from_query(window.location.search);
    if (url) show_image(url);
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
        window.alert("got url: " + url);
        var img = new Image();
        img.src = url;
        img.id = 'amisfw';
        img.width = 16;

        $("#output").append(img);
        $("#output").show();
    }
    else {
        $("#output").hide();
    }
}
