//Name: AMAL SUJA BIJU
//student id:100838823
//Date:04/03/2023

console.log('app.js loaded')
var submitButton = document.getElementById("submit-button");

// //for the submit button
// // Add an event listener to the button
// submitButton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the default form submission behavior
//     // Add an event listener to the button
   
//         // Get the input field value
//         var inputValue = document.getElementById("submit-button").value;

        
//     });

          


//Add the user name in between contact us link

if (("submitButton")) {
    $("#submit-button").click(function(){
       
            //gettinng the entered userName
            let username = $("#inputEmail").val();
            if (username !== "") {
                //creating a new list in the nav bar
                let newItem = $("<li class='nav-item'><a class='nav-link' href='index.html'>" + username + "</a><li>");
                //adding the new item to the nav bar
                $("#contact-id").after(newItem);
            }
        });
    };


