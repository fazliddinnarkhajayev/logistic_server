const { fetch, fetchAll } = require('../../lib/pool')

const INSERT_TO = `
INSERT INTO vehicle_types(
    vehicle_type_name,
    vehicle_type_comment
   )VALUES 
   ( $1, $2 )
` 
const SELECT_FROM = `
SELECT *
FROM vehicle_types
`
const SEARCH_FROM = `
SELECT *
FROM vehicle_types v
WHERE 
CASE 
 WHEN $1 <> '%null%' THEN LOWER(v.vehicle_type_name) ILIKE LOWER($1)
 ELSE true  
END
`
const UPDATE_VEHICLE_TYPES = `
 UPDATE vehicle_types SET
 vehicle_type_name = $2,
 vehicle_type_comment = $3
 WHERE vehicle_type_id = $1
` 
const EDIT_VEHICLE_TYPES = `
SELECT *
FROM vehicle_types
WHERE vehicle_type_id = $1 
`
const DELETE_VEHICLE_TYPES = `
 DELETE FROM vehicle_types
 WHERE vehicle_type_id = $1
`



const insert = async ({ vehicleTypeName, vehicleTypeComment }) => {
  await fetch(INSERT_TO, vehicleTypeName,  vehicleTypeComment)
}


const select = async () => {
  return await fetchAll(SELECT_FROM)
}
const search = async ({ name }) => {
  name = '%'+name+'%'
  return await fetchAll(SEARCH_FROM, name)
}
const edit = async({deleteId}) => {
  return await fetchAll(EDIT_VEHICLE_TYPES, deleteId)
}
const update = async({id, name, comment}) => {
  return await fetchAll(UPDATE_VEHICLE_TYPES, +id, name, comment)
}
const deletee = async({ id }) => {
  return await fetchAll(DELETE_VEHICLE_TYPES, id)
}



module.exports = {
    insert,
    select,
    search,
    edit,
    update,
    deletee
}