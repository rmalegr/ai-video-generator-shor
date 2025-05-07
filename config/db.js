import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Configurar Neon para usar WebSocket
neonConfig.webSocket = true;

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);
const db = drizzle(sql);

export default db;

