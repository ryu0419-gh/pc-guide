import { Box, Card, CardBody, VStack, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

interface GameBannerProps {
  title: string;
  thumbnail: string;
}

const GameBanner: React.FC<GameBannerProps> = ({ title, thumbnail }) => {
  return (
    <MotionCard
      variant="neonHighlight"
      w="full"
      position="relative"
      overflow="hidden"
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage={`url(${thumbnail})`}
        backgroundSize="cover"
        backgroundPosition="center top"
        opacity={0.6}
        filter="blur(2px)"
        zIndex={0}
      />

      {/* オーバーレイ */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,255,255,0.1))"
        zIndex={1}
      />

      <CardBody position="relative" zIndex={2}>
        <VStack spacing={4}>
          <Heading
            variant="neonSubtitle"
            textShadow="0 0 10px rgba(0, 255, 255, 0.8)"
            color="neon.white"
          >
            対象ゲーム
          </Heading>
          <Text
            fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            color="brand.500"
            fontFamily="STAATLICHES, sans-serif"
            textShadow="0 0 10px rgba(0, 255, 255, 1)"
            letterSpacing="2px"
            textTransform="uppercase"
            textAlign="center"
            lineHeight="1.1"
          >
            {title}
          </Text>
        </VStack>
      </CardBody>
    </MotionCard>
  );
};

export default GameBanner;
