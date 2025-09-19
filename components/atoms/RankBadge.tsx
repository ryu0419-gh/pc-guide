import { Badge } from "@chakra-ui/react";

interface RankBadgeProps {
  rank: "budget" | "recommended" | "highend";
  size?: "sm" | "md" | "lg";
}

const RANK_LABELS = {
  budget: "コスパ重視",
  recommended: "推奨", 
  highend: "ハイエンド",
} as const;

const SIZE_STYLES = {
  sm: { px: 2, py: 1, fontSize: "10px" },
  md: { px: 3, py: 1, fontSize: "12px" },
  lg: { px: 4, py: 2, fontSize: "14px" },
} as const;

const RankBadge: React.FC<RankBadgeProps> = ({ rank, size = "md" }) => {
  return (
    <Badge
      variant={rank}
      {...SIZE_STYLES[size]}
      borderRadius="8px"
      fontFamily="heading"
      textTransform="uppercase"
      letterSpacing="1px"
      fontWeight="bold"
    >
      {RANK_LABELS[rank]}
    </Badge>
  );
};

export default RankBadge;