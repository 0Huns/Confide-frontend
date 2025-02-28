describe("메인페이지 테스트", () => {
  beforeEach(() => {
    cy.loginWithSession();
  });

  context("유저페이지 테스트", () => {
    it("유저페이지 접속 확인", () => {
      cy.visit("/main/user");
      cy.url().should("include", "/main/user");
    });

    it("유저 게시글 개수 일치 확인", () => {
      cy.visit("/main/user");
      cy.get(".text-xl")
        .invoke("text")
        .then((text) => {
          const postNum = parseInt(text.trim(), 10);
          cy.get(".max-w-screen-lg li").should("have.length", postNum);
        });
    });
  });
});
