var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");

// src/data/mockData.ts
var INITIAL_SHOPS = [
  {
    id: "shop-1",
    name: "Gupta Kirana & General Store",
    ownerId: "user-shop-1",
    ownerName: "Ramesh Gupta",
    category: "Groceries & Atta",
    address: "Main Market Road, Rampur Town",
    villageOrTown: "Rampur Town",
    lat: 26.8467,
    lng: 80.9462,
    rating: 4.8,
    reviewsCount: 124,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&auto=format&fit=crop&q=80",
    openHours: "06:00 AM - 09:30 PM",
    isOpen: true,
    phone: "+91 98765 43210",
    verified: true
  },
  {
    id: "shop-2",
    name: "Verma Fresh Dairy & Sweets",
    ownerId: "user-shop-2",
    ownerName: "Suresh Verma",
    category: "Fresh Milk & Dairy",
    address: "Near Shiv Temple, Shivpur Village",
    villageOrTown: "Shivpur Village",
    lat: 26.852,
    lng: 80.951,
    rating: 4.9,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80",
    openHours: "05:00 AM - 09:00 PM",
    isOpen: true,
    phone: "+91 98765 12345",
    verified: true
  },
  {
    id: "shop-3",
    name: "Kishan Ganj Farm Fresh Sabzi Mandi",
    ownerId: "user-shop-3",
    ownerName: "Harish Patel",
    category: "Farm Fresh Vegetables",
    address: "Sabzi Mandi Yard, Kishan Ganj",
    villageOrTown: "Kishan Ganj",
    lat: 26.839,
    lng: 80.938,
    rating: 4.7,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
    openHours: "06:00 AM - 08:00 PM",
    isOpen: true,
    phone: "+91 98123 45678",
    verified: true
  },
  {
    id: "shop-4",
    name: "Jan Seva Medical Store",
    ownerId: "user-shop-4",
    ownerName: "Dr. Anand Kumar",
    category: "Medicines & Wellness",
    address: "Bus Stand Circle, Rampur Town",
    villageOrTown: "Rampur Town",
    lat: 26.848,
    lng: 80.942,
    rating: 4.9,
    reviewsCount: 156,
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=600&auto=format&fit=crop&q=80",
    openHours: "07:00 AM - 10:00 PM",
    isOpen: true,
    phone: "+91 99887 76655",
    verified: true
  },
  {
    id: "shop-5",
    name: "Kisan Agro & Organic Seeds",
    ownerId: "user-shop-5",
    ownerName: "Mahesh Farmer",
    category: "Kisan & Agro Supplies",
    address: "Bypass Road, Navgram",
    villageOrTown: "Navgram",
    lat: 26.855,
    lng: 80.96,
    rating: 4.6,
    reviewsCount: 62,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?w=600&auto=format&fit=crop&q=80",
    openHours: "07:30 AM - 07:00 PM",
    isOpen: true,
    phone: "+91 97654 32109",
    verified: true
  },
  {
    id: "shop-6",
    name: "Chai Samosa & Village Tiffin Corner",
    ownerId: "user-shop-6",
    ownerName: "Chotu Halwai",
    category: "Hot Village Snacks",
    address: "Chowk Intersection, Rampur Town",
    villageOrTown: "Rampur Town",
    lat: 26.845,
    lng: 80.949,
    rating: 4.9,
    reviewsCount: 340,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80",
    openHours: "06:00 AM - 10:00 PM",
    isOpen: true,
    phone: "+91 98444 33221",
    verified: true
  }
];
var INITIAL_CATEGORIES = [
  {
    id: "cat-1",
    name: "Groceries & Atta",
    iconName: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=400&auto=format&fit=crop&q=80",
    description: "Chakki fresh flour, basmati rice, pulses, oils & spices",
    itemCount: 45
  },
  {
    id: "cat-2",
    name: "Fresh Milk & Dairy",
    iconName: "Milk",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop&q=80",
    description: "Pure buffalo/cow milk, fresh paneer, mawa, curd & ghee",
    itemCount: 22
  },
  {
    id: "cat-3",
    name: "Farm Fresh Vegetables",
    iconName: "Carrot",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=80",
    description: "Directly sourced from village farmers every morning",
    itemCount: 38
  },
  {
    id: "cat-4",
    name: "Medicines & Wellness",
    iconName: "Pill",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80",
    description: "Essential OTC medicines, first aid, glucose & health drinks",
    itemCount: 30
  },
  {
    id: "cat-5",
    name: "Kisan & Agro Supplies",
    iconName: "Sprout",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?w=400&auto=format&fit=crop&q=80",
    description: "High-yield seeds, organic compost, sprays & farming tools",
    itemCount: 28
  },
  {
    id: "cat-6",
    name: "Hot Village Snacks",
    iconName: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=80",
    description: "Fresh piping hot samosas, jalebi, kachori & kulhad chai",
    itemCount: 18
  },
  {
    id: "cat-7",
    name: "Household & Cleaning",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&auto=format&fit=crop&q=80",
    description: "Detergents, soaps, insect repellents & lanterns",
    itemCount: 25
  },
  {
    id: "cat-8",
    name: "Bakery & Sweets",
    iconName: "Cake",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80",
    description: "Rusk, pav, milk bread, gulab jamun & peda",
    itemCount: 20
  }
];
var INITIAL_PRODUCTS = [
  {
    id: "prod-1",
    shopId: "shop-1",
    shopName: "Gupta Kirana & General Store",
    name: "Sharbati Chakki Fresh Whole Wheat Atta (5kg)",
    category: "Groceries & Atta",
    price: 210,
    originalPrice: 240,
    unit: "5 kg",
    stock: 40,
    rating: 4.8,
    reviewsCount: 45,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&auto=format&fit=crop&q=80",
    description: "Pure village chakki ground MP Sharbati wheat flour with high fiber and soft rotis.",
    tags: ["Best Seller", "Chakki Fresh", "Atta"],
    isPopular: true,
    isFresh: true,
    isRuralSpecial: true
  },
  {
    id: "prod-2",
    shopId: "shop-1",
    shopName: "Gupta Kirana & General Store",
    name: "Village Mustard Oil / Sarson Tel (1 Litre)",
    category: "Groceries & Atta",
    price: 155,
    originalPrice: 175,
    unit: "1 L bottle",
    stock: 60,
    rating: 4.9,
    reviewsCount: 82,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=80",
    description: "Kachi Ghani cold-pressed pure mustard oil with natural pungent aroma.",
    tags: ["Kachi Ghani", "Pure", "Mustard Oil"],
    isPopular: true
  },
  {
    id: "prod-3",
    shopId: "shop-2",
    shopName: "Verma Fresh Dairy & Sweets",
    name: "Pure Buffalo Fresh Milk (1 Litre)",
    category: "Fresh Milk & Dairy",
    price: 66,
    originalPrice: 70,
    unit: "1 Litre pouch",
    stock: 120,
    rating: 4.9,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=80",
    description: "Morning fresh 100% pure full-cream buffalo milk collected from local dairy farmers.",
    tags: ["Fresh Daily", "Full Cream", "Milk"],
    isPopular: true,
    isFresh: true
  },
  {
    id: "prod-4",
    shopId: "shop-2",
    shopName: "Verma Fresh Dairy & Sweets",
    name: "Fresh Malai Paneer (200g)",
    category: "Fresh Milk & Dairy",
    price: 90,
    originalPrice: 100,
    unit: "200 g pack",
    stock: 35,
    rating: 4.8,
    reviewsCount: 67,
    image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=500&auto=format&fit=crop&q=80",
    description: "Soft cottage cheese made fresh every morning. No preservatives.",
    tags: ["Fresh Paneer", "High Protein"],
    isPopular: true,
    isFresh: true
  },
  {
    id: "prod-5",
    shopId: "shop-3",
    shopName: "Kishan Ganj Farm Fresh Sabzi Mandi",
    name: "Fresh Farm Potatoes / Aloo (2 kg)",
    category: "Farm Fresh Vegetables",
    price: 45,
    originalPrice: 55,
    unit: "2 kg",
    stock: 150,
    rating: 4.7,
    reviewsCount: 50,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=80",
    description: "Freshly harvested desi potatoes directly from nearby village fields.",
    tags: ["Direct From Farm", "Daily Essential"],
    isPopular: true,
    isFresh: true
  },
  {
    id: "prod-6",
    shopId: "shop-3",
    shopName: "Kishan Ganj Farm Fresh Sabzi Mandi",
    name: "Red Onions / Pyaz (1 kg)",
    category: "Farm Fresh Vegetables",
    price: 38,
    originalPrice: 45,
    unit: "1 kg",
    stock: 100,
    rating: 4.6,
    reviewsCount: 38,
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf?w=500&auto=format&fit=crop&q=80",
    description: "Crisp and juicy medium size red onions.",
    tags: ["Farm Fresh", "Vegetable"],
    isFresh: true
  },
  {
    id: "prod-7",
    shopId: "shop-6",
    shopName: "Chai Samosa & Village Tiffin Corner",
    name: "Crispy Hot Potato Samosa (Set of 2)",
    category: "Hot Village Snacks",
    price: 30,
    originalPrice: 35,
    unit: "2 Pcs with Green Chutney",
    stock: 80,
    rating: 5,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80",
    description: "Fried in fresh groundnut oil with spiced potato filling and mint-tamarind chutney.",
    tags: ["Hot & Crispy", "10 Min Delivery", "Village Favorite"],
    isPopular: true,
    isFresh: true,
    isRuralSpecial: true
  },
  {
    id: "prod-8",
    shopId: "shop-6",
    shopName: "Chai Samosa & Village Tiffin Corner",
    name: "Desi Ghee Kesari Jalebi (250g)",
    category: "Hot Village Snacks",
    price: 85,
    originalPrice: 100,
    unit: "250 g pack",
    stock: 25,
    rating: 4.9,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80",
    description: "Juicy, hot saffron jalebi fried in pure cow ghee.",
    tags: ["Hot Sweet", "Desi Ghee"],
    isPopular: true,
    isFresh: true
  },
  {
    id: "prod-9",
    shopId: "shop-4",
    shopName: "Jan Seva Medical Store",
    name: "ORS Electrolyte Instant Energy Powder (Pack of 5)",
    category: "Medicines & Wellness",
    price: 95,
    originalPrice: 105,
    unit: "5 sachets",
    stock: 90,
    rating: 4.9,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80",
    description: "WHO formula hydration salts for summer energy & fever recovery.",
    tags: ["Essential Health", "First Aid"]
  },
  {
    id: "prod-10",
    shopId: "shop-5",
    shopName: "Kisan Agro & Organic Seeds",
    name: "Hybrid Vegetable Seeds Kit (Tomato, Chilly, Brinjal)",
    category: "Kisan & Agro Supplies",
    price: 180,
    originalPrice: 220,
    unit: "3 Seed Packets",
    stock: 45,
    rating: 4.7,
    reviewsCount: 29,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?w=500&auto=format&fit=crop&q=80",
    description: "High disease resistance organic certified hybrid seed kit for kitchen garden & fields.",
    tags: ["High Yield", "Kisan Special"],
    isRuralSpecial: true
  },
  {
    id: "prod-11",
    shopId: "shop-1",
    shopName: "Gupta Kirana & General Store",
    name: "Premium Basmati Rice (1 kg)",
    category: "Groceries & Atta",
    price: 110,
    originalPrice: 130,
    unit: "1 kg pack",
    stock: 55,
    rating: 4.8,
    reviewsCount: 60,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80",
    description: "Aromatic long grain aged Basmati rice ideal for everyday meal and pulao.",
    tags: ["Aromatic", "Basmati Rice"]
  },
  {
    id: "prod-12",
    shopId: "shop-2",
    shopName: "Verma Fresh Dairy & Sweets",
    name: "Pure Desi Cow Ghee (500 ml)",
    category: "Fresh Milk & Dairy",
    price: 380,
    originalPrice: 420,
    unit: "500 ml jar",
    stock: 30,
    rating: 5,
    reviewsCount: 95,
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?w=500&auto=format&fit=crop&q=80",
    description: "A2 bilona method traditional cow ghee with golden grainy texture.",
    tags: ["Pure Ghee", "Desi A2"],
    isPopular: true,
    isRuralSpecial: true
  }
];
var INITIAL_ADDRESSES = [
  {
    id: "addr-1",
    label: "Home",
    name: "Amit Sharma",
    phone: "+91 98765 00001",
    street: "House No 42, Near Primary School",
    villageOrTown: "Rampur Town",
    landmark: "Opposite Water Tank",
    pincode: "226001",
    lat: 26.8475,
    lng: 80.947,
    isDefault: true
  },
  {
    id: "addr-2",
    label: "Work",
    name: "Amit Sharma",
    phone: "+91 98765 00001",
    street: "Panchayat Bhavan Road",
    villageOrTown: "Shivpur Village",
    landmark: "Near Panchayat Office",
    pincode: "226002",
    lat: 26.851,
    lng: 80.95,
    isDefault: false
  }
];
var MOCK_USERS = [
  {
    id: "user-cust-1",
    name: "Amit Sharma",
    email: "amit@smartdelivery.in",
    phone: "+91 98765 00001",
    role: "customer",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    addresses: INITIAL_ADDRESSES,
    defaultAddressId: "addr-1",
    active: true,
    joinedAt: "2025-01-15"
  },
  {
    id: "user-shop-1",
    name: "Ramesh Gupta",
    email: "gupta.store@smartdelivery.in",
    phone: "+91 98765 43210",
    role: "shop_owner",
    shopId: "shop-1",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
    addresses: [],
    active: true,
    joinedAt: "2024-11-10"
  },
  {
    id: "user-driver-1",
    name: "Rajesh Kumar (Rider)",
    email: "rajesh.rider@smartdelivery.in",
    phone: "+91 99112 23344",
    role: "delivery_partner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    addresses: [],
    rating: 4.9,
    active: true,
    joinedAt: "2024-12-01"
  },
  {
    id: "user-admin-1",
    name: "Kishan SuperAdmin",
    email: "admin@smartdelivery.in",
    phone: "+91 90000 00000",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    addresses: [],
    active: true,
    joinedAt: "2024-01-01"
  }
];
var INITIAL_DELIVERY_PARTNERS = [
  {
    id: "partner-1",
    userId: "user-driver-1",
    name: "Rajesh Kumar",
    phone: "+91 99112 23344",
    vehicleType: "Hero Splendor Plus (Bike)",
    vehicleNumber: "UP 32 AB 1234",
    rating: 4.9,
    totalDeliveries: 342,
    earningsToday: 680,
    earningsTotal: 24500,
    isOnline: true,
    currentOrderId: "ord-101",
    lat: 26.846,
    lng: 80.945
  },
  {
    id: "partner-2",
    userId: "user-driver-2",
    name: "Sunil Verma",
    phone: "+91 98223 34455",
    vehicleType: "TVS XL100 Moped",
    vehicleNumber: "UP 32 XY 9876",
    rating: 4.8,
    totalDeliveries: 215,
    earningsToday: 510,
    earningsTotal: 18200,
    isOnline: true,
    lat: 26.85,
    lng: 80.952
  }
];
var INITIAL_COUPONS = [
  {
    code: "VILLAGE50",
    discountPercent: 50,
    maxDiscount: 60,
    minOrder: 149,
    description: "Get 50% OFF up to \u20B960 on your first rural quick delivery order!",
    validTill: "2026-12-31"
  },
  {
    code: "RAMPUR100",
    discountPercent: 20,
    maxDiscount: 100,
    minOrder: 399,
    description: "Flat \u20B9100 max discount for orders above \u20B9399 in Rampur town.",
    validTill: "2026-12-31"
  },
  {
    code: "FREESHIP",
    discountPercent: 100,
    maxDiscount: 25,
    minOrder: 199,
    description: "100% Free delivery fee discount on orders over \u20B9199.",
    validTill: "2026-12-31"
  }
];

// server.ts
var users = [...MOCK_USERS];
var shops = [...INITIAL_SHOPS];
var products = [...INITIAL_PRODUCTS];
var deliveryPartners = [...INITIAL_DELIVERY_PARTNERS];
var coupons = [...INITIAL_COUPONS];
var orders = [
  {
    id: "ord-101",
    orderNumber: "ORD-2026-8812",
    customerId: "user-cust-1",
    customerName: "Amit Sharma",
    customerPhone: "+91 98765 00001",
    deliveryAddress: INITIAL_ADDRESSES[0],
    items: [
      {
        productId: "prod-7",
        shopId: "shop-6",
        name: "Crispy Hot Potato Samosa (Set of 2)",
        price: 30,
        quantity: 2,
        unit: "2 Pcs with Green Chutney",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80"
      },
      {
        productId: "prod-3",
        shopId: "shop-2",
        name: "Pure Buffalo Fresh Milk (1 Litre)",
        price: 66,
        quantity: 1,
        unit: "1 Litre pouch",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=80"
      }
    ],
    shopIds: ["shop-6", "shop-2"],
    totalAmount: 126,
    itemsPrice: 126,
    deliveryFee: 15,
    platformFee: 5,
    discountAmount: 20,
    couponCode: "RAMPUR100",
    paymentMethod: "razorpay",
    paymentStatus: "completed",
    paymentId: "pay_rzp_test_881299",
    status: "out_for_delivery",
    deliveryPartnerId: "partner-1",
    deliveryPartnerName: "Rajesh Kumar",
    deliveryPartnerPhone: "+91 99112 23344",
    estimatedDeliveryMinutes: 12,
    createdAt: new Date(Date.now() - 15 * 60 * 1e3).toISOString(),
    timeline: [
      { status: "placed", title: "Order Placed", time: "15 mins ago", note: "Payment verified via Razorpay" },
      { status: "confirmed", title: "Store Confirmed", time: "12 mins ago", note: "Chai Samosa Corner & Verma Dairy accepted" },
      { status: "preparing", title: "Items Being Prepared", time: "8 mins ago", note: "Hot samosas packed in heat insulated pouch" },
      { status: "out_for_delivery", title: "Out for Delivery", time: "4 mins ago", note: "Rider Rajesh Kumar picked up parcel on Hero Splendor" }
    ],
    currentLocation: { lat: 26.8465, lng: 80.946 }
  }
];
var notifications = [
  {
    id: "notif-1",
    userId: "user-cust-1",
    title: "Order Out for Delivery \u{1F6B4}\u200D\u2642\uFE0F",
    message: "Rajesh Kumar is on the way with your Hot Samosas and Milk.",
    type: "order",
    date: "4 mins ago",
    read: false
  },
  {
    id: "notif-2",
    userId: "user-cust-1",
    title: "Village Monsoon Offer! \u{1F327}\uFE0F",
    message: "Use code VILLAGE50 to get 50% OFF on fresh farm dairy today.",
    type: "promo",
    date: "2 hours ago",
    read: true
  }
];
var ai = null;
if (process.env.GEMINI_API_KEY) {
  try {
    ai = new import_genai.GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  } catch (err) {
    console.warn("Gemini AI initialization warning:", err);
  }
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json({ limit: "10mb" }));
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", platform: "Smart AI Delivery Platform (Towns & Villages)" });
  });
  app.post("/api/auth/login", (req, res) => {
    const { email, role } = req.body;
    let found = users.find((u) => u.email.toLowerCase() === (email || "").toLowerCase());
    if (!found) {
      found = users.find((u) => u.role === (role || "customer")) || users[0];
    }
    res.json({ success: true, user: found, token: `jwt_simulated_${found.id}_${Date.now()}` });
  });
  app.post("/api/auth/signup", (req, res) => {
    const { name, email, phone, role } = req.body;
    const newUser = {
      id: `user-${Date.now()}`,
      name: name || "Village Customer",
      email: email || `user${Date.now()}@smartdelivery.in`,
      phone: phone || "+91 98000 00000",
      role: role || "customer",
      addresses: [],
      active: true,
      joinedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
    users.push(newUser);
    res.json({ success: true, user: newUser, token: `jwt_simulated_${newUser.id}_${Date.now()}` });
  });
  app.get("/api/products", (req, res) => {
    const { category, shopId, search, isRuralSpecial } = req.query;
    let list = [...products];
    if (category && category !== "All") {
      list = list.filter((p) => p.category === category);
    }
    if (shopId) {
      list = list.filter((p) => p.shopId === shopId);
    }
    if (isRuralSpecial === "true") {
      list = list.filter((p) => p.isRuralSpecial);
    }
    if (search) {
      const q = String(search).toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.shopName.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }
    res.json(list);
  });
  app.get("/api/products/:id", (req, res) => {
    const p = products.find((prod) => prod.id === req.params.id);
    if (!p) return res.status(404).json({ message: "Product not found" });
    res.json(p);
  });
  app.post("/api/products", (req, res) => {
    const newP = {
      id: `prod-${Date.now()}`,
      rating: 5,
      reviewsCount: 1,
      ...req.body
    };
    products.unshift(newP);
    res.json({ success: true, product: newP });
  });
  app.put("/api/products/:id", (req, res) => {
    const idx = products.findIndex((p) => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ message: "Product not found" });
    products[idx] = { ...products[idx], ...req.body };
    res.json({ success: true, product: products[idx] });
  });
  app.delete("/api/products/:id", (req, res) => {
    products = products.filter((p) => p.id !== req.params.id);
    res.json({ success: true, message: "Product deleted" });
  });
  app.get("/api/shops", (req, res) => {
    res.json(shops);
  });
  app.get("/api/categories", (req, res) => {
    res.json(INITIAL_CATEGORIES);
  });
  app.get("/api/delivery-partners", (req, res) => {
    res.json(deliveryPartners);
  });
  app.put("/api/delivery-partners/status", (req, res) => {
    const { partnerId, isOnline } = req.body;
    const partner = deliveryPartners.find((p) => p.id === partnerId || p.userId === partnerId);
    if (partner) {
      partner.isOnline = isOnline;
    }
    res.json({ success: true, partner });
  });
  app.put("/api/delivery-partners/location", (req, res) => {
    const { partnerId, lat, lng, orderId } = req.body;
    const partner = deliveryPartners.find((p) => p.id === partnerId || p.userId === partnerId);
    if (partner) {
      partner.lat = lat;
      partner.lng = lng;
    }
    if (orderId) {
      const order = orders.find((o) => o.id === orderId);
      if (order) {
        order.currentLocation = { lat, lng };
      }
    }
    res.json({ success: true });
  });
  app.get("/api/orders", (req, res) => {
    const { customerId, shopId, deliveryPartnerId } = req.query;
    let list = [...orders];
    if (customerId) list = list.filter((o) => o.customerId === customerId);
    if (shopId) list = list.filter((o) => o.shopIds.includes(String(shopId)));
    if (deliveryPartnerId) list = list.filter((o) => o.deliveryPartnerId === deliveryPartnerId);
    res.json(list);
  });
  app.get("/api/orders/:id", (req, res) => {
    const o = orders.find((ord) => ord.id === req.params.id);
    if (!o) return res.status(404).json({ message: "Order not found" });
    res.json(o);
  });
  app.post("/api/orders", (req, res) => {
    const body = req.body;
    const randomDriver = deliveryPartners.find((dp) => dp.isOnline) || deliveryPartners[0];
    const newOrder = {
      id: `ord-${Date.now()}`,
      orderNumber: `ORD-${(/* @__PURE__ */ new Date()).getFullYear()}-${Math.floor(1e3 + Math.random() * 9e3)}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      status: "placed",
      deliveryPartnerId: randomDriver ? randomDriver.id : void 0,
      deliveryPartnerName: randomDriver ? randomDriver.name : void 0,
      deliveryPartnerPhone: randomDriver ? randomDriver.phone : void 0,
      estimatedDeliveryMinutes: body.estimatedDeliveryMinutes || 15,
      timeline: [
        { status: "placed", title: "Order Placed", time: "Just now", note: `Payment via ${body.paymentMethod.toUpperCase()}` }
      ],
      currentLocation: randomDriver ? { lat: randomDriver.lat, lng: randomDriver.lng } : { lat: 26.846, lng: 80.945 },
      ...body
    };
    orders.unshift(newOrder);
    notifications.unshift({
      id: `notif-${Date.now()}`,
      userId: newOrder.customerId,
      title: `Order Placed! \u{1F6CD}\uFE0F #${newOrder.orderNumber}`,
      message: `Your order worth \u20B9${newOrder.totalAmount} has been placed successfully and sent to local shops.`,
      type: "order",
      date: "Just now",
      read: false
    });
    res.json({ success: true, order: newOrder });
  });
  app.put("/api/orders/:id/status", (req, res) => {
    const { status, note } = req.body;
    const order = orders.find((o) => o.id === req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    order.status = status;
    const titleMap = {
      confirmed: "Order Confirmed by Shops",
      preparing: "Preparing & Packing Items",
      out_for_delivery: "Out for Delivery \u{1F6B4}\u200D\u2642\uFE0F",
      delivered: "Order Delivered Successfully \u{1F389}",
      cancelled: "Order Cancelled"
    };
    order.timeline.push({
      status,
      title: titleMap[status] || status,
      time: "Just now",
      note: note || `Order updated to ${status}`
    });
    res.json({ success: true, order });
  });
  app.get("/api/coupons", (req, res) => {
    res.json(coupons);
  });
  app.get("/api/notifications", (req, res) => {
    res.json(notifications);
  });
  app.post("/api/ai/recommendations", async (req, res) => {
    const { cartItems, userId, villageOrTown } = req.body;
    const cartNames = (cartItems || []).map((c) => c.product.name).join(", ");
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: `You are an AI Smart Delivery Assistant for a rural town/village delivery app.
Current Cart: [${cartNames}]
User Town/Village: "${villageOrTown || "Rampur Town"}"
Available Products in Database: ${JSON.stringify(
            products.map((p) => ({ id: p.id, name: p.name, category: p.category, price: p.price }))
          )}

Select 3 product IDs from the database that are most frequently bought together or complementary for this user.
Provide a short 2-sentence rationale in friendly Hinglish/English explaining why these items are recommended (e.g. "Since you bought samosas, tea or jalebi completes your morning snack!").
Respond in valid JSON format:
{
  "recommendedProductIds": ["prod-7", "prod-3", "prod-1"],
  "reasoning": "string"
}`,
          config: {
            responseMimeType: "application/json"
          }
        });
        const parsed = JSON.parse(response.text || "{}");
        const recProds = products.filter((p) => (parsed.recommendedProductIds || []).includes(p.id));
        return res.json({
          recommendations: recProds.length > 0 ? recProds : products.slice(0, 3),
          reasoning: parsed.reasoning || "Smart suggestions tailored to your town daily basket."
        });
      } catch (err) {
        console.error("Gemini recommendation error:", err);
      }
    }
    const recommended = products.filter((p) => p.isPopular || p.isRuralSpecial).slice(0, 3);
    res.json({
      recommendations: recommended,
      reasoning: "Popular town favorites frequently bought together with daily essentials!"
    });
  });
  app.post("/api/ai/predict-delivery-time", async (req, res) => {
    const { distanceKm, weather, traffic, itemCount } = req.body;
    const dist = parseFloat(distanceKm) || 2.5;
    const baseMin = 8 + dist * 3 + (itemCount || 2) * 1.5;
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: `Estimate quick delivery time in minutes for a village/town delivery rider.
Distance: ${dist} km
Weather: ${weather || "Clear"}
Traffic: ${traffic || "Moderate"}
Item Count: ${itemCount || 2}

Return JSON with keys:
{
  "estimatedMinutes": number,
  "confidenceScore": number (0-100),
  "routeReasoning": "string concise explanation considering narrow town lanes or village roads"
}`,
          config: {
            responseMimeType: "application/json"
          }
        });
        const data = JSON.parse(response.text || "{}");
        return res.json({
          distanceKm: dist,
          trafficCondition: traffic || "Clear",
          weather: weather || "Clear",
          estimatedMinutes: data.estimatedMinutes || Math.round(baseMin),
          confidenceScore: data.confidenceScore || 92,
          routeReasoning: data.routeReasoning || `Optimal route calculated via main town roads with minimal lane delay.`
        });
      } catch (err) {
        console.error("Gemini delivery prediction error:", err);
      }
    }
    res.json({
      distanceKm: dist,
      trafficCondition: traffic || "Clear",
      weather: weather || "Clear",
      estimatedMinutes: Math.round(baseMin),
      confidenceScore: 90,
      routeReasoning: `Fastest route selected considering local town traffic and rider velocity.`
    });
  });
  app.post("/api/ai/demand-prediction", async (req, res) => {
    const { shopCategory, town } = req.body;
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: `Analyze inventory demand for a shop in category "${shopCategory || "Groceries"}" in town "${town || "Rampur"}".
Return JSON array of 3 categories/items:
[
  {
    "category": "Fresh Milk & Paneer",
    "predictedDemand": "Very High",
    "peakTime": "06:00 AM - 09:00 AM",
    "suggestedRestock": 50,
    "reason": "Morning tea & breakfast demand surge in rural households."
  }
]`,
          config: { responseMimeType: "application/json" }
        });
        return res.json(JSON.parse(response.text || "[]"));
      } catch (err) {
        console.error("Gemini demand prediction error:", err);
      }
    }
    res.json([
      {
        category: "Fresh Milk & Dairy",
        predictedDemand: "Very High",
        peakTime: "06:00 AM - 09:00 AM",
        suggestedRestock: 40,
        reason: "High morning tea & breakfast consumption across local town households."
      },
      {
        category: "Hot Village Snacks (Samosa/Chai)",
        predictedDemand: "High",
        peakTime: "04:00 PM - 07:00 PM",
        suggestedRestock: 60,
        reason: "Evening tea time rush in market chowks."
      },
      {
        category: "Atta & Mustard Oil",
        predictedDemand: "Normal",
        peakTime: "11:00 AM - 02:00 PM",
        suggestedRestock: 25,
        reason: "Steady weekly pantry stocking pattern."
      }
    ]);
  });
  app.post("/api/ai/sales-insights", async (req, res) => {
    const totalRev = orders.reduce((sum, o) => sum + o.totalAmount, 0);
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: `Generate executive sales insights for Smart AI Delivery Platform in rural towns.
Total Orders: ${orders.length}
Total Revenue: \u20B9${totalRev}
Shops Count: ${shops.length}

Return JSON:
{
  "totalRevenue": ${totalRev},
  "growthRate": "+24.5% vs last week",
  "topCategories": [{"category": "Fresh Milk & Dairy", "sales": 4200}, {"category": "Hot Snacks", "sales": 3100}],
  "aiSummary": "Concise paragraph on platform performance in rural town segments.",
  "recommendations": ["Expand morning dairy delivery slots", "Add 2 new riders in Shivpur village"]
}`,
          config: { responseMimeType: "application/json" }
        });
        return res.json(JSON.parse(response.text || "{}"));
      } catch (e) {
        console.error("Gemini sales insights error:", e);
      }
    }
    res.json({
      totalRevenue: totalRev,
      growthRate: "+28.4% vs last week",
      topCategories: [
        { category: "Hot Village Snacks", sales: 4800 },
        { category: "Fresh Milk & Dairy", sales: 3900 },
        { category: "Groceries & Atta", sales: 3200 }
      ],
      aiSummary: "Demand is surging for 10-15 minute quick delivery of hot snacks and fresh morning milk in Rampur Town & Shivpur village.",
      recommendations: [
        "Onboard 2 more riders for Shivpur & Navgram village coverage.",
        "Promote morning subscription packages for fresh buffalo milk.",
        "Introduce Kisan Agro seed bundle discounts for farming season."
      ]
    });
  });
  app.post("/api/ai/chatbot", async (req, res) => {
    const { message, language } = req.body;
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: `You are "Smart Delivery Saathi" - an intelligent AI assistant for a rural town & village delivery app.
Language preference: ${language || "Hinglish / English"}
User message: "${message}"

Help the user with product searches, order tracking status, delivery fees, coupons, or recommendations.
Keep response warm, concise, polite, helpful, and localized for Indian town/village users.
Return JSON:
{
  "reply": "string",
  "suggestedActions": ["Track Order", "View Dairy Items", "Apply Coupon VILLAGE50"]
}`,
          config: { responseMimeType: "application/json" }
        });
        return res.json(JSON.parse(response.text || "{}"));
      } catch (err) {
        console.error("Gemini chatbot error:", err);
      }
    }
    res.json({
      reply: `Namaste! I am your Smart Delivery Saathi. I can help you order fresh milk, hot samosas, groceries, or track your live delivery in Rampur & nearby villages. How can I assist you today?`,
      suggestedActions: ["Track Current Order", "Explore Hot Samosas", "View Coupons"]
    });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
