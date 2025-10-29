import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonBaseProps extends ButtonProps {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "small"
    | "budget"
    | "recommended"
    | "highend";
  children: React.ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  fontSize?: string | { base?: string; sm?: string; md?: string; lg?: string };
}

const ButtonBase: React.FC<ButtonBaseProps> = ({
  variant,
  children,
  onClick,
  fullWidth = false,
  disabled = false,
  isLoading = false,
  size,
  ...props
}) => {
  const variantMap = {
    primary: "neonPrimary",
    secondary: "neonSecondary",
    success: "neonSuccess",
    small: "neonSmall",
    budget: "neonBudget",
    recommended: "neonRecommended",
    highend: "neonHighend",
  } as const;

  const defaultSizeMap = {
    primary: "md",
    secondary: "md",
    success: "md",
    small: "sm",
    budget: "sm",
    recommended: "sm",
    highend: "sm",
  } as const;

  const buttonSize = size || defaultSizeMap[variant];

  return (
    <Button
      variant={variantMap[variant]}
      size={buttonSize}
      onClick={onClick}
      w={fullWidth ? "full" : "auto"}
      disabled={disabled}
      isLoading={isLoading}
      fontFamily="heading"
      textTransform="uppercase"
      letterSpacing="1px"
      _hover={
        !disabled && !isLoading
          ? {
              transform: "scale(1.05)",
            }
          : {}
      }
      _active={
        !disabled && !isLoading
          ? {
              transform: "scale(0.98)",
            }
          : {}
      }
      transition="all 0.2s ease"
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonBase;
