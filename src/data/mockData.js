const validUsers = [
    {name: "Malk Daboor",
        email: "malkdaboor@hotmail.ca",
        password: "Hello123"
    },
    {
        name: "Jimin Park",
        email: "jiminpark@yolo.kor",
        password: "Purple7"
    },
    {
        name: "Ryland Grace",
        email: "gracetomyocky@gmail.com",
        password: "EridIsAwesome100"
    }
];

const apartments = [
    {
    id: 1,
    name: "The Marlstone",
    address: "5540 Spring Garden Rd",
    neighbourhood: "Spring Garden",
    rating: 5.0,
    reviewCount: 1,
    tags: [],
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600"
  },
  {
    id: 2,
    name: "Park Victoria",
    address: "1496 Carlton St",
    neighbourhood: "South End",
    rating: 4.5,
    reviewCount: 2,
    tags: ["Well maintained", "Quiet", "Expensive"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600"
  },
  {
    id: 3,
    name: "Le Marchant Towers",
    address: "1585 Le Marchant St",
    neighbourhood: "West End",
    rating: 3.7,
    reviewCount: 3,
    tags: ["Good location", "Parking limited", "Aging building"],
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600"
  },
  {
    id: 4,
    name: "Fenwick Tower",
    address: "5599 Fenwick St",
    neighbourhood: "Downtown",
    rating: 3.3,
    reviewCount: 3,
    tags: ["Elevator issues", "Great views", "Security concerns"],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600"
  },
  {
    id: 5,
    name: "Southpoint Apartments",
    address: "1050 South Park St",
    neighbourhood: "South End",
    rating: 2.5,
    reviewCount: 4,
    tags: [],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600"
  }
]

export default validUsers;
export { apartments };