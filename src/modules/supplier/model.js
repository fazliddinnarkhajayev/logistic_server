const { fetch, fetchAll } = require('../../lib/pool')

const INSERT_TO = `
INSERT INTO suppliers(
    supplier_name,
    supplier_comment
   )VALUES 
   ( $1, $2 )
` 
const SELECT_FROM = `
SELECT *
FROM suppliers
`

const SEARCH_FROM = `
SELECT *
FROM suppliers s
WHERE 
CASE 
 WHEN $1 <> '%null%' THEN LOWER(s.supplier_name) ILIKE LOWER($1)
 ELSE true  
END
  
`


const UPDATE_SUPPLIER = `
 UPDATE suppliers SET
 supplier_name = $2,
 supplier_comment = $3
 WHERE supplier_id = $1
` 
const EDIT_SUPPLIER = `
SELECT *
FROM suppliers
WHERE supplier_id = $1 
`
const DELETE_SUPPLIER = `
 DELETE FROM suppliers
 WHERE supplier_id = $1
`


const insert = async ({ supplierName, supplierComment }) => {
  await fetch(INSERT_TO, supplierName,  supplierComment)
}
const select = async () => {
  return await fetchAll(SELECT_FROM)
}
const search = async ({ name }) => {
  name = '%'+name+'%'  
  return await fetchAll(SEARCH_FROM, name)
}
const edit = async({deleteId}) => {
  return await fetchAll(EDIT_SUPPLIER, deleteId)
}
const update = async({id, name, comment}) => {
  return await fetchAll(UPDATE_SUPPLIER, +id, name, comment)
}
const deletee = async({ id }) => {
  return await fetchAll(DELETE_SUPPLIER, id)
}

module.exports = {
    insert,
    select,
    search,
    edit,
    update,
    deletee
}