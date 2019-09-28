require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();
const imageRoute = require("./route/image");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(fileUpload());

require("./model/db.js");

app.use("/", imageRoute);

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => console.log(`[Server]: Listening on port ${PORT}`));
