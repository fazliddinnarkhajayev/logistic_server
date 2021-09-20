const { Pool } = require('pg')
const pool = new Pool({
     host: 'localhost',
     port: '5432',
     user: 'postgres',
     password: '2000',
     database: 'logistic'
})



const fetch = async(query, ...params) => {
 let client = await pool.connect()
 try {
     let { rows: row } = await pool.query(query, params ? params : null)
     return row
 }catch(error) {
     console.log(error)
 }finally {
     await client.release()
 }
}


const fetchAll = async(query, ...params) => {
    let client = await pool.connect()
    try {
        let { rows } = await pool.query(query, params ? params : null)
        return rows
    }catch(error) {
        console.log(error)
    }finally {
        await client.release()
    }
   }


module.exports = {
    fetch,
    fetchAll
}