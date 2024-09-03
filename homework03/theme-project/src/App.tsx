import { Header } from "./components/Header/Header";
import { UserDetails } from "./components/UserDeails/UserDetails";
import { ThemeContextProvider } from "./context/theme.context";

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <UserDetails />
    </ThemeContextProvider>
  );
}

export default App;
