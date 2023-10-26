import { useTheme } from "./ThemeProvider";
import { THEME } from "./types";

export default function Header() {
  const { setTheme } = useTheme();

  return (
    <header>
      <button className="btn-theme" onClick={() => setTheme(THEME.CLARO)}>
        Claro
      </button>
      <button className="btn-theme" onClick={() => setTheme(THEME.ESCURO)}>
        Escuro
      </button>
    </header>
  );
}
