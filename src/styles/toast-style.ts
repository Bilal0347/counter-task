import { SystemStyleObject } from "@chakra-ui/react";

export const toastStlyes = () => {
  const toastContainerStyles: SystemStyleObject = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "12px 20px 12px 16px",
    gap: "8px",
    background:
      "radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(70, 154, 106, 0.18) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F",
    boxShadow:
      "0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)",
    borderRadius: "8px",
  };

  const gradientBorderStyles: SystemStyleObject = {
    position: "absolute",
    top: "-1px",
    left: "-1px",
    right: "-1px",
    bottom: "-1px",
    background: "linear-gradient(90deg, #469A6A, #6F7076)",
    borderRadius: "8px",
    zIndex: -1,
  };

  const iconContainerStyles: SystemStyleObject = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
    height: "30px",
    borderRadius: "full",
    border: "3px solid",
    borderColor: "green.300",
    background: "transparent",
  };

  const iconStyles: SystemStyleObject = {
    width: "16px", // Equivalent to w={4} in Chakra UI
    height: "16px",
    color: "#74C898",
    fontWeight: "bold",
  };

  const titleStyles: SystemStyleObject = {
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
  };

  const textStyles: SystemStyleObject = {
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#FFFFFF",
  };

  return {
    toastContainerStyles,
    gradientBorderStyles,
    iconContainerStyles,
    iconStyles,
    titleStyles,
    textStyles,
  };
};
