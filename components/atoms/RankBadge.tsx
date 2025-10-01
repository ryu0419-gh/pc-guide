import { ButtonGroup, Button } from "@chakra-ui/react";

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
  <ButtonGroup spacing={3} mb={5}>
    {options.map((option) => (
      <Button
        key={option.value}
        variant={selected === option.value ? "neonPrimary" : "neonSecondary"}
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
        transition="all 0.2s ease"
      >
        {option.label}
      </Button>
    ))}
  </ButtonGroup>
);

export default ToggleButton;