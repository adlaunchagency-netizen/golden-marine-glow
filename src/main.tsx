import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Auto-reload on chunk load failures (stale cache after deploys)
window.addEventListener("error", (e) => {
  if (e.message?.includes("Failed to fetch dynamically imported module")) {
    window.location.reload();
  }
});

createRoot(document.getElementById("root")!).render(<App />);
