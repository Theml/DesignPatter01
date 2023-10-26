import Content from "./Content";
import { ThemeProvider } from "./ThemeProvider";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}
