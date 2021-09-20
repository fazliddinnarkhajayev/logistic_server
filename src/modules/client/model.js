const { fetch, fetchAll } = require('../../lib/pool')

const INSERT_TO = `
INSERT INTO clients(
    client_name,
    client_comment
   )VALUES 
   ( $1, $2 ),
   ( $1, $2 ),
   ( $1, $2 ),
   ( $1, $2 )
` 
const SELECT_FROM = `
SELECT *
FROM clients
`

const SEARCH_FROM = `
SELECT *
FROM clients c
WHERE 
 CASE
  WHEN $1 <> '%null%' THEN c.client_name ILIKE $1 
  ELSE true
 END
`
const UPDATE_CLIENT = `
 UPDATE CLIENTS SET
 client_name = $2,
 client_comment = $3
 WHERE client_id = $1
` 
const EDIT_CLIENT = `
SELECT *
FROM CLIENTS
WHERE client_id = $1 
`
const DELETE_CLIENT = `
 DELETE FROM CLIENTS
 WHERE client_id = $1
`


const insert = async ({ clientName, clientComment }) => {
  await fetch(INSERT_TO, clientName,  clientComment)
}
const select = async () => {
  return await fetchAll(SELECT_FROM)
}
const search = async ({ name }) => {
  name = '%'+name+'%'
  
  return await fetchAll(SEARCH_FROM, name)
}
const edit = async({deleteId}) => {
  return await fetchAll(EDIT_CLIENT, deleteId)
}
const update = async({id, name, comment}) => {
  return await fetchAll(UPDATE_CLIENT, +id, name, comment)
}
const deletee = async({ id }) => {
  return await fetchAll(DELETE_CLIENT, id)
}

module.exports = {
    insert,
    select,
    search,
    edit,
    update,
    deletee
}