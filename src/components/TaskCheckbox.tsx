import { Checkbox } from '@chakra-ui/react';
import { SavedTask } from '@ts/interfaces/task';
import useTaskStore from '@stores/task';

type TaskCheckboxProps = {
  task: SavedTask;
};

export default function TaskCheckbox({ task }: TaskCheckboxProps) {
  const { done, id } = task;
  const { updateTask } = useTaskStore();

  const handleTaskChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTask(id, { done: e.target.checked });
  };

  return <Checkbox isChecked={done} onChange={handleTaskChecked} />;
}
