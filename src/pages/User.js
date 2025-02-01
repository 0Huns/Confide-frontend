import React from "react";
import { useUserInfo } from "../hooks/useUserInfo";
import { useSelector } from "react-redux";
import { useUserDelPost } from "../hooks/useUserDelPost";
import PostCard from "../component/PostCard";
import { UserLoading } from "../component/Skeletone";
import person from "../assets/person.png";

function User() {
  const mutation = useUserDelPost();
  const userId = useSelector((state) => state.tokenModule.userId);
  const { data, isLoading, isError, isFetching } = useUserInfo();

  if (isFetching || isLoading) {
    return <UserLoading />;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Error: 데이터를 불러오지 못했습니다.
      </div>
    );
  }

  const onDelete = (id) => {
    mutation.mutate(
      { id },
      {
        onSuccess: () => {
          console.log("good!");
        },
        onError: () => {
          console.log("fail!");
        },
      }
    );
  };

  return (
    <section className="min-h-lvh dark:bg-gray-600">
      <div className="p-6 m-auto bg-[#e2e6a6] dark:bg-gray-800 rounded-b-lg shadow-md max-w-screen-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <img
            alt="profileImg"
            src={person}
            className="w-[100px] h-[100px] shadow-lg"
          />
          <div className="flex flex-col w-full sm:justify-between">
            <div className="flex flex-col items-center mt-4 sm:items-start sm:mt-0">
              <p className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                ID: {userId}
              </p>
              <div className="p-3 bg-blue-200 rounded-lg shadow-inner dark:bg-blue-800">
                <span className="text-gray-600 dark:text-gray-200">
                  Articles
                </span>
                <p className="text-xl font-bold text-center text-black dark:text-white">
                  {data.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg py-10 mx-auto ">
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.message ? (
            <div className="text-lg text-center text-gray-500 col-span-full dark:text-gray-200">
              글을 작성해주세요
            </div>
          ) : (
            data.map((post) => (
              <div
                key={post._id}
                className="flex flex-col bg-white dark:bg-gray-300 border-black rounded-lg shadow-lg border-[0.5px]"
              >
                <PostCard post={post} />
                <button
                  type="button"
                  className="py-2 text-black transition-all bg-transparent rounded-md hover:bg-red-600 hover:text-white"
                  onClick={() => onDelete(post._id)}
                >
                  삭제
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default User;
