const express = require("express");
const router = express.Router();
const {
  addPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient
} = require("../controllers/patientController");

const authenticate = require("../middlewares/authMiddleware");

router.post("/", authenticate, addPatient);
router.get("/", authenticate, getPatients);
router.get("/:id", authenticate, getPatientById);
router.put("/:id", authenticate, updatePatient);
router.delete("/:id", authenticate, deletePatient);

module.exports = router;
