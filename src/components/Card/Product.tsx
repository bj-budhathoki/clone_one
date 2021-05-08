import React from 'react';
import { Badge, Box, Flex, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { BsEye, BsHeart, BsStar } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
export const Product = ({ onOpen }): JSX.Element => {
  return (
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
        <Link href={`/product/${1}`}>
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
        <Link href={`/product/${1}`}>
          <a>
            <Heading
              as="h3"
              size="md"
              transition="all"
              transitionDuration="0.2s"
              transitionTimingFunction="ease-in"
              _hover={{
                color: 'pink'
              }}
            >
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
  );
};
