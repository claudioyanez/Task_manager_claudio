const pool = require("../database");

const getAllTask = async (req, res) => {
  res.send("recibiendo una lista de tareas");
};

const getTask = (req, res) => {
  res.send("recibiendo una sola tarea");
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );

    res.json(result.rows[0]);
  } catch (error) {

    res.json({ error: error.message})
  }
};

const deleteTask = (req, res) => {
  res.send("eliminando una tarea");
};

const updateTsk = (req, res) => {
  res.send("modificando una tarea");
};

module.exports = {
  getAllTask,
  getTask,
  createTask,
  deleteTask,
  updateTsk,
};
