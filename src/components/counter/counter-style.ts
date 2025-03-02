import { SystemStyleObject } from "@chakra-ui/react";

export const counterStyles = () => {
  const counterContainer: SystemStyleObject = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    gap: 10,
  };

  const counterButton: SystemStyleObject = {
    backgroundColor: "lightgray",
    color: "black",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    _hover: {
      backgroundColor: "darkgray",
      color: "white",
      transform: "scale(1.05)",
      transition: "all 0.2s ease-in-out",
    },
  };

  const countTitle: SystemStyleObject = {
    color: "black",
    fontFamily: "Inter, sans-serif",
    fontSize: "24px",
  };

  return { counterContainer, counterButton, countTitle };
};
