const router = require('express').Router()
const { INSERT, SELECT, SEARCH, EDIT, UPDATE, DELETE } = require('./controller')

router.route('/createitem')
  .post(INSERT)

router.route('/getitems')
  .get(SELECT)

router.route('/searchitem/:name/:supplier')
   .get(SEARCH)

router.route('/edititem/:deleteId')
   .get(EDIT)

router.route('/updateitem')
   .post(UPDATE)

router.route('/deleteitem')
   .post(DELETE)



module.exports = router