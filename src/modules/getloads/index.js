const router = require('express').Router()

const { GET, POST, SEARCH } = require('./controller')

router.route('/getloads')
 .get(GET)

router.route('/searchLoads/:sNumber/:sItem/:sSupplier/:sClient')
 .get(SEARCH)


 router.route('/createload')
 .post(POST)


module.exports = router

