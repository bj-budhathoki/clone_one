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
import { Title } from '@/components/Title/Title';
import Link from 'next/link';
import { Product } from '@/components/Card/Product';
import { QuickViewModal } from '@/components/Modal/QuickViewModal';

export const DailyDeals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Box display="flex" justifyContent="center">
          <Box width="fit-content">
            <Title text="daily deals" />
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((val) => (
              <Product key={val} onOpen={onOpen} />
            ))}
          </Grid>
        </Box>
      </Box>

      {/* //quick modal view */}
      {isOpen && <QuickViewModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
};
