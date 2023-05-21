import dbConnection from "../db-connection/db.js";
import Task from "../entities/task.js";
import user from "../entities/user.js";

export class TaskRepository {
  async assignMemberToProject(
    projectId: number,
    userId: number
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const insertQuery = `
      INSERT INTO projectteam (projectId, userId)
      VALUES (?, ?)
    `;
      const values = [projectId, userId];

      dbConnection.query(insertQuery, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  async createNewTask(task: Task): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const insertQuery = `
      INSERT INTO tasks (userId, projectId, title, description, taskPoints, priority, type, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
      const values = [
        task.userId,
        task.projectId,
        task.title,
        task.description,
        task.taskPoints,
        task.priority,
        task.type,
        task.status,
      ];

      dbConnection.query(insertQuery, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  async updateTask(task: Task): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const updateQuery = `
      UPDATE tasks
      SET
        ${task.userId !== undefined ? "userId = ?," : ""}
        ${task.projectId !== undefined ? "projectId = ?," : ""}
        ${task.title !== undefined ? "title = ?," : ""}
        ${task.description !== undefined ? "description = ?," : ""}
        ${task.taskPoints !== undefined ? "taskPoints = ?," : ""}
        ${task.priority !== undefined ? "priority = ?," : ""}
        ${task.type !== undefined ? "type = ?," : ""}
        ${task.status !== undefined ? "status = ?," : ""}
      taskId = ?
    `;
      const values = [
        ...(task.userId !== undefined ? [task.userId] : []),
        ...(task.projectId !== undefined ? [task.projectId] : []),
        ...(task.title !== undefined ? [task.title] : []),
        ...(task.description !== undefined ? [task.description] : []),
        ...(task.taskPoints !== undefined ? [task.taskPoints] : []),
        ...(task.priority !== undefined ? [task.priority] : []),
        ...(task.type !== undefined ? [task.type] : []),
        ...(task.status !== undefined ? [task.status] : []),
        task.taskId,
      ];

      dbConnection.query(updateQuery, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  async deleteTask(taskId: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const deleteQuery = `
      DELETE FROM tasks
      WHERE taskId = ?
    `;
      const values = [taskId];

      dbConnection.query(deleteQuery, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  async getAllTasks(): Promise<Task[]> {
    return new Promise<Task[]>((resolve, reject) => {
      const selectQuery = `
      SELECT *
      FROM tasks
    `;

      dbConnection.query(selectQuery, (error, results) => {
        if (error) {
          reject(error);
        } else {
          const tasks = results.map(
            (row) =>
              new Task(
                row.taskId,
                row.userId,
                row.projectId,
                row.title,
                row.description,
                row.taskPoints,
                row.priority,
                row.type,
                row.status
              )
          );
          resolve(tasks);
        }
      });
    });
  }
  async getTasksByProjectId(projectId: number): Promise<Task[]> {
    return new Promise<Task[]>((resolve, reject) => {
      const selectQuery = `
      SELECT *
      FROM tasks
      WHERE projectId=?
    `;

      dbConnection.query(selectQuery, [projectId], (error, results) => {
        if (error) {
          reject(error);
        } else {
          const tasks = results.map(
            (row) =>
              new Task(
                row.taskId,
                row.userId,
                row.projectId,
                row.title,
                row.description,
                row.taskPoints,
                row.priority,
                row.type,
                row.status
              )
          );
          resolve(tasks);
        }
      });
    });
  }

  async getTaskById(taskId: number): Promise<Task> {
    return new Promise<Task>((resolve, reject) => {
      console.log(taskId);

      const selectQuery = `
      SELECT *
      FROM tasks
      WHERE taskId = ?
    `;
      const values = [taskId];

      dbConnection.query(selectQuery, values, (error, results) => {
        if (error) {
          reject(error);
        } else if (results.length === 0) {
          reject(new Error("Task not found"));
        } else {
          const task = results[0];
          resolve(
            new Task(
              task.taskId,
              task.userId,
              task.projectId,
              task.title,
              task.description,
              task.taskPoints,
              task.priority,
              task.type,
              task.status
            )
          );
        }
      });
    });
  }

  async assignMemberToTask(taskId: number, userId: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const updateQuery = `
      UPDATE tasks
      SET userId = ?
      WHERE taskId = ?
    `;
      const values = [userId, taskId];

      dbConnection.query(updateQuery, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  async getTaskMember(taskId: number): Promise<user> {
    return new Promise<user>((resolve, reject) => {
      const selectQuery = `
      SELECT u.*
      FROM tasks t
      INNER JOIN users u ON t.userId = u.userId
      WHERE t.taskId = ?
    `;
      const values = [taskId];

      dbConnection.query(selectQuery, values, (error, results) => {
        if (error) {
          reject(error);
        } else if (results.length === 0) {
          reject(new Error("Task not found"));
        } else {
          const member = results[0];
          resolve(
            new user(
              member.userId,
              member.email,
              member.password,
              member.fullName,
              member.phoneNumber,
              member.companyId,
              member.role
            )
          );
        }
      });
    });
  }
}
