/* =========================================================================
   DK COLLECTIONS — SITE SCRIPT
   You should not need to edit this file. To change the WhatsApp number,
   till number or business name, edit js/config.js instead.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", function () {
  buildWhatsAppFloatButton();
  wireMobileNav();
  highlightActiveNavLink();
  fillConfigPlaceholders();
  wireCopyButtons();
  renderProductsIfPresent();
});

/* ---------- Floating WhatsApp button (appears on every page) ---------- */
function buildWhatsAppFloatButton() {
  const link = document.createElement("a");
  link.className = "wa-float";
  link.href = buildWhatsAppLink(DK_CONFIG.defaultMessage);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", "Chat with " + DK_CONFIG.businessName + " on WhatsApp");
  link.innerHTML =
    '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">' +
    '<path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.68 4.55 1.86 6.41L4 29l7.78-1.83A11.9 11.9 0 0 0 16.02 27C22.65 27 28 21.63 28 15S22.65 3 16.02 3zm0 21.6c-1.94 0-3.75-.56-5.28-1.53l-.38-.23-4.62 1.09 1.13-4.5-.25-.38A9.55 9.55 0 0 1 5.4 15c0-5.86 4.77-10.62 10.62-10.62S26.64 9.14 26.64 15 21.88 24.6 16.02 24.6zm5.83-7.94c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.34-.5-2.56-1.6-.95-.85-1.58-1.9-1.77-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.75-.99-2.39-.26-.63-.53-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.47 5.48 4.86.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z"/>' +
    "</svg>";
  document.body.appendChild(link);
}

function buildWhatsAppLink(message, productContext) {
  var text = message || DK_CONFIG.defaultMessage;
  if (productContext) {
    var parts = [productContext.name];
    if (productContext.size) parts.push("Size: " + productContext.size);
    if (productContext.color) parts.push("Color: " + productContext.color);

    text =
      "Hi " +
      DK_CONFIG.businessName +
      "! I'd like to order: " +
      parts.join(", ") +
      " — KES " +
      formatPrice(productContext.price) +
      ". Delivery location: " +
      (productContext.location ? productContext.location : "");
  }
  return "https://wa.me/" + DK_CONFIG.whatsappNumber + "?text=" + encodeURIComponent(text);
}

/* ---------- Mobile nav toggle ---------- */
function wireMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", function () {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  // Close menu after tapping a link (mobile)
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
    });
  });
}

/* ---------- Highlight the current page in the nav ---------- */
function highlightActiveNavLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

/* ---------- Fill in any element tagged with data-config ---------- */
function fillConfigPlaceholders() {
  document.querySelectorAll("[data-config]").forEach(function (el) {
    const key = el.getAttribute("data-config");
    if (DK_CONFIG[key] !== undefined) {
      el.textContent = DK_CONFIG[key];
    }
  });
  // Any link tagged data-wa-link becomes a working WhatsApp deep link
  document.querySelectorAll("[data-wa-link]").forEach(function (el) {
    const customMsg = el.getAttribute("data-wa-link") || "";
    el.href = buildWhatsAppLink(customMsg || undefined);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
  // Any link tagged data-tel-link becomes a working phone-call link
  document.querySelectorAll("[data-tel-link]").forEach(function (el) {
    el.href = "tel:+" + DK_CONFIG.whatsappNumber;
  });
}

/* ---------- Copy-to-clipboard buttons (Till Number / WhatsApp number) ---------- */
function wireCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const key = btn.getAttribute("data-copy");
      const value = DK_CONFIG[key] || "";
      const feedbackEl = document.querySelector(
        '[data-copy-feedback="' + key + '"]'
      );
      copyText(value).then(function (ok) {
        if (feedbackEl) {
          feedbackEl.textContent = ok
            ? "Copied " + value + " ✓"
            : "Couldn't copy — please copy it manually.";
          setTimeout(function () {
            feedbackEl.textContent = "";
          }, 3000);
        }
      });
    });
  });
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(
      function () {
        return true;
      },
      function () {
        return false;
      }
    );
  }
  // Fallback for older browsers / non-HTTPS local testing
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return Promise.resolve(ok);
  } catch (e) {
    return Promise.resolve(false);
  }
}

/* ---------- Helpers ---------- */
function formatPrice(n) {
  return Number(n).toLocaleString("en-KE");
}

/* ---------- Product rendering (Products page only) ---------- */
function renderProductsIfPresent() {
  const grid = document.getElementById("products-grid");
  if (!grid || typeof PRODUCTS === "undefined") return;

  const filterRow = document.getElementById("filter-row");
  const validCategories = ["all", "clothes", "shoes", "beddings", "accessories"];
  const hashCategory = window.location.hash.replace("#", "");
  let activeCategory = validCategories.indexOf(hashCategory) !== -1 ? hashCategory : "all";

  if (filterRow && activeCategory !== "all") {
    filterRow.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-filter") === activeCategory);
    });
  }

  function draw() {
    const items = PRODUCTS.filter(function (p) {
      return activeCategory === "all" || p.category === activeCategory;
    });

    if (items.length === 0) {
      grid.innerHTML =
        '<p class="empty-state">No products in this category yet. Please check back soon!</p>';
      return;
    }

    grid.innerHTML = items.map(productCardHTML).join("");
    wireProductCardInteractions(items);
  }

  function getImages(p) {
    if (Array.isArray(p.images) && p.images.length > 0) return p.images;
    if (p.image) return [p.image]; // backward compatibility with older single-image entries
    return ["https://placehold.co/600x750/1E3A2C/FBF7EF?text=Add+Your+Photo"];
  }

  function productCardHTML(p) {
    const badge = !p.inStock
      ? '<span class="product-badge sold-out">Sold Out</span>'
      : p.badge
      ? '<span class="product-badge">' + escapeHTML(p.badge) + "</span>"
      : "";

    const images = getImages(p);
    const mainImage =
      '<img class="gallery-main" src="' +
      encodeURI(images[0]) +
      '" alt="' +
      escapeHTML(p.name) +
      '" loading="lazy" onerror="this.src=\'https://placehold.co/600x750/1E3A2C/FBF7EF?text=Photo+Coming+Soon\'">';

    const thumbs =
      images.length > 1
        ? '<div class="gallery-thumbs" data-gallery-thumbs>' +
          images
            .map(function (src, i) {
              return (
                '<button type="button" class="gallery-thumb' +
                (i === 0 ? " active" : "") +
                '" data-img-src="' +
                encodeURI(src) +
                '" aria-label="Photo ' +
                (i + 1) +
                '">' +
                '<img src="' +
                encodeURI(src) +
                '" alt="" loading="lazy" onerror="this.src=\'https://placehold.co/600x750/1E3A2C/FBF7EF?text=Photo+Coming+Soon\'">' +
                "</button>"
              );
            })
            .join("") +
          "</div>"
        : "";

    const sizes = (p.sizes || [])
      .map(function (s, i) {
        return (
          '<button type="button" class="size-chip' +
          (i === 0 ? " selected" : "") +
          '" data-size-option="' +
          escapeHTML(s) +
          '">' +
          escapeHTML(s) +
          "</button>"
        );
      })
      .join("");

    const hasColors = p.colors && p.colors.length > 0;
    const colors = hasColors
      ? (p.colors || [])
          .map(function (c, i) {
            return (
              '<button type="button" class="size-chip' +
              (i === 0 ? " selected" : "") +
              '" data-color-option="' +
              escapeHTML(c) +
              '">' +
              escapeHTML(c) +
              "</button>"
            );
          })
          .join("")
      : "";

    const orderBtn = p.inStock
      ? '<button type="button" class="btn btn-whatsapp btn-block" data-order-id="' +
        p.id +
        '">Order via WhatsApp</button>'
      : '<button class="btn btn-block" disabled style="background:#e7ddc9;color:#5a534c;cursor:not-allowed;">Currently Unavailable</button>';

    return (
      '<article class="product-card" data-product-id="' +
      p.id +
      '">' +
      '<div class="product-media">' +
      mainImage +
      badge +
      thumbs +
      "</div>" +
      '<div class="product-body">' +
      "<h3>" +
      escapeHTML(p.name) +
      "</h3>" +
      '<div class="product-price">KES ' +
      formatPrice(p.price) +
      "</div>" +
      '<p class="product-desc">' +
      escapeHTML(p.description) +
      "</p>" +
      '<div class="option-group">' +
      '<span class="option-label">Size</span>' +
      '<div class="product-sizes" data-size-group>' +
      sizes +
      "</div>" +
      "</div>" +
      (hasColors
        ? '<div class="option-group">' +
          '<span class="option-label">Color</span>' +
          '<div class="product-sizes" data-color-group>' +
          colors +
          "</div>" +
          "</div>"
        : "") +
      '<div class="option-group">' +
      '<label class="option-label" for="loc-' +
      p.id +
      '">Delivery location (optional)</label>' +
      '<input type="text" class="location-input" id="loc-' +
      p.id +
      '" data-location-input placeholder="e.g. Nairobi CBD, near Kencom">' +
      "</div>" +
      orderBtn +
      "</div>" +
      "</article>"
    );
  }

  function wireProductCardInteractions(items) {
    grid.querySelectorAll(".product-card").forEach(function (card) {
      const productId = card.getAttribute("data-product-id");
      const product = items.find(function (p) {
        return p.id === productId;
      });
      if (!product) return;

      // Gallery thumbnail selection (swap main image)
      const thumbGroup = card.querySelector("[data-gallery-thumbs]");
      if (thumbGroup) {
        const mainImg = card.querySelector(".gallery-main");
        thumbGroup.addEventListener("click", function (e) {
          const thumb = e.target.closest(".gallery-thumb");
          if (!thumb || !mainImg) return;
          mainImg.src = thumb.getAttribute("data-img-src");
          thumbGroup.querySelectorAll(".gallery-thumb").forEach(function (t) {
            t.classList.remove("active");
          });
          thumb.classList.add("active");
        });
      }

      // Size chip selection (single-select)
      const sizeGroup = card.querySelector("[data-size-group]");
      if (sizeGroup) {
        sizeGroup.addEventListener("click", function (e) {
          const chip = e.target.closest("[data-size-option]");
          if (!chip) return;
          sizeGroup.querySelectorAll(".size-chip").forEach(function (c) {
            c.classList.remove("selected");
          });
          chip.classList.add("selected");
        });
      }

      // Color chip selection (single-select)
      const colorGroup = card.querySelector("[data-color-group]");
      if (colorGroup) {
        colorGroup.addEventListener("click", function (e) {
          const chip = e.target.closest("[data-color-option]");
          if (!chip) return;
          colorGroup.querySelectorAll(".size-chip").forEach(function (c) {
            c.classList.remove("selected");
          });
          chip.classList.add("selected");
        });
      }

      // Order button — reads the current selections at click time
      const orderBtn = card.querySelector("[data-order-id]");
      if (orderBtn) {
        orderBtn.addEventListener("click", function () {
          const selectedSize = card.querySelector("[data-size-option].selected");
          const selectedColor = card.querySelector("[data-color-option].selected");
          const locationInput = card.querySelector("[data-location-input]");

          const link = buildWhatsAppLink(null, {
            name: product.name,
            price: product.price,
            size: selectedSize ? selectedSize.getAttribute("data-size-option") : "",
            color: selectedColor ? selectedColor.getAttribute("data-color-option") : "",
            location: locationInput ? locationInput.value.trim() : "",
          });
          window.open(link, "_blank", "noopener,noreferrer");
        });
      }
    });
  }

  if (filterRow) {
    filterRow.addEventListener("click", function (e) {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterRow.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-filter");
      draw();
    });
  }

  draw();
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}
