const { fetch, fetchAll } = require('../../lib/pool')


let SELECT = `
SELECT
  TO_CHAR(l.load_date, 'yyyy-MM-dd HH24:MI:SS') AS date,
  l.load_id,
  c.container_number,
  c.supplier AS container_supplier,
  TO_CHAR(c.date_of_creation_container, 'yyyy-MM-dd HH24:MI:SS') AS date_of_cont,
  l.departure_number,
  l.item_name,
  l.item_count,
  l.item_packages_count,
  l.item_netto_kg,
  l.item_brutto_kg,
  l.item_volume,
  l.total_volume,
  l.total_netto,
  l.total_brutto,
  l.item_supplier,
  l.client,
  s.status_name AS status
 FROM loads l
 JOIN containers c ON l.container_number = c.container_id
 JOIN statuses s ON l.status = s.status_id
 order by l.load_id
`

const POST_LOAD = `
INSERT INTO loads(
  container_number,
  container_supplier,
  departure_number,
  item_name,
  item_count,
  item_packages_count,
  item_netto_kg,
  item_brutto_kg,
  item_volume,
  total_netto,
  total_brutto,
  total_volume,
  item_supplier,
  client,
  status
)VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
`

const SEARCH_LOADS = `
SELECT
  TO_CHAR(l.load_date, 'yyyy-MM-dd HH24:MI:SS') AS date,
  l.load_id, 
  c.container_number,
  c.supplier AS container_supplier,
  TO_CHAR(c.date_of_creation_container, 'yyyy-MM-dd HH24:MI:SS') AS date_of_cont,
  l.departure_number,
  l.item_name,
  l.item_count,
  l.item_packages_count,
  l.item_netto_kg,
  l.item_brutto_kg,
  l.item_volume,
  l.total_volume,
  l.total_netto,
  l.total_brutto,
  l.item_supplier,
  l.client,
  s.status_name AS status
 FROM loads l
 JOIN containers c ON l.container_number = c.container_id
 JOIN statuses s ON l.status = s.status_id
WHERE
CASE
  WHEN $1 <> '%null%' THEN c.container_number ILIKE $1
  ELSE true
END
and
CASE
  WHEN $2 <> 'null' THEN $2 = ANY(l.item_name)
  ELSE true
END
and
CASE
  WHEN $3 <> 'null' THEN $3 = ANY(l.item_supplier)
  ELSE true
END
and
CASE
  WHEN $4 <> 'null' THEN $4 = ANY(l.client)
  ELSE true
END
`


const get_loads = async() => {
  return await fetchAll(SELECT)
}

const post_load = async({ 
   itemName, itemCount, packageCount, itemVolume, itemNetto,
   itemBrutto, supplierValue, clientValue, totalVolume, totalNetto,
   totalBrutto, containerNumber, containerSupplier, containerDeparture, status
 }) => {
await fetchAll(
  POST_LOAD, containerNumber, containerSupplier, containerDeparture, itemName, itemCount, packageCount,
  itemNetto, itemBrutto, itemVolume, totalNetto, totalBrutto, totalVolume, supplierValue, clientValue, status
  )
}

const search_loads = async({sNumber, sItem, sSupplier, sClient}) => {
  sNumber  = '%'+sNumber+'%'
  return await fetchAll(SEARCH_LOADS, sNumber, sItem , sSupplier, sClient)
}
module.exports = {
  get_loads,
  post_load,
  search_loads
}