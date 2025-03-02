import { useCounter } from "../../context/useCounter";
import { Button, useToast, Box, Text } from "@chakra-ui/react";
import Toast from "../toast/Toast";
import { counterStyles } from "./counter-style";

const Counter = () => {
  const { count, increment } = useCounter();
  const toast = useToast();
  const counterStyle = counterStyles();
  const handleIncrement = () => {
    toast({
      render: () => (
        <Toast title="Incremented" text={`Counter is now ${count + 1}`} />
      ),
    });
    increment();
  };
  return (
    <Box sx={counterStyle.counterContainer}>
      <Text sx={counterStyle.countTitle}>Current count {count}</Text>
      <Button onClick={handleIncrement} sx={counterStyle.counterButton}>
        +1
      </Button>
    </Box>
  );
};

export default Counter;
