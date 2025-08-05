const products = [
  // Clothing
  {
    id: 1,
    name: "T-Shirt",
    price: 15,
    category: "Clothing",
    material: "Cotton",
    rate: 4.2
  },
  {
    id: 2,
    name: "Jeans",
    price: 45,
    category: "Clothing",
    material: "Denim",
    rate: 3.9
  },
  {
    id: 3,
    name: "Sneakers",
    price: 70,
    category: "Clothing",
    size: "US 10",
    rate: 4.5
  },
  {
    id: 4,
    name: "Hoodie",
    price: 35,
    category: "Clothing",
    material: "Fleece",
    rate: 4.0
  },
  {
    id: 5,
    name: "Dress Shirt",
    price: 40,
    category: "Clothing",
    material: "Polyester",
    rate: 3.7
  },
  {
    id: 6,
    name: "Winter Coat",
    price: 120,
    category: "Clothing",
    material: "Wool",
    rate: 4.8
  },
  {
    id: 7,
    name: "Socks (3-pack)",
    price: 8,
    category: "Clothing",
    material: "Cotton Blend",
    rate: 4.1
  },
  {
    id: 8,
    name: "Running Shorts",
    price: 25,
    category: "Clothing",
    material: "Polyester",
    rate: 4.3
  },
  {
    id: 9,
    name: "Swim Trunks",
    price: 30,
    category: "Clothing",
    material: "Nylon",
    rate: 3.5
  },
  {
    id: 10,
    name: "Scarf",
    price: 20,
    category: "Clothing",
    material: "Acrylic",
    rate: 4.0
  },

  // Electronics
  {
    id: 11,
    name: "Laptop",
    price: 800,
    category: "Electronics",
    brand: "Dell",
    rate: 4.6
  },
  {
    id: 12,
    name: "Smartphone",
    price: 600,
    category: "Electronics",
    brand: "Samsung",
    rate: 4.7
  },
  {
    id: 13,
    name: "Wireless Headphones",
    price: 150,
    category: "Electronics",
    brand: "Sony",
    rate: 4.4
  },
  {
    id: 14,
    name: "Smartwatch",
    price: 250,
    category: "Electronics",
    brand: "Apple",
    rate: 4.5
  },
  {
    id: 15,
    name: "Portable Speaker",
    price: 75,
    category: "Electronics",
    brand: "JBL",
    rate: 4.2
  },
  {
    id: 16,
    name: "Tablet",
    price: 300,
    category: "Electronics",
    brand: "Lenovo",
    rate: 3.8
  },
  {
    id: 17,
    name: "Gaming Console",
    price: 499,
    category: "Electronics",
    brand: "PlayStation",
    rate: 4.9
  },
  {
    id: 18,
    name: "External Hard Drive",
    price: 90,
    category: "Electronics",
    brand: "Seagate",
    rate: 4.0
  },
  {
    id: 19,
    name: "Webcam",
    price: 50,
    category: "Electronics",
    resolution: "1080p",
    rate: 3.7
  },
  {
    id: 20,
    name: "Drone",
    price: 350,
    category: "Electronics",
    brand: "DJI",
    rate: 4.3
  },

  // Home & Kitchen
  {
    id: 21,
    name: "Coffee Maker",
    price: 60,
    category: "Home & Kitchen",
    capacityCups: 12,
    rate: 4.1
  },
  {
    id: 22,
    name: "Blender",
    price: 85,
    category: "Home & Kitchen",
    powerWatts: 600,
    rate: 4.5
  },
  {
    id: 23,
    name: "Toaster",
    price: 30,
    category: "Home & Kitchen",
    slices: 2,
    rate: 3.9
  },
  {
    id: 24,
    name: "Dinnerware Set (4-person)",
    price: 70,
    category: "Home & Kitchen",
    pieces: 16,
    rate: 4.2
  },
  {
    id: 25,
    name: "Vacuum Cleaner",
    price: 180,
    category: "Home & Kitchen",
    type: "Bagless",
    rate: 4.6
  },
  {
    id: 26,
    name: "Frying Pan",
    price: 25,
    category: "Home & Kitchen",
    material: "Non-stick",
    rate: 3.8
  },
  {
    id: 27,
    name: "Water Bottle",
    price: 18,
    category: "Home & Kitchen",
    material: "Stainless Steel",
    rate: 4.4
  },
  {
    id: 28,
    name: "Smart Speaker",
    price: 99,
    category: "Home & Kitchen",
    assistant: "Alexa",
    rate: 4.0
  },
  {
    id: 29,
    name: "Air Fryer",
    price: 110,
    category: "Home & Kitchen",
    capacityL: 5.8,
    rate: 4.7
  },
  {
    id: 30,
    name: "Dish Drying Rack",
    price: 22,
    category: "Home & Kitchen",
    material: "Chrome",
    rate: 3.6
  },

  // Books & Media
  {
    id: 31,
    name: "Fiction Novel",
    price: 12,
    category: "Books & Media",
    author: "Jane Doe",
    rate: 4.2
  },
  {
    id: 32,
    name: "Cookbook",
    price: 20,
    category: "Books & Media",
    cuisine: "Italian",
    rate: 4.0
  },
  {
    id: 33,
    name: "E-reader",
    price: 110,
    category: "Books & Media",
    brand: "Kindle",
    rate: 4.5
  },
  {
    id: 34,
    name: "Vinyl Record (Classic Rock)",
    price: 28,
    category: "Books & Media",
    artist: "Led Zeppelin",
    rate: 4.8
  },
  {
    id: 35,
    name: "Educational Textbook",
    price: 75,
    category: "Books & Media",
    subject: "Calculus",
    rate: 3.5
  },
  {
    id: 36,
    name: "Graphic Novel",
    price: 18,
    category: "Books & Media",
    genre: "Fantasy",
    rate: 4.1
  },
  {
    id: 37,
    name: "Magazine Subscription",
    price: 30,
    category: "Books & Media",
    durationMonths: 12,
    rate: 3.9
  },
  {
    id: 38,
    name: "Audiobook Subscription",
    price: 15,
    category: "Books & Media",
    platform: "Audible",
    rate: 4.3
  },
  {
    id: 39,
    name: "Art History Book",
    price: 35,
    category: "Books & Media",
    era: "Renaissance",
    rate: 4.0
  },
  {
    id: 40,
    name: "Self-Help Book",
    price: 14,
    category: "Books & Media",
    topic: "Productivity",
    rate: 3.7
  },

  // Sports & Outdoors
  {
    id: 41,
    name: "Yoga Mat",
    price: 25,
    category: "Sports & Outdoors",
    material: "TPE",
    rate: 4.4
  },
  {
    id: 42,
    name: "Dumbbell Set (adjustable)",
    price: 120,
    category: "Sports & Outdoors",
    weightLbs: "5-50",
    rate: 4.6
  },
  {
    id: 43,
    name: "Hiking Backpack",
    price: 80,
    category: "Sports & Outdoors",
    capacityL: 40,
    rate: 4.2
  },
  {
    id: 44,
    name: "Camping Tent (2-person)",
    price: 95,
    category: "Sports & Outdoors",
    season: "3-Season",
    rate: 4.0
  },
  {
    id: 45,
    name: "Resistance Bands Set",
    price: 20,
    category: "Sports & Outdoors",
    pieces: 3,
    rate: 4.1
  },
  {
    id: 46,
    name: "Bicycle Helmet",
    price: 40,
    category: "Sports & Outdoors",
    size: "M",
    rate: 4.5
  },
  {
    id: 47,
    name: "Fitness Tracker",
    price: 65,
    category: "Sports & Outdoors",
    brand: "Fitbit",
    rate: 4.7
  },
  {
    id: 48,
    name: "Basketball",
    price: 20,
    category: "Sports & Outdoors",
    size: "Official",
    rate: 3.9
  },
  {
    id: 49,
    name: "Sleeping Bag",
    price: 55,
    category: "Sports & Outdoors",
    type: "Mummy",
    rate: 4.3
  },
  {
    id: 50,
    name: "Portable Camping Chair",
    price: 30,
    category: "Sports & Outdoors",
    material: "Steel/Polyester",
    rate: 3.8
  }
];
export default products