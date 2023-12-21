import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(

    <Auth0Provider
     domain="dev-4pv0mifib4in2xx4.us.auth0.com"
     clientId="avOmM4NMLencoBqP1wt3KQJrLSRoHiBu"
     authorizationParams={{
      redirect_uri: "https://room-finder-project.vercel.app"
     }}
     audience="https://room-finder-project-server.vercel.app"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>

);
