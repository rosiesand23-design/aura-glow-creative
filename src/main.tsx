import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force light theme regardless of OS-level dark mode (iOS/Android)
const enforceLightTheme = () => {
  const root = document.documentElement;
  if (root.classList.contains("dark")) root.classList.remove("dark");
  if (document.body?.classList.contains("dark")) document.body.classList.remove("dark");
  if (root.style.colorScheme !== "light") root.style.colorScheme = "light";
  if (root.getAttribute("data-theme") === "dark") root.setAttribute("data-theme", "light");
};

enforceLightTheme();

// Strip `.dark` (or data-theme="dark") whenever anything tries to add it later.
const themeObserver = new MutationObserver(enforceLightTheme);
themeObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["class", "style", "data-theme"],
});
document.addEventListener("DOMContentLoaded", () => {
  enforceLightTheme();
  if (document.body) {
    themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
  }
});

createRoot(document.getElementById("root")!).render(<App />);
