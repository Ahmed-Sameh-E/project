const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 49.99,
    stock: 10,
    category: "electronics",
    badge: "SALE",
  },
  {
    id: 2,
    name: "Smart Waterproof Watch",
    price: 120.0,
    stock: 5,
    category: "electronics",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 35.5,
    stock: 8,
    category: "electronics",
    badge: "",
  },
  {
    id: 4,
    name: "Smart Anti-Theft Backpack",
    price: 79.99,
    stock: 4,
    category: "accessories",
    badge: "HOT",
  },
  {
    id: 5,
    name: "Ergonomic Wireless Mouse",
    price: 25.0,
    stock: 15,
    category: "electronics",
    badge: "",
  },
  {
    id: 6,
    name: "Mechanical Gaming Keyboard",
    price: 89.99,
    stock: 6,
    category: "electronics",
    badge: "",
  },
  {
    id: 7,
    name: "Classic Leather Wallet",
    price: 19.99,
    stock: 20,
    category: "accessories",
    badge: "SALE",
  },
  {
    id: 8,
    name: "Minimalist Desk Lamp",
    price: 29.5,
    stock: 12,
    category: "lifestyle",
    badge: "",
  },
  {
    id: 9,
    name: "Stainless Steel Water Bottle",
    price: 15.0,
    stock: 25,
    category: "lifestyle",
    badge: "",
  },
  {
    id: 10,
    name: "4K Ultra HD Action Camera",
    price: 149.99,
    stock: 3,
    category: "electronics",
    badge: "NEW",
  },
  {
    id: 11,
    name: "Dual-Port Fast Charger",
    price: 18.99,
    stock: 30,
    category: "electronics",
    badge: "",
  },
  {
    id: 12,
    name: "Flexible Phone Tripod",
    price: 12.5,
    stock: 18,
    category: "accessories",
    badge: "",
  },
  {
    id: 13,
    name: "Gaming Mouse Pad (XL)",
    price: 22.0,
    stock: 14,
    category: "accessories",
    badge: "",
  },
  {
    id: 14,
    name: "Noise-Cancelling Earbuds",
    price: 65.0,
    stock: 9,
    category: "electronics",
    badge: "",
  },
  {
    id: 15,
    name: "Leather Laptop Sleeve",
    price: 34.99,
    stock: 11,
    category: "accessories",
    badge: "",
  },
  {
    id: 16,
    name: "External 1TB SSD",
    price: 110.0,
    stock: 7,
    category: "electronics",
    badge: "",
  },
  {
    id: 17,
    name: "HD Webcam with Microphone",
    price: 45.0,
    stock: 13,
    category: "electronics",
    badge: "",
  },
  {
    id: 18,
    name: "LED RGB Strip Lights",
    price: 16.99,
    stock: 40,
    category: "lifestyle",
    badge: "",
  },
  {
    id: 19,
    name: "Wireless Charging Pad",
    price: 20.0,
    stock: 22,
    category: "electronics",
    badge: "",
  },
  {
    id: 20,
    name: "Adjustable Laptop Stand",
    price: 28.5,
    stock: 16,
    category: "accessories",
    badge: "",
  },
  {
    id: 21,
    name: "Travel Neck Pillow",
    price: 14.99,
    stock: 25,
    category: "lifestyle",
    badge: "",
  },
  {
    id: 22,
    name: "Blue Light Blocking Glasses",
    price: 19.5,
    stock: 17,
    category: "lifestyle",
    badge: "",
  },
  {
    id: 23,
    name: "Digital Kitchen Scale",
    price: 13.99,
    stock: 21,
    category: "lifestyle",
    badge: "",
  },
  {
    id: 24,
    name: "Electric Coffee Mug Warmer",
    price: 24.99,
    stock: 8,
    category: "lifestyle",
    badge: "",
  },
  {
    id: 25,
    name: "Fitness Resistance Bands",
    price: 11.0,
    stock: 35,
    category: "lifestyle",
    badge: "",
  },
  {
    id: 26,
    name: "Memory Foam Seat Cushion",
    price: 32.0,
    stock: 10,
    category: "lifestyle",
    badge: "",
  },
  {
    id: 27,
    name: "Minimalist Passport Holder",
    price: 9.99,
    stock: 50,
    category: "accessories",
    badge: "",
  },
  {
    id: 28,
    name: "Portable Power Bank 20000mAh",
    price: 39.99,
    stock: 12,
    category: "electronics",
    badge: "",
  },
  {
    id: 29,
    name: "Compact Umbrella (Windproof)",
    price: 17.5,
    stock: 19,
    category: "lifestyle",
    badge: "",
  },
  {
    id: 30,
    name: "Magnetic Car Phone Mount",
    price: 8.99,
    stock: 45,
    category: "accessories",
    badge: "",
  },
];

function continueToShopping() {
  alert("Welcome to CubMart");
  let choice;
  do {
    choice = prompt("1 - Show products \n2 - Exit");
    if (choice === "1") {
      mainFunction(products);
    } else if (choice === "2") {
      alert("good bey");
    } else {
      alert("invalid input");
    }
  } while (choice !== "2");
}

function selectCategory() {
  let selected = prompt(`
    1 - All
    2 - Electronics
    3 - Accessories
    4 - Lifestyle
  `);

  switch (selected) {
    case "1":
      return "All";

    case "2":
      return "electronics";

    case "3":
      return "accessories";

    case "4":
      return "lifestyle";

    default:
      return "";
  }
}

function display(list, category) {
  let product = "";
  for (let i = 0; i < list.length; i++) {
    if (category === "All" || list[i].category === category) {
      product += `${list[i].id} - ${list[i].name} \n`;
    } else {
      continue;
    }
  }
  let selectedProduct = Number(
    prompt(`
    Choose a product:


${product}`),
  );
  return selectedProduct;
}

function findProduct(list, id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return list[i];
    }
  }
}

function mainFunction(list) {
  let category = selectCategory();
  let selectedId = display(products, category);
  let product = findProduct(products, selectedId);

  console.log(product);
}

continueToShopping();
