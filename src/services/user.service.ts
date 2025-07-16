import { writeFileSync, WriteStream } from 'fs';
import { getDatabaseService } from '../database/DatabaseFactory';
import { UserData } from '../models/user-data';
import { DateTime } from 'mssql';

const db = getDatabaseService();
var userData: UserData[] = [
  { id: 1, name: 'John', email: 'J@gmail.com', password: 'J123asdad4@$', isActive: true, salary: 1000 },
  { id: 2, name: 'Edward', email: 'E@gmail.com', password: 'J34@$', isActive: true, salary: 1200 },
  { id: 3, name: 'Mike', email: 'M@gmail.com', password: 'J12IOJHO34@$', isActive: false, salary: 3000 },
  { id: 4, name: 'William', email: 'W@gmail.com', password: 'J12aa4@$', isActive: false, salary: 45000 },
  { id: 5, name: 'Eric', email: 'Eric@gmail.com', password: 'J1saad2sa534@$', isActive: true, salary: 21000 },
  { id: 6, name: 'Golmes', email: 'GG@gmail.com', password: 'J1234@$', isActive: true, salary: 51000 },
  { id: 7, name: 'Rachel', email: 'GG@gmail.com', password: 'J34@$', isActive: true, salary: 71000 },
];

export const userService = {

  async getAllUsers() {
    console.log('service method getAllUsers() reached!');


    return userData;

    //check later how to send values to the database
    //There is some error on the database connection currently
    // return await db.getUsers();
  },

  async getUser(id: number) {
    console.log('service method getAllUsers() reached!');

    const user = userData.filter(u => u.id === id);
    return user;

    //check later how to send values to the database
    //There is some error on the database connection currently
    // return await db.getUsers();
  },

  async createUser(data: UserData) {
    console.log('service method createUser() reached!');

    if (!data.name || !data.email || !data.password) {
      throw new Error('Missing required user fields');
    }
    const id = userData[userData.length - 1].id + 1
    data.id = id;
    userData.push(data);
    return data;

    // You could hash password here before storing (recommended)
    //check later how to send values to the database
    //There is some error on the database connection currently
    //return await db.createUser(data);
  },

async postData(data: any) {
  // console.log('service method postData() reached!');
  const jsonData = JSON.stringify(data, null, 2); // Pretty-print
  // console.dir(jsonData, { depth: null, colors: true });

  try {

  //  console.log('CWD:', process.cwd());
    // writeFileSync('json-response.txt', jsonData, { flag: 'w' });
    // console.log('File written successfully.');
    // console.log('Service Method reached')
    const now = new Date();
    console.log(`Bundle Published at ${now.toString()}`)  
  } catch (err) {
    console.error('Failed to write file:', err);
  }
}
};
