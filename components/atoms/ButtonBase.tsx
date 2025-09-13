import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface ButtonBaseProps extends Omit<ChakraButtonProps, "variant"> {
  variant: "primary" | "secondary" | "success" | "small";
  children: React.ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
}

const ButtonBase: React.FC<ButtonBaseProps> = ({
  variant,
  children,
  onClick,
  fullWidth = false,
  ...props
}) => {
  // variantのマッピング
  const variantMap = {
    primary: "neonPrimary",
    secondary: "neonSecondary",
    success: "neonSuccess",
    small: "neonSmall",
  };

  const sizeMap = {
    primary: "md",
    secondary: "md",
    success: "md",
    small: "sm",
  };

  return (
    <Button
      variant={variantMap[variant]}
      size={sizeMap[variant]}
      onClick={onClick}
      w={fullWidth ? "full" : "auto"}
      fontFamily="heading"
      textTransform="uppercase"
      letterSpacing="1px"
      _hover={{
        transform: "scale(1.05)",
      }}
      _active={{
        transform: "scale(0.98)",
      }}
      transition="all 0.2s ease"
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonBase;
