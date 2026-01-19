import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ResponseProvider } from "./provider/responseProvider";
import { LoadProvider } from "./provider/loadProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoadProvider>
      <ResponseProvider>
        <App />
      </ResponseProvider>
    </LoadProvider>
  </React.StrictMode>
);