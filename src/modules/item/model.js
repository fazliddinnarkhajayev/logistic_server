const { fetch, fetchAll } = require('../../lib/pool')

const INSERT_TO = `
INSERT INTO items(
    item_name,
    item_manufacturer,
    item_comment
   )VALUES 
   ( $1, $2, $3 )
` 
const SELECT_FROM = `
SELECT *
FROM items
`

const SEARCH_FROM = `
SELECT *
FROM items i
WHERE 
  CASE
       WHEN $1 <> '%null%' THEN i.item_name ILIKE $1
       ELSE true
  END
  and
  CASE        
        WHEN $2 <> '%null%' THEN i.item_manufacturer ILIKE $2
        ELSE true
  END
`

const UPDATE_ITEM = `
 UPDATE items SET
 item_name = $2,
 item_manufacturer = $3,
 item_comment = $4
 WHERE item_id = $1
` 
const EDIT_ITEM = `
SELECT *
FROM items 
WHERE item_id = $1 
`
const DELETE_ITEM = `
 DELETE FROM ITEMS
 WHERE item_id = $1
`
const insert = async ({ itemName, manufacturer, itemComment }) => {
  await fetch(INSERT_TO, itemName, manufacturer, itemComment)
}


const select = async () => {
  return await fetchAll(SELECT_FROM)
}
const search = async ({ name, supplier }) => {
  name = '%'+name+'%'
  supplier = '%'+supplier+'%' 
  return await fetchAll(SEARCH_FROM, name, supplier)
}
const edit = async({deleteId}) => {
  return await fetchAll(EDIT_ITEM, deleteId)
}
const update = async({id, name, manufacturer, comment}) => {
  return await fetchAll(UPDATE_ITEM, +id, name, manufacturer, comment)
}
const deletee = async({ id }) => {
  return await fetchAll(DELETE_ITEM, id)
}


module.exports = {
    insert,
    select,
    search,
    edit,
    update,
    deletee
}