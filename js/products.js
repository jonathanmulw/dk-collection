/* =========================================================================
   DK COLLECTIONS — PRODUCT CATALOG
   =========================================================================
   HOW TO ADD A NEW PRODUCT
   -------------------------------------------------------------------------
   1. Copy one whole block below, from the opening "{" to the closing "},"
   2. Paste it just above the closing "];" at the bottom of this file.
   3. Edit the text inside the quotes " " for your new product.
   4. Save the file and refresh the Products page in your browser.

   FIELD GUIDE
   -------------------------------------------------------------------------
   id          -> Must be unique for every product. e.g. "p7", "p8"...
   name        -> Product name shown on the card.
   category    -> One of: "clothes", "shoes", "beddings", "accessories"
                  (must be lowercase, must match exactly, used for filters)
   price       -> Number only, no "KES" and no commas. e.g. 2500
   sizes       -> List of available sizes/options in square brackets.
                  Example: ["S", "M", "L"]  or  ["38", "39", "40", "41"]
                  If a product has no sizes, just leave it as: ["One Size"]
                  The customer taps one size before ordering, and it's
                  included automatically in the WhatsApp message.
   colors      -> List of available colors in square brackets.
                  Example: ["Black", "Blue", "Beige"]
                  If a product has no color choice, just leave it as: []
                  (an empty list) and no color picker will be shown for it.
                  The customer taps one color before ordering, and it's
                  included automatically in the WhatsApp message.
   description -> A short 1-2 sentence description of the product.
   images      -> A LIST of one or more photos, in square brackets.
                  One photo:  images: ["images/red-dress.jpg"]
                  Multiple:   images: ["images/red-dress-front.jpg",
                                        "images/red-dress-back.jpg",
                                        "images/red-dress-detail.jpg"]
                  The first photo in the list is shown by default. If you
                  add more than one, small thumbnail squares appear under
                  the photo so customers can tap through them (e.g. front,
                  back, close-up, or different angles).
                  Until you add a real photo, a placeholder image shows
                  automatically, so it's safe to leave as a single
                  placeholder link while you're still gathering photos.
   badge       -> Optional small label, e.g. "New", "Best Seller", "Sale".
                  Leave as "" (empty quotes) if you don't want a badge.
   inStock     -> true or false. Set to false to show "Sold Out" and hide
                  the order button for that item.
   ========================================================================= */

const PRODUCTS = [
  {
    id: "p1",
    name: "Classic Ankara Print Dress",
    category: "clothes",
    price: 2500,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"],
    description:
      "Vibrant Ankara-print dress with a flattering fit — perfect for church, events or everyday elegance.",
    images: [
      "https://placehold.co/600x750/1E3A2C/FBF7EF?text=Photo+1+Front",
      "https://placehold.co/600x750/1E3A2C/FBF7EF?text=Photo+2+Back",
    ],
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "p2",
    name: "Men's Slim Fit Chinos",
    category: "clothes",
    price: 1800,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Black", "Khaki", "Navy"],
    description:
      "Smart-casual slim fit chinos, comfortable stretch fabric, great for the office or weekends out.",
    images: ["https://placehold.co/600x750/1E3A2C/FBF7EF?text=Add+Your+Photo"],
    badge: "New",
    inStock: true,
  },
  {
    id: "p3",
    name: "Women's Wrap Ankle Boots",
    category: "shoes",
    price: 3200,
    sizes: ["37", "38", "39", "40", "41"],
    colors: ["Black", "Brown"],
    description:
      "Durable faux-leather ankle boots with a comfortable heel — stylish for both day and night wear.",
    images: ["https://placehold.co/600x750/1E3A2C/FBF7EF?text=Add+Your+Photo"],
    badge: "",
    inStock: true,
  },
  {
    id: "p4",
    name: "Men's Classic Sneakers (Air Force Style)",
    category: "shoes",
    price: 4200,
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["White", "Black", "Blue"],
    description:
      "Everyday sneakers with cushioned soles, built for comfort whether you're walking or standing all day.",
    images: [
      "https://placehold.co/600x750/1E3A2C/FBF7EF?text=Photo+1+Side",
      "https://placehold.co/600x750/1E3A2C/FBF7EF?text=Photo+2+Sole",
      "https://placehold.co/600x750/1E3A2C/FBF7EF?text=Photo+3+Box",
    ],
    badge: "",
    inStock: true,
  },
  {
    id: "p5",
    name: "6-Piece Cotton Bedding Set",
    category: "beddings",
    price: 4500,
    sizes: ["4x6", "5x6", "6x6"],
    colors: ["Grey", "Maroon", "Blue"],
    description:
      "Soft, breathable cotton-blend bedding set including duvet cover, bedsheet and 4 pillowcases.",
    images: ["https://placehold.co/600x750/1E3A2C/FBF7EF?text=Add+Your+Photo"],
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "p6",
    name: "Fleece Throw Blanket",
    category: "beddings",
    price: 1500,
    sizes: ["One Size"],
    colors: ["Beige", "Grey"],
    description:
      "Warm, lightweight fleece throw blanket — cozy for cold nights and easy to machine wash.",
    images: ["https://placehold.co/600x750/1E3A2C/FBF7EF?text=Add+Your+Photo"],
    badge: "New",
    inStock: true,
  },

  // 👇 Add new products above this line, just before the closing bracket.
];
