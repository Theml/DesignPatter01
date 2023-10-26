import Header from "./Header";
import { useTheme } from "./ThemeProvider";

export default function Content() {
  const { theme } = useTheme();
  return (
    <div className="App">
      <Header />
      <h1>React Design Patterns</h1>
      <span>Tema: {theme}</span>
    </div>
  );
}
