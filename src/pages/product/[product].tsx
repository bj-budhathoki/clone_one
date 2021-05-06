import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text
} from '@chakra-ui/layout';

import Image from 'next/image';
import { Button } from '@chakra-ui/button';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { DailyDeals } from '@/containers/DailyDeals/DailyDeals';
import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb';
const ProductDetails = () => {
  const route = useRouter();
  console.log('route', route);
  return (
    <Box marginTop="5.6rem">
      <Box textAlign="center" background="gray.100" py="5">
        <BreadCrumb />
      </Box>
      <Container maxW="container.lg">
        <Box>
          <Flex style={{ gap: '3rem' }} py="5rem">
            <Box position="relative" flex="1">
              <Box>
                <Image
                  height={350}
                  width={250}
                  src="/assets/images/product-8.jpg"
                  layout="responsive"
                />
              </Box>
              <Box width="100%" overflow="hidden" mt="1rem">
                <Flex style={{ gap: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((val) => (
                    <Box key={val} width="100%">
                      <Image
                        height={180}
                        width={135}
                        src="/assets/images/product-8.jpg"
                        layout="responsive"
                      />
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
            <Box flex="1">
              <Box>
                <Heading as="h4" size="lg">
                  Lorem ipsum fashion female top
                </Heading>
                <Text fontSize="1.5rem" py="0.5rem" color="red.300">
                  $30.99
                </Text>
                <Text
                  fontSize="lg"
                  color="gray.500"
                  lineHeight="tall"
                  textAlign="justify"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati dolorum a harum quis porro fugiat itaque hic minus
                  nesciunt, fuga eos suscipit sapiente? Velit, labore illo
                  expedita quam odit voluptate ad amet magnam illum architecto
                  necessitatibus facilis ipsa quos quae.
                </Text>
              </Box>
              <Divider my="3rem" />
              <Box>
                <Button
                  colorScheme="teal"
                  size="lg"
                  textTransform="uppercase"
                  borderRadius="unset"
                >
                  buy now
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Tabs size="lg">
            <TabList>
              <Tab fontWeight="bold">Additional Information</Tab>
              <Tab fontWeight="bold"> Description</Tab>
              <Tab fontWeight="bold">Reviews</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <Text fontSize="lg" color="gray.500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni, non suscipit! Non, cum. Dolor aut officiis ullam,
                  maiores eos hic dignissimos odio vero cum quidem non quis
                  accusantium corporis necessitatibus, veritatis distinctio
                  repudiandae magni at, sapiente voluptates commodi
                  exercitationem? Quisquam ipsum natus quo, veniam quasi qui
                  ducimus libero officiis facere?
                </Text>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box my="5rem">
          <DailyDeals />
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetails;
