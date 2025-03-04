import Counter from "./components/counter/Counter";
import { CounterProvider } from "./context/CounterContext";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </ChakraProvider>
  );
}

export default App;
