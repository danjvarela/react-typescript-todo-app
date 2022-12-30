import useTaskStore from '@stores/task';
import { List, Text, Center } from '@chakra-ui/react';
import TaskItem from '@components/TaskItem';

function EmptyTask() {
  return (
    <Center p={10}>
      <Text>Add a task get started</Text>
    </Center>
  );
}

export default function Tasks() {
  const { tasks } = useTaskStore();

  return tasks.length !== 0 ? (
    <List
      w="full"
      maxW="container.sm"
      borderWidth={1}
      borderRadius="md"
      p={5}
      spacing={3}
    >
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  ) : (
    <EmptyTask />
  );
}
