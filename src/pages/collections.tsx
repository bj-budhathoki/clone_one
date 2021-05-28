import React from 'react';

import { Checkbox, CheckboxGroup } from '@chakra-ui/checkbox';
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/input';
import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  Stack,
  useDisclosure
} from '@chakra-ui/react';
import { BiGridHorizontal, BiGridSmall, BiListUl } from 'react-icons/bi';

import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb';
import { Product } from '@/components/Card/Product';
import { QuickViewModal } from '@/components/Modal/QuickViewModal';
import { InputSelect } from '@/components';

const collections = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Box background="gray.100" textAlign="center" py="2rem">
          <BreadCrumb />
        </Box>
        <Box py="3rem">
          <Container maxW="container.xl">
            <Flex style={{ gap: '1.5rem' }}>
              <Box>
                <Box>
                  <InputGroup size="sm">
                    <Input placeholder="mysite" />
                    <InputRightAddon children=".com" />
                  </InputGroup>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  style={{ gap: '2rem' }}
                  mt="2rem"
                >
                  <Box>
                    <Text mb="1rem" fontSize="lg">
                      Categories
                    </Text>
                    <CheckboxGroup
                      colorScheme="green"
                      // defaultValue={['naruto', 'kakashi']}
                    >
                      <Stack spacing="16px">
                        {[
                          'feshion',
                          'men',
                          'wemen',
                          'eletronics',
                          'furniture',
                          'plat',
                          'organic food',
                          'flower',
                          'book'
                        ].map((option) => (
                          <Checkbox
                            value={option}
                            textTransform="capitalize"
                            key={option}
                          >
                            {option}
                          </Checkbox>
                        ))}
                      </Stack>
                    </CheckboxGroup>
                  </Box>

                  <Box>
                    <Box>
                      <Text mb="1rem" fontSize="lg">
                        Colors
                      </Text>
                      <CheckboxGroup
                        colorScheme="green"
                        // defaultValue={['naruto', 'kakashi']}
                      >
                        <Stack spacing="16px">
                          {['white', 'black', 'blue', 'brown'].map((option) => (
                            <Checkbox
                              value={option}
                              textTransform="capitalize"
                              key={option}
                            >
                              {option}
                            </Checkbox>
                          ))}
                        </Stack>
                      </CheckboxGroup>
                    </Box>
                  </Box>
                  <Box>
                    <Text mb="1rem" fontSize="lg">
                      Sizes
                    </Text>
                    <CheckboxGroup
                      colorScheme="green"
                      // defaultValue={['naruto', 'kakashi']}
                    >
                      <Stack spacing="16px">
                        {['x', 'm', 'xl', 'xxl'].map((option) => (
                          <Checkbox value={option} textTransform="capitalize">
                            {option}
                          </Checkbox>
                        ))}
                      </Stack>
                    </CheckboxGroup>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Flex justifyContent="space-between" alignItems="center" py="3">
                  <Flex alignItems="center">
                    <Box>
                      <InputSelect width={200} borderRadius={0} />
                    </Box>
                    <Box px="5">showing 15 of 144 result</Box>
                  </Flex>
                  <Box>
                    <BiGridSmall />
                    <BiGridHorizontal />
                    <BiListUl />
                  </Box>
                </Flex>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                  {[1, 2, 3, 4, 5].map((val) => (
                    <Product key={val} onOpen={onOpen} />
                  ))}
                </Grid>
                <Box
                  background="red.200"
                  py="1rem"
                  mt="1rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box>pagination</Box>
                </Box>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
      {/* //quick modal view */}
      {isOpen && <QuickViewModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

export default collections;
