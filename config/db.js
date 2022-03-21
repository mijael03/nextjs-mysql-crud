import { createPool } from 'mysql2/promise'

const pool = createPool({
   host: 'sql10.freemysqlhosting.net',
   user: 'sql10480603',
   password: 'rge6Eymn42',
   port: 3306,
   database: 'sql10480603'

})
export { pool }