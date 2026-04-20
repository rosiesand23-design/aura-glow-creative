import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force light theme regardless of OS-level dark mode (iOS/Android)
document.documentElement.classList.remove("dark");
document.documentElement.style.colorScheme = "light";

createRoot(document.getElementById("root")!).render(<App />);
