/* =========================================================================
   DK COLLECTIONS — PRODUCT CATALOG
   =========================================================================
   HOW TO ADD A NEW PRODUCT
   -------------------------------------------------------------------------
   1. Copy one whole block below, from the opening "{" to the closing "},"
   2. Paste it just above the closing "];" at the bottom of this file.
   3. Edit the text inside the quotes " " for your new product.
   4. Save the file and refresh the Products page in your browser.
   Full field guide: see the version of this file in your project README.
   ========================================================================= */

const PRODUCTS = [
  {
    id: "p1",
    name: "Nike Cortez",
    category: "shoes",
    price: 2500,
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
    price: 1600,
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
    price: 2800,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Black", "Brown"],
    description:
      "Stylish patent loafers with buckle detail — comfortable platform sole.",
    images: [
      "images/timberland-black.jpg",
      "images/timberland-brown.jpg",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p4",
    name: "Nike SB Dunks",
    category: "shoes",
    price: 2500,
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
    price: 2700,
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
    price: 2600,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [],
    description:
      "Nike Air Max Plus TN sneakers, air cushion sole. Available in multiple colorways — message us on WhatsApp for current stock.",
    images: [
      "images/tn-1.jpg",
      "images/tn-2.jpg",
      "images/tn-3.jpg",
    ],
    badge: "",
    inStock: true,
  },

  // 👇 Add new products above this line, just before the closing bracket.
];
