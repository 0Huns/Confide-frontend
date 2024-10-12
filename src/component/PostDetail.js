import { useNavigate, useParams } from "react-router-dom";
import { useUserPostById } from "../hooks/useUserPostById";
import { useState } from "react";
import { useUserComment } from "../hooks/useUserComment";
import Comment from "./Comment";
import { PostDetailLoading } from "./Skeletone";

function PostDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useUserPostById(id);
  const mutation = useUserComment(id);
  const [comment, setComment] = useState("");
  const maxChars = 300;
  const navigate = useNavigate();

  if (isLoading) {
    return <PostDetailLoading />;
  }

  if (isError) {
    return <div>Error: 데이터를 불러오지 못했습니다.</div>;
  }

  const handleComment = () => {
    if (comment) {
      mutation.mutate(
        { id, comment },
        {
          onSuccess: () => {
            console.log("good!");
            setComment("");
          },
          onError: () => {
            console.log("fail!");
          },
        }
      );
    } else {
      window.alert("내용을 입력해주세요");
    }
  };

  const handleChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setComment(e.target.value);
    }
  };

  return (
    <>
      <div className="flex justify-start h-[100px] bg-[#F2F4EF] dark:bg-[#303841]">
        <button onClick={() => navigate(-1)} name="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            fill="none"
          >
            <path
              stroke="#7A7A7A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.133"
              d="m25.25 28.5-6.5-6.5 6.5-6.5"
            ></path>
          </svg>
        </button>
      </div>

      <section className="bg-[#F2F4EF] dark:bg-[#303841]">
        <div className="container px-6 pb-12 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize dark:text-white sm:text-3xl">
            {data.title}
          </h1>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="flex items-start max-w-6xl mx-auto mt-16">
            <p className="flex justify-center w-full text-center text-gray-500 dark:text-white">
              {data.content}
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center antialiased bg-gray-200">
        <div className="max-w-screen-xl p-4  border-t-[1px] border-t-gray-100 w-full">
          <label
            htmlFor="textarea"
            className="block text-sm font-bold text-gray-700"
          >
            Comment
          </label>
          <div className="text-right text-gray-500">
            {comment.length}/{maxChars}자
          </div>
          <textarea
            id="textarea"
            rows="6"
            value={comment}
            onChange={handleChange}
            className="w-full h-auto p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="최대 300자까지 입력할 수 있습니다."
          />
          <div className="flex justify-end max-sm:w-full">
            <button
              onClick={handleComment}
              className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded max-sm:w-full hover:bg-indigo-700"
            >
              작성
            </button>
          </div>
        </div>

        <div className="container max-w-screen-xl px-0 mx-auto sm:px-5">
          <ul className="w-full">
            {data.comments ? (
              data.comments.map((comment, idx) => {
                return <Comment key={idx} comment={comment} />;
              })
            ) : (
              <div className="flex-col py-4 text-center bg-white border-b-2 border-r-2 border-gray-200 sm:mb-4 sm:w-11/12 sm:mx-auto sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm">
                댓글이 없습니다.
              </div>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}

export default PostDetail;
