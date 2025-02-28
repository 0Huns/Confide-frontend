import { fakerKO } from "@faker-js/faker";

describe("유저페이지 테스트", () => {
  beforeEach(() => {
    cy.loginWithSession();
  });

  context("유저 게시글 조작 테스트", () => {
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

  context("유저 게시글 생성 테스트", () => {
    it("게시글 생성 확인", () => {
      cy.visit("/main/user");
      cy.contains("a", "글 쓰기").click();
      cy.get("textarea[id='title']").should("exist");
      cy.get("textarea[id='textarea']").should("exist");
      cy.contains("button", "작성").should("exist");

      const randomTitle = fakerKO.lorem.words(3);
      const randomText = fakerKO.lorem.words(5);
      cy.get("textarea[id='title']").type(randomTitle, { log: false });
      cy.get("textarea[id='textarea']").type(randomText, { log: false });
      cy.contains("button", "작성").click();

      cy.url().should("include", "/main/user");

      cy.get(".max-w-screen-lg li").should("contain", randomTitle);
    });
  });
});
