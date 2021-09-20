const { get_loads, post_load, search_loads } = require('./model')

const GET = async(req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://logisticreact.netlify.app')
    res.json(await get_loads())
}
const POST = (req, res) => {
    post_load(req.body)
}
const SEARCH = async(req, res) => {
   res.json(await search_loads(req.params))
}
module.exports = {
    GET,
    POST,
    SEARCH
} 