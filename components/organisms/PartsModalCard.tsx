import {
  VStack,
  HStack,
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  Divider,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PartWithPriceProps } from "@/type/type";
import Modal from "../molecules/Modal";
import Price from "../atoms/Price";
import PartSpecs from "../molecules/PartsSpecs";
import ButtonBase from "../atoms/ButtonBase";
import RankBadge from "../atoms/RankBadge";

interface PartDetailModalProps {
  part: PartWithPriceProps | null;
  isOpen: boolean;
  onClose: () => void;
  onPurchase?: (part: PartWithPriceProps) => void;
}

const PartDetailModal: React.FC<PartDetailModalProps> = ({
  part,
  isOpen,
  onClose,
  onPurchase,
}) => {
  const toast = useToast();
  const modalSize =
    useBreakpointValue<"sm" | "2xl">({ base: "sm", md: "2xl" }) ?? "sm";

  if (!part) return null;

  const handlePurchaseClick = () => {
    if (part.url) {
      window.open(part.url, "_blank");
    } else {
      toast({
        title: "購入ページ情報なし",
        description: "このパーツには購入リンクが設定されていません。",
        status: "info",
        duration: 2500,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={part.model}
      size={modalSize}
    >
      <VStack spacing={6} align="start" px={{ base: 2, md: 4 }}>
        <HStack justify="space-between" w="full" flexWrap="wrap">
          <Price price={part.price} size="xl" />
          <RankBadge
            rank={
              part.recommendationType as "budget" | "recommended" | "highend"
            }
            size="lg"
          />
        </HStack>

        <Box w="full">
          <Heading
            size="md"
            color="neon.white"
            borderBottom="2px solid"
            borderColor="brand.500"
            pb={2}
            mb={4}
          >
            詳細仕様
          </Heading>
          <PartSpecs part={part} showDetailed />
        </Box>

        <Divider borderColor="brand.500" />

        <Card variant="neon" w="full">
          <CardBody>
            <VStack spacing={3} align="start" w="full">
              <Text color="neon.white" fontSize="lg">
                {part.description}
              </Text>
            </VStack>
          </CardBody>
        </Card>

        <Divider borderColor="rgba(0,255,255,0.2)" />

        <HStack
          spacing={4}
          w="full"
          justify="flex-end"
          flexDir={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
        >
          <ButtonBase
            variant="secondary"
            onClick={onClose}
            w={{ base: "full", md: "auto" }}
          >
            閉じる
          </ButtonBase>
          <ButtonBase
            variant="success"
            onClick={handlePurchaseClick}
            w={{ base: "full", md: "auto" }}
          >
            購入サイトへ
          </ButtonBase>
        </HStack>
      </VStack>
    </Modal>
  );
};

export default PartDetailModal;
