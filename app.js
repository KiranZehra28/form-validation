$(document).ready(function () {
    $("#form").validate({

        errorClass: "error fail-alert",
        validClass: "valid success-alert",

        rules: {
            fullname: {
                required: true,
                minlength: 3
            },

            ownername: {
                required: true,
                minlength: 3
            },

            cardnum: {
                required: true,
                number: true,
                minlength: 8
            },

            pass: {
                required: true,
                number: true,
                minlength: 4
            },

            messages: {
                fullname: {
                    required: "Please enter your full name",
                    minlength: "Name should be at least 3 characters"
                },

                ownernmae: {
                    required: "Please enter card owner name",
                    minlength: "Name should be at least 3 characters"
                },

                cardnum: {
                    required: "Enter you card number",
                    number: "Card number should be in numeric value",
                    minlength: "You card number should be atleast 8 digits long"
                },

                pass: {
                    required: "Enter your passcode",
                    number: "Passcode should be in numeric value",
                    minlength: "You passcode should be atleast 4 digits long"
                }
            }
        }
    })
})

// highlight: (function (element) {
//     $(element).addClass(".c1")
// })

// unhighlight: (function (element) {
//     $(element).removeClass(".c1").addClass(".c2")
// })
