import { Button, Stack } from "@chakra-ui/react";

interface ToggleButtonProps {
  options: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
  size?: "sm" | "md" | "lg";
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  options,
  selected,
  onChange,
  size = "md",
}) => (
  <Stack
    direction={{ base: "column", md: "row" }}
    align={{ base: "stretch", md: "center" }}
    justify={{ base: "flex-start", md: "center" }}
    spacing={3}
    mb={5}
    w="full"
    flexWrap="wrap"
  >
    {options.map((option) => (
      <Button
        key={option.value}
        variant={
          selected === option.value
            ? option.value === "budget"
              ? "neonBudget"
              : option.value === "recommended"
                ? "neonRecommended"
                : option.value === "highend"
                  ? "neonHighend"
                  : "neonPrimary"
            : "neonSecondary"
        }
        size={size}
        onClick={() => onChange(option.value)}
        fontFamily="heading"
        textTransform="uppercase"
        letterSpacing="1px"
        _hover={{
          transform: "scale(1.02)",
        }}
        _active={{
          transform: "scale(0.98)",
        }}
        width={{ base: "100%", md: "auto" }}
        minW={{ base: "100%", md: "160px" }}
      >
        {option.label}
      </Button>
    ))}
  </Stack>
);

export default ToggleButton;
