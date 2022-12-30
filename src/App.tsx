import { VStack, Heading } from '@chakra-ui/react';
import AddTaskInput from '@components/AddTaskInput';
import Tasks from '@components/Tasks';

export default function App() {
  return (
    <VStack as="main" alignItems="center" pt={5} px={5} w="full" h="100vh">
      <Heading>Todo-app</Heading>
      <AddTaskInput />
      <Tasks />
    </VStack>
  );
}
