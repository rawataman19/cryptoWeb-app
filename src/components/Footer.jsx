import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import owner from "../assets/owner.png";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={owner} />
          <Text>Our Founder</Text>
          <Stack direction="row" spacing={4} mt={2}>
            <a href="https://www.instagram.com/_rawataman20_/?next=%2F" style={{ color: "white" }}>
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com/Aman04227652" style={{ color: "white" }}>
              <FaTwitter size={20} />
            </a>
            
          </Stack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
