import React from 'react';
import { Select } from '@chakra-ui/react';
interface Iprops {
  [x: string]: any;
}
const InputSelct = ({ ...rest }: Iprops) => {
  return (
    <Select placeholder="Select option" {...rest}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};

export default InputSelct;
