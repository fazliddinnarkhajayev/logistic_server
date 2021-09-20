const router = require('express').Router()
const { INSERT, SELECT, SEARCH, EDIT, UPDATE, DELETE } = require('./controller')

router.route('/createstatus')
  .post(INSERT)

router.route('/getstatuses')
  .get(SELECT)

router.route('/searchstatus/:name')
  .get(SEARCH)

router.route('/editstatus/:deleteId')
  .get(EDIT)

router.route('/updatestatus')
  .post(UPDATE)

router.route('/deletestatus')
  .post(DELETE)

module.exports = router