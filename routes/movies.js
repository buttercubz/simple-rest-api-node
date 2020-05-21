const { Router } = require("express");
const db = require("../db.json");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json(db);
});

router.post("/", (req, res) => {
  const { name, year, actor } = req.body;
  const id = db.length + 1;
  if (name && year && actor) {
    const newData = { id, name, year, actor };
    db.push(newData);
    res.json({ status: 200 });
  } else {
    res.status(500).json({ error: "wrong Request" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.forEach((item, index) => {
    if (item.id === parseInt(id)) {
      db.splice(index, 1);
      res.send("ok");
    }
  });

  setTimeout(() => {
    res.status(500).send("faild");
  }, 1000);
});

router.put("/:id", (req, res) => {
  const { name, year, actor } = req.body;
  const { id } = req.params;

  console.log(name, year, actor);
  if (name && year && actor) {
    db.forEach((item) => {
      if (item.id === parseInt(id)) {
        item.actor = actor;
        item.year = year;
        item.name = name;
      }
    });

    res.send("ok");
  } else {
    res.status(500).json({ error: "faild request" });
  }
});

module.exports = router;
