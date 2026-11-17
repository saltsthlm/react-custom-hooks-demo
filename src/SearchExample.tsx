import { useState } from "react";
import { useDebounce } from "./useDebounce";

// Example 2: wait for the user to stop typing.
export function SearchExample() {
  const [text, setText] = useState("");
  const query = useDebounce(text); // changes 500 ms after the last keystroke

  return (
    <section className="card">
      <h2>useDebounce</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>What you typed: {text}</p>
      <p>Debounced (what we would search for): {query}</p>
    </section>
  );
}
