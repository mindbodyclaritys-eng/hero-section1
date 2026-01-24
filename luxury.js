function getStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars += "★";
    else if (rating >= i - 0.5) stars += "½";
    else stars += "☆";
  }
  return stars;
}

/* ================= IMAGE POOL (FIXED - NO BROKEN LINKS) ================= */
const imagePool = [
  { src: "https://cdn.pixabay.com/photo/2016/11/21/16/01/yacht-1846964_1280.jpg", category: "luxury" },
  { src: "https://cdn.pixabay.com/photo/2015/02/16/15/09/motor-yacht-638388_1280.jpg", category: "luxury" },
  { src: "https://cdn.pixabay.com/photo/2017/09/21/01/41/motor-yacht-2770341_1280.jpg", category: "luxury" },
  { src: "https://cdn.pixabay.com/photo/2020/04/16/14/24/yacht-5050855_1280.jpg", category: "luxury" },
  { src: "https://cdn.pixabay.com/photo/2018/06/17/17/00/yacht-3480913_1280.jpg", category: "luxury" },

  { src: "https://cdn.pixabay.com/photo/2017/10/01/18/47/trimaran-2806616_1280.jpg", category: "sailing" },
  { src: "https://cdn.pixabay.com/photo/2013/10/01/01/48/yacht-188936_1280.jpg", category: "sailing" },
  { src: "https://cdn.pixabay.com/photo/2017/06/20/21/25/yacht-2424894_1280.jpg", category: "sailing" },

  { src: "https://cdn.pixabay.com/photo/2018/06/17/17/00/boat-3480914_1280.jpg", category: "fishing" },
  { src: "https://cdn.pixabay.com/photo/2018/07/28/01/03/sport-boat-3567125_1280.jpg", category: "fishing" },
  { src: "https://cdn.pixabay.com/photo/2019/02/12/19/30/boat-3993013_1280.jpg", category: "fishing" },

  { src: "https://cdn.pixabay.com/photo/2012/06/21/06/35/ship-50445_1280.jpg", category: "ship" },
  { src: "https://cdn.pixabay.com/photo/2013/04/18/14/39/ship-105596_1280.jpg", category: "ship" },
  { src: "https://cdn.pixabay.com/photo/2024/02/05/18/14/passenger-ship-8555025_1280.jpg", category: "ship" },
  { src: "https://cdn.pixabay.com/photo/2024/01/05/13/59/ship-8489587_1280.jpg", category: "ship" }
];

const luxuryImages = [
  "https://cdn.pixabay.com/photo/2021/02/14/20/39/boat-6015792_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/03/22/20/16/yatch-7085894_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/03/22/20/16/yatch-7085888_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/09/02/09/57/royal-romance-yacht-4446932_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/02/16/15/09/motor-yacht-638388_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/09/21/01/41/motor-yacht-2770341_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/04/16/14/24/yacht-5050855_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/06/17/17/00/yacht-3480913_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/06/20/21/25/yacht-2424894_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/10/01/01/48/yacht-188936_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/01/28/10/11/body-of-water-3113205_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/06/08/02/52/yacht-801123_1280.jpg"
];

const sailingImages = [
  "https://cdn.pixabay.com/photo/2017/10/01/18/47/trimaran-2806616_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/03/01/10/37/boat-1230051_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/06/17/17/00/boat-3480914_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/07/28/01/03/sport-boat-3567125_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/02/12/19/30/boat-3993013_1280.jpg"
];


/* ================= HELPER ================= */
function getImages(count, category) {
  return imagePool.filter(img => img.category === category).slice(0, count);
}

/* ================= SHIPS DATA ================= */
const ships = [];
for (let i = 1; i <= 12; i++) {
  const imgs = [
    { src: luxuryImages[(i - 1) % luxuryImages.length] },
    { src: luxuryImages[(i) % luxuryImages.length] },
    { src: luxuryImages[(i + 1) % luxuryImages.length] }
  ];


  ships.push({
    name: `Luxury Yacht ${i}`,
    category: "luxury",
    desc: "Luxury yacht with premium facilities & comfort.",
    price: `$${(3 + i * 0.5).toFixed(1)}M`,
    rating: 4.4,
    images: imgs
  });
}

/* ================= RENDER FLEET ================= */
/* ================= RENDER FLEET ================= */
const fleetContainer = document.getElementById("fleetCards");

function renderFleet(list) {
  fleetContainer.innerHTML = "";

  list.forEach((ship, index) => {
    const card = document.createElement("div");
    card.className = "fleet-card";

    card.innerHTML = `
      <img src="${ship.images[0].src}" alt="${ship.name}">
      <div class="card-info">
        <h3>${ship.name}</h3>
        <p>${ship.category}</p>
        <p class="price">${ship.price}</p>
        <p class="stars">${getStars(ship.rating)}</p>
      </div>
    `;

    card.onclick = () => openModal(index);
    fleetContainer.appendChild(card);
  });
}

renderFleet(ships);

console.log(ships[0].images[0].src);

/* ================= FILTER ================= */
function applyFilter(cat) {
  if (cat === "all") renderFleet(ships);
  else renderFleet(ships.filter(s => s.category === cat));
}

/* ================= MODAL ================= */
function openModal(ship) {
  if (!ship || !ship.images || ship.images.length === 0) return;

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
      document
        .querySelectorAll("#thumbs img")
        .forEach(el => el.classList.remove("active"));
      t.classList.add("active");
    };

    thumbs.appendChild(t);
  });

  details.innerHTML = `
    <h2>${ship.name}</h2>
    <p>${ship.desc}</p>
    <p class="price">${ship.price}</p>
    <p class="stars">${getStars(ship.rating)}</p>
  `;

  modal.style.display = "block";
}




function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* ================= POPULAR PRODUCTS ================= */
const products = [];

for (let i = 1; i <= 8; i++) {
  products.push({
    name: `Popular Product ${i}`,
    price: `$${200 + i * 120}`,
    rating: 4.2,
    images: [
      { src: sailingImages[(i - 1) % sailingImages.length] },
      { src: sailingImages[i % sailingImages.length] },
      { src: sailingImages[(i + 1) % sailingImages.length] }
    ]
  });
}


const popularContainer = document.getElementById("popularCards");

products.forEach((p, index) => {
  const card = document.createElement("div");
  card.className = "p-card";
  card.innerHTML = `
  <img src="${p.images[0].src}">
  <div class="p-card-info">
  <h3>${p.name}</h3>
  <p class="price">${p.price}</p>
  <p class="stars">${getStars(p.rating)}</p>
  <button>Shop Now</button>
  </div>
  `;
  card.onclick = () => openPModal(index);
  popularContainer.appendChild(card);
});

function openPModal(index) {
  const modal = document.getElementById("pModal");
  const mainImg = document.getElementById("pMainImg");
  const thumbs = document.getElementById("pThumbs");
  const details = document.getElementById("pModalDetails");

  const p = products[index];
  if (!p || !p.images || p.images.length === 0) return;

  mainImg.src = p.images[0].src;
  thumbs.innerHTML = "";

  p.images.forEach(img => {
    const t = document.createElement("img");
    t.src = img.src;
    t.onclick = () => mainImg.src = img.src;
    thumbs.appendChild(t);
  });

  details.innerHTML = `
  <h2>${p.name}</h2>
  <p class="price">${p.price}</p>
  <p class="stars">${getStars(p.rating)}</p>
  `;

  modal.style.display = "block";
}




function closePModal() {
  document.getElementById("pModal").style.display = "none";
}