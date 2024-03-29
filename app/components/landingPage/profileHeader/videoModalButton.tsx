import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalCloseButton,
  AspectRatio,
  Image,
} from "@chakra-ui/react";

type VideoModalButtonProp = {
  isHovered: boolean;
  // setIsHovered:React.Dispatch<React.SetStateAction<boolean>>
};

export default function VideoModalButton({ isHovered }: VideoModalButtonProp) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        position="absolute"
        top="75%"
        right={isHovered ? "-130px" : "51px"}
        transform="translateY(-15%)"
        transition="right 0.5s ease-in-out"
        zIndex={-10}
        pl={42}
        _hover={{ color: "#2F373C" }}
        onClick={onOpen}>
        introducing video
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>video to introduce myself</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={16 / 9}>
              <Image src={"/404.jpg"} alt="404" objectFit="cover" />
            </AspectRatio>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
