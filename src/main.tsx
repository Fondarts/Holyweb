import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HolyMindLanding from "../HolyMindLanding";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HolyMindLanding />
  </StrictMode>
);
