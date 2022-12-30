import { ListItem, HStack } from '@chakra-ui/react';
import { SavedTask } from '@ts/interfaces/task';
import RemoveTaskButton from '@components/RemoveTaskButton';
import EditTaskInput from '@components/EditTaskInput';
import TaskCheckbox from '@components/TaskCheckbox';

type TaskProps = {
  task: SavedTask;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function TaskItem({ task }: TaskProps) {
  const { id } = task;

  return (
    <ListItem
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={5}
    >
      <HStack w="full">
        <TaskCheckbox task={task} />
        <EditTaskInput task={task} />
      </HStack>
      <RemoveTaskButton id={id} />
    </ListItem>
  );
}
