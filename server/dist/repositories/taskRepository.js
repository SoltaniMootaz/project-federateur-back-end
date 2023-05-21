import dbConnection from "../db-connection/db.js";
import Task from "../entities/task.js";
import user from "../entities/user.js";
export class TaskRepository {
    async assignMemberToProject(projectId, userId) {
        return new Promise((resolve, reject) => {
            const insertQuery = `
      INSERT INTO projectteam (projectId, userId)
      VALUES (?, ?)
    `;
            const values = [projectId, userId];
            dbConnection.query(insertQuery, values, (error, results) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve();
                }
            });
        });
    }
    async createNewTask(task) {
        return new Promise((resolve, reject) => {
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
                }
                else {
                    resolve();
                }
            });
        });
    }
    async updateTask(task) {
        return new Promise((resolve, reject) => {
            const updateClauses = [];
            if (task.userId !== undefined) {
                updateClauses.push(`userId = ${task.userId}`);
            }
            if (task.projectId !== undefined) {
                updateClauses.push(`projectId = ${task.projectId}`);
            }
            if (task.title !== undefined) {
                updateClauses.push(`title = '${task.title}'`);
            }
            if (task.description !== undefined) {
                updateClauses.push(`description = '${task.description}'`);
            }
            if (task.taskPoints !== undefined) {
                updateClauses.push(`taskPoints = ${task.taskPoints}`);
            }
            if (task.priority !== undefined) {
                updateClauses.push(`priority = ${task.priority}`);
            }
            if (task.type !== undefined) {
                updateClauses.push(`type = '${task.type}'`);
            }
            if (task.status !== undefined) {
                updateClauses.push(`status = ${task.status}`);
            }
            const updateQuery = `
        UPDATE tasks
        SET
          ${updateClauses.join(",\n    ")}
        WHERE taskId = ${task.taskId};
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
                }
                else {
                    resolve();
                }
            });
        });
    }
    async deleteTask(taskId) {
        return new Promise((resolve, reject) => {
            const deleteQuery = `
      DELETE FROM tasks
      WHERE taskId = ?
    `;
            const values = [taskId];
            dbConnection.query(deleteQuery, values, (error, results) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve();
                }
            });
        });
    }
    async getAllTasks() {
        return new Promise((resolve, reject) => {
            const selectQuery = `
      SELECT *
      FROM tasks
    `;
            dbConnection.query(selectQuery, (error, results) => {
                if (error) {
                    reject(error);
                }
                else {
                    const tasks = results.map((row) => new Task(row.taskId, row.userId, row.projectId, row.title, row.description, row.taskPoints, row.priority, row.type, row.status));
                    resolve(tasks);
                }
            });
        });
    }
    async getTasksByProjectId(projectId) {
        return new Promise((resolve, reject) => {
            const selectQuery = `
      SELECT *
      FROM tasks
      WHERE projectId=?
    `;
            dbConnection.query(selectQuery, [projectId], (error, results) => {
                if (error) {
                    reject(error);
                }
                else {
                    const tasks = results.map((row) => new Task(row.taskId, row.userId, row.projectId, row.title, row.description, row.taskPoints, row.priority, row.type, row.status));
                    resolve(tasks);
                }
            });
        });
    }
    async getTaskById(taskId) {
        return new Promise((resolve, reject) => {
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
                }
                else if (results.length === 0) {
                    reject(new Error("Task not found"));
                }
                else {
                    const task = results[0];
                    resolve(new Task(task.taskId, task.userId, task.projectId, task.title, task.description, task.taskPoints, task.priority, task.type, task.status));
                }
            });
        });
    }
    async assignMemberToTask(taskId, userId) {
        return new Promise((resolve, reject) => {
            const updateQuery = `
      UPDATE tasks
      SET userId = ?
      WHERE taskId = ?
    `;
            const values = [userId, taskId];
            dbConnection.query(updateQuery, values, (error, results) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve();
                }
            });
        });
    }
    async getTaskMember(taskId) {
        return new Promise((resolve, reject) => {
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
                }
                else if (results.length === 0) {
                    reject(new Error("Task not found"));
                }
                else {
                    const member = results[0];
                    resolve(new user(member.userId, member.email, member.password, member.fullName, member.phoneNumber, member.companyId, member.role));
                }
            });
        });
    }
}
//# sourceMappingURL=taskRepository.js.map