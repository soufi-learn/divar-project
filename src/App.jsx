import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Layout from "./layout/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
        <Toaster />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
