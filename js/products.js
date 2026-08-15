/* =========================================================================
   DK COLLECTIONS — PRODUCT CATALOG
   =========================================================================
   HOW TO ADD A NEW PRODUCT
   -------------------------------------------------------------------------
   1. Copy one whole block below, from the opening "{" to the closing "},"
   2. Paste it just above the closing "];" at the bottom of this file.
   3. Edit the text inside the quotes " " for your new product.
   4. Save the file and refresh the Products page in your browser.
   ========================================================================= */

const PRODUCTS = [
  {
    id: "p1",
    name: "Nike Cortez",
    category: "shoes",
    price: 3500,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["White", "Black"],
    description:
      "Classic Nike Cortez sneakers — timeless style, comfortable everyday wear.",
    images: ["images/nike-cortez-white.jpg", "images/nike-cortez-black.jpg"],
    badge: "",
    inStock: true,
  },
  {
    id: "p2",
    name: "Heavy Hoodies",
    category: "clothes",
    price: 2300,
    sizes: ["L", "XL", "2XL", "3XL"],
    colors: ["White", "Black", "Grey"],
    description:
      "Heavy, warm hoodie — great quality fleece, perfect for cold weather.",
    images: [
      "images/hoodie-white.jpg",
      "images/hoodie-black.jpg",
      "images/hoodie-grey.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p3",
    name: "Timberland Loafers",
    category: "shoes",
    price: 3500,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Black", "Brown"],
    description:
      "Stylish patent loafers with buckle detail — comfortable platform sole.",
    images: ["images/timberland-black.jpg", "images/timberland-brown.jpg"],
    badge: "",
    inStock: true,
  },
  {
    id: "p4",
    name: "Nike SB Dunks",
    category: "shoes",
    price: 3500,
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Black/White", "Blue/White", "Red/White", "Grey/White"],
    description:
      "Nike SB Dunk sneakers — classic two-tone design, durable and stylish.",
    images: [
      "images/sb-dunk-black-white.jpg",
      "images/sb-dunk-blue-white.jpg",
      "images/sb-dunk-red-white.jpg",
      "images/sb-dunk-grey-white.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p5",
    name: "LV Loafers",
    category: "shoes",
    price: 3500,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [],
    description:
      "Stylish LV-pattern loafers — comfortable, durable sole, sharp everyday look.",
    images: ["images/lv-loafers.jpg"],
    badge: "",
    inStock: true,
  },
  {
    id: "p6",
    name: "Nike TN",
    category: "shoes",
    price: 3500,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [],
    description:
      "Nike Air Max Plus TN sneakers, air cushion sole. Available in multiple colorways — message us on WhatsApp for current stock.",
    images: ["images/tn-1.jpg", "images/tn-2.jpg", "images/tn-3.jpg"],
    badge: "",
    inStock: true,
  },
  {
    id: "p10",
    name: "New Balance 530",
    category: "shoes",
    price: 3500,
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    colors: ["Black Suede", "Black/White", "Pink", "White/Navy"],
    description:
      "New Balance 530 sneakers — retro style, comfortable everyday wear.",
    images: [
      "images/nb-530-black-suede.jpg",
      "images/nb-530-black-white.jpg",
      "images/nb-530-pink.jpg",
      "images/nb-530-white-navy.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p11",
    name: "Adidas Terrex",
    category: "shoes",
    price: 3500,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Blue/Black", "Black", "Brown"],
    description:
      "Adidas Terrex outdoor hiking shoes — rugged grip, durable build, great for trails or everyday wear.",
    images: [
      "images/terrex-blue-black.jpg",
      "images/terrex-black.jpg",
      "images/terrex-brown.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p12",
    name: "Air Force 1 Kids Custom",
    category: "shoes",
    price: 2500,
    sizes: ["25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"],
    colors: ["Brown", "Black", "Pink", "Grey"],
    description:
      "Custom-style Air Force 1 sneakers for kids — comfortable, stylish, durable everyday shoes.",
    images: [
      "images/af1-kids-brown.jpg",
      "images/af1-kids-black.jpg",
      "images/af1-kids-pink.jpg",
      "images/af1-kids-grey.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p13",
    name: "Versace Smart Casuals",
    category: "shoes",
    price: 3500,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["Brown/Olive", "Grey/Brown", "Navy/Brown", "Black/White"],
    description:
      "Versace-style smart casual sneakers — premium look, comfortable sole, sharp everyday style.",
    images: [
      "images/versace-brown-olive.jpg",
      "images/versace-grey-brown.jpg",
      "images/versace-navy-brown.jpg",
      "images/versace-black-white.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p14",
    name: "Puma Roma Split Sneakers",
    category: "shoes",
    price: 3500,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["Green/White", "Grey/White", "Black/White", "Red/White", "Blue/White"],
    description:
      "Puma Roma split-color sneakers — classic retro look, comfortable everyday wear.",
    images: [
      "images/puma-roma-green-white.jpg",
      "images/puma-roma-grey-white.jpg",
      "images/puma-roma-black-white.jpg",
      "images/puma-roma-red-white.jpg",
      "images/puma-roma-blue-white.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p15",
    name: "Santoni Milano Smart Casuals",
    category: "shoes",
    price: 3500,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["White/Black", "White/Brown"],
    description:
      "Santoni Milano smart casual sneakers — premium leather look, sharp everyday style.",
    images: [
      "images/santoni-white-black.jpg",
      "images/santoni-white-brown.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p16",
    name: "Santoni Loafers",
    category: "shoes",
    price: 3500,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Black", "Brown", "Dark Brown"],
    description:
      "Santoni double-buckle monk strap loafers — premium leather, white sole, sharp everyday style.",
    images: [
      "images/santoni-loafers-black.jpg",
      "images/santoni-loafers-brown.jpg",
      "images/santoni-loafers-dark-brown.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p17",
    name: "6-Piece Duvet Set",
    category: "beddings",
    price: 2800,
    sizes: ["6x7"],
    colors: ["White/Multicolor Diamond", "Blue Geometric", "Gold Triangle", "Grey", "Peach/Blue Circles", "Cream/Terracotta Abstract", "Grey/Peach Rings", "Grey/White Floral", "Terracotta/Grey Chevron", "White/Purple/Teal Abstract", "Grey/Multicolor Pebbles", "Brown/Gold Marble Weave"],
    description:
      "Duvet cover with one bedsheet and four pillowcases — soft, durable fabric. More designs available on request.",
    images: [
      "images/duvet-white-diamond.jpg",
      "images/duvet-blue-geometric.jpg",
      "images/duvet-gold-triangle.jpg",
      "images/duvet-grey.jpg",
      "images/duvet-peach-blue-circles.jpg",
      "images/duvet-cream-terracotta.jpg",
      "images/duvet-grey-peach-rings.jpg",
      "images/duvet-grey-white-floral.jpg",
      "images/duvet-terracotta-chevron.jpg",
      "images/duvet-white-purple-teal.jpg",
      "images/duvet-grey-pebbles.jpg",
      "images/duvet-brown-gold-marble.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p18",
    name: "Plain Stripe Duvet Set",
    category: "beddings",
    price: 2800,
    sizes: ["6x7"],
    colors: ["White", "Grey"],
    description:
      "Hotel-style satin stripe duvet cover with pillowcases — soft, elegant, plain finish.",
    images: [
      "images/duvet-stripe-white.jpg",
      "images/duvet-stripe-grey.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p19",
    name: "WWOOR Men Watch #8886",
    category: "accessories",
    price: 3000,
    sizes: ["One Size"],
    colors: ["Gold", "Two-Tone"],
    description:
      "WWOOR men's quartz watch with day & date display, 30 ATM waterproof, stainless steel strap, high strength mineral glass. Comes in a box.",
    images: [
      "images/wwoor-gold-black.jpg",
      "images/wwoor-two-tone-black.jpg",
    ],
    badge: "New",
    inStock: true,
  },
  {
    id: "p20",
    name: "Cartier Ladies Watch",
    category: "accessories",
    price: 3000,
    sizes: ["One Size"],
    colors: ["Green", "Blue", "Black"],
    description:
      "Cartier-style ladies watch — stainless steel, water resistant, battery powered, luminous hands.",
    images: [
      "images/cartier-ladies-green.jpg",
      "images/cartier-ladies-blue.jpg",
      "images/cartier-ladies-black.jpg",
    ],
    badge: "New",
    inStock: true,
  },
  {
    id: "p21",
    name: "Designer Leather Mules",
    category: "shoes",
    price: 4500,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["Black Textured", "Black Patent"],
    description:
      "Designer leather mule slip-ons — premium leather, comfortable sole, sharp everyday style.",
    images: [
      "images/mules-black-textured.jpg",
      "images/mules-black-patent.jpg",
    ],
    badge: "New",
    inStock: true,
  },

  // 👇 Add new products above this line, just before the closing bracket.
];
