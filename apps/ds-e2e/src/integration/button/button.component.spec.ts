describe('ds', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&knob-classNames'));

  it('should render the component', () => {
    cy.get('button[${selector}]').should('exist');
  });
});
