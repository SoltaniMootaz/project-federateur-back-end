interface ITask {
  taskId: number;
  userId: number;
  projectId: number;
  title: string;
  description: string;
  taskPoints: number;
  priority: string;
  type: string;
  status: string;
}

export default ITask;
