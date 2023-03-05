import ReactDOM from "react-dom/client";
import App from "App";
import { Provider } from "react-redux";
import { store } from "Store/Store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "Styles/GlobalStyles";
import { theme } from "Styles/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
);
