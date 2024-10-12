import { useUserPosts } from "./../hooks/useUserPosts";
import PostCard from "./PostCard";
import { PostsLoading } from "./Skeletone";

function Posts() {
  const { data, isLoading, isError, isFetching, refetch } = useUserPosts();

  if (isFetching || isLoading) {
    return <PostsLoading />;
  }

  if (isError) {
    return <div>Error: 데이터를 불러오지 못했습니다.</div>;
  }

  return (
    <>
      <section className="flex flex-col max-w-screen-xl sm:mx-auto mx-4 items-center justify-center mt-5 dark:bg-gray-200 bg-gray-100 rounded-[20px] pt-[30px] pb-[30px] mb-5 shadow-sm">
        <ul className="w-full px-[20px] grid grid-cols-1 sm:grid-cols-3 gap-2">
          {data.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </ul>

        <button
          className="bg-white py-5 px-20 mt-5 max-sm:py-3 max-sm:px-12 font-semibold flex justify-center items-center gap-[10px] border border-gray_line rounded-[90px]"
          onClick={() => refetch()}
        >
          다른 고민보기
        </button>
      </section>
    </>
  );
}

export default Posts;
