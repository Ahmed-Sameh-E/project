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

const cart = [];

function continueToShopping() {
  alert("Welcome to CubMart");
  let choice;
  do {
    choice = prompt("1 - Show products \n2 - Show cart \n3 - Exit");

    switch (choice) {
      case "1":
        mainFunction(products);
        break;
      case "2":
        viewCart(cart);
        break;
      case "3":
        alert("good");
        break;
      default:
        alert("invalid input");
        break;
    }
  } while (choice !== "3");
}

function selectCategory() {
  let selected;
  do {
    selected = prompt(`
      Choose category :

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
        alert("invalid input");
    }
  } while (
    selected !== "1" &&
    selected !== "2" &&
    selected !== "3" &&
    selected !== "4"
  );
}

function display(list, category) {
  let product = "  0 - Back\n";
  for (let i = 0; i < list.length; i++) {
    if (category === "All" || list[i].category === category) {
      product += `${list[i].id} - ${list[i].name}          ${list[i].badge}\n`;
    } else {
      continue;
    }
  }
  let selectedProduct;
  do {
    selectedProduct = Number(
      prompt(`
Choose a product:

${product}
`),
    );

    if (selectedProduct === 0) {
      return 0;
    }

    let found = findProduct(list, selectedProduct);
    if (found && (category === "All" || found.category === category)) {
      return selectedProduct;
    }
      alert("Invalid product ID");
  } while (true);

  return selectedProduct;
}

function findProduct(list, id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return list[i];
    }
  }
}

function displayOneProduct(product) {
  let choice;
  do {
    choice = prompt(`
  Name : ${product.name}
  Price : ${product.price}
  Stock : ${product.stock}${product.badge ? `\n  Badge : ${product.badge}` : ""}
  ===============================
  1 - Add to cart
  2 - Back
  3 - Exit
`);

    switch (choice) {
      case "1":
        return "1";
        break;
      case "2":
        return "2";
        break;
      case "3":
        return "3";
        break;
      default:
        alert("invalid input");
        break;
    }
    return choice;
  } while (choice !== "1" && choice !== "2" && choice !== "3");
}

function viewCart(list) {
  if (list.length === 0) {
    alert("Your Cart is Empty");
    return;
  }
  let cartDetails = "Your Cart : \n";
  let totalPrice = 0;
  let moreThanOne = [];
  for (let i = 0; i < list.length; i++) {
    let count = 0;
    if (moreThanOne.includes(list[i].id)) {
      continue;
    }
    for (let j = 0; j < list.length; j++) {
      if (list[j].id === list[i].id) {
        count++;
      }
    }

    moreThanOne.push(list[i].id);
    let itemTotal = list[i].price * count;
    cartDetails += `\n - ${list[i].name} x${count} (${itemTotal.toFixed(2)}$)`;
    totalPrice += itemTotal;
  }
  let choice;
  do {
    choice = prompt(`${cartDetails}
==========================
    Total price = ${totalPrice.toFixed(2)}$
    
    1 - Buy
    2 - Back`);

    switch (choice) {
      case "1":
        buy();
        break;
      case "2":
        break;
      default:
        break;
    }
  } while (choice !== "1" && choice !== "2");

  return choice;
}

function buy() {}

function mainFunction(list) {
  let category = selectCategory();
  let selectedId = display(list, category);
  let product = findProduct(list, selectedId);
  

  if (selectedId === 0) {
    return; 
  } else {
    let choice = displayOneProduct(product);
  }

  if (!product) {
    alert("Product not found!");
    return;
  }

  if (product.stock > 0) {
    alert("Product added to cart successfully!");
    cart.push(product);
    product.stock--;
  } else {
    alert("Sorry, this item is out of stock!");
  }
}

continueToShopping();
