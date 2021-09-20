const router = require('express').Router()
const { INSERT, SELECT, SEARCH, EDIT, UPDATE, DELETE } = require('./controller')

router.route('/createvehicletype')
  .post(INSERT)

router.route('/getvehicletypes')
  .get(SELECT)

router.route('/searchvehicletypes/:name')
   .get(SEARCH)

router.route('/editvehicletypes/:deleteId')
   .get(EDIT)

router.route('/updatevehicletypes')
   .post(UPDATE)

router.route('/deletevehicletypes')
   .post(DELETE)



module.exports = router