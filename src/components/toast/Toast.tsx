import { Box, Text, Icon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { toastStlyes } from "./toast-style";
interface ToastProps {
  title: string;
  text: string;
}

const Toast = ({ title, text }: ToastProps) => {
  const toastStyle = toastStlyes();
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={toastStyle.gradientBorderStyles} />
      <Box sx={toastStyle.toastContainerStyles}>
        <Box sx={toastStyle.iconContainerStyles}>
          <Icon as={CheckIcon} sx={toastStyle.iconStyles} />
        </Box>
        <Box>
          <Text sx={toastStyle.titleStyles}>{title}</Text>
          <Text sx={toastStyle.textStyles}>{text}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Toast;
