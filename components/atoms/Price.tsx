import { Text } from "@chakra-ui/react";

interface PriceProps {
  price: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const parsePrice = (priceString: string): number => {
  const cleaned = priceString.replace(/[^0-9]/g, "");
  const parsed = parseInt(cleaned);
  return isNaN(parsed) ? 0 : parsed;
};

const Price: React.FC<PriceProps> = ({ price, size = "lg" }) => {
  const numericPrice = parsePrice(price);

  const sizeMap = {
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "32px",
  } as const;

  return (
    <Text
      color="brand.500"
      fontSize={sizeMap[size]}
      fontWeight="bold"
      mb={4}
      textShadow="0 0 15px rgba(0, 255, 255, 1)"
      fontFamily="heading"
      letterSpacing="1px"
    >
      ¥{numericPrice.toLocaleString()}
    </Text>
  );
};

export default Price;