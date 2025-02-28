describe("메인페이지 테스트", () => {
  beforeEach(() => {
    cy.loginWithSession();
  });

  it("로그아웃 버튼 동작 확인", () => {
    cy.visit("/main/post");
    cy.url().should("include", "/main/post");
    cy.contains("button", "LOGOUT").click();
    cy.get("h1").should("have.text", "Get started CONFIDE!");
    cy.url().should("include", "/");
  });
});
