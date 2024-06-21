const fetch = require('node-fetch');
const fs = require('fs');

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    fs.writeFileSync('./src/users.js', `export const users = ${JSON.stringify(users, null, 2)};`);
    console.log('Users data fetched and saved to users.js');
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

fetchUsers();

