const router = require('express').Router()
const { INSERT, SELECT, SEARCH, EDIT, UPDATE, DELETE } = require('./controller')

router.route('/createsupplier')
  .post(INSERT)

router.route('/getsuppliers')
  .get(SELECT)

router.route('/searchsupplier/:name')
   .get(SEARCH)

router.route('/editsupplier/:deleteId')
   .get(EDIT)

router.route('/updatesupplier')
   .post(UPDATE)

router.route('/deletesupplier')
   .post(DELETE)


module.exports = router