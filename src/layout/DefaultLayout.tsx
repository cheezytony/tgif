import { Box, HStack, Link, VStack } from '@chakra-ui/react';
import { Link as ReactRouterLink, Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <Box
      bgImg="url('/bg.png')"
      bgSize="cover"
      bgPos="center"
      color="#fff"
      h="100vh"
      overflowY="auto"
    >
      <VStack align="stretch" backdropFilter="blur(10px)" bg="#007bff85" minH="full">
        <HStack as="header" px={{ base: '5', md: '20' }} py="10">
          <Link
            as={ReactRouterLink}
            fontFamily="Rajdhani"
            fontSize="4xl"
            letterSpacing="wider"
            textTransform="uppercase"
            to="/"
            textDecor="none"
            _hover={{
              textDecor: 'none'
            }}
          >
            CredPal TGIF
          </Link>
        </HStack>

        <VStack align="stretch" flexGrow={1}>
          <Outlet />
        </VStack>
      </VStack>
    </Box>
  );
}
