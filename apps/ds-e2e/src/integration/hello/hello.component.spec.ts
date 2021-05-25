describe('ds', () => {
  beforeEach(() => cy.visit('/iframe.html?id=hellocomponent--primary'));

  it('should render the component', () => {
    cy.get('ds-hello').should('exist');
  });
});
