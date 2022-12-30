import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
} from '@chakra-ui/react';
import useTaskStore from '@stores/task';
import { useState } from 'react';

export default function AddTaskInput() {
  const [body, setBody] = useState('');
  const { addTask } = useTaskStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const handleAddTask = (
    e: React.FormEvent<HTMLFormElement & HTMLDivElement>
  ) => {
    if ('preventDefault' in e) {
      e.preventDefault();
    }
    addTask({ body });
    setBody('');
  };

  return (
    <Flex w="full" justifyContent="center" as="form" onSubmit={handleAddTask}>
      <InputGroup size="md" maxW="container.sm" w="full">
        <Input
          pr={5}
          type="text"
          placeholder="Type here"
          value={body}
          onChange={handleChange}
        />
        <InputRightElement w={20} mr={1}>
          <Button size="sm" colorScheme="blue" type="submit">
            Add Task
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}
