function Comment({ comment }) {
  return (
    <>
      <li className="flex-col py-4 bg-white border-b-2 border-r-2 border-gray-200 sm:mb-4 sm:w-11/12 sm:mx-auto sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm">
        <div className="flex flex-row">
          <div className="flex-col mt-1">
            <div className="flex items-center flex-1 px-4 pb-3 font-bold leading-tight">
              익명
            </div>
            <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
              {comment}
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default Comment;
