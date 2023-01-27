//console.log("formValidation.js loaded");

// /**
//  * Validate the email address
//  * @param {string} email    the email address to validate
//  * @returns {boolean}        to indicate if the email is valid
//  */
// function ValidateEmailAddressSimple(emailString) {
//     console.log('in ValidateEmailAddress');

//     // check for @ sign
//     let atSymbol = emailString.indexOf('@');
//     if(atSymbol < 1) return false;

//     let dot = emailString.indexOf('.');
//     if(dot <= atSymbol + 2) return false;

//     // check that the dot is not at the end
//     if (dot === emailString.length - 1) return false;

//     return true;
// }

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
  function ValidateEmailAddressRegex(emailString) {
  
     // note the / and / at the beginning and end of the expression
    let emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

    //return true if the email address is valid - how to use regex
  	return !!emailString && typeof emailString === 'string'
 	&& emailString.match(emailRegex);
  }


//validating the userName
function validateUserName() {
    let username = document.getElementById('usernameInput').value
    let usernameRegex = '^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$'; 
    console.log('in Validate userName')
    // getting  the element by userid
    let usernameInputEl = document.getElementById('usernameInput')
    let usernameErrorEl = document.getElementById('usernameError')
    let genErEl = document.getElementById('generalError')
    let backgroundColor = "#ffffff"
    let genErMsg = ""
    let usernameErMsg = ""

    // verifying if the character is less than 5 or not
    if(username.length < 5){
        genErMsg = "Username must be atleast 5 characters long"
        // printing the eerror message
        usernameErMsg = "Username must be atleast 5 characters long" 
        backgroundColor = "#e5989b"
    }
    //verifying if the character isd greater than 20
    else if (username.length > 20) {
        
        genErMsg = "Username must be less than 20 characters long"
        usernameErMsg = "Username must be atleast 5 characters long" 
        backgroundColor = "#e5989b"
    }
        // verifying if the username have spaces
    else if(!username.match(usernameRegex)){
        genErMsg = "Username cannot have spaces"
        usernameErMsg = "Username cannot have spaces" 
        backgroundColor = "#e5989b"
    }
    genErEl.innerHTML = genErMsg
    usernameErrorEl.innerHTML = usernameErMsg
    usernameInputEl.style.backgroundColor = backgroundColor
}    
   
 /////////////////////////////////
    
 // function to clear the error message
function clearErrorMessage() {
    let errors = document.getElementsByClassName
        ('errorOut')
    for (let i = 0; i < errors.length; i++)
    {
        errors[i].innerHTML = "";
        }

}


//TODO:
// Make all fields required
// Add a pattern attribute in the telephone element (HTML)
// Ensure the password is redacted into dots on screen when typed in
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D
// Pop your .js file into the meeting chat when you're done and we'll have a look at some examples! (Feel free to leave your name off)


//function for the submitbutton
let submitButton = document.getElementById('submit-reg-form');
if (submitButton) {
    submitButton.addEventListener('click', function (e) {
       
        validateUserName();

        
    },false);
};

//function for the reset button
let resetButton = document.getElementById
    ('reset-reg-form');
if (resetButton) {
    resetButton.addEventListener('click', function (e) {
        
        clearErrorMessage();
    })

};