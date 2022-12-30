import {
  ListItem,
  HStack,
  Checkbox,
  Editable,
  Tooltip,
  EditablePreview,
  Input,
  EditableInput,
  IconButton,
} from '@chakra-ui/react';
import { SavedTask } from '@ts/interfaces/task';
import { DeleteIcon } from '@chakra-ui/icons';

type TaskProps = {
  task: SavedTask;
  key: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function TaskItem({ task, key }: TaskProps) {
  const { body } = task;

  return (
    <ListItem
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={5}
    >
      <HStack w="full">
        <Checkbox defaultChecked />
        <Editable defaultValue={body} w="full">
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
      </HStack>
      <IconButton
        size="sm"
        variant="ghost"
        isRound
        icon={<DeleteIcon />}
        aria-label="Delete task button"
      />
    </ListItem>
  );
}
