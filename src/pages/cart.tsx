import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb';
import { Box } from '@chakra-ui/layout';
import React from 'react';

const cart = () => {
  return (
    <Box mt="6rem">
      <Box textAlign="center" background="gray.100" py="5">
        <BreadCrumb />
      </Box>
      <Box> cart page</Box>
    </Box>
  );
};

export default cart;
