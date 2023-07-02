const express = require("express");
const router = express.Router();

const controller = require("../controllers/productController");

router.get("/create", controller.create);
router.post("/", controller.store);

router.get("/", controller.index);
router.get("/:id", controller.show);

module.exports = router;
