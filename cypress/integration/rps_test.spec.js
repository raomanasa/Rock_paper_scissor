describe("Visitor can see landing page ", () => {
    it("visitor can see content when loading the app", () => {
        cy.visit("/");
        cy.get("nav")
        .should("contain", "Rock_Paper_Scissor")     
        .and("contain", "About Game")     
        .and("contain", "Lets Play!");
        cy.get(".main.container")      
        .should("contain", "WELCOME TO THE GAME!"); 
    });
    
});