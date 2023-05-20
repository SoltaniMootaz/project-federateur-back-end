import mysql from "mysql";
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "iplan",
});
connection.connect((error) => {
    if (error) {
        console.error("Error connecting to the database:", error);
        return;
    }
    console.log("Connected to the database!");
});
export default connection;
//# sourceMappingURL=db.js.map