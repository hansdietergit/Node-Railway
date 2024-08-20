import {createPool} from 'mysql2/promise'
import { POOL } from "./config.js";

export const pool = createPool ({
    host: POOL.host,
    user: POOL.user,
    password: POOL.pass,
    database: POOL.dbname
})
