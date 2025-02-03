import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/singlestore/driver";
import {drizzle} from'drizzle-orm/neon-http'
import * as schema from './schema'

const sql = neon(
    'postgresql://neondb_owner:npg_X8wyLFd3EDNf@ep-divine-hat-a8lx6wyv-pooler.eastus2.azure.neon.tech/expense-O?sslmode=require'
)

// export const db = drizzle(sql,{schema});
export const db = drizzle(sql, { schema });