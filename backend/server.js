const app = require("./app");
const dotenv = require("dotenv").config({ path: "backend/config/config.env" });
const connectDatabase = require("./config/database");
const PORT = 4000;

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(err.message);
  console.log("Shutting down the server: uncaught exception");
  process.exit();
});

//connect to database
connectDatabase();

const server = app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(err.message);
  console.log("Shutting down the server");
  server.close(() => {
    process.exit(1);
  });
});
