const router = require("express").Router();
const commerceRoutes = require("./api");

router.use("/api", commerceRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
