import React from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';

const AddRemove = () => {
  return (
    <Flex
      width="90px"
      height="56px"
      border="1px solid gray"
      justifyContent="center"
      alignItems="center"
    >
      <Button size="xs" background="transparent" fontSize="x-large">
        -
      </Button>
      <Input value="3" border="unset"></Input>
      <Button size="xs" background="transparent" fontSize="large">
        +
      </Button>
    </Flex>
  );
};

export default AddRemove;
