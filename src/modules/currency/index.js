const router = require('express').Router()
const { INSERT, SELECT, SEARCH, EDIT, UPDATE, DELETE } = require('./controller')

router.route('/createcurrency')
  .post(INSERT)

router.route('/getcurrencies')
  .get(SELECT)

router.route('/searchcurrency/:name')
  .get(SEARCH)


router.route('/editcurrency/:deleteId')
   .get(EDIT)

router.route('/updatecurrency')
   .post(UPDATE)

router.route('/deletecurrency')
   .post(DELETE)
module.exports = router