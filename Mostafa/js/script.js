// ! for displaying products in home page
// ? getting main
let main = document.querySelector("main");

function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

// ? products array
const products = [
  {
    title: "CORSAIR SABRE RGB PRO WIRELESS CHAMPION SERIES Ultra Gaming Mouse – 26,000 DPI",
    image:
      "img/base-sabre-rgb-pro-wireless-champion-Gallery-SABRE-RGB-PRO-WIRELESS-01.jpg",
    price: "3300 EG",
  },
  {
    title: "Glorious Model O- (Minus) Wireless Gaming Mouse 65G (Matte White)",
    image:
      "img/glorious_model_o_minus_wireless_white_primary_render_1000x.jpg",
    price: "5000 EG",
  },
  {
    title: "Bloody W90 Max RGB Gaming Mouse – 10,000 DPI – 2,000 Hz Report Rate (Black)",
    image:
      "img/Bloody wx90.webp",
    price: "1299 EG",
  },
  {
    title: "ENDGAME GEAR XM1 RGB Gaming Mouse (Dark Reflex)",
    image:
      "img/MX1.jpg",
    price: "2499 EG",
  },
  {
    title: "FANTECH RAIGOR II WG10 Wireless 2.4Ghz Gaming Mouse (Red)",
    image:
      "img/fantech.webp",
    price: "550 EG",
  },
  {
    title: "EKSA EM600 Gaming Mouse – Optical Sensor 12,000 DPI – Lightweight 90g – Sniper Button – Software",
    image:
      "img/EKSA-EM600-Gaming-Mouse-Optical-Sensor-12000-DPI-1-1200x1200.webp",
    price: "2599 EG",
  },
  {
    title: "FANTECH VENOM II WGC2 VIBE EDITION Wireless 2.4Ghz Gaming Mouse",
    image:
      "img/FANTECH-VENOM-II-WGC2-VIBE-EDITION-Wireless-2.4Ghz-Gaming-Mouse-With-Rechargeable-Battery-BLUE-1-1200x1200.jpg",
    price: "1500 EG",
  },
  {
    title: "Logitech G102 Light Sync RGB Gaming Mouse – 8,000 DPI (Black)",
    image:
      "img/g102.jpg",
    price: "1000 EG",
  },
  {
    title: "Logitech G305 Lightspeed Wireless Gaming Mouse (Black)",
    image:
      "img/g305.jpg",
    price: "2000 EG",
  },
  {
    title: "Razer Viper Ultimate Lightweight Wireless Gaming Mouse & RGB Charging Dock",
    image:
      "img/wir.jpg",
    price: "3200 EG",
  },
  {
    title: "Razer Basilisk V3 Customizable Ergonomic Gaming Mouse",
    image:
      "img/bas.jpg",
    price: "1190 EG",
  },
  {
    title: "Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor",
    image:
      "img/g502.jpg",
    price: "380 EG",
  },
  {
    title: "Razer Viper Mini Ultralight Gaming Mouse",
    image:
      "img/OIP.jpg",
    price: "1500 EG",
  },
  {
    title: "HP 635 Wireless Mouse – Connects with 3 devices",
    image:
      "img/hp635.jpg",
    price: "514 EG",
  },
  {
    title: "Razer Cobra Pro Wireless Gaming Mouse – 30K Optical Sensor (Black)",
    image:
      "img/cobra.webp",
    price: "800 EG",
  },
  {
    title:
      "Fantech VX7 CRYPTO Gaming Mouse – 8,000 DPI – 6 Programmable Buttons",
    image:
      "img/vx7.jpg",
    price: "1499 EG",
  },
];

// ? puting products array inside main
const productsHTML = products
  .map(
    (product) => `
  <article class="product">
    <img src="${product.image}" height="300">
    <h2>${product.title}</h2>
    <p class="price">${product.price}</p>
    <button> Add to cart </button>
    <button> Add to Favourites ❤️</button>
  </article>
`
  )
  .join("");

main.innerHTML = productsHTML;

// ! for displaying product details
const productDetailsContainer = document.querySelector(
  "#product-details-container"
);
// ! Open NavBar function definition
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}
// ! Close NavBar function definition
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}



// ? Function to display product details
function displayProductDetails(index) {
  main.innerHTML = "";

  const productDetails = products[index];
  const productDetailsHTML = `
    <div class="parent d-flex justify-content-center align-items-center">
  <div class="cover w-25 mx-5">
      <img src="${productDetails.image}" alt="">
  </div>

  <div class="image-words text-center">
      <p class="p-2 text-bg-dark rounded fw-bolder"> ${productDetails.title},</p>
      <p class="p-2 text-bg-dark rounded fw-bolder"> price:${productDetails.price}</p>
      <button class="my-5 tex">أضف إلى السلة</button>
      <button class="my-5">أضف إلى المفضلة ❤️</button>
  </div>
</div>
  `;

  productDetailsContainer.innerHTML = productDetailsHTML;
}

// ? adding event listner to every product
let eachProduct = Array.from(document.querySelectorAll("main article.product"));

eachProduct.forEach((product, index) => {
  product.addEventListener("click", async () => {
    // console.log(index);
    displayProductDetails(index);
  });
});
