import { useContext } from "react";
import { ThemeContext } from "../context/theme";

export default function Header() {
  const { light, toggleThemeHandler } = useContext(ThemeContext);

  return (
    <header
      className={`p-4 bg-blue-600 text-white dark:bg-gray-800 dark:text-gray-200`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Library Book Tracker</h1>
        <nav className="flex items-center">
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="text-white hover:text-gray-300 dark:text-gray-200 dark:hover:text-gray-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about_us"
                className="text-white hover:text-gray-300 dark:text-gray-200 dark:hover:text-gray-400 transition-colors"
              >
                About Us
              </a>
            </li>
          </ul>
          <button
            onClick={toggleThemeHandler}
            className="ml-4 py-2 px-4 bg-white text-blue-600 dark:bg-gray-700 dark:text-gray-200 font-semibold rounded transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {light ? "Dark Mode" : "Light Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
}