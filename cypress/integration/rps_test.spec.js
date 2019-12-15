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
    it("visitor can navigate using the header", () => {    
        cy.visit("/");    
        cy.get("nav").within(() => {      
            cy.contains("About Game").click();      
            cy.url().should("contain", "about");      
            cy.contains("Lets Play!").click();      
            cy.url().should("contain", "game");      
            cy.contains("Rock_Paper_Scissor").click();      
            cy.url()        
            .should("not.contain", "about")        
            .and("not.contain", "game");
        });
    });
    it("visitor can navigate 'About Game' and its content", () => {
        cy.visit("/about")
        cy.get("div")
        .should('contain', 'About Game')
        .and("contain","Rule of the game!")
        .and("contain","Rock vs Paper -> Paper wins!")
        .and("contain","Rock vs Scissors -> Rocks wins!")
        .and("contain","Paper vs Scissors -> Scissors wins!");
    });
    
});