const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieparser = require("cookie-parser");
const prisma = require("./prisma");
const driverRoute = require("./routes/driver");
const passengerRoute = require("./routes/passenger");
const profileRoute = require("./routes/profile");
const tripRoute = require("./routes/trip");


dotenv.config();
const app = express();
const port = process.env.PROJECT_PORT || 5050;

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieparser());
let publicDir = path.join(__dirname, "public"); // just concat the public to __dirname(url) => relative
// let publicDir = path.resolve(__dirname, "public"); // this is  public to root of server => absolute
app.use(express.static(publicDir));
// app.use('/static', express.static(publicDir));
// app.use('/media', express.static(publicDir));
app.use(cors());

// routes
app.get("/", async (req, res) => {
  res.json({ msg: "Home Page" });
});

app.use("/api/passengers", passengerRoute);
app.use("/api/drivers", driverRoute);
app.use("/api/profile", profileRoute);
app.use("/api/trips", tripRoute);


// 404 page
app.get("*", (req, res) => {
  res.send("404 not found page");
});


// start app
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
