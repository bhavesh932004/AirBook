const express = require("express");
const app = express();

const { PORT } = require("./config");
const apiRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(3000, function callback(error) {
  console.log(
    error
      ? ("Ther was a problem : ", error)
      : `Server is up and running on port ${PORT}`
  );
});
