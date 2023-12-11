import { Router } from "express";
import {
  create,
  deleteTest,
  getAll,
  getById,
  update,
} from "../controller/testController.js";

const router = Router();

router.route("/").get(getAll).post(create);
router.route("/:id").get(getById).patch(update).delete(deleteTest);

export default router;
