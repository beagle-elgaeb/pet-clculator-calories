import "@fontsource/ibm-plex-sans/cyrillic.css";
import "@fontsource/ibm-plex-sans/cyrillic-ext.css";
import "@fontsource/ibm-plex-sans/latin.css";
import "@fontsource/ibm-plex-sans/latin-ext.css";
import "normalize.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
