import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MuiRtlProvider from "./mui/MuiRtlProvider.jsx";
import theme from "./mui/theme";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import defaultOptions from "./configs/reactQuery.js";
import "./styles/fonts.css";
import "./styles/index.css";

const queryClient = new QueryClient({
  defaultOptions,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <MuiRtlProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </MuiRtlProvider>
  </ThemeProvider>
);
