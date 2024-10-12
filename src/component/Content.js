import { Link } from "react-router-dom";
import Posts from "./Posts";

function Content() {
  return (
    <>
      <section>
        <div className="content-center h-full bg-[#F2F4EF] dark:bg-[#303841]">
          <div className="z-20 w-full px-4 py-12 mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block break-keep">마음이 무거우신가요?</span>
            </h2>
            <p className="max-w-md mx-auto mt-4 text-lg text-black break-words dark:text-gray-400 break-keep">
              이곳에 모든 고민을 털어놓고, <br /> 가벼운 마음으로 내일을
              맞이하세요.
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex mt-12 rounded-md shadow">
                <Link
                  to="/main/newPost"
                  className="w-full px-6 py-4 text-base font-semibold text-center text-black dark:text-white transition duration-200 ease-in bg-[#C2E3F4] dark:bg-[#00ADB5] rounded-lg shadow-md dark:hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  글 쓰기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Posts />
    </>
  );
}

export default Content;
