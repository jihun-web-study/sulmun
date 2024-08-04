import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import JotaiProvider from "@/JotaiProvider";

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <JotaiProvider>
          <Router />
        </JotaiProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
