import { Box, Flex, Grid, Heading } from '@chakra-ui/layout';
import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { services } from '../../../data/services';
const StyledServiceIcon = styled(Box)`
  @keyframes tada {
    0% {
      transform: scale3d(1, 1, 1);
    }
    10%,
    20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }
    30%,
    50%,
    70%,
    90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%,
    60%,
    80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
  &:hover {
    animation: tada 0.5s linear;
    animation-fill-mode: both;
  }
`;

export const Services = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr) " gap={4}>
      {services?.map((service) => (
        <Flex alignItems="center" key={service.title}>
          <StyledServiceIcon>
            <Image src={service?.img} width={45} height={45} layout="fixed" />
          </StyledServiceIcon>
          <Box marginLeft="1rem">
            <Heading as="h6" size="md" fontWeight="medium">
              {service?.title}
            </Heading>
            <p> {service?.desc}</p>
          </Box>
        </Flex>
      ))}
    </Grid>
  );
};
