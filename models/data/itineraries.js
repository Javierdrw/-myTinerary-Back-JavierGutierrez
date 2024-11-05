import "dotenv/config.js";
import "../../config/dataBase.js";
import Itinerary from "../Itinerary.js";

let itineraries = [
  {
    photo:
      "https://images.unsplash.com/photo-1712750438045-bfc52257d309?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 100, currency: "YEN", amount: 2 },
    name: "Callejera",
    duration: 2,
    likes: 0,
    hashtags: "#explore #adventure",
    city: "6716f19a9098f95e9561a04e",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1710005631991-09fc168c0dda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 120, currency: "YEN", amount: 2 },
    name: "lake of love",
    duration: 3,
    likes: 0,
    hashtags: "#sightseeing #fun",
    city: "6716f19a9098f95e9561a04e",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1706782804418-a791eb8dc8e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 150, currency: "YEN", amount: 3 },
    name: "radio tower",
    duration: 1,
    likes: 0,
    hashtags: "#walkingtour #culture",
    city: "6716f19a9098f95e9561a04e",
  },

  // Itinerarios para la segunda ciudad (ID: 6716f19a9098f95e9561a04f)
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1683120756391-5eded4fd1718?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 90, currency: "EUR", amount: 1 },
    name: "Eiffel Tower",
    duration: 2,
    likes: 0,
    hashtags: "#historic #fun",
    city: "6716f19a9098f95e9561a04f",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1661914097200-65469aa701d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 110, currency: "EUR", amount: 2 },
    name: "courthouse",
    duration: 3,
    likes: 0,
    hashtags: "#adventure #foodie",
    city: "6716f19a9098f95e9561a04f",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1683918891920-f8ac52b6a03e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 75, currency: "EUR", amount: 1 },
    name: "Tuileries Garden",
    duration: 1,
    likes: 0,
    hashtags: "#relax #sightseeing",
    city: "6716f19a9098f95e9561a04f",
  },

  // Itinerarios para la tercera ciudad (ID: 6716f19a9098f95e9561a050)
  {
    photo:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 85, currency: "USE", amount: 1 },
    name: "Statue of Liberty",
    duration: 2,
    likes: 0,
    hashtags: "#outdoor #adventure",
    city: "6716f19a9098f95e9561a050",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1617105488205-25f93b4aff36?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 115, currency: "USE", amount: 2 },
    name: "dock",
    duration: 3,
    likes: 0,
    hashtags: "#culture #photography",
    city: "6716f19a9098f95e9561a050",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1605785511309-35b2c56f4e14?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 95, currency: "USE", amount: 1 },
    name: "Brooklyn Bridge",
    duration: 1,
    likes: 0,
    hashtags: "#sightseeing #walking",
    city: "6716f19a9098f95e9561a050",
  },

  // Itinerarios para la cuarta ciudad (ID: 6716f19a9098f95e9561a051)
  {
    photo:
      "https://images.unsplash.com/photo-1719601398911-4181da5f1d7b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 130, currency: "EGP", amount: 2 },
    name: "Sofitel Cairo Nile El Gezirah",
    duration: 4,
    likes: 0,
    hashtags: "#luxury #experience",
    city: "6716f19a9098f95e9561a051",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1694475193074-914ee0eb7308?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 95, currency: "EGP", amount: 1 },
    name: "South Sinai Governorate",
    duration: 2,
    likes: 0,
    hashtags: "#walkingtour #explore",
    city: "6716f19a9098f95e9561a051",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1697729501403-fdb0b267a027?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 60, currency: "EGP", amount: 1 },
    name: "Al Bujairi Heritage Park",
    duration: 1,
    likes: 0,
    hashtags: "#nature #relax",
    city: "6716f19a9098f95e9561a051",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1707684600350-7e681de42724?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 70, currency: "AUD", amount: 1 },
    name: "Ópera de Sídney",
    duration: 2,
    likes: 0,
    hashtags: "#food #culture",
    city: "6716f19a9098f95e9561a052",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1523325694268-559614c8cc45?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 100, currency: "AUD", amount: 2 },
    name: "Blue Mountains",
    duration: 3,
    likes: 0,
    hashtags: "#history #adventure",
    city: "6716f19a9098f95e9561a052",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1694543741073-d02ebafe53a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 65, currency: "AUD", amount: 1 },
    name: "New Wales",
    duration: 1,
    likes: 0,
    hashtags: "#explore #outdoor",
    city: "6716f19a9098f95e9561a052",
  },

  {
    photo:
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 90, currency: "BRL", amount: 1 },
    name: "Ko Tapu Roca De James Bond",
    duration: 2,
    likes: 0,
    hashtags: "#culture #art",
    city: "6716f19a9098f95e9561a053",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 120, currency: "BRL", amount: 2 },
    name: "Cristo Redentor",
    duration: 3,
    likes: 0,
    hashtags: "#luxury #fun",
    city: "6716f19a9098f95e9561a053",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1589394760151-b4c9890765fe?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 80, currency: "BRL", amount: 1 },
    name: "RIO",
    duration: 1,
    likes: 0,
    hashtags: "#adventure #travel",
    city: "6716f19a9098f95e9561a053",
  },

  // Itinerarios para la séptima ciudad (ID: 6716f19a9098f95e9561a054)
  {
    photo:
      "https://images.unsplash.com/photo-1641531191981-7aa49800acec?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 75, currency: "RUB", amount: 1 },
    name: "Brandenburg Gate",
    duration: 2,
    likes: 0,
    hashtags: "#history #food",
    city: "6716f19a9098f95e9561a054",
  },
  {
    photo:
      "https://images.mnstatic.com/f0/94/f094de6377e5d2f5b87899d8c8c6d348.jpg?quality=90&aspect_ratio=16:9&width=1536",
    price: { worth: 110, currency: "RUB", amount: 2 },
    name: "Reichstag",
    duration: 3,
    likes: 0,
    hashtags: "#scenic #walking",
    city: "6716f19a9098f95e9561a054",
  },
  {
    photo:
      "https://images.mnstatic.com/71/a9/71a94d356e33d665b826c0b7ed2fff9c.jpg?quality=90&aspect_ratio=16:9&width=1536",
    price: { worth: 60, currency: "RUB", amount: 1 },
    name: "Fernsehturm de Berlín",
    duration: 1,
    likes: 0,
    hashtags: "#culture #relax",
    city: "6716f19a9098f95e9561a054",
  },

  // Itinerarios para la octava ciudad (ID: 6716f19a9098f95e9561a055)
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1661962667200-24712e1a5b0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 85, currency: "ZAR", amount: 1 },
    name: "Camels",
    duration: 2,
    likes: 0,
    hashtags: "#explore #walk",
    city: "6716f19a9098f95e9561a055",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1507461476191-0ed4f9f18533?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 125, currency: "ZAR", amount: 2 },
    name: "elephant ride",
    duration: 4,
    likes: 0,
    hashtags: "#photography #adventure",
    city: "6716f19a9098f95e9561a055",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 100, currency: "ZAR", amount: 1 },
    name: "Masai Mara Nature Reserve",
    duration: 1,
    likes: 0,
    hashtags: "#foodie #nature",
    city: "6716f19a9098f95e9561a055",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1493221875746-1203de4f7a56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 95, currency: "THB", amount: 1 },
    name: "The Grand Palace",
    duration: 2,
    likes: 0,
    hashtags: "#outdoor #luxury",
    city: "6716f19a9098f95e9561a056",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 80, currency: "THB", amount: 1 },
    name: "Buddhist temple in Bangkok",
    duration: 1,
    likes: 0,
    hashtags: "#culture #fun",
    city: "6716f19a9098f95e9561a056",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1644128007174-130e6963fb1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 130, currency: "THB", amount: 2 },
    name: "Wat Arun",
    duration: 3,
    likes: 0,
    hashtags: "#sightseeing #relax",
    city: "6716f19a9098f95e9561a056",
  },

  // Itinerarios para la décima ciudad (ID: 6716f19a9098f95e9561a057)
  {
    photo:
      "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 100, currency: "RUB", amount: 1 },
    name: "Red Square",
    duration: 2,
    likes: 0,
    hashtags: "#walk #adventure",
    city: "6716f19a9098f95e9561a057",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1709410379566-c3d5bfe9244a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 115, currency: "RUB", amount: 2 },
    name: "central bank",
    duration: 3,
    likes: 0,
    hashtags: "#relax #food",
    city: "6716f19a9098f95e9561a057",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1707343623069-31374fa0e7e8?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 90, currency: "RUB", amount: 1 },
    name: "Cathedrals in the Kremlin",
    duration: 1,
    likes: 0,
    hashtags: "#explore #travel",
    city: "6716f19a9098f95e9561a057",
  },
];

Itinerary.insertMany(itineraries);
