import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();
console.log("Database URL:", process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);
export default {
    schema: "./config/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL // Usa la variable de entorno definida en .env
    },
    additionalConfig: {
        logging: true
    }
};