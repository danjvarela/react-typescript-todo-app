import create, { StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Task, SavedTask } from '@ts/interfaces/task';

interface TaskState {
  tasks: SavedTask[];
  addTask: (task: Task) => SavedTask | false;
  removeTask: (id: string) => boolean;
  findTask: (id: string) => SavedTask | false;
  updateTask: (id: string, attributes: { body?: string }) => SavedTask | false;
}

type GetState = StoreApi<TaskState>['getState'];
type SetState = StoreApi<TaskState>['setState'];

const addTask = (set: SetState, get: GetState) => (task: Task) => {
  const { body } = task;
  if (body === '') return false;
  const createdTask = {
    id: uuidv4(),
    body,
    createdAt: new Date(),
  };
  set({ tasks: [...get().tasks, createdTask] });
  return createdTask;
};

const findTask = (get: GetState) => (id: string) =>
  get().tasks.find((task) => task.id === id) ?? false;

const removeTask = (set: SetState, get: GetState) => (id: string) => {
  const savedTask = get().findTask(id);
  if (!savedTask) return false;
  const remainingTasks = get().tasks.filter((task) => task.id !== id);
  set({ tasks: remainingTasks });
  return true;
};

const updateTask =
  (set: SetState, get: GetState) =>
  (id: string, attributes: { body?: string }) => {
    const { tasks } = get();
    const savedTaskId = tasks.findIndex((task) => task.id === id);
    if (!savedTaskId) return false;
    tasks[savedTaskId] = { ...tasks[savedTaskId], ...attributes };
    set({ tasks });
    return tasks[savedTaskId];
  };

const useTaskStore = create<TaskState>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: addTask(set, get),
      removeTask: removeTask(set, get),
      findTask: findTask(get),
      updateTask: updateTask(set, get),
    }),
    {
      name: 'task-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useTaskStore;
