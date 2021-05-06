$('#submit').bind('click', () => { Play() });
$('h3').css("display", "none");
$('h1').css("display", "none");


function Play() {
    var inputData = $("#datainput")[0];
    console.log(inputData);

    $.ajax({
        url: ("https://api.nasa.gov/planetary/apod?api_key=Z3TXgo1zRHOh4pkrGTWqeuAjCrpB7uGXNQqyOM65" + "&date=" + inputData.value),
        success: function (result) {
            console.log(result);
            getPic(result);
        }
    });
}


function go() {
    var box = document.querySelector('.box');
    var selectDate = document.querySelector('label');
    box.style.marginTop = '20px';
    box.style.transition = '1000ms';
}


function getPic(n) {
    var linkimg = n.url;
    var tipomedia = JSON.stringify(n.media_type);
    console.log(tipomedia);

    $('h1').css("display", "block");
    $('h1').html(n.title);

    $('h3').css("display", "block");
    $('h3').css("background", "black");
    $('h3').html(n.explanation);

    if (tipomedia === "\"image\"") {
        $("iframe").css("display", "none");
        $("img").attr("src", linkimg);
        $("img").css("display", "block");
    }
    else {
        $("img").css("display", "none");
        $("iframe").attr("src", linkimg);
        $("iframe").css("width", "640px");
        $("iframe").css("height", "480px");
        $("iframe").css("display", "block");
    }
}