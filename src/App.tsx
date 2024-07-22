import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import FlexLayout from "@/components/layout/flexLayout/FlexLayout";
import GridLayout from "@/components/layout/gridLayout/GridLayout";

//import "./test.css";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      {/* <FlexLayout>
        <Router />
      </FlexLayout> */}

      {/*  */}

      <GridLayout>
        <Router />
      </GridLayout>
    </BrowserRouter>
  );
};

export default App;
