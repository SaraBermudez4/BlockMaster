import { ChakraProvider } from "@chakra-ui/react";
import Home from "../containers/home/Home";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;
