module.exports = {
  development: {
    username: "root",    // Change this if you set a MySQL username
    password: "",        // Default is empty unless you set a password
    database: "dams",    // Ensure this matches your database name
    host: "127.0.0.1",   // Localhost
    dialect: "mysql",    // Sequelize is using MySQL
    port: 3306           // MySQL default port
  }
};
