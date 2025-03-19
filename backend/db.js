import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const query = await pool.query("SELECT NOW()");
if (query) {
    console.log("Connected to database");
}

const query1 = await pool.query("CREATE TABLE IF NOT EXISTS territories (territory_id UUID NOT NULL DEFAULT uuid_generate_v4(),territory_number INTEGER NOT NULL,territory_names CHARACTER VARYING(36) NOT NULL,PRIMARY KEY (territory_id),UNIQUE (territory_number));");

const query2 = await pool.query("CREATE TABLE IF NOT EXISTS home (home_id UUID NOT NULL DEFAULT uuid_generate_v4(),name CHARACTER VARYING(100) NOT NULL,age INTEGER NOT NULL,family CHARACTER VARYING(100) NOT NULL,adress CHARACTER VARYING(200) NOT NULL,territory_number INTEGER NOT NULL,PRIMARY KEY (home_id),FOREIGN KEY (territory_number) REFERENCES territories(territory_number));");

const query3 = await pool.query("CREATE TABLE IF NOT EXISTS users (user_id UUID NOT NULL DEFAULT uuid_generate_v4(),user_name CHARACTER VARYING(36) NOT NULL,user_email CHARACTER VARYING(36) NOT NULL,user_password CHARACTER VARYING(35) NOT NULL,PRIMARY KEY (user_id),UNIQUE (user_email));");

if (query1 && query2 && query3) {
    console.log("Tables created successfully");
}

export default pool;