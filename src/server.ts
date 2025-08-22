import "module-alias/register";
import http from "http";
import app from "./app";
import { PORT, HOST, DB_PASSWORD } from "@config/index";
import { pool } from "@config/database.config";
const server = http.createServer(app);
const chechDatabaseConnection = async () => {
  try {
    console.log(`Password = ${DB_PASSWORD}`)
    await pool.query("SELECT 1");
    console.log("Database connected successfully ✅");
  } catch (error) {
    console.log("Database connected failed ❌",error);
  }
};
server.listen(PORT, HOST, () => {
  chechDatabaseConnection();
  console.log(`Server starts at http://${HOST}:${PORT}`);
});

const shutdown = async (signal: string) => {
  console.log(`\n📢 Received ${signal}. Shutting down gracefully...`)

  try {
    // 1. Stop accepting new connections (promisify server.close)
    await new Promise<void>((resolve, reject) => {
      server.close((err) => {
        if (err) {
          return reject(err)
        }
        console.log("✅ HTTP server closed")
        resolve()
      })
    })

    // 2. Close database pool
    await pool.end()
    console.log("✅ Database pool closed")
    process.exit(0)
  } catch (err) {
    console.error("❌ Error during shutdown:", err)
    process.exit(1)
  }
}

// Catch termination signals
["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, () => shutdown(signal));
});
