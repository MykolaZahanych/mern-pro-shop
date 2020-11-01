import bcrpyt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrpyt.hashSync('1234567', 10),
    isAdmin: true,
  },
  {
    name: 'Valentin',
    email: 'valentin@test.com',
    password: bcrpyt.hashSync('1234567', 10),
  },
  {
    name: 'Mark',
    email: 'mark@test.com',
    password: bcrpyt.hashSync('1234567', 10),
  },
];

export default users;
