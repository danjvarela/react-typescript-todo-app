import {
  Editable,
  Tooltip,
  EditablePreview,
  Input,
  EditableInput,
} from '@chakra-ui/react';
import { SavedTask } from '@ts/interfaces/task';
import useTaskStore from '@stores/task';

type EditTaskInputProps = {
  task: SavedTask;
};

export default function EditTaskInput({ task }: EditTaskInputProps) {
  const { updateTask } = useTaskStore();
  const { body, id } = task;

  const handleTaskEdit = (newValue: string) => {
    updateTask(id, { body: newValue });
  };

  return (
    <Editable defaultValue={body} w="full" onSubmit={handleTaskEdit}>
      <Tooltip
        label="Click to edit"
        aria-label="Edit task tooltip"
        placement="auto-start"
        hasArrow
      >
        <EditablePreview />
      </Tooltip>
      <Input as={EditableInput} w="full" />
    </Editable>
  );
}
