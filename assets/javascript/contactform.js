// ae2dde05-e05c-4797-86f9-13454479ad98

function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#emailInput").val())) {
        return (true)
    }
    return (false)
}

$("#contact-submit").click(function (event) {

    event.preventDefault();

    if (validateEmail) {

        Email.send({
            SecureToken: "ae2dde05-e05c-4797-86f9-13454479ad98",
            To: 'daniel.jason.gold@gmail.com',
            From: $("#emailInput").val(),
            Subject: "Portfolio Contact Form",
            Body: "Message from " + $("#nameInput") + " sent via form fill: \n" + $("#messageInput").val()
        }).then(
            message => alert(message)
        )
    } else {
        alert('Invalid email')
    }
})


