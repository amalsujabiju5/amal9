import * as userClass from "./user.js"
let submit = document.getElementById("btnRegSubmit");







/**
 * validateFirst - validated user first name entry through registration form
 * @param {string} first
 * @returns html element for error message
 */

function validateFirst(first) {
    if (first.length < 2) {
        return "<p> You have entered a first name that is too short!</P>"
        
    }
    else {
        return "<p></p>";
    }
    
};

/**
 * validateLast- validated user last name entry through registration form
 * @param {string} last
 * @returns html element for error message
 */
function validateLast(last) {
    if (last.length < 2) {
        return "<p> You have entered a last name that is too short! </P>"
    }
    else {
        return"<p></P>"
    }
};

/**
 * validateEmail- validated user email entry through registration form
 * @param {string} email
 * @returns html element for error message
 */

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateEmail(email) {
    if (email.length < 2 || !emailRegex.test(email)) {
        return "<p> Please Enter your email correctly! </P>"
    }
    else {
        return"<p></p>"
    }
};


/**
 * validatePassword- validated user password entries 1 and 2 are the same through ristration form
 * @param {string} passord1
 * @param {string} password2
 * @returns html element for error message
 */
function validatePassword(pass1, pass2) {
    if (pass1 === pass2) {
        return "<p></P>"   
    }
    

    // if (pass1 & pass2 >= 6) {
    //     return"<p> password should be atleast 6 characyters! </p>"
    // }

    else {
        return "<p>Your passwords do not match.</p>"
    }

};



    

    // Create the error message div and add it to the page
    let $errorMessage = $('<div id="ErrorMessage"> </div>');
    $('body').append($errorMessage);

    // Hide the error message div
    $errorMessage.show();


if ($("#btnRegSubmit")) {
    // TO DO: add a click function that calls a callack function
    $("#btnRegSubmit").click(function (e) {
        // prevent the default submit action (stay on the page)
        e.preventDefault();
        // create a new user class
        const unvalidated_user = new userClass.user(
            //obtain the first name
            $("#inputFirst").val(),
            //obtain Second Name
            $("#inputLast").val(),
            //obtain user Name
            $("#inputUserName").val(),
            //obtain email
            $("#inputEmail").val(),
            //obtain password1
            $("#inputPassword1").val(),
            //obtain Password2
            $("#inputPassword2").val(),


        );

        //to display user details in the cosole

        console.log(`User Details: ${unvalidated_user.displayUser()}`)

        // validating the first name
       $(".errorMessage").html(validateFirst(unvalidated_user.firstName));
        
       // validate last name
        $(".errorMessage2").html(validateLast(unvalidated_user.lastName ));


         // validate  email
        $(".errorMessage3").html(validateEmail(unvalidated_user.email));
        
        // validate confirm password
        let error = validatePassword(unvalidated_user.password, $("#inputPassword2").val());
        $(".errorMessage4").html(error);
        $(".errorMessage5").html(error);

    });
    }

    //RESET BUTTON

    if ($("#btnRegReset")) {
        //click event handler
        $("#btnRegReset").click(function (e) {
            //clear all the error message
            $(".errorMessage").html("<p></P>")

        });
};
