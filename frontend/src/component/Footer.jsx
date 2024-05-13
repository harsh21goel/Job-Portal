import { Box, Link, Stack, Text, Input, Button, Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      as="footer"
      bg="purple.900"
      color="gray.100"
      py={8}
      mt={20}
    >
      {/* Footer Content */}
      <Stack direction="column" spacing={4} align="center">
        <Text fontSize="xl" fontWeight="bold">Job Portal</Text>
        <Stack direction="row" spacing={4}>
          <Link href="/" textDecoration="none" _hover={{ textDecoration: "underline" }}>Home</Link>
          <Link href="/about" textDecoration="none" _hover={{ textDecoration: "underline" }}>About Us</Link>
          <Link href="/contact" textDecoration="none" _hover={{ textDecoration: "underline" }}>Contact</Link>
          <Link href="/terms" textDecoration="none" _hover={{ textDecoration: "underline" }}>Terms of Service</Link>
          <Link href="/privacy" textDecoration="none" _hover={{ textDecoration: "underline" }}>Privacy Policy</Link>
        </Stack>
        <Text>Follow us on social media:</Text>
        <Flex justify="center">
          <Link href="#" mr={4}>
            <i className="fab fa-facebook-f" style={{ fontSize: "24px" }}></i>
          </Link>
          <Link href="#" mr={4}>
            <i className="fab fa-twitter" style={{ fontSize: "24px" }}></i>
          </Link>
          <Link href="#" mr={4}>
            <i className="fab fa-instagram" style={{ fontSize: "24px" }}></i>
          </Link>
          <Link href="#" mr={4}>
            <i className="fab fa-linkedin-in" style={{ fontSize: "24px" }}></i>
          </Link>
        </Flex>
        <Text>Subscribe to our newsletter:</Text>
        <Flex align="center">
          <Input placeholder="Enter your email" mr={4} />
          <Button bg={"btn.100"} color={"gray.100"}>Subscribe</Button>
        </Flex>
        <Text mt={4}>© 2024 Job Portal. All rights reserved.</Text>
      </Stack>
    </Box>
  );
}

export default Footer;
