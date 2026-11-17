import { useLocalStorage } from "./useLocalStorage";

// Example 1: remember a value. Change the theme, then refresh the page.
export function ThemeExample() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <section className={`card ${theme}`}>
      <h2>useLocalStorage</h2>
      <p>The theme is {theme}. Refresh the page: it is remembered.</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
    </section>
  );
}
