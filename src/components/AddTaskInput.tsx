import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

export default function AddTaskInput() {
  return (
    <InputGroup size="md" maxW="container.sm" w="full">
      <Input pr={5} type="text" placeholder="Type here" />
      <InputRightElement w={20} mr={1}>
        <Button size="sm" colorScheme="blue">
          Add Task
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
