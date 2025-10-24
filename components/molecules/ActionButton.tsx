import { HStack } from "@chakra-ui/react";
import ButtonBase from "@/components/atoms/ButtonBase";

interface ActionButtonsProps {
  onSave: () => void;
  onPurchase: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onSave,
  onPurchase,
}) => {
  return (
    <HStack spacing={4} flexWrap="wrap" justify="center">
      <ButtonBase variant="success" onClick={onSave}>
        この構成を保存する
      </ButtonBase>
      <ButtonBase variant="success" onClick={onPurchase}>
        購入サイトはこちら
      </ButtonBase>
    </HStack>
  );
};

export default ActionButtons;
