import { getDatabaseService } from '../database/DatabaseFactory';

const db = getDatabaseService();

export const userService = {
  async getAllUsers() {
    console.log('service method getAllUsers() reached!');
    return await db.getUsers();
  },

  async createUser(data: { name: string; email: string; password: string }) {
    if (!data.name || !data.email || !data.password) {
      throw new Error('Missing required user fields');
    }

    // You could hash password here before storing (recommended)
    return await db.createUser(data);
  }
};
