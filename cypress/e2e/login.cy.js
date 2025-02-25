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

    cy.intercept("POST", "/api/loginAuth").as("loginAuth");
    cy.wait("@loginAuth").then((interception) => {
      const responseBody = interception.response.body;
      expect(responseBody).to.have.property("accessToken");
    });
    cy.getCookie("refreshToken").should("exist");
  });
});
