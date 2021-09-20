const router = require('express').Router()
const { INSERT, SELECT, SEARCH, EDIT, UPDATE, DELETE } = require('./controller')

router.route('/createclient')
  .post(INSERT)

router.route('/getclients')
  .get(SELECT)

router.route('/searchclient/:name')
   .get(SEARCH)

router.route('/editclient/:deleteId')
   .get(EDIT)

router.route('/updateclient')
   .post(UPDATE)

router.route('/deleteclient')
   .post(DELETE)


module.exports = router