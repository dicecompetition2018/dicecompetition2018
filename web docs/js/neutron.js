
$("#try").click(function(){
    $.ajax({
        type: "POST",
        url: "https://us-central1-neutron-b058a.cloudfunctions.net/addParticipant",
        data: "email=" + $("#email").val() + "&password=" + $("#password").val(),
        success: function(result){
            $("#try2").text("Hello world!");
        }
    });
});