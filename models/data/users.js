import "dotenv/config.js";
import "../../config/dataBase.js";
import User from "../../models/User.js";

const users = [
  {
    Photo: "https://randomuser.me/api/portraits/men/1.jpg",
    Name: "John Doe",
    Email: "johndoe@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/1.jpg",
    Name: "Jane Smith",
    Email: "janesmith@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/2.jpg",
    Name: "Michael Johnson",
    Email: "michaeljohnson@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/2.jpg",
    Name: "Emily Davis",
    Email: "emilydavis@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/3.jpg",
    Name: "David Martinez",
    Email: "davidmartinez@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/3.jpg",
    Name: "Sophia Lee",
    Email: "sophialee@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/4.jpg",
    Name: "James Wilson",
    Email: "jameswilson@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/4.jpg",
    Name: "Mia Brown",
    Email: "miabrown@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/5.jpg",
    Name: "Chris Taylor",
    Email: "christaylor@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/5.jpg",
    Name: "Isabella Anderson",
    Email: "isabellaanderson@example.com",
    Password: "password123",
    category: "collaborator",
  },

  {
    Photo: "https://randomuser.me/api/portraits/men/6.jpg",
    Name: "Oliver Thomas",
    Email: "oliverthomas@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/6.jpg",
    Name: "Charlotte Walker",
    Email: "charlottewalker@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/7.jpg",
    Name: "Liam Harris",
    Email: "liamharris@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/7.jpg",
    Name: "Amelia Young",
    Email: "ameliayoung@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/8.jpg",
    Name: "Mason King",
    Email: "masonking@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/8.jpg",
    Name: "Olivia Scott",
    Email: "oliviascott@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/9.jpg",
    Name: "Elijah Baker",
    Email: "elijahbaker@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/9.jpg",
    Name: "Ava Wright",
    Email: "avawright@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/10.jpg",
    Name: "Benjamin Green",
    Email: "benjamingreen@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/10.jpg",
    Name: "Sophia Adams",
    Email: "sophiaadams@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/11.jpg",
    Name: "Alexander Perez",
    Email: "alexanderperez@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/11.jpg",
    Name: "Mia Hall",
    Email: "miahall@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/12.jpg",
    Name: "Daniel Evans",
    Email: "danielevans@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/12.jpg",
    Name: "Isabella Turner",
    Email: "isabellaturner@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/13.jpg",
    Name: "Henry Morgan",
    Email: "henrymorgan@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/13.jpg",
    Name: "Emily Cooper",
    Email: "emilycooper@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/14.jpg",
    Name: "David Martinez",
    Email: "davidmartinez@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/14.jpg",
    Name: "Grace Thompson",
    Email: "gracethompson@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/men/15.jpg",
    Name: "Joseph Lee",
    Email: "josephlee@example.com",
    Password: "password123",
    category: "collaborator",
  },
  {
    Photo: "https://randomuser.me/api/portraits/women/15.jpg",
    Name: "Ella White",
    Email: "ellawhite@example.com",
    Password: "password123",
    category: "collaborator",
  },
];

User.insertMany(users);
