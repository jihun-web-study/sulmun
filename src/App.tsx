import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

import Header from "@components/layout/Header";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <header className="bg-blue-500">헤더</header>
      <Router />
      <aside>사이드 1</aside>
      <aside>사이드 2</aside>
      <footer>푸터</footer>
    </BrowserRouter>
  );
};

export default App;
