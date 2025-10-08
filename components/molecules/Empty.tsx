import { Container, Text } from "@chakra-ui/react";

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <Container maxW="1400px" py={8} textAlign="center">
      <Text color="neon.white" fontSize="xl">
        {message}
      </Text>
    </Container>
  );
};

export default EmptyState;