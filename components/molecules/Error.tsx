import { Container, Text } from "@chakra-ui/react";

interface ErrorStateProps {
  message: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
  return (
    <Container maxW="1400px" py={8} textAlign="center">
      <Text color="red.500" fontSize="xl">
        {message}
      </Text>
    </Container>
  );
};

export default ErrorState;