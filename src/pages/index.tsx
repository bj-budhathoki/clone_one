import { DailyDeals } from '@/containers/DailyDeals/DailyDeals';
import { HeroSlider } from '@/containers/HeroSlider/HeroSlider';
import { Services } from '@/containers/Services/Services';
import { Box, Container } from '@chakra-ui/layout';

export default function Home() {
  return (
    <main>
      <Box marginTop="4rem" background="green.500" minHeight="70vh">
        <HeroSlider />
      </Box>
      <Box my="8rem">
        <Container maxW="container.xl">
          <Services />
        </Container>
      </Box>

      <Box>
        <Container maxW="container.xl">
          <DailyDeals />
        </Container>
      </Box>
      <Box height="300px">footer</Box>
    </main>
  );
}
