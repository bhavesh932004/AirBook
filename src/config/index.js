const dotenv = require("dotenv");
dotenv.config({ path: "../" });

module.exports = {
  PORT: process.env.PORT || 3000,
};
