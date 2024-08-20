
export const POOL = {
    port: process.env.DB_PORT || '',
    host: process.env.DB_HOST || '',
    dbname: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    pass: process.env.DB_PASSWORD || ''
}

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'faztpassword'
export const DB_NAME = process.env.DB_NAME || 'usersdb'
export const DB_PORT = process.env.DB_PORT || 3306
