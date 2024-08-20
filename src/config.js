
export const POOL = {
    port: process.env.DB_PORT || '5000',
    host: process.env.DB_HOST || 'localhost',
    dbname: process.env.DB_NAME || 'db',
    user: process.env.DB_USER || 'root',
    pass: process.env.DB_PASSWORD || 'root'
}

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root'
export const DB_NAME = process.env.DB_NAME || 'db'
export const DB_PORT = process.env.DB_PORT || 5000
