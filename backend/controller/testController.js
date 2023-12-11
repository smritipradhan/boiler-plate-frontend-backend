// Name this file to testController.js

export const getAll = async (req, res) => {
  try {
    res.status(200).send({
      message: "success",
    });
  } catch (err) {
    res.status(400).send({
      message: "failed",
    });
  }
};

export const getById = async (req, res) => {
  try {
    res.status(200).send({
      message: "success",
    });
  } catch (err) {
    res.status(400).send({
      message: "failed",
    });
  }
};

export const create = async (req, res) => {
  try {
    res.status(200).send({
      message: "success",
    });
  } catch (err) {
    res.status(400).send({
      message: "failed",
    });
  }
};

export const update = async (req, res) => {
  try {
    res.status(200).send({
      message: "success",
    });
  } catch (err) {
    res.status(400).send({
      message: "failed",
    });
  }
};

export const deleteTest = (req, res) => {
  try {
    res.status(200).send({
      message: "success",
    });
  } catch (err) {
    res.status(400).send({
      message: "failed",
    });
  }
};
