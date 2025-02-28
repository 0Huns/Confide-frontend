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

    it("유저 게시글 상세페이지 접속 확인", () => {
      cy.visit("/main/user");
      cy.get(".max-w-screen-lg li")
        .first()
        .find("h3")
        .invoke("text")
        .then((title) => {
          cy.get(".max-w-screen-lg li").first().click();
          cy.url().should("include", "/post/");
          cy.get("h1.text-2xl").should("have.text", title.trim());
        });
      cy.url().should("include", "/main/post");
    });

    it("유저 게시글 삭제 확인", () => {
      cy.visit("/main/user");
      cy.get(".max-w-screen-lg li a")
        .first()
        .invoke("attr", "href")
        .then((href) => {
          cy.get(".max-w-screen-lg button").first().click();
          cy.get(".max-w-screen-lg li a")
            .first()
            .invoke("attr", "href")
            .should("not.include", `${href}`);
        });
    });
  });
});
