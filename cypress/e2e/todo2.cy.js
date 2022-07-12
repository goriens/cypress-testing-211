///<reference types="Cypress" />;

describe("Checking todo application", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });
  it("From submission", () => {
    it("should have add a new todo on submit", () => {
      cy.intercept();
      cy.intercept("POST", "/api/todos", {
        name: "Learn React",
        id: 1,
        isComplete: false,
      });
      cy.get(".new-todo").type("Learn React").type("{enter}");
    });
  });
  it("should intercept Post request", () => {
    cy.intercept("GET", "https://example.cypress.io/todo", {
      value: "10",
    }).as("getReq");
    cy.intercept("POST", "http://localhost:8080/counter", {
      value: 100,
    }).as("postReq");
  });
});
