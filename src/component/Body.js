import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleThemeMode } from "../store/module/themeModule";
import { useEffect, useLayoutEffect, useState } from "react";
import logout from "../services/logout";
import logoImage from "../assets/logo.png";

function Body() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.themeModule.darkMode);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // useLayoutEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickMode = () => {
    dispatch(toggleThemeMode());
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <>
      <header className="bg-[#F2F4EF] dark:bg-[#303841] shadow-md">
        <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <Link to="/main/post" className="flex items-center space-x-2">
            <img className="w-10 h-10" alt="logo" src={logoImage} />
          </Link>

          <div className="flex items-center space-x-4">
            <nav
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } flex-col items-center sm:flex sm:flex-row sm:items-center sm:space-x-6 p-4 sm:p-0 bg-[#F2F4EF] dark:bg-[#303841] sm:bg-transparent dark:sm:bg-transparent sm:static absolute top-16 left-0 right-0 z-50`}
            >
              <Link
                to="/main/user"
                className="block px-4 py-2 text-gray-700 transition bg-gray-200 rounded-md dark:text-gray-200 dark:bg-gray-700 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-white sm:px-4 sm:py-2 sm:bg-gray-100 sm:border sm:border-gray-300 dark:sm:bg-gray-600 dark:sm:border-gray-500 sm:rounded-md"
              >
                유저페이지
              </Link>
              <Link
                to="/main/newPost"
                className="block px-4 py-2 mt-2 text-gray-700 transition bg-gray-200 rounded-md sm:mt-0 dark:text-gray-200 dark:bg-gray-700 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-white sm:px-4 sm:py-2 sm:bg-gray-100 sm:border sm:border-gray-300 dark:sm:bg-gray-600 dark:sm:border-gray-500 sm:rounded-md"
              >
                글 쓰기
              </Link>
              <button
                className="block px-4 py-2 mt-2 text-gray-700 transition bg-gray-200 rounded-md sm:mt-0 dark:text-gray-200 dark:bg-gray-700 hover:bg-red-600 hover:text-white dark:hover:bg-red-400 dark:hover:text-white sm:px-4 sm:py-2 sm:bg-gray-100 sm:border sm:border-gray-300 dark:sm:bg-gray-600 dark:sm:border-gray-500 sm:rounded-md"
                onClick={logout}
              >
                LOGOUT
              </button>
            </nav>

            <div className="flex flex-col justify-center ml-3">
              <button
                onClick={onClickMode}
                className="relative p-2 cursor-pointer"
              >
                <svg
                  className="hidden dark:block"
                  width="30"
                  height="30"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-slate-300"
                    d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                  />
                  <path
                    className="fill-slate-400"
                    d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                  />
                </svg>
                <svg
                  className="dark:hidden"
                  width="30"
                  height="30"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-slate-400"
                    d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                  />
                  <path
                    className="fill-slate-500"
                    d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                  />
                </svg>
                <span className="sr-only">Switch to light / dark version</span>
              </button>
            </div>

            <button
              className="p-2 text-gray-600 sm:hidden dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default Body;
