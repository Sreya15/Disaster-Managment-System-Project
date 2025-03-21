const { Sequelize } = require("sequelize");

// Initialize Sequelize with your database credentials
const sequelize = new Sequelize("dams", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306
});

// Function to test database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  } finally {
    await sequelize.close();
  }
})();
