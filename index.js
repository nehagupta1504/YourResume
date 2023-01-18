require("dotenv").config();
const express = require("express");
const path = require("path");
const resumeRoutes = require("./routes/resume");
const app = express();

const port = process.env.PORT || 3001;
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/resume", resumeRoutes);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

module.exports = app;
