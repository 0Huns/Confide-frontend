describe("로그인 테스트", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("카카오 로그인 및 메인페이지 이동", () => {
    cy.intercept("GET", "/api/kakaoAuth").as("kakaoAuth");
    cy.get(".max-w-md > img").click();
    cy.wait("@kakaoAuth").its("response.statusCode").should("eq", 200);

    cy.origin("https://accounts.kakao.com/", () => {
      const email = Cypress.env("TEST_USER_EMAIL");
      const password = Cypress.env("TEST_USER_PASSWORD");

      cy.url().should("include", "/login");

      cy.get("input[name='loginId']").type(email, { log: false });
      cy.get("input[name='password']").type(password, { log: false });
      cy.get("button").contains("로그인").click();
    });

    cy.intercept("GET", "/api/user/posts").as("mainPage");
    cy.wait("@mainPage").its("response.statusCode").should("eq", 200);
    cy.url().should("include", "/main/post");
  });
});
