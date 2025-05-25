import sql, { ConnectionPool } from 'mssql';
import { IDatabaseService } from '../IDatabaseService';
import { dbConfig } from '../../config/db.config';

export class SqlServerService implements IDatabaseService {
    private pool: ConnectionPool | null = null;

    async connect() {
        if (!this.pool) {
            this.pool = await sql.connect(dbConfig.sql);
            console.log('✅ Connected to SQL Server');
        }
    }

    async disconnect() {
        if (this.pool) {
            await this.pool.close();
            this.pool = null;
        }
    }

    async getUsers(): Promise<any[]> {
        try {
            console.log("SQL Service method getUsers() reached");
            await this.connect(); // ensure pool is ready
            const result = await this.pool!.request().query('SELECT id, name, email FROM Users');
            return result.recordset;

        } catch (err) {
            if (err instanceof Error) {
                console.error("DB Error:", err.message);
                throw new Error(`Failed to fetch users: ${err.message}`);
            } else {
                console.error("Unknown error occurred while fetching users");
                throw new Error("Unknown error occurred while fetching users");
            }
        }
    }

    async createUser(user: { name: string; email: string; password: string }) {
        await this.connect(); // ensure pool is ready
        await this.pool!.request()
            .input('name', sql.VarChar, user.name)
            .input('email', sql.VarChar, user.email)
            .input('password', sql.VarChar, user.password)
            .query('INSERT INTO Users (name, email, password) VALUES (@name, @email, @password)');

        return { name: user.name, email: user.email };
    }
}