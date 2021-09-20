const router = require('express').Router()
const { INSERT, SELECT, SEARCH, EDIT, UPDATE, DELETE } = require('./controller')

router.route('/createcontainer')
  .post(INSERT)

router.route('/getcontainer')
  .get(SELECT)

router.route('/searchcont/:contact/:type/:supplier')
.get(SEARCH)

router.route('/editcont/:deleteId')
   .get(EDIT)

router.route('/editcontainer')
 .post(UPDATE)

router.route('/deletecontainer')
 .post(DELETE)


 module.exports = router