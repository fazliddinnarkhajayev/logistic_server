const { insert, select, search, edit, update, deletee } = require('./model')

const INSERT = (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://logisticreact.netlify.app')
    insert(req.body)
}
const SELECT = async(req, res) => {
    res.json( await select() )
}
const SEARCH = async(req, res) => {
    res.json(await search(req.params))
}
const EDIT = async(req, res) => {
    res.json(await edit(req.params))
}
const UPDATE = (req, res) => {
    update(req.body)
}
const DELETE = (req, res) => {
     deletee(req.body)
}



module.exports = {
    INSERT,
    SELECT,
    SEARCH,
    EDIT,
    UPDATE,
    DELETE
}