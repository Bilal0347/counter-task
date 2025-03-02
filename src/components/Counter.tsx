import { useCounter } from "../context/useCounter";
import { Button, useToast, Box, Text, Icon, Heading } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { toastStlyes } from "../styles/toast-style";

const Counter = () => {
  const { count, increment } = useCounter();
  const toast = useToast();
  const toastStyle = toastStlyes();
  const handleIncrement = () => {
    toast({
      render: () => (
        <Box sx={{ position: "relative" }}>
          <Box sx={toastStyle.gradientBorderStyles} />
          <Box sx={toastStyle.toastContainerStyles}>
            <Box sx={toastStyle.iconContainerStyles}>
              <Icon as={CheckIcon} sx={toastStyle.iconStyles} />
            </Box>
            <Box>
              <Text sx={toastStyle.titleStyles}>Incremented</Text>
              <Text sx={toastStyle.textStyles}>Counter is now {count + 1}</Text>
            </Box>
          </Box>
        </Box>
      ),
    });
    increment();
  };
  return (
    <Box
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Heading>Current count {count}</Heading>
      <Button
        onClick={handleIncrement}
        style={{
          padding: "10px",
          fontSize: "15px",
          fontWeight: "bold",
          cursor: "pointer",
          borderRadius: "5px",
          backgroundColor: "lightgray",
          border: "none",
        }}
      >
        +1
      </Button>
    </Box>
  );
};

export default Counter;
