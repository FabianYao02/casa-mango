// server/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: true es necesario para Supabase
  ssl: { rejectUnauthorized: false } 
});

module.exports = pool;