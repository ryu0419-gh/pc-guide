import { Box, VStack, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ToggleButton from "@/components/atoms/ToggleButton";
import { SpecLevel } from "@/type/type";

const MotionBox = motion(Box);

interface RankSelectorProps {
  options: { value: string; label: string }[];
  selected: SpecLevel;
  onChange: (value: string) => void;
}

const RankSelector: React.FC<RankSelectorProps> = ({
  options,
  selected,
  onChange,
}) => {
  return (
    <MotionBox
      w="full"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <VStack spacing={4}>
        <Heading variant="neonSubtitle">構成を選択</Heading>
        <ToggleButton
          options={options}
          selected={selected}
          onChange={onChange}
        />
      </VStack>
    </MotionBox>
  );
};

export default RankSelector;