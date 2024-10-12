import { useState } from "react";
import { useUserNewPost } from "../hooks/useUserNewPost";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const mutation = useUserNewPost();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const maxChars = 500;
  const navigate = useNavigate();

  const handleClick = () => {
    if (title && content) {
      mutation.mutate(
        { title, content },
        {
          onSuccess: () => {
            console.log("good!");
            setTitle("");
            setContent("");
            navigate(-1);
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
      setContent(e.target.value);
    }
  };

  return (
    <>
      {/* Header with Back Button */}
      <div className="flex justify-start items-center h-[80px] bg-[#F2F4EF] dark:bg-[#303841] px-4 shadow-md">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center"
          name="back"
        >
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
            />
          </svg>
        </button>
      </div>

      {/* Main Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900">
        {/* Title Input */}
        <div className="w-full max-w-screen-lg p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <label
            htmlFor="title"
            className="block mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300"
          >
            제목
          </label>
          <textarea
            id="title"
            rows="1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-auto p-3 border border-gray-300 rounded-md resize-none dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
            placeholder="제목을 입력하세요"
          />
        </div>

        {/* Content Input */}
        <div className="w-full max-w-screen-lg p-6 mt-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <label
            htmlFor="textarea"
            className="block mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300"
          >
            내용
          </label>
          <div className="mb-2 text-right text-gray-500 dark:text-gray-400">
            {content.length}/{maxChars}자
          </div>
          <textarea
            id="textarea"
            rows="10"
            value={content}
            onChange={handleChange}
            className="w-full h-auto p-3 border border-gray-300 rounded-md resize-none dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
            placeholder="최대 500자까지 입력할 수 있습니다."
          />
        </div>

        {/* Submit Button */}
        <div className="w-full max-w-screen-lg mt-4">
          <button
            onClick={handleClick}
            className="w-full py-3 text-sm font-semibold text-white transition bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            작성
          </button>
        </div>
      </section>
    </>
  );
}

export default NewPost;
