import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <>
      <li className=" list-none bg-white relative block h-[169px] overflow-hidden rounded-lg border border-gray-100 shadow-md">
        <Link
          to={`/main/post/${post._id}`}
          className="block w-full h-full p-8 "
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div className="sm:flex sm:justify-between sm:gap-4">
            <h3 className="text-lg font-bold text-gray-900 truncate sm:text-xl">
              {post.title}
            </h3>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500 break-words whitespace-normal text-pretty line-clamp-3">
              {post.content}
            </p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default PostCard;
