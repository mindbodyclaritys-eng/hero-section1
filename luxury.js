/* ================= STAR RATING ================= */
function getStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars += "★";
    else if (rating >= i - 0.5) stars += "½";
    else stars += "☆";
  }
  return stars;
}

/* ================= IMAGES ================= */

// 🔹 LUXURY (12)
const luxuryImages = [
  "https://cdn.pixabay.com/photo/2021/02/14/20/39/boat-6015792_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/03/22/20/16/yatch-7085894_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/03/22/20/16/yatch-7085888_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/06/17/17/00/boat-3480914_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/09/02/09/57/royal-romance-yacht-4446932_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/02/16/15/09/motor-yacht-638388_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/09/21/01/41/motor-yacht-2770341_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/04/16/14/24/yacht-5050855_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/10/01/01/48/yacht-188936_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/06/17/17/00/yacht-3480913_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/03/01/10/37/boat-1230051_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/04/16/14/24/yacht-5050855_1280.jpg"
];

// 🔹 POPULAR (8)
const popularImages = [
  "https://cdn.pixabay.com/photo/2018/01/28/10/11/body-of-water-3113205_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/06/08/02/52/yacht-801123_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/06/27/17/59/yacht-823681_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/06/20/21/25/yacht-2424894_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/07/28/01/03/sport-boat-3567125_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/04/18/14/39/ship-105596_1280.jpg",
  "https://cdn.pixabay.com/photo/2012/06/21/06/35/ship-50445_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/01/05/13/59/ship-8489587_1280.jpg"
];

/* ================= LUXURY DATA ================= */
const luxuryShips = luxuryImages.map((img, index) => ({
  name: `Luxury Yacht ${index + 1}`,
  price: `$${800 + index * 150}`,
  rating: 5,
  images: [
    { src: img },
    { src: luxuryImages[(index + 1) % luxuryImages.length] },
    { src: luxuryImages[(index + 2) % luxuryImages.length] }
  ]
}));

/* ================= RENDER LUXURY ================= */
const luxuryContainer = document.getElementById("fleetCards");

luxuryShips.forEach(ship => {
  const card = document.createElement("div");
  card.className = "fleet-card";

  card.innerHTML = `
    <img src="${ship.images[0].src}" alt="${ship.name}">
    <div class="card-info">
      <h3>${ship.name}</h3>
      <p>Premium Class</p>
      <p class="price">${ship.price}</p>
      <p class="stars">${getStars(ship.rating)}</p>
    </div>
  `;

  card.onclick = () => openModal(ship);
  luxuryContainer.appendChild(card);
});

/* ================= POPULAR DATA ================= */
const popularProducts = popularImages.map((img, index) => ({
  name: `Popular Yacht ${index + 1}`,
  price: `$${400 + index * 90}`,
  rating: 4.3,
  images: [
    { src: img },
    { src: popularImages[(index + 1) % popularImages.length] },
    { src: popularImages[(index + 2) % popularImages.length] }
  ]
}));

/* ================= RENDER POPULAR ================= */
const popularContainer = document.querySelector(".popular-cards");

popularProducts.forEach(product => {
  const card = document.createElement("div");
  card.className = "p-card";

  card.innerHTML = `
    <img src="${product.images[0].src}" alt="${product.name}">
    <div class="p-card-info">
      <h4>${product.name}</h4>
      <p class="price">${product.price}</p>
      <button>View</button>
    </div>
  `;

  card.onclick = () => openPModal(product);
  popularContainer.appendChild(card);
});

/* ================= LUXURY MODAL ================= */
function openModal(ship) {
  const modal = document.getElementById("modal");
  const mainImg = document.getElementById("mainImg");
  const thumbs = document.getElementById("thumbs");
  const details = document.getElementById("modalDetails");

  mainImg.src = ship.images[0].src;
  thumbs.innerHTML = "";

  ship.images.forEach((img, i) => {
    const t = document.createElement("img");
    t.src = img.src;
    if (i === 0) t.classList.add("active");

    t.onclick = () => {
      mainImg.src = img.src;
      document.querySelectorAll("#thumbs img").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
    };

    thumbs.appendChild(t);
  });

  details.innerHTML = `
    <h2>${ship.name}</h2>
    <p class="price">${ship.price}</p>
    <p class="stars">${getStars(ship.rating)}</p>
  `;

  modal.style.display = "flex";
}

/* ================= POPULAR MODAL ================= */
function openPModal(product) {
  const modal = document.getElementById("pModal");
  const mainImg = document.getElementById("pMainImg");
  const thumbs = document.getElementById("pThumbs");
  const details = document.getElementById("pModalDetails");

  mainImg.src = product.images[0].src;
  thumbs.innerHTML = "";

  product.images.forEach(img => {
    const t = document.createElement("img");
    t.src = img.src;
    t.onclick = () => mainImg.src = img.src;
    thumbs.appendChild(t);
  });

  details.innerHTML = `
    <h2>${product.name}</h2>
    <p class="price">${product.price}</p>
    <p class="stars">${getStars(product.rating)}</p>
  `;

  modal.style.display = "flex";
}

/* ================= CLOSE MODALS ================= */
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function closePModal() {
  document.getElementById("pModal").style.display = "none";
}

/* expose */
window.closeModal = closeModal;
window.closePModal = closePModal;
