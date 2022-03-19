/// <reference types="cypress" />
context("navigation", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("/api/auth/me").as("sessionFetch");
  });
  it("display an incognito user profile when session dost not exist", () => {
    cy.wait("@sessionFetch");
    cy.get(`[arial-label="see profile"]`).click();

    cy.contains("Incognito Mode");
  });
});
