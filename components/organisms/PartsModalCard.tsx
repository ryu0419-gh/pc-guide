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
  const modalSize = useBreakpointValue({ base: "sm", md: "2xl" });


  if (!part) return null;

  const handlePurchaseClick = () => {
    if (onPurchase) {
      onPurchase(part);
    } else {
      toast({
        title: "購入サイトへ移動",
        description: `${part.model}の購入ページを開きます`,
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={part.model} size={modalSize}>
      <VStack spacing={6} align="start" px={{ base: 2, md: 4 }}>
        <Price price={part.price} size="xl" />

        <Box w="full">
          <Heading
            size="md"
            color="neon.white"
            borderBottom="2px solid"
            borderColor="brand.500"
            pb={2}
            mb={4}
            fontFamily="heading"
            textTransform="uppercase"
            letterSpacing="1px"
            fontSize={{ base: "md", md: "lg" }}
          >
            詳細仕様
          </Heading>
          <PartSpecs part={part} showDetailed={true} spacing={2} />
        </Box>

        <Divider borderColor="brand.500" />

        <Card variant="neon" w="full">
          <CardBody>
            <VStack spacing={3} align="start">
              <Heading
                size="sm"
                color="neon.white"
                fontFamily="heading"
                textTransform="uppercase"
                textShadow="0 0 10px rgba(0, 255, 255, 0.5)"
              >
                製品説明
              </Heading>
              <Text
                color="neon.gray"
                lineHeight="1.6"
                fontSize={{ base: "sm", md: "md" }}
                fontFamily="body"
              >
                {part.description}
              </Text>
            </VStack>
          </CardBody>
        </Card>

        {part.benchmarkScore && (
          <Card
            variant="outline"
            w="full"
            borderColor="rgba(0, 255, 255, 0.3)"
            bg="transparent"
          >
            <CardBody>
              <HStack justify="space-between" align="center" flexDir={{ base: "column", md: "row" }}>
                <VStack align="start" spacing={1}>
                  <Text
                    fontSize="sm"
                    color="neon.gray"
                    textTransform="uppercase"
                    fontFamily="heading"
                  >
                    ベンチマークスコア
                  </Text>
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="brand.500"
                    fontFamily="heading"
                  >
                    {part.benchmarkScore}
                  </Text>
                </VStack>
                <Box mt={{ base: 2, md: 0 }}>
                  <Text fontSize="xs" color="neon.gray">
                    {part.benchmarkScore >= 90
                      ? "ハイパフォーマンス"
                      : part.benchmarkScore >= 70
                      ? "ミドルレンジ"
                      : "エントリーレベル"}
                  </Text>
                </Box>
              </HStack>
            </CardBody>
          </Card>
        )}

        <Divider borderColor="rgba(0, 255, 255, 0.2)" />

        <HStack
          spacing={4}
          w="full"
          justify="flex-end"
          flexDir={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
        >
          <ButtonBase variant="secondary" onClick={onClose} w={{ base: "full", md: "auto" }}>
            閉じる
          </ButtonBase>
          <ButtonBase variant="success" onClick={handlePurchaseClick} w={{ base: "full", md: "auto" }}>
            購入サイトへ
          </ButtonBase>
        </HStack>
      </VStack>
    </Modal>
  );
};

export default PartDetailModal;
