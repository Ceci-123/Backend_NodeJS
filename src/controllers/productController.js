const service = require("../services/productService");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.render("products/index", { rows });
};

const show = async (req, res) => {
  const rows = await service.findOne(req.params);
  res.send(rows);
};

const create = (req, res) => {
  res.render("products/create");
};

const store = async (req, res) => {
  const result = await service.store(req.body);
  res.send(result);
};

module.exports = {
  index,
  show,
  store,
  create,
};
