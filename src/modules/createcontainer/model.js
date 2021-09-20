const { fetch, fetchAll } = require('../../lib/pool')

const INSERT_TO = `
INSERT INTO containers(
    container_number,
    container_type,
    container_price,
    container_comment,
    supplier
   )VALUES 
   ( $1, $2, $3, $4, $5 )
` 
const SELECT_FROM = `
SELECT *
FROM containers
ORDER BY container_id
`
const SEARCH_FROM = `
SELECT *
FROM containers c
WHERE 
  CASE
       WHEN $1 <> '%null%' THEN c.container_number ILIKE $1
       ELSE true
  END
  and
  CASE        
        WHEN $2 <> '%null%' THEN c.container_type ILIKE $2
        ELSE true
  END
  and
  CASE        
        WHEN $3 <> '%null%' THEN c.supplier ILIKE $3
        ELSE true
  END
`

const EDIT_CONT = `
SELECT *
FROM containers c
WHERE c.container_id = $1 
`

const UPDATE_CONT = `
 UPDATE containers SET
 date_of_creation_container = $2,
 container_number = $3,
 container_type = $4,
 container_price = $5,
 supplier = $6,
 container_comment = $7
 WHERE container_id = $1
` 
const DELETE_CONT = `
 DELETE FROM containers
 WHERE container_id = $1
`

const insert = async ({ containerNumber, containerType, containerPrice, containerComment = null, containerSupplier }) => {
  await fetch(INSERT_TO, containerNumber, containerType, containerPrice, containerComment, containerSupplier)
}
const select = async () => {
  return await fetchAll(SELECT_FROM)
}
const search = async ({ contact, type, supplier }) => {
  contact = '%'+contact+'%'
  type = '%'+type+'%'
  supplier = '%'+supplier+'%'
  
  return await fetchAll(SEARCH_FROM, contact, type, supplier)
}
const edit = async({deleteId}) => {
  return await fetchAll(EDIT_CONT, deleteId)
}
const update = async({id, date, number, type, price, suppier, comment}) => {
  return await fetchAll(UPDATE_CONT, id, date, number, type, price, suppier, comment)
}
const deletee = async({ id }) => {
  return await fetchAll(DELETE_CONT, id)
}

module.exports = {
    insert,
    select,
    search,
    edit,
    update,
    deletee
}