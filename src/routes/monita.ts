import express from "express";

import protect from "../middleware/protect";
import * as monita from "../controller/monita"

const router = express.Router();

router.route("/")
.post(monita.createMonitaGroup);

router.route("/:id").get(monita.getMonitaGroup);

export default router;