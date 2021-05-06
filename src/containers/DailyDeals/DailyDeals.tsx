import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  RadioGroup,
  Stack,
  Radio
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { BsEye, BsHeart, BsStar } from 'react-icons/bs';
import {Title} from '@/components/Title/Title'
import Link from 'next/link';

export const DailyDeals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
      <Box display="flex" justifyContent="center">
        <Box width="fit-content">
        <Title text="daily deals"/>
        </Box>
        </Box>
        <Flex justifyContent="center" my="3rem">
          <Grid templateColumns="repeat(3, 1fr)" gap="3rem">
            <Box>
              <Heading as="h4" size="md" letterSpacing={2}>
                New Arrivals
              </Heading>
            </Box>
            <Box>
              <Heading as="h2" size="md" letterSpacing={2}>
                Best Seller
              </Heading>
            </Box>
            <Box>
              <Heading as="h4" size="md" letterSpacing={2}>
                Sell Items
              </Heading>
            </Box>
          </Grid>
        </Flex>
        <Box>
          <Grid templateColumns="repeat(auto-fit, minmax(250px,1fr))" gap={6}>
            {[1, 2, 3, 4, 5,6,7,8].map((val) => (
              <Box key={val}>
                <Box
                  position="relative"
                  role="group"
                  overflow="hidden"
                  _hover={{ cursor: 'pointer' }}
                >
                  <Badge
                    position="absolute"
                    zIndex={99}
                    right={5}
                    top={5}
                    colorScheme="purple"
                    py="1"
                    px="3"
                  >
                    New
                  </Badge>
                  <Link href={`/product/${val}`}>
                  <a>
                  <Image
                    height={350}
                    width={250}
                    src="/assets/images/product-8.jpg"
                    layout="responsive"
                  />
                  </a>
                  </Link>

                  <Box
                    transition="all 0.5s linear"
                    height={0}
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    zIndex={99}
                    _groupHover={{ height: 50 }}
                    display="flex"
                    style={{
                      gap: '1px'
                    }}
                  >
                    <Box
                      height={50}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      background="pink.600"
                      transition="all 0.5s linear"
                      transform="rotateX(90deg)"
                      transformOrigin="bottom"
                      flex="0.2"
                      _hover={{
                        background: 'black'
                      }}
                      _groupHover={{
                        height: 50,
                        transform: 'rotateX(0deg)'
                      }}
                    >
                      <BsHeart color="#fff" />
                    </Box>
                    <Box
                      height={50}
                      background="pink.600"
                      color="whiteAlpha.800"
                      textTransform="uppercase"
                      transition="all 0.5s linear 0.1s"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      transform="rotateX(90deg)"
                      transformOrigin="bottom"
                      flex={1}
                      _hover={{
                        background: 'black'
                      }}
                      _groupHover={{
                        height: 50,
                        transform: 'rotateX(0deg)'
                      }}
                    >
                      Buy Now
                    </Box>
                    <Box
                      height={50}
                      background="pink.600"
                      color="whiteAlpha.200"
                      transition="all 0.5s linear 0.2s "
                      flex="0.2"
                      transform="rotateX(90deg)"
                      transformOrigin="bottom"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      _hover={{
                        background: 'black'
                      }}
                      _groupHover={{
                        height: 50,
                        transform: 'rotateX(0deg)'
                      }}
                      title="quick view"
                      onClick={onOpen}
                    >
                      <BsEye color="#fff" title="quick view" />
                    </Box>
                  </Box>
                </Box>
                <Box py={4} textAlign="center">
                <Link href={`/product/${val}`}>
                      <a>
                      <Heading as="h3" size="md"
                      transition="all"
                      transitionDuration="0.2s"
                      transitionTimingFunction="ease-in"
                      _hover={{
                        color:'pink'
                      }}>
                    Lorem ipsum dolor sit amet.
                  </Heading>
                      </a>
                  </Link>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Flex style={{ gap: '10px' }} py={2}>
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                    </Flex>
                    <Heading as="h6" size="xs">
                      $ 30.99
                    </Heading>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* //quick modal view */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={true}
        isCentered
        size="5xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            mb={5}
            py={6}
            borderBottom="0.2pt solid gray"
          ></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" style={{ gap: '2rem' }}>
              <Box position="relative" flex={1}>
                <Image
                  height={500}
                  width={400}
                  src="/assets/images/product-8.jpg"
                  layout="responsive"
                />
              </Box>
              <Box flex={1}>
                <Box borderBottom="1px solid gray " pb={3}>
                  <Box>
                    <Heading as="h4" size="lg" mb={3}>
                      Lorem ipsum dolor sit amet consectetur
                    </Heading>
                    <Heading as="h6" size="md">
                      $ 30.99
                    </Heading>
                    <Flex style={{ gap: '10px' }} py={2}>
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                    </Flex>
                  </Box>
                  <Text fontSize="md" color="gray.700" mt={4}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Perspiciatis, nostrum? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsum, sunt!
                  </Text>
                </Box>
                <Flex py={5} style={{ gap: '5rem' }}>
                  <Box>
                    <Text fontSize="xl" fontWeight="normal" mb={2}>
                      Color
                    </Text>
                    <RadioGroup value="1">
                      <Stack direction="row">
                        <Radio value="1" colorScheme="red" size="lg"></Radio>
                        <Radio value="2" colorScheme="green" size="lg"></Radio>
                        <Radio value="3" colorScheme="blue" size="lg"></Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                  <Box>
                    <Text fontSize="xl" fontWeight="normal" mb={2}>
                      Size
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
