// Name this file to testController.js
import { Tour } from "./../models/TourModel.js";
import APIFeatures from "./../utils/apiFeatures.js";

export const getAll = async (req, res) => {
  try {
    // For integration of features
    // const features = new APIFeatures(Tour.find(), req.query)
    //   .filter()
    //   .sort()
    //   .limitFields()
    //   .paginate();

    // const tours = await features.query;

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
