import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./components/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <LandingPage />
    </div>
    );
  </React.StrictMode>
);
