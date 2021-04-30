import { ChakraProvider } from '@chakra-ui/react';
import { Navigation } from '@/containers/Navigation/Navigation';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navigation />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
