import { Container, Spinner, Text, VStack } from "@chakra-ui/react";

interface LoadingStateProps {
  message?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  message = "読み込み中...",
}) => {
  return (
    <Container maxW="1400px" py={8} textAlign="center">
      <VStack spacing={4}>
        <Spinner size="xl" color="brand.500" thickness="4px" />
        <Text color="neon.white" fontFamily="heading">
          {message}
        </Text>
      </VStack>
    </Container>
  );
};

export default LoadingState;