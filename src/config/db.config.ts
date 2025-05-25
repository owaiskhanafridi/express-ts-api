import 'dotenv/config';

export const dbConfig = {
    type: process.env.DB_TYPE || 'sqlserver',
    sql: {
        user: process.env.DB_USER!,
        password: process.env.DB_PASS!,
        server: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME!,
        options: {
            instanceName: 'SQLEXPRESS', // ✅ specify the instance properly
            encrypt: false,
            trustServerCertificate: true,
        },
    },
};