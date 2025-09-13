import { Badge } from "@chakra-ui/react";

interface RankBadgeProps {
  rank: "budget" | "recommended" | "highend";
  size?: "sm" | "md" | "lg";
}

const RankBadge: React.FC<RankBadgeProps> = ({ rank, size = "md" }) => {
  const labels = {
    budget: "コスパ重視",
    recommended: "推奨",
    highend: "ハイエンド",
  };

  const sizeMap = {
    sm: { px: 2, py: 1, fontSize: "10px" },
    md: { px: 3, py: 1, fontSize: "12px" },
    lg: { px: 4, py: 2, fontSize: "14px" },
  };

  return (
    <Badge
      variant={rank}
      {...sizeMap[size]}
      borderRadius="8px"
      fontFamily="heading"
      textTransform="uppercase"
      letterSpacing="1px"
      fontWeight="bold"
    >
      {labels[rank]}
    </Badge>
  );
};

export default RankBadge;
