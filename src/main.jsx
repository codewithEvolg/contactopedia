import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Footer } from "./Layout/Footer";
import Header from "./Layout/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-fill">
        <div>Hello World</div>
      </div>
      <Footer />
    </div>
  </StrictMode>
);
