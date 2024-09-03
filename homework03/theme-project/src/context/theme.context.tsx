import { createContext, ReactNode, useState } from "react";

export interface User {
  fullName: string;
  age: number;
  profession: string;
  from: string;
}

interface ThemeContext {
  theme: string;
  themeToggler: () => void;
  user: User;
}

const contextDefaultValues: ThemeContext = {
  theme: "DARK",
  themeToggler: () => {},
  user: {
    fullName: "",
    age: 0,
    profession: "",
    from: "",
  },
};

export const ThemeContext = createContext(contextDefaultValues);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<string>("DARK");

  const themeToggler = () => {
    setTheme(theme === "DARK" ? "LIGHT" : "DARK");
  };

  const user: User = {
    fullName: "Bob Bobski",
    age: 30,
    profession: "Full Stack Developer",
    from: "Macedonia",
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeToggler,
        user,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
