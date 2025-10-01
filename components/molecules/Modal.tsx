import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalProps as ChakraModalProps,
} from "@chakra-ui/react";

interface ModalProps extends Omit<ChakraModalProps, "children"> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = "xl",
  ...props
}) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      isCentered
      {...props}
    >
      <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(4px)" />
      <ModalContent
        bg="neon.black"
        border="2px solid"
        borderColor="brand.500"
        borderRadius="16px"
        boxShadow="0 0 40px rgba(0, 255, 255, 0.4)"
        fontFamily="body"
        maxH="80vh"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0, 255, 255, 0.3)",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(0, 255, 255, 0.5)",
          },
        }}
      >
        {title && (
          <ModalHeader
            color="brand.500"
            textShadow="0 0 20px rgba(0, 255, 255, 1)"
            fontFamily="heading"
            fontSize="xl"
            textTransform="uppercase"
            letterSpacing="1px"
            pb={4}
          >
            {title}
          </ModalHeader>
        )}

        <ModalCloseButton
          color="brand.500"
          border="2px solid"
          borderColor="brand.500"
          borderRadius="8px"
          boxShadow="0 0 15px rgba(0, 255, 255, 0.3)"
          _hover={{
            bg: "rgba(0, 255, 255, 0.1)",
            transform: "scale(1.1)",
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
          }}
          _active={{
            transform: "scale(0.95)",
          }}
          transition="all 0.2s ease"
          size="lg"
        />

        <ModalBody pb={6}>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;