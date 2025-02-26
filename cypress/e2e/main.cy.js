describe("메인페이지 테스트", () => {
  beforeEach(() => {
    cy.loginWithSession();
  });

  context("메인 게시글 영역", () => {
    it("메인 게시글 3개 존재 확인", () => {
      cy.visit("/main/post");
      cy.get("ul > li").should("have.length", 3);
    });

    it("게시글 새로고침 버튼 클릭 후 데이터 변경 확인", () => {
      cy.visit("/main/post");

      let initialPosts = [];
      cy.get("ul.w-full li")
        .each(($post) => {
          const title = $post.find("h3").text().trim();
          const content = $post.find("p").text().trim();
          initialPosts.push({ title, content });
        })
        .then(() => {
          cy.get(".py-5").click();
          cy.get("ul > li").should("have.length", 3);

          let updatedPosts = [];
          cy.get("ul.w-full li")
            .each(($post) => {
              const title = $post.find("h3").text().trim();
              const content = $post.find("p").text().trim();
              updatedPosts.push({ title, content });
            })
            .then(() => {
              let isDifferent = false;

              updatedPosts.forEach((post, index) => {
                if (
                  post.title !== initialPosts[index].title ||
                  post.content !== initialPosts[index].content
                ) {
                  isDifferent = true;
                }
              });

              expect(isDifferent).to.be.true;
            });
        });
    });
  });

  context("Nav 버튼 작동 확인", () => {
    it("유저페이지 버튼 동작 확인", () => {
      cy.visit("/main/post");
      cy.url().should("include", "/main/post");
      cy.get('[href="/main/user"]').click();
      cy.url().should("include", "/main/user");
    });

    it("글쓰기 버튼 동작 확인", () => {
      cy.visit("/main/post");
      cy.url().should("include", "/main/post");
      cy.get('[href="/main/newPost"]').eq(0).click();
      cy.url().should("include", "/main/newPost");
    });

    it("테마 버튼 동작 확인", () => {
      cy.visit("/main/post");
      cy.url().should("include", "/main/post");
      cy.get(".flex > .relative").click();
      cy.get("html").should("have.class", "dark");
      cy.get(".flex > .relative").click();
      cy.get("html").should("have.class", "");
    });

    it("로그아웃 버튼 동작 확인", () => {
      cy.visit("/main/post");
      cy.url().should("include", "/main/post");
      cy.contains("button", "LOGOUT").click();
      cy.url().should("include", "/");
    });
  });
});
