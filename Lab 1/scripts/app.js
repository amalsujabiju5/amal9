

//name-Amal Suja Biju
//Student id -100838823
//Date-03/02/2023
console.log("JS script wired up");

function timedRedirect(e) {
    //geting the element by id
    let contactName = document.getElementById('InputName').value;
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let contactPassword = document.getElementById('exampleInputPassword1').value;
    let contactPhone = document.getElementById('InputPhone').value;
    let messageBox = document.getElementById('InputText').value;
    console.log("Name: " = contactName + " Phone: " + contactPhone  +"Email: " + contactEmail + " Password: " + contactPassword +"Message: " + messageBox);
    e.preventDefault();
    setTimeout(function () {
        window.location.href = "index.html";
     }, 3000)
 }

let submitButton = document.getElementById('submit-button');
if (submitButton) {
    submitButton.addEventListener('click', timedRedirect, false);
}

var newLink = document.createElement("LI");
var newAnchor = document.createElement("A");
newAnchor.setAttribute("class", "nav-link");
newAnchor.setAttribute("href", "human_resources.html");
newAnchor.innerHTML = "Human Resources";
newLink.appendChild(newAnchor);

var aboutLink = document.getElementById("about").parentNode;
aboutLink.parentNode.insertBefore(newLink, aboutLink.nextSibling);





		