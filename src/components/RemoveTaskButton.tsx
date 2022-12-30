import { IconButton } from '@chakra-ui/react';
import useTaskStore from '@stores/task';
import { DeleteIcon } from '@chakra-ui/icons';

type RemoveTaskButtonProps = {
  id: string;
};

export default function RemoveTaskButton({ id }: RemoveTaskButtonProps) {
  const { removeTask } = useTaskStore();

  const handleRemoveTask = () => removeTask(id);

  return (
    <IconButton
      size="sm"
      variant="ghost"
      isRound
      icon={<DeleteIcon />}
      aria-label="Delete task button"
      onClick={handleRemoveTask}
    />
  );
}
