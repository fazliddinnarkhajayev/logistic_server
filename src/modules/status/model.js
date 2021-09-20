const { fetch, fetchAll } = require('../../lib/pool')

const INSERT_TO = `
INSERT INTO statuses(
    client_name,
    client_comment
   )VALUES 
   ( $1, $2 )
` 
const SELECT_FROM = `
SELECT *
FROM statuses
`

const SEARCH_FROM = `
SELECT *
FROM statuses s
WHERE 
CASE
  WHEN $1 <> '%null%' THEN s.status_name ILIKE $1
  ELSE true
END
`
const UPDATE_STATUSES = `
 UPDATE statuses SET
 status_name = $2,
 status_comment = $3
 WHERE status_id = $1
` 
const EDIT_STATUSES = `
SELECT *
FROM statuses
WHERE status_id = $1 
`
const DELETE_STATUSES = `
 DELETE FROM statuses
 WHERE status_id = $1
`



const insert = async ({ statusName, statusComment }) => {
  await fetch(INSERT_TO, statusName,  statusComment)
}
const select = async () => {
  return await fetchAll(SELECT_FROM)
}
const search = async ({ name }) => {
  name = '%'+name+'%'
  return await fetchAll(SEARCH_FROM, name)
}
const edit = async({deleteId}) => {
  return await fetchAll(EDIT_STATUSES, deleteId)
}
const update = async({id, name, comment}) => {
  return await fetchAll(UPDATE_STATUSES, +id, name, comment)
}
const deletee = async({ id }) => {
  return await fetchAll(DELETE_STATUSES, id)
}


module.exports = {
    insert,
    select,
    search,
    edit,
    update,
    deletee
}