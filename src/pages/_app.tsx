import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { Navigation } from '@/containers/Navigation/Navigation';
import { Footer } from '@/containers/Footer/Footer';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex direction="column" height="100vh">
        <Navigation />
        <Box flex="auto" marginTop="5.6rem">
          <Component {...pageProps} />
        </Box>
        <Box>
          <Footer />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
