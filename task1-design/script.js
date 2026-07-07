let cart = JSON.parse(localStorage.getItem("cubmart_cart")) || [];
let currentCategory = "all";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 49.99,
    stock: 10,
    img: "../imgs/PremiumWirelessHeadphones.jpg",
    category: "electronics",
    badge: "SALE",
  },
  {
    id: 2,
    name: "Smart Waterproof Watch",
    price: 120.0,
    stock: 5,
    img: "../imgs/SmartWaterproofWatch.jpg",
    category: "electronics",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 35.5,
    stock: 8,
    img: "../imgs/PortableBluetoothSpeaker.webp",
    category: "electronics",
    badge: "",
  },
  {
    id: 4,
    name: "Smart Anti-Theft Backpack",
    price: 79.99,
    stock: 4,
    img: "../imgs/SmartAnti-TheftBackpack.webp",
    category: "accessories",
    badge: "HOT",
  },
  {
    id: 5,
    name: "Ergonomic Wireless Mouse",
    price: 25.0,
    stock: 15,
    img: "../imgs/ErgonomicWirelessMouse.webp",
    category: "electronics",
    badge: "",
  },
  {
    id: 6,
    name: "Mechanical Gaming Keyboard",
    price: 89.99,
    stock: 6,
    img: "../imgs/MechanicalGamingKeyboard.webp",
    category: "electronics",
    badge: "",
  },
  {
    id: 7,
    name: "Classic Leather Wallet",
    price: 19.99,
    stock: 20,
    img: "../imgs/ClassicLeatherWallet.webp",
    category: "accessories",
    badge: "SALE",
  },
  {
    id: 8,
    name: "Minimalist Desk Lamp",
    price: 29.5,
    stock: 12,
    img: "../imgs/MinimalistDeskLamp.webp",
    category: "lifestyle",
    badge: "",
  },
  {
    id: 9,
    name: "Stainless Steel Water Bottle",
    price: 15.0,
    stock: 25,
    img: "../imgs/StainlessSteelWaterBottle.webp",
    category: "lifestyle",
    badge: "",
  },
  {
    id: 10,
    name: "4K Ultra HD Action Camera",
    price: 149.99,
    stock: 3,
    img: "../imgs/4KUltraHDActionCamera.webp",
    category: "electronics",
    badge: "NEW",
  },
  {
    id: 11,
    name: "Dual-Port Fast Charger",
    price: 18.99,
    stock: 30,
    img: "../imgs/Dual-PortFastCharger.webp",
    category: "electronics",
    badge: "",
  },
  {
    id: 12,
    name: "Flexible Phone Tripod",
    price: 12.5,
    stock: 18,
    img: "../imgs/FlexiblePhoneTripod.webp",
    category: "accessories",
    badge: "",
  },
  {
    id: 13,
    name: "Gaming Mouse Pad (XL)",
    price: 22.0,
    stock: 14,
    img: "../imgs/GamingMousePad(XL).webp",
    category: "accessories",
    badge: "",
  },
  {
    id: 14,
    name: "Noise-Cancelling Earbuds",
    price: 65.0,
    stock: 9,
    img: "../imgs/NoiseCancellingEarbuds.webp",
    category: "electronics",
    badge: "",
  },
  {
    id: 15,
    name: "Leather Laptop Sleeve",
    price: 34.99,
    stock: 11,
    img: "../imgs/LeatherLaptopSleeve.webp",
    category: "accessories",
    badge: "",
  },
  {
    id: 16,
    name: "External 1TB SSD",
    price: 110.0,
    stock: 7,
    img: "../imgs/External1TBSSD.webp",
    category: "electronics",
    badge: "",
  },
  {
    id: 17,
    name: "HD Webcam with Microphone",
    price: 45.0,
    stock: 13,
    img: "../imgs/HDWebcamWithMicrophone.webp",
    category: "electronics",
    badge: "",
  },
  {
    id: 18,
    name: "LED RGB Strip Lights",
    price: 16.99,
    stock: 40,
    img: "../imgs/LEDRGBStripLights.webp",
    category: "lifestyle",
    badge: "",
  },
  {
    id: 19,
    name: "Wireless Charging Pad",
    price: 20.0,
    stock: 22,
    img: "../imgs/WirelessChargingPad.webp",
    category: "electronics",
    badge: "",
  },
  {
    id: 20,
    name: "Adjustable Laptop Stand",
    price: 28.5,
    stock: 16,
    img: "../imgs/AdjustableLaptopStand.webp",
    category: "accessories",
    badge: "",
  },
  {
    id: 21,
    name: "Travel Neck Pillow",
    price: 14.99,
    stock: 25,
    img: "../imgs/TravelNeckPillow.webp",
    category: "lifestyle",
    badge: "",
  },
  {
    id: 22,
    name: "Blue Light Blocking Glasses",
    price: 19.5,
    stock: 17,
    img: "../imgs/BlueLightBlockingGlasses.webp",
    category: "lifestyle",
    badge: "",
  },
  {
    id: 23,
    name: "Digital Kitchen Scale",
    price: 13.99,
    stock: 21,
    img: "../imgs/DigitalKitchenScale.webp",
    category: "lifestyle",
    badge: "",
  },
  {
    id: 24,
    name: "Electric Coffee Mug Warmer",
    price: 24.99,
    stock: 8,
    img: "../imgs/ElectricCoffeeMugWarmer.webp",
    category: "lifestyle",
    badge: "",
  },
  {
    id: 25,
    name: "Fitness Resistance Bands",
    price: 11.0,
    stock: 35,
    img: "../imgs/FitnessResistanceBands.webp",
    category: "lifestyle",
    badge: "",
  },
  {
    id: 26,
    name: "Memory Foam Seat Cushion",
    price: 32.0,
    stock: 10,
    img: "../imgs/MemoryFoamSeatCushion.webp",
    category: "lifestyle",
    badge: "",
  },
  {
    id: 27,
    name: "Minimalist Passport Holder",
    price: 9.99,
    stock: 50,
    img: "../imgs/MinimalistPassportHolder.webp",
    category: "accessories",
    badge: "",
  },
  {
    id: 28,
    name: "Portable Power Bank 20000mAh",
    price: 39.99,
    stock: 12,
    img: "../imgs/PortablePowerBank20000mAh.webp",
    category: "electronics",
    badge: "",
  },
  {
    id: 29,
    name: "Compact Umbrella (Windproof)",
    price: 17.5,
    stock: 19,
    img: "../imgs/CompactUmbrella(Windproof).webp",
    category: "lifestyle",
    badge: "",
  },
  {
    id: 30,
    name: "Magnetic Car Phone Mount",
    price: 8.99,
    stock: 45,
    img: "../imgs/MagneticCarPhoneMount.webp",
    category: "accessories",
    badge: "",
  },
];

function showProducts(list) {
  const container = document.getElementById("products-container");
  if (!container) return;

  let html = "";

  if (list.length === 0) {
    html += `<p class="text-center text-muted">No products found here.</p>`;
    container.innerHTML = html;
    return;
  }

  list.forEach((product) => {
    let badgeHTML = "";
    let badgeColor = "";
    switch (product.badge) {
      case "SALE":
        badgeColor = "bg-danger";
        break;

      case "NEW":
        badgeColor = "bg-success";
        break;

      case "HOT":
        badgeColor = "bg-warning text-dark";
        break;
    }
    if (product.badge) {
      badgeHTML = `<span class="card-badge ${badgeColor}">
        ${product.badge}
    </span>`;
    }

    let outOfStockHtml = "";
    if (product.stock === 0) {
      outOfStockHtml = `<span class="card-out-of-stock">Out of stock</span>`;
    }

    html += `
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div class="card p-3 h-100 shadow-sm border text-center d-flex flex-column justify-content-between overflow-hidden">
          
          <div class="product-img-holder mb-3 position-relative">
            ${badgeHTML}
            ${outOfStockHtml}
            <img src="${product.img}" alt="${product.name}">
          </div>
          
          <div class="card-body p-0 d-flex flex-column justify-content-between">
            <h5 class="card-title fs-6 fw-bold text-dark mb-2">${product.name}</h5>
            <p class="card-text text-success fw-bold mb-1">$${product.price.toFixed(2)}</p>
            <p class="text-muted small mb-3">Stock: ${product.stock}</p>
            <button class="btn btn-warning w-100 fw-bold text-dark mt-auto" onclick="addItemToCart(${product.id})">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function filterProducts(category, buttonElement) {
  currentCategory = category;

  const buttons = document.querySelectorAll("#filterTabs .nav-link");
  buttons.forEach((btn) => btn.classList.remove("active"));

  if (buttonElement) {
    buttonElement.classList.add("active");
  }

  if (category === "all") {
    showProducts(products);
  } else {
    const filtered = products.filter((p) => p.category === category);
    showProducts(filtered);
  }
}

function addItemToCart(productId) {
  const product = products.find((p) => p.id === productId);

  if (product && product.stock > 0) {
    cart.push({ ...product });
    product.stock--;

    localStorage.setItem("cubmart_cart", JSON.stringify(cart));
    updateCartCount();

    if (currentCategory === "all") {
      showProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === currentCategory);
      showProducts(filtered);
    }
  } else {
    alert("Sorry, this item is out of stock!");
  }
}

function updateCartCount() {
  const badge = document.querySelector(".navbar .badge");
  if (badge) {
    badge.textContent = cart.length;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
  });

  cart.forEach((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    if (product) {
      product.stock--;
    }
  });

  showProducts(products);
  updateCartCount();
});
