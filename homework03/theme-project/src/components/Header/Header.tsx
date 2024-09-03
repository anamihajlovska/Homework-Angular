import "./Header.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

export function Header() {
  const { theme, themeToggler } = useContext(ThemeContext);
  return (
    <div>
      <h1>Theme Project</h1>

      <div>
        <button onClick={themeToggler}>{theme}</button>
      </div>
    </div>
  );
}
