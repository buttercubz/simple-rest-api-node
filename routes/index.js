const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ apiStatus: true });
});

module.exports = router;
