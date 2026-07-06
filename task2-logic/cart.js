let cart = JSON.parse(localStorage.getItem("cubmart_cart")) || [];
let promoApplied = false;
const VALID_PROMO = "CubMart";
const PROMO_DISCOUNT_VALUE = 10.00;
const TAX_RATE = 0.14;

function calculateSubtotal() {
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price;
  });
  return subtotal;
}

function calculateTieredDiscount(subtotal) {
  if (subtotal >= 200) {
    return subtotal * 0.15;
  } else if (subtotal >= 100) {
    return subtotal * 0.10;
  }
  return 0;
}

function calculateTax(amountAfterDiscounts) {
  return amountAfterDiscounts * TAX_RATE;
}

function displayCartItems() {
  const container = document.getElementById("cart-items-container");
  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5">
        <i class="fa-solid fa-basket-shopping fs-1 text-muted mb-3"></i>
        <p class="text-muted fs-5">Your cart is empty.</p>
        <a href="../task1-design/index.html" class="btn btn-warning fw-bold mt-2">Shop Now</a>
      </div>
    `;
    updateSummaryDisplay(0, 0, 0, 0);
    return;
  }

  cart.forEach((product, index) => {
    container.innerHTML += `
      <div class="cart-item-card p-3 rounded-3 mb-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <img src="${product.img}" alt="${product.name}" class="cart-item-img" style="width: 80px; height: 80px; object-fit: contain;">
          <div>
            <h5 class="fs-6 fw-bold mb-1 text-dark">${product.name}</h5>
            <p class="text-success fw-bold mb-0">$${product.price.toFixed(2)}</p>
          </div>
        </div>
        <button class="btn btn-outline-danger btn-sm rounded-circle" onclick="removeFromCart(${index})">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  });

  runPricingEngine();
}

function runPricingEngine() {
  const subtotal = calculateSubtotal();
  const volumeDiscount = calculateTieredDiscount(subtotal);
  
  let promoDiscount = 0;
  if (promoApplied) {
    promoDiscount = PROMO_DISCOUNT_VALUE;
  }

  let totalAfterDiscounts = subtotal - volumeDiscount - promoDiscount;
  if (totalAfterDiscounts < 0) totalAfterDiscounts = 0;

  const tax = calculateTax(totalAfterDiscounts);
  const finalTotal = totalAfterDiscounts + tax;

  updateSummaryDisplay(subtotal, volumeDiscount, tax, finalTotal);
}

function applyPromo() {
  const input = document.getElementById("promo-input").value.trim();
  const msgElement = document.getElementById("promo-message");

  if (cart.length === 0) {
    alert("Add items to your cart first!");
    return;
  }

  if (input === VALID_PROMO) {
    promoApplied = true;
    msgElement.textContent = "Promo Code Applied (-$10.00)";
    msgElement.className = "small mt-1 fw-bold text-success";
  } else {
    promoApplied = false;
    msgElement.textContent = "Invalid Code!";
    msgElement.className = "small mt-1 fw-bold text-danger";
  }
  runPricingEngine();
}

function updateSummaryDisplay(subtotal, discount, tax, total) {
  document.getElementById("items-count").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("discount-amount").textContent = `-$${discount.toFixed(2)}`;
  document.getElementById("tax-amount").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("total-price").textContent = `$${total.toFixed(2)}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cubmart_cart", JSON.stringify(cart));
  displayCartItems();
}

function generateConsoleReceipt(subtotal, discount, promo, tax, final) {
  console.log("=== CUBMART RECEIPT ===");
  console.log("Date: " + new Date().toLocaleString());
  console.log("----------------------");
  
  cart.forEach((item, idx) => {
    console.log((idx + 1) + ". " + item.name + " - $" + item.price.toFixed(2));
  });
  
  console.log("----------------------");
  console.log("Subtotal: $" + subtotal.toFixed(2));
  console.log("Discount: -$" + discount.toFixed(2));
  console.log("Promo: -$" + promo.toFixed(2));
  console.log("Tax: $" + tax.toFixed(2));
  console.log("----------------------");
  console.log("TOTAL: $" + final.toFixed(2));
  console.log("=======================");
}

function processCheckoutOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const subtotal = calculateSubtotal();
  const volumeDiscount = calculateTieredDiscount(subtotal);
  const promoDiscount = promoApplied ? PROMO_DISCOUNT_VALUE : 0;
  const tax = calculateTax(subtotal - volumeDiscount - promoDiscount);
  const finalTotal = (subtotal - volumeDiscount - promoDiscount) + tax;

  generateConsoleReceipt(subtotal, volumeDiscount, promoDiscount, tax, finalTotal);

  alert("Order completed! Check your console for the receipt.");
  cart = [];
  promoApplied = false;
  localStorage.removeItem("cubmart_cart");
  displayCartItems();
}

window.onload = displayCartItems;