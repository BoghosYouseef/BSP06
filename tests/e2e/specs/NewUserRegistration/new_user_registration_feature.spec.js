import {Given, when, then} from "cypress-cucumber-preprocessor/steps"

Given("user on the homepage", () =>{
    cy.visit("http://localhost:8080/")
    cy.title().should("eq", "User Registration");
})

When('user fills "userName textbox" with "Mark Daussmann"', () =>{
    cy.get('input[type="text"]').type("Mark Daussmann");
})

And('user fills "password textbox" with "Mark231Daussmann"', () =>{
    cy.get('input[type="password"]').type("Mark231Daussmann");
    
})

And('user clicks "Register User"', () =>{

    cy.intercept(
    {
        method: 'POST', // Route all POST requests
        url: '/username_password*', // that have a URL that matches '/users/*'
    },
    [200] // and force the response to be: []
    ).as('User has been registered') // and assign an alias

    cy.get("button").contains("Register User").should('be.visible').click();

    cy.wait("@User has been registered").should(response => {

        expect(response.response.statusCode).to.eq(200);
    });


})

Then('a dialogue window shows up that says "Congrats! Mark Daussmann has been registered with password Mark231Daussmann"', () => {
   
    cy.get("header").contains("A new user has been registered!").should('be.visible')
    cy.get("body").contains("Congrats! Mark Daussmann has been registered with password Mark231Daussmann!").should('be.visible')
})


