const { conn } = require("../config/conn");

const findAll = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM cachorros");
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const findOne = async (params) => {
  const { id } = params;
  try {
    // console.log(await conn.query("SELECT * FROM users WHERE ?", { id }));
    const [rows] = await conn.query("SELECT * FROM cachorros WHERE ?", { id });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const store = async (body) => {
  const { nombre, raza, edad } = body;
  try {
    const [rows] = await conn.query("INSERT INTO cachorros SET ?", {
      nombre,
      raza,
      edad,
    });
    return rows;
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return "Registro duplicado";
    }

    throw error;
  } finally {
    conn.releaseConnection();
  }
};

module.exports = {
  findAll,
  findOne,
  store,
};
