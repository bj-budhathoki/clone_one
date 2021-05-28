import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/layout';

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/modal';
import { Radio, RadioGroup, useRadio, useRadioGroup } from '@chakra-ui/radio';
import Image from 'next/image';
import React from 'react';
import { BsStar } from 'react-icons/bs';
import AddRemove from '../AddRemove';
import { SizeColor } from '../SizeColor';

export const QuickViewModal = ({ isOpen, onClose }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log
  });
  const group = getRootProps();
  return (
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, nostrum? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum, sunt!
                </Text>
              </Box>
              <SizeColor />
              <Flex mt={5} style={{ gap: '1rem' }}>
                <AddRemove />
                <Button
                  colorScheme="teal"
                  size="lg"
                  borderRadius="unset"
                  textTransform="uppercase"
                  py={7}
                  px={9}
                  _hover={{
                    boxShadow: 'inset 10.5em 0 0 0 #05646a'
                  }}
                >
                  Add to cart
                </Button>
              </Flex>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
