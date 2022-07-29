import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function IndexPage() {
  return (
    <Grid
      px={{ base: '5', md: '20' }}
      templateColumns={{
        base: '1',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
    >
      <GridItem>
        <Box
          bgImage="url('/map.jpeg')"
          bgSize="cover"
          pb="150%"
          pos="relative"
          rounded="2rem"
          w="full"
        >
          <VStack
            align="stretch"
            bgColor="#007bffda"
            inset={0}
            justify="space-between"
            rounded="2rem"
            pos="absolute"
            p="10"
          >
            <HStack justify="flex-end">
              <Text
                bg="whiteAlpha.400"
                backdropBlur="3xl"
                color="white"
                px="5"
                py="2"
                rounded="full"
              >
                2+ Players
              </Text>
            </HStack>
            <VStack
              align="stretch"
              h={{ base: '70%', md: '65%' }}
              justify="space-between"
              mt="auto"
            >
              <VStack align="stretch">
                <Text
                  color="white"
                  fontFamily="Rajdhani"
                  fontSize={{ base: '4.7rem', md: '7.2rem' }}
                  fontWeight="black"
                  lineHeight="1"
                  textTransform="uppercase"
                >
                  Name A Country
                </Text>
                <Text
                  color="white"
                  fontSize={{ base: 'lg', md: '2xl' }}
                  fontWeight="medium"
                >
                  Name a country starting with a random letter.
                </Text>
              </VStack>

              <HStack>
                <Button
                  bg="#007bff55"
                  as={ReactRouterLink}
                  color="white"
                  fontSize="xl"
                  fontWeight="black"
                  px="16"
                  py="8"
                  rounded="full"
                  ring="1rem"
                  ringColor="blackAlpha.300"
                  to="/name-a-country"
                  _hover={{
                    bg: '#007bff',
                  }}
                >
                  Play Now
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </GridItem>
    </Grid>
  );
}
