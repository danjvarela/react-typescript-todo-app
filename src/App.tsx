import { useState } from 'react';
import useTaskStore from './taskStore';
import Task from './Task';

function App() {
  const [body, setBody] = useState('');
  const { tasks, addTask } = useTaskStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };

  const handleClick = () => {
    addTask({ body });
    setBody('');
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'start' }}>
        <input value={body} onChange={handleChange} />
        <button type="button" onClick={handleClick}>
          Add Task
        </button>
      </div>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}

export default App;
