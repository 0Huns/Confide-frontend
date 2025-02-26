Cypress.Commands.add("loginWithSession", () => {
  cy.session("userSession", () => {
    cy.log("로그인 프로세스 시작");
    cy.visit("/");
    cy.get(".max-w-md > img").click();

    cy.origin("https://accounts.kakao.com", () => {
      cy.get("input[name='loginId']").type(Cypress.env("TEST_USER_EMAIL"), {
        log: false,
      });
      cy.get("input[name='password']").type(Cypress.env("TEST_USER_PASSWORD"), {
        log: false,
      });
      cy.get("button").contains("로그인").click();
    });

    cy.intercept("POST", "/api/loginAuth").as("loginAuth");
    cy.wait("@loginAuth").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  });
});
