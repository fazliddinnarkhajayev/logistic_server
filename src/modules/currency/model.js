const { fetch, fetchAll } = require('../../lib/pool')

const INSERT_TO = `
INSERT INTO currencies(
    currency_name,
    currency_comment
   )VALUES 
   ( $1, $2 )
` 
const SELECT_FROM = `
SELECT *
FROM currencies
`

const SEARCH_FROM = `
SELECT *
FROM currencies c
WHERE c.currency_name ILIKE $1
`


const UPDATE_CURRENCY = `
 UPDATE currencies SET
 currency_name = $2,
 currency_comment = $3
 WHERE currency_id = $1
` 
const EDIT_CURRENCY = `
SELECT *
FROM currencies
WHERE currency_id = $1 
`
const DELETE_CURRENCY = `
 DELETE FROM currencies
 WHERE currency_id = $1
`


const insert = async ({ currencyName, currencyComment }) => {
  await fetch(INSERT_TO, currencyName,  currencyComment)
}
const select = async () => {
  return await fetchAll(SELECT_FROM)
}
const search = async ({ name }) => {
  name = '%'+name+'%'
  return await fetchAll(SEARCH_FROM, name)
}
const edit = async({deleteId}) => {
  return await fetchAll(EDIT_CURRENCY, deleteId)
}
const update = async({id, name, comment}) => {
  return await fetchAll(UPDATE_CURRENCY, +id, name, comment)
}
const deletee = async({ id }) => {
  return await fetchAll(DELETE_CURRENCY, id)
}

module.exports = {
    insert,
    select,
    search,
    edit,
    update,
    deletee
}