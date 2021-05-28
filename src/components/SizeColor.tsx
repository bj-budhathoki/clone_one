import React from 'react';
import {
  Box,
  Stack,
  Text,
  Radio,
  RadioGroup,
  HStack,
  useRadioGroup,
  useRadio,
  Flex
} from '@chakra-ui/react';
const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        background="gray.100"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600'
        }}
        _focus={{
          boxShadow: 'outline'
        }}
        px={3}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export const SizeColor = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log
  });
  const group = getRootProps();
  return (
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
        <HStack {...group}>
          {['x', 'M', 'XL'].map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
      </Box>
    </Flex>
  );
};
