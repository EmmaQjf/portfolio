const express = require('express')
const router = express.Router()
const contactCtrl = require('../../controllers/api/contacts')


// Create
router.post('/', contactCtrl.create, contactCtrl.jsonContact)
// Show
router.get('/:id',  contactCtrl.show, contactCtrl.jsonContact)

module.exports = router