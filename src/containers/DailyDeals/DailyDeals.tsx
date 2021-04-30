import { Badge, Box, Flex, Grid, Heading } from '@chakra-ui/layout';
import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { BsEye, BsHeart, BsStar } from 'react-icons/bs';
const Title = styled(Heading)``;

export const DailyDeals = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Box width="fit-content">
          <Heading
            as="h2"
            size="md"
            textTransform="uppercase"
            letterSpacing={2}
            position="relative"
            _before={{
              content: "''",
              background: 'gray.800',
              height: '2px',
              width: '80px',
              position: 'absolute',
              top: '50%',
              left: '-100px'
            }}
            _after={{
              content: "''",
              background: 'gray.800',
              height: '2px',
              width: '80px',
              position: 'absolute',
              bottom: '50%',
              right: '-100px'
            }}
          >
            daily deals
          </Heading>
        </Box>
      </Box>
      <Flex justifyContent="center" my="3rem">
        <Grid templateColumns="repeat(3, 1fr)" gap={18}>
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
        <Grid templateColumns="repeat(auto-fit, minmax(300px,1fr))" gap={6}>
          {[1, 2, 3, 4, 5].map((val) => (
            <Box>
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
                <Image
                  height={400}
                  width={300}
                  src="/assets/images/product-8.jpg"
                  layout="responsive"
                />
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
                  >
                    <BsEye color="#fff" />
                  </Box>
                </Box>
              </Box>
              <Box py={4} textAlign="center">
                <Heading as="h3" size="md">
                  Lorem ipsum dolor sit amet.
                </Heading>
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
  );
};
