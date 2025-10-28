import { Card, CardBody, VStack, Box } from "@chakra-ui/react";

interface LoadingStateProps {
  height?: string | number;
}

const LoadingState: React.FC<LoadingStateProps> = ({ height = "400px" }) => {
  return (
    <Card variant="neon" h={height}>
      <CardBody>
        <VStack spacing={4} align="start">
          <Box w="full" h="20px" bg="gray.700" borderRadius="md" />
          <Box w="60%" h="16px" bg="gray.700" borderRadius="md" />
          <Box w="80%" h="24px" bg="gray.700" borderRadius="md" />
          <Box w="full" h="60px" bg="gray.700" borderRadius="md" />
        </VStack>
      </CardBody>
    </Card>
  );
};

export default LoadingState;
