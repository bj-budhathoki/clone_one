import { BreadCrumb } from '@/components/BreadCrumb/BreadCrumb';
import { Box } from '@chakra-ui/layout';
import React from 'react';

const NotFound = () => {
  return (
    <Box mt="6rem">
      <Box textAlign="center" background="gray.100" py="5">
        <BreadCrumb />
      </Box>
      <Box> 404 page</Box>
    </Box>
  );
};

export default NotFound;
