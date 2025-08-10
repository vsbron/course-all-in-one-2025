import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { useAppContext } from "./AppContext";

function ThemeToggle() {
  // Get the dark theme and the toggle from the context
  const { isDarkTheme, toggleDarkTheme } = useAppContext();

  // Returned JSX
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
}

export default ThemeToggle;
