const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
var corsOptions = {
  origin: "http://localhost:3000",
};
const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api/users/repo", async (req, res) => {
  const { per_page = 10, sort = "full_name", username } = req.query;
  console.log(per_page);
  try {
    let { data } = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      { params: { per_page: per_page, sort: sort } }
    );

    res.json({
      result: data,
    });
  } catch (error) {
    res.status(404).json({
      message: "unable to fetch repositories",
    });
  }
});
app.listen(process.env.PORT || 8080, () => {
  console.log(`listening in port ${process.env.PORT}`);
});
