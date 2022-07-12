///<reference types="Cypress" />;

describe("Checking todo application", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });
  it("should have the basic structure", () => {
    //input box is present
    cy.get(".new-todo").should("exist");
    //if todo count is present
    cy.get(".todo-count").should("exist");
    //if filters are present
    cy.get(".filters").should("exist");
  });
  it("should be able to add some task", () => {
    cy.get(".todo-list").children().should("have.length", 2);
    cy.get(".new-todo").type("Learn React{enter}");
    cy.get(".todo-list").children().should("have.length", 3);
  });
});
