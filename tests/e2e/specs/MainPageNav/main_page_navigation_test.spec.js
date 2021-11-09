Given("I open registration page", () => {
    cy.visit("http://localhost:8080/")
})

Then('I see "User Registration" in the title', () => {
    cy.title().should("eq", "User Registration")
})