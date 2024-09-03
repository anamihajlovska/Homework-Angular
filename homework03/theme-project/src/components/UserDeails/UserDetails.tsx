import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

export function UserDetails() {
  const { user, theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "DARK" ? "black" : "gray",
        color: theme === "DARK" ? "white" : "blue",
      }}
    >
      <h2>User Details:</h2>
      <p>Full Name: {user.fullName}</p>
      <p>Age: {user.age}</p>
      <p>Profession: {user.profession}</p>
      <p>From: {user.from}</p>
    </div>
  );
}
