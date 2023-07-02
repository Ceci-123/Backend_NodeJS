require("dotenv").config();

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { msg: "Hola ..." });
});

app.use("/perros", require("./src/routes/perrosRouter"));

const PORT = process.env.PORT | 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
