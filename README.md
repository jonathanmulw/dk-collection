# DK Collections — Website

A complete, mobile-first e-commerce-style website for DK Collections
(clothes, shoes and beddings), built with plain HTML, CSS and JavaScript.
No build tools, no server, no monthly fees required.

- Orders are placed via WhatsApp (0798 852 352)
- Payment is via M-Pesa Till Number (8418310) — displayed clearly, no
  automated payment gateway
- A floating WhatsApp button appears on every page
- On the Products page, customers tap a size and (if available) a color,
  can optionally type their delivery area, then tap "Order via WhatsApp".
  This opens WhatsApp with a message already filled in, e.g.:
  *"Hi DK Collections! I'd like to order: Air Force Style Sneakers, Size: 42,
  Color: Blue — KES 4,200. Delivery location: Kilimani, near Yaya Centre"*

---

## 1. What's in this folder

```
dk-collections/
├── index.html          Home page
├── products.html        Products page (catalogue)
├── how-to-order.html    How to Order & Pay page
├── contact.html         Contact page
├── css/
│   └── style.css        All styling
├── js/
│   ├── config.js         ⭐ EDIT THIS to change your WhatsApp/Till number
│   ├── products.js       ⭐ EDIT THIS to add/change/remove products
│   └── script.js          Site logic — you shouldn't need to touch this
└── images/               Put your product photos in here
```

---

## 2. How to edit things yourself

### Change your WhatsApp number, Till Number or business name
Open **`js/config.js`** in any text editor (Notepad, TextEdit, VS Code, or
even editing directly on GitHub in your browser). Change the values inside
the quotes, save, and every page updates automatically — you only edit it
in one place.

### Add, edit or remove a product
Open **`js/products.js`**. Each product is a block like this:

```js
{
  id: "p7",
  name: "Kids' School Shoes",
  category: "shoes",
  price: 1900,
  sizes: ["28", "29", "30", "31"],
  colors: ["Black", "Brown"],
  description: "Durable, comfortable school shoes for everyday wear.",
  images: ["images/kids-shoes-side.jpg", "images/kids-shoes-sole.jpg"],
  badge: "New",
  inStock: true,
},
```

- To **add** a product: copy a whole block (from `{` to `},`), paste it
  above the closing `];`, and edit the text.
- To **edit** a product: just change the text inside the quotes.
- To **remove** a product: delete its whole block.
- To mark something as sold out: change `inStock: true` to `inStock: false`.
- If a product has no color options, just leave `colors: []` (empty) and
  no color picker will show for it — sizes always show.
- Customers pick a size/color and can type their delivery area right on
  the product card — all three are included automatically in the
  WhatsApp message when they tap "Order via WhatsApp".

Full instructions are also written at the top of `js/products.js`.

### Add real product photos (one or several per product)
1. Save your photos into the `images` folder (e.g. `images/red-dress-front.jpg`,
   `images/red-dress-back.jpg`).
2. In `js/products.js`, set that product's `images` field to a list —
   one photo or several:
   ```js
   images: ["images/red-dress-front.jpg", "images/red-dress-back.jpg"],
   ```
   The first photo is shown by default. If you list more than one, small
   tappable thumbnail squares appear under the photo so customers can
   flip through front/back/close-up shots.

**Selling something in different colors (e.g. a hoodie in White, Black,
Grey, all one price)?** List one photo per color, in the *same order*
as your `colors` list:
```js
colors: ["White", "Black", "Grey"],
images: [
  "images/hoodie-white.jpg",
  "images/hoodie-black.jpg",
  "images/hoodie-grey.jpg",
],
```
As long as `colors` and `images` have the same number of items, tapping
a color automatically shows that color's photo — no extra setup needed.

Until you add real photos, a placeholder image will show automatically,
so the site never looks broken.

### Add products even faster with the Product Manager tool
Instead of hand-editing `js/products.js`, you can open
**`tools/product-generator.html`** in your browser and fill in a simple
form (name, price, sizes, colors, images, etc.). It builds the correctly
formatted code for you and lets you download a ready-to-use
`products.js` file — no typing code required. This tool isn't linked
from your public site; it's just for your own use. You can open it
locally on your computer, or visit it on your live site at
`yoursite.com/tools/product-generator.html`.

**Attach your real photos and skip renaming entirely.** In the form,
below the image filename box, there's a file picker — attach the actual
photo(s) for that product straight from your phone or laptop. The tool
automatically renames them to match the product (e.g.
`heavy-hoodies-black.jpg`) and fills in the filename box for you. If
the product has colors listed, attach the photos in the same order as
your colors and each photo gets named after its color automatically.

Once you've added all your products with real photos attached, click
**"Download All Photos (Renamed ZIP)"** — you'll get one ZIP file
containing every photo, already correctly named and sorted into an
`images` folder. Unzip it and drag the contents straight into your
`images` folder on GitHub — no manual renaming needed.

**Important:** attached photos only stay in the tool while that browser
tab is open — they are not saved automatically like the text details
are. Download your ZIP before closing or refreshing the page.

### Change text on the Home, How to Order, or Contact pages
These are plain HTML files — open them in a text editor and change the
wording inside the `<p>` and `<h1>/<h2>` tags. Everything is written in
plain English, so it's safe to edit directly.

---

## 3. Test it on your own computer first (optional but recommended)

You can simply double-click **`index.html`** and it will open in your
browser — that's enough to check your edits. For the most accurate
preview (identical to how it will behave online), you can also use a
free tool like the "Live Server" extension in VS Code.

---

## 4. How to publish it online for FREE (step by step)

You have two easy, beginner-friendly options. **Netlify Drop** is the
fastest (no account needed to start). **GitHub Pages** is great if you
want to keep editing the site over time.

### Option A — Netlify Drop (easiest, ~2 minutes)

1. Go to **https://app.netlify.com/drop** in your browser.
2. Select this entire `dk-collections` folder on your computer and
   drag it into the box on that page (or use the "Browse to upload"
   option and select the folder).
3. Netlify will instantly publish your site and give you a live link
   like `https://random-name-123.netlify.app`.
4. Click "Site settings" → "Change site name" to pick a nicer web
   address, e.g. `dk-collections.netlify.app`.
5. Share that link with your customers — done! Your floating WhatsApp
   button, Till Number and all pages will work exactly as tested.

To update the site later: make your edits to the files, then drag the
folder into Netlify Drop again (or connect it to a free Netlify account
so you can re-upload anytime from your dashboard).

### Option B — GitHub Pages (best if you want ongoing free hosting tied to an account)

1. Create a free account at **https://github.com** if you don't have one.
2. Click the **+** icon (top right) → **New repository**. Name it
   `dk-collections` and click **Create repository**.
3. On the new repository page, click **"uploading an existing file"**.
4. Drag in all the files and folders from your `dk-collections` folder
   (make sure `index.html`, the `css` folder, the `js` folder and the
   `images` folder all get uploaded, keeping the same structure).
5. Click **Commit changes**.
6. Go to the repository's **Settings** tab → **Pages** (left sidebar).
7. Under "Build and deployment", set **Source** to **Deploy from a
   branch**, choose the **main** branch and the **/ (root)** folder,
   then click **Save**.
8. Wait about 1–2 minutes, then refresh the Pages settings screen —
   you'll see your live link, something like:
   `https://yourusername.github.io/dk-collections/`
9. Share that link with your customers.

To update the site later: edit the file directly on GitHub (click the
file, then the pencil/edit icon), or upload new versions the same way
as step 4.

---

## 5. Quick checklist before sharing your link with customers

- [ ] Confirmed the WhatsApp number in `js/config.js` is correct
- [ ] Confirmed the Till Number in `js/config.js` is correct
- [ ] Replaced sample products in `js/products.js` with your real items
- [ ] Added real photos for each product (or left placeholders for now)
- [ ] Opened the site on your own phone and tapped the green WhatsApp
      button to confirm it opens a chat correctly
- [ ] Tapped "Order via WhatsApp" on a product to confirm the message
      pre-fills correctly

That's it — your site is live, free, and fully yours to keep editing.
