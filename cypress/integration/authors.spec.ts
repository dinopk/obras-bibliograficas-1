

describe('when application finish loading routes', () => {
  beforeEach(() => {
    cy.visit('/authors');
  });

  it('should navigate to authors page and show the corret h2 title', () => {
    const title = cy.get('#homeTitle');

    expect(title.contains('Meus autores favoritos'));
  });

  it('should render a list of authors name formatted', () => {
    const list = cy.get('ul');
    list.get('li').contains('Santos, Lucas dos');
    list.get('li').contains('Coelho, Paulo');
    list.get('li').contains('Silva Neto, João');
    list.get('li').contains('PEREIRA');
  });
});
