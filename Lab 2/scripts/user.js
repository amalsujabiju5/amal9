//Name: AMAL SUJA BIJU
//student id:100838823
//Date:04/03/2023




/*
* Class named User for firstName, lastName, userName, email and password properties
 */

export class user{

    /**
     * User
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} username
     * @param {string} email
     * @param {string} password1
     * @param {string} password2
     */


    constructor(firstName, lastName, username, email, password1, password2) {
    
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password1 = password1;
        this.password2 = password2;
    }
    
    /**
     * @property {function} displayUser Prints users details: user name, username, email, and password
     * @returns {string}
     */
    displayUser() {
        return `Name: ${this.firstName} ${this.lastName}
         Username: ${this.username}
         Email: ${this.email}
         Password: ${this.password1}`
    }


}

//Refrence-ICE4 from the Webd6201