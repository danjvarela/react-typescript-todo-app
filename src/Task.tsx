import { SavedTask } from './interfaces';
import useTaskStore from './taskStore';

export default function Task({ task }: { task: SavedTask }) {
  const { id, body } = task;
  const { removeTask } = useTaskStore();

  const handleDelete = () => removeTask(id);

  return (
    <li style={{ display: 'flex', gap: 5 }}>
      {body}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
