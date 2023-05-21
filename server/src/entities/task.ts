import ITask from "../interfaces/ITask.js";
class Task implements ITask {
  constructor(
    public taskId: number,
    public userId: number,
    public projectId: number,
    public title: string,
    public description: string,
    public taskPoints: number,
    public priority: string,
    public type: string,
    public status: string
  ) {}
}
export default Task;
