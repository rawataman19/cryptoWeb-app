import { HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <HStack p="4" shadow="base" bgColor="blackAlpha.900">
      <Button as={Link} to="/" variant="unstyled" color="white">
        Home
      </Button>
      <Button as={Link} to="/Exchanges" variant="unstyled" color="white">
        Exchanges
      </Button>
      <Button as={Link} to="/Coins" variant="unstyled" color="white">
        Coins
      </Button>
    </HStack>
  );
};

export default Header;
