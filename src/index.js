const express = require("express");
// if babel is present, the import from should work as well

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactKeeper API" })
);

//Defining API routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
