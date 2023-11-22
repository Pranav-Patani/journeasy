import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-wwk5lsdpd6c8g6p6.us.auth0.com"
        clientId="2gUJcbdu76lwbtzU34Q79fxK9VRMxTZ2"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
      ,
    </Router>
  </React.StrictMode>
);
