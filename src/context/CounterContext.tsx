import { createContext, useContext, useState } from "react";

interface CounterContextType {
  count: number;
  increment: () => void;
}

const defaultValue: CounterContextType = {
  count: 0,
  increment: () => {},
};

export const CounterContext = createContext<CounterContextType>(defaultValue);

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};
