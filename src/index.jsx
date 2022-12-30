import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { CadastroProvider } from "./contexts/contextCadastro";
import { LoginProvider } from "./contexts/contextLogin";
import { DashBoardProvider } from "./contexts/contextDashBoard";
import { ModalProvider } from "./contexts/contextModal";
import { ModalDeleteProvider } from "./contexts/contextModalDelete";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CadastroProvider>
        <LoginProvider>
          <DashBoardProvider>
            <ModalProvider>
              <ModalDeleteProvider>
                <App />
              </ModalDeleteProvider>
            </ModalProvider>
          </DashBoardProvider>
        </LoginProvider>
      </CadastroProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
