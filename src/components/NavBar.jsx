import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="blue.500" px={4} py={2} color="white">
      <Flex align="center">
        <Heading size="md">Public Post Board</Heading>
        <Spacer />
        <Button colorScheme="blue" variant="outline">
          Login
        </Button>
      </Flex>
    </Box>
  );
};

export default NavBar;