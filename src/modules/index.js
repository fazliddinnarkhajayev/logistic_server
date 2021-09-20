const loadRouter = require('./getloads')
const createcontainer = require('./createcontainer')
const itemRouter = require('./item')
const supplierRouter = require('./supplier')
const clientRouter = require('./client')
const vehicleRouter = require('./vehicletype')
const statusRouter = require('./status')
const currencyRouter = require('./currency')

module.exports = [
    loadRouter,
    createcontainer,
    itemRouter,
    supplierRouter,
    clientRouter,
    statusRouter,
    vehicleRouter,
    currencyRouter
]