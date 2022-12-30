export interface Task {
  body: string;
}

export interface SavedTask {
  id: string;
  body: string;
  done: boolean;
  createdAt: Date;
}
