describe('Cypress Test with Docker',()=>{
    it('Should  load webSite', () => {
        cy.visit('https://www.example.com')
    });
    it('Should  load h1 element', () => {
        cy.get('h1').should('be.visible');
        cy.get('p').should('be.visible');
    });
});