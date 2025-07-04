import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  return (
    <label className="flex cursor-pointer gap-2 items-center">
      <FaSun className="text-yellow-500 h-5 w-5" />
      <input
        type="checkbox"
        value="dark"
        className="toggle theme-controller"
      />
      <FaMoon className="text-blue-500 h-5 w-5" />
    </label>
  );
};

export default ThemeToggle;
