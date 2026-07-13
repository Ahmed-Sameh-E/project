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
const originalProducts = structuredClone(products);
const promoCodes = [
  { code: "CUBMART", amount: 20 },
  { code: "CUB50", amount: 50 },
];
const cart = [];

function restartProducts() {
  for (let i = 0; i < products.length; i++) {
    products[i].stock = originalProducts[i].stock;
  }
}

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
        alert("good bye");
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

      0 - Back
      1 - All
      2 - Electronics
      3 - Accessories
      4 - Lifestyle
    `);

    switch (selected) {
      case "0":
        return undefined;

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
  let page = 0;
  let pageSize = 10;
  let filtered = [];

  for (let i = 0; i < list.length; i++) {
    if (category === "All" || list[i].category === category) {
      filtered.push(list[i]);
    }
  }

  while (true) {
    let product = "0 - Back\n\n";
    let start = page * pageSize;
    let end = Math.min(start + pageSize, filtered.length);
    for (let i = start; i < end; i++) {
      product += `${filtered[i].id} - ${filtered[i].name}\n`;
    }
    if (page > 0) {
      product += "\n98 - Previous Page";
    }
    if (end < filtered.length) {
      product += "\n99 - Next Page";
    }
    let choice = Number(prompt(product));
    if (choice === 0) {
      return 0;
    }
    if (choice === 99 && end < filtered.length) {
      page++;
      continue;
    }
    if (choice === 98 && page > 0) {
      page--;
      continue;
    }
    let found = findProduct(filtered, choice);
    if (found) return choice;
    alert("Invalid product ID");
  }
}

function findProduct(list, id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return list[i];
    }
  }
  return null;
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
      case "2":
        return "2";
      case "3":
        return "3";
      default:
        alert("invalid input");
        break;
    }
  } while (choice !== "1" && choice !== "2" && choice !== "3");
}

function viewCart(list) {
  while (true) {
    if (list.length === 0) {
      alert("Your Cart is Empty");
      return;
    }
    let cartDetails = "Your Cart : \n";
    let totalPrice = 0;
    let groupedCart = [];
    let checkedIds = [];
    for (let i = 0; i < list.length; i++) {
      let count = 0;
      if (checkedIds.includes(list[i].id)) {
        continue;
      }
      for (let j = 0; j < list.length; j++) {
        if (list[j].id === list[i].id) {
          count++;
        }
      }
      checkedIds.push(list[i].id);
      groupedCart.push({
        product: list[i],
        count: count,
      });
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
      2 - Remove an item
      3 - Back`);

      switch (choice) {
        case "1":
          buy(list);
          return;
        case "2":
          removeItemFromCart(list, groupedCart);
          break;
        case "3":
        case null:
          return;
        default:
          break;
      }
    } while (choice !== "1" && choice !== "2" && choice !== "3");
  }
}

function removeItemFromCart(cart, list) {
  while (true) {
    let removeItemText = "    Choose an item to remove: \n0 - Back";
    for (let i = 0; i < list.length; i++) {
      removeItemText += `\n ${i + 1} - ${list[i].product.name}  x${list[i].count}  (${list[i].product.price}$)`;
    }

    let userSelection = Number(prompt(removeItemText));
    if (userSelection === 0) {
      return;
    }

    if (
      isNaN(userSelection) ||
      userSelection < 1 ||
      userSelection > list.length
    ) {
      alert("Invalid choice");
      continue;
    }

    let selectedGroup = list[userSelection - 1];
    let targetProduct = selectedGroup.product;
    let maxAvailable = selectedGroup.count;

    let quantityToRemove = Number(
      prompt(
        `How many units do you want to remove? (Max: ${maxAvailable}) \n0 - Back`,
      ),
    );
    if (quantityToRemove === 0) {
      continue;
    }

    if (
      Number.isInteger(quantityToRemove) &&
      quantityToRemove > 0 &&
      quantityToRemove <= maxAvailable
    ) {
      let removedCount = 0;
      for (let i = cart.length - 1; i >= 0; i--) {
        if (cart[i].id === targetProduct.id) {
          cart[i].stock++;
          cart.splice(i, 1);
          removedCount++;
        }

        if (removedCount === quantityToRemove) {
          break;
        }
      }
      alert(
        `${quantityToRemove} units of "${targetProduct.name}" removed successfully.`,
      );
      return;
    } else {
      alert("Invalid quantity!");
    }
  }
}

function calculateSubtotal(groupedCart) {
  let subtotal = 0;
  for (let i = 0; i < groupedCart.length; i++) {
    subtotal += groupedCart[i].product.price * groupedCart[i].count;
  }
  return subtotal;
}

function getDiscountRate(subtotal) {
  if (subtotal > 1000) {
    return 0.15;
  } else if (subtotal > 600) {
    return 0.1;
  } else if (subtotal > 300) {
    return 0.05;
  } else {
    return 0;
  }
}

function applyPromoCode(code) {
  if (!code) {
    return null;
  }
  let cleanCode = code.toUpperCase().trim();
  return promoCodes.find(function (item) {
    return item.code === cleanCode;
  });
}

function calculateTax(amount) {
  return amount * 0.14;
}

function generateReceipt(groupedCart, subtotal, discountRate, promo, tax) {
  let tierDiscount = subtotal * discountRate;
  let promoDiscount = 0;
  let appliedPromoName = "None";

  if (promo) {
    promoDiscount = promo.amount;
    appliedPromoName = `${promo.code} (-${promo.amount}$)`;
  }

  let totalDiscount = tierDiscount + promoDiscount;
  if (totalDiscount > subtotal) {
    totalDiscount = subtotal;
  }

  let finalTotal = subtotal - totalDiscount + tax;

  let receipt = "========== Receipt ==========\n";
  for (let i = 0; i < groupedCart.length; i++) {
    let item = groupedCart[i];
    let itemTotal = item.product.price * item.count;
    receipt += `\n ${item.product.name}\n   x${item.count} X ${item.product.price.toFixed(2)}$ = ${itemTotal.toFixed(2)}$\n`;
  }
  receipt += "\n==============================";
  receipt += `\nSubtotal       : ${subtotal.toFixed(2)}$`;
  receipt += `\nTier Discount  : -${tierDiscount.toFixed(2)}$ (${discountRate * 100}%)`;
  receipt += `\nPromo Code     : ${appliedPromoName}`;
  receipt += `\nPromo Discount : -${promoDiscount.toFixed(2)}$`;
  receipt += `\nTax (14%)      : ${tax.toFixed(2)}$`;
  receipt += "\n==============================";
  receipt += `\nTOTAL PAID     : ${finalTotal.toFixed(2)}$`;
  receipt += "\n==============================";
  receipt += "\nThank you for shopping with CubMart ❤️";

  return receipt;
}

function buy(cart) {
  let groupedCart = [];
  let checkedIds = [];

  for (let i = 0; i < cart.length; i++) {
    if (checkedIds.includes(cart[i].id)) {
      continue;
    }
    let count = 0;
    for (let j = 0; j < cart.length; j++) {
      if (cart[j].id === cart[i].id) {
        count++;
      }
    }
    checkedIds.push(cart[i].id);
    groupedCart.push({
      product: cart[i],
      count: count,
    });
  }

  let subtotal = calculateSubtotal(groupedCart);

  let discountRate = getDiscountRate(subtotal);

  let promoInput = prompt("Enter promo code : \n0 - Skip");
  let promo = null;
  if (promoInput && promoInput.trim() !== "0") {
    promo = applyPromoCode(promoInput);
    if (promo) {
      alert(`Promo code applied successfully! ${promo.amount}$ OFF`);
    } else {
      alert("Invalid Promo Code! Proceeding without promo discount.");
    }
  }

  let tierDiscount = subtotal * discountRate;
  let promoDiscount = promo ? promo.amount : 0;
  let taxableAmount = subtotal - (tierDiscount + promoDiscount);
  if (taxableAmount < 0) taxableAmount = 0;

  let tax = calculateTax(taxableAmount);

  let receipt = generateReceipt(
    groupedCart,
    subtotal,
    discountRate,
    promo,
    tax,
  );

  console.log(receipt);
  alert(receipt);
  cart.length = 0;
  restartProducts();
}

function mainFunction(list) {
  let step = 1;
  let category;
  let selectedId;
  let product;
  let choice;

  while (step > 0) {
    switch (step) {
      case 1:
        category = selectCategory();
        if (category === undefined) {
          step = 0;
        } else {
          step = 2;
        }
        break;

      case 2:
        selectedId = display(list, category);
        if (selectedId === 0) {
          step = 1;
        } else {
          product = findProduct(list, selectedId);
          step = 3;
        }
        break;

      case 3:
        choice = displayOneProduct(product);
        if (choice === "1") {
          if (product.stock > 0) {
            let quantityToAdd = Number(
              prompt(
                `Enter quantity to add (Available in stock: ${product.stock}): \n0 - Back`,
              ),
            );
            if (quantityToAdd === 0) {
              continue;
            }
            if (
              Number.isInteger(quantityToAdd) &&
              quantityToAdd > 0 &&
              quantityToAdd <= product.stock
            ) {
              for (let i = 0; i < quantityToAdd; i++) {
                cart.push(product);
              }
              product.stock -= quantityToAdd;
              alert(
                `${quantityToAdd} units of "${product.name}" added successfully!`,
              );
              step = 2;
            } else {
              alert("Invalid quantity or not enough stock!");
            }
          } else {
            alert("Sorry, this item is out of stock!");
          }
          step = 2;
        } else if (choice === "2") {
          step = 2;
        } else if (choice === "3") {
          step = 0;
        }
        break;

      default:
        break;
    }
  }
}

do {
  continueToShopping();
} while (confirm("Place another order ?"));
