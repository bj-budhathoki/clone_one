import React from 'react';
import { Box, Container, Flex, Grid, Heading } from '@chakra-ui/layout';
import Link from 'next/link';
import styled from '@emotion/styled';
const StyledA = styled.a`
  font-size: 15px;
  font-weight: 500;
  display: inline-block;
  letter-spacing: 0.8px;
  color: #555252;
`;
export const Navigation = () => {
  return (
    <Box
      background="#fff"
      py="2rem"
      boxShadow="sm"
      position="fixed"
      top="0"
      right="0"
      left="0"
      zIndex={99999}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" alignItems="center">
          <Heading as="h5" size="md" isTruncated>
            Clone.
          </Heading>
          <Box>
            <nav>
              <Grid templateColumns="repeat(5, 1fr)" gap={8}>
                <Link href="#">
                  <StyledA>Home</StyledA>
                </Link>
                <Link href="#">
                  <StyledA>Shop</StyledA>
                </Link>
                <Link href="#">
                  <StyledA>Collections</StyledA>
                </Link>
                <Link href="#">
                  <StyledA>Contact Us</StyledA>
                </Link>
              </Grid>
            </nav>
          </Box>
          <Box>cta</Box>
        </Flex>
      </Container>
    </Box>
  );
};
