import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
