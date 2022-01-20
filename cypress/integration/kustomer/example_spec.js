describe('Testing', function() {
    it('Should login successfully to a page', function() {
      cy.visit('http://zero.webappsecurity.com/login.html')
      cy.get('#user_login').type('username')
      cy.get('#user_password').type('password')
      cy.get('.btn-primary').click();
    })
})
