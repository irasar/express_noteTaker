//require express
const express = require("express");

//initialize the app and create port
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Listen on PORT: http://localhost:${PORT}`));