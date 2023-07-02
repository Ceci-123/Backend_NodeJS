const service = require("../services/perrosService");

const index = async (req, res) => {
  //console.log(await service.findAll());
  const rows = await service.findAll();
  res.render("perros", { rows });
  //res.send(rows);
};

const show = async (req, res) => {
  const rows = await service.findOne(req.params);
  res.send(rows);
};

const create = (req, res) => {
  res.render("perros/create");
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
