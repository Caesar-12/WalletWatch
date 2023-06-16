import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto";
import "../css/global.css";

const root = createRoot(document.getElementById("root"));

export default function render(elem) {
  root.render(<StrictMode>{elem}</StrictMode>);
}
