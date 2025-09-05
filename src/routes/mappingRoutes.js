const express = require('express');
const {
  createMapping,
  getMappings,
  getDoctorsForPatient,
  updateMapping,
  deleteMapping
} = require('../controllers/mappingController');

const router = express.Router();

router.post('/', createMapping);
router.get('/', getMappings);
router.get('/:patientId', getDoctorsForPatient);
router.put('/:id', updateMapping); 
router.delete('/:id', deleteMapping);

module.exports = router;
