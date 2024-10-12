function TokenLoading() {
  return (
    <>
      <header className="content-center bg-gray-200 animate-pulse">
        <div className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="block w-24 h-full bg-gray-300 rounded-md"></div>

          <div className="flex items-center justify-end flex-1 ">
            <nav className="flex items-center space-x-4">
              <div className="w-20 h-10 bg-gray-300 rounded-md max-sm:hidden"></div>
              <div className="w-20 h-10 bg-gray-300 rounded-md max-sm:hidden"></div>
              <div className="hidden w-20 h-10 bg-gray-300 rounded-md sm:block"></div>
              <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
              <div className="block w-10 h-10 bg-gray-300 rounded sm:hidden"></div>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex items-center justify-center w-24 h-24">
          <div className="w-12 h-12 border-8 border-transparent rounded-full border-t-blue-500 animate-spin"></div>
        </div>
      </div>
    </>
  );
}

function PostsLoading() {
  return (
    <section className="flex flex-col max-w-screen-xl sm:mx-auto mx-4 items-center justify-center mt-5 bg-gray-100 rounded-[20px] pt-[30px] pb-[30px] mb-5 shadow-sm">
      <div className="w-full px-[20px] grid grid-cols-1 sm:grid-cols-3 gap-2">
        {[1, 2, 3].map((_, index) => (
          <li
            key={index}
            className="list-none bg-gray-200 animate-pulse relative block h-[169px] overflow-hidden rounded-lg border border-gray-100 shadow-md"
          >
            <div className="block w-full h-full p-8">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500"></span>

              <div className="sm:flex sm:justify-between sm:gap-4">
                <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="w-full h-4 bg-gray-300 rounded"></div>
                <div className="w-full h-4 bg-gray-300 rounded"></div>
                <div className="w-5/6 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </li>
        ))}
      </div>
      <div className="animate-pulse bg-gray-300 py-8 px-32 mt-5 max-sm:py-6 max-sm:px-24 gap-[10px] rounded-[90px]" />
    </section>
  );
}

function PostDetailLoading() {
  return (
    <div className="animate-pulse">
      <div className="flex justify-start items-center h-[100px] bg-[#F2F4EF] dark:bg-[#303841]">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>

      <section className="bg-[#F2F4EF] dark:bg-[#303841]">
        <div className="container px-6 pb-12 mx-auto">
          <div className="w-1/2 h-8 mx-auto bg-gray-300 rounded"></div>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-300 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-300 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-300 rounded-full"></span>
          </div>

          <div className="flex items-start max-w-6xl mx-auto mt-16">
            <div className="flex justify-center w-full h-24 text-center text-gray-300 bg-gray-300 rounded"></div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center antialiased bg-gray-100">
        <div className="max-w-screen-xl p-4 border-t-[1px] border-t-gray-100 w-full">
          <label
            htmlFor="textarea"
            className="block text-sm font-bold text-gray-700"
          >
            Comment
          </label>
          <div className="w-full h-40 p-2 bg-gray-300 border rounded-md resize-none"></div>
          <div className="flex justify-end mt-2 max-sm:w-full">
            <div className="w-16 text-sm font-medium text-white bg-gray-300 rounded h-9 max-sm:w-full"></div>
          </div>
        </div>

        <div className="container max-w-screen-xl px-0 mx-auto sm:px-5">
          <ul className="w-full">
            <div className="flex-col py-4 text-center bg-white border-b-2 border-r-2 border-gray-200 sm:mb-4 sm:w-11/12 sm:mx-auto sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm">
              <div className="w-3/4 h-4 mx-auto mb-2 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-4 mx-auto mb-2 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-4 mx-auto mb-2 bg-gray-300 rounded"></div>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}

function UserLoading() {
  return (
    <section className="min-h-lvh dark:bg-gray-600">
      <div className="p-6 m-auto bg-[#e2e6a6] dark:bg-gray-800 rounded-b-lg shadow-md max-w-screen-lg animate-pulse">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full shadow-lg"></div>
          <div className="flex flex-col w-full sm:justify-between">
            <div className="flex flex-col items-center mt-4 sm:items-start sm:mt-0">
              <div className="h-6 mb-2 bg-gray-300 rounded w-44"></div>
              <div className="p-3 bg-blue-100 rounded-lg shadow-inner dark:bg-blue-800 w-max">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-4 mb-1 bg-gray-300 rounded"></div>
                  <div className="w-16 h-6 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg py-10 mx-auto">
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex flex-col w-full px-2 max-sm:mb-4">
              <li className="list-none bg-gray-200 animate-pulse relative block h-[169px] overflow-hidden rounded-lg border border-gray-100 shadow-md">
                <div className="block w-full h-full p-8">
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500"></span>

                  <div className="sm:flex sm:justify-between sm:gap-4">
                    <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="w-full h-4 bg-gray-300 rounded"></div>
                    <div className="w-full h-4 bg-gray-300 rounded"></div>
                    <div className="w-5/6 h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </li>
              <div className="h-10 py-2 bg-gray-200 rounded-lg animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TokenLoading, PostsLoading, PostDetailLoading, UserLoading };
