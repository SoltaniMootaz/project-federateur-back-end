import mysql, { Connection } from "mysql";

const connection: Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "iplan",
});
connection.connect((error: mysql.MysqlError | null) => {
  if (error) {
    console.error("Error connecting to the database:", error);
    return;
  }
  console.log("Connected to the database!");
});

export default connection;
