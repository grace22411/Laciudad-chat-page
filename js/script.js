var username = "";

function send_message(message) {
    var prevMessage = $('.chat-body').html();
    var chatBot = "<span class='second-user'></span><br>"
    var userMessageMa = "<div class='second-user-contain'>" + chatBot + message + "</div>";
    $('.chat-body').html();

    if (prevMessage.length > 3) {
        prevMessage = prevMessage + "<br>";

    }
    $(".chat-body").html(prevMessage + "<span class='curent'>" + userMessageMa + "</span>");

    $(".grass").delay(100).fadeIn();
}

// function get_username(){
// send_message("Hello, what is your name?");

// }

$(document).ready(function () {
    // get_username();

    $("#textbox").keypress(function (event) {
        if (event.which == 13) {
            if ($("#enter").prop("checked")) {
                $("#but").click();
                event.preventDefault();
            }

        }
    });
    $("#enter").hide();
    var count = 0;

    $("#but").click(function () {
        count++;
        //    var username = "<span class='username'></span><br>";

        var $con_height = $(".chat-body").outerHeight();
        
        var userMessageInput = $('#file-upload').val();
        var userMessage = $('#textbox').val();
        var userMessageHtml = "<div class='user avatar'>" + userMessage + userMessageInput + "</div>";
        $('#textbox').val("");

        var prevMessage = $('.chat-body').html();
        if (prevMessage.length > 3) {
            prevMessage = prevMessage + "<br>"
        };
        $(".chat-body").html(prevMessage + userMessageHtml);

        $(".chat-body").scrollTop($con_height);
        artificial(userMessage);
    });

    $("#clear-chat").click(function () {
        $(".chat-body").empty();
    });

    $('#img-uploader').click(function (e) {
        $('#file-upload').click()
    });


    $('#file-upload').change(function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            var preview = $(".avatar");
            preview.style.backgroundImage = `url(${e.target.result})`;
            //          preview.style.maxWidth = '350px';
            //          preview.style.maxHeight = '350px';
        }
        reader.readAsDataURL(this.files[0]);
    })

    //mobile Script
    $(".each-user-mobile").click(function(){
        $(".user-list").hide();
        $(".user-chat").fadeIn();
    });
    
    $(".fa-arrow-left").click(function(){
        $(".user-list").fadeIn();
        $(".user-chat").hide();
    });
});
