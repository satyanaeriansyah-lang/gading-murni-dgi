/* global GMDGI_DATA */

(function () {
  const DATA = window.GMDGI_DATA;
  if (!DATA) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function esc(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function toInitial(name) {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0])
      .join("")
      .toUpperCase();
  }

  function waLink(productName) {
    const num = DATA.SITE.whatsappNumber;
    const text = `${DATA.SITE.whatsappDefaultMessage}\n\n• ${productName}\n\nMohon info harga, spesifikasi, dan estimasi pengiriman.`;
    return `https://wa.me/${encodeURIComponent(num)}?text=${encodeURIComponent(
      text
    )}`;
  }

  function qs() {
    const p = new URLSearchParams(location.search);
    return {
      q: (p.get("search") || "").trim(),
      cat: (p.get("cat") || "").trim(),
      sub: (p.get("sub") || "").trim(),
      type: (p.get("type") || "").trim(),
    };
  }

  function setQS(next) {
    const p = new URLSearchParams(location.search);
    Object.entries(next).forEach(([k, v]) => {
      if (!v) p.delete(k);
      else p.set(k, v);
    });
    const url = `${location.pathname}?${p.toString()}`.replace(/\?$/, "");
    history.replaceState(null, "", url);
  }

  function renderProductCard(p) {
    const tag = p.tag ? `<span class="badge tag">${esc(p.tag)}</span>` : "";
    return `
      <article class="p-card" data-product-id="${esc(p.id)}" role="button" tabindex="0" aria-label="Lihat detail ${esc(p.name)}">
        <div class="p-thumb">
          ${tag}
          <div class="initial">${esc(toInitial(p.subcategory || p.category))}</div>
        </div>
        <div class="p-body">
          <div>
            <div class="p-title">${esc(p.name)}</div>
            <div class="p-meta">${esc(p.category)} • ${esc(p.subcategory)}</div>
          </div>
          <div class="p-actions">
            <span class="pill">Katalog</span>
            <a class="btn small primary" href="${waLink(p.name)}" target="_blank" rel="noopener">Tanya via WA</a>
          </div>
        </div>
      </article>
    `;
  }

  function mountWhatsAppFloating() {
    const a = document.createElement("a");
    a.className = "wa-float";
    a.href = waLink("Konsultasi mesin / tinta / sparepart");
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.5 11.8c0 4.7-3.8 8.5-8.5 8.5-1.5 0-2.9-.4-4.1-1.1L3 20.9l1.7-4.7c-.6-1.2-1-2.7-1-4.4 0-4.7 3.8-8.5 8.5-8.5s8.3 3.8 8.3 8.5Z" stroke="rgba(255,255,255,.95)" stroke-width="1.6"/>
        <path d="M9.2 8.4c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.3l.8 1.8c.1.2.1.5 0 .6l-.4.5c-.2.2-.1.4 0 .6.3.6 1 1.6 2.1 2.2.2.1.4.1.6 0l.6-.5c.2-.1.4-.2.6-.1l1.8.8c.2.1.3.3.3.5v.6c0 .3-.1.6-.4.7-.5.3-1.5.7-2.7.5-1.6-.3-3.2-1.4-4.5-2.8-1.3-1.3-2.3-3-2.6-4.6-.2-1.2.2-2.2.5-2.7Z" fill="rgba(255,255,255,.95)"/>
      </svg>
      WhatsApp
    `;
    document.body.appendChild(a);
  }

  function initMobileNav() {
    const btn = $("#hamburger");
    const drawer = $("#mobileDrawer");
    if (!btn || !drawer) return;
    btn.addEventListener("click", () => drawer.classList.toggle("open"));
  }

  function initSearch() {
    const input = $("#searchInput");
    const box = $("#searchResults");
    if (!input || !box) return;

    function close() {
      box.classList.remove("open");
      box.innerHTML = "";
    }

    function open(results) {
      box.classList.add("open");
      box.innerHTML = results
        .slice(0, 6)
        .map((p) => {
          const url = `products.html?search=${encodeURIComponent(p.name)}`;
          return `<a href="${url}">
            <b>${esc(p.name)}</b>
            <span class="meta">${esc(p.category)} • ${esc(p.subcategory)}</span>
          </a>`;
        })
        .join("");
    }

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q) return close();
      const results = DATA.products.filter((p) => {
        const hay = `${p.name} ${p.category} ${p.subcategory}`.toLowerCase();
        return hay.includes(q);
      });
      if (!results.length) return close();
      open(results);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
      if (e.key === "Enter") {
        const q = input.value.trim();
        if (!q) return;
        location.href = `products.html?search=${encodeURIComponent(q)}`;
      }
    });

    document.addEventListener("click", (e) => {
      if (e.target === input || box.contains(e.target)) return;
      close();
    });
  }

  function initModal() {
    const modal = $("#modal");
    const body = $("#modalBody");
    const title = $("#modalTitle");
    const closeBtn = $("#modalClose");
    if (!modal || !body || !title || !closeBtn) return null;

    function close() {
      modal.classList.remove("open");
      body.innerHTML = "";
      title.textContent = "";
      document.body.style.overflow = "";
    }

    function openProduct(p) {
      title.textContent = p.name;
      const attrs = p.attributes || null;
      const attrHtml = attrs
        ? `
          <div class="section" style="padding:14px 0 0">
            <div class="section-title"><h2>Atribut</h2><p>Khusus untuk tinta (warna, ketahanan, kompatibilitas)</p></div>
            <div class="kvs">
              ${Object.entries(attrs)
                .map(
                  ([k, v]) => `<div class="kv"><b>${esc(k)}</b><span>${esc(v)}</span></div>`
                )
                .join("")}
            </div>
          </div>`
        : "";

      const highlights = (p.highlights || [])
        .map((h) => `<li>${esc(h)}</li>`)
        .join("");

      const embed = p.videoUrl
        ? `<div class="section" style="padding:14px 0 0">
            <div class="section-title"><h2>Video Mesin</h2><p>Demo (placeholder)</p></div>
            <div class="embed"><iframe src="${esc(
              p.videoUrl
            )}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          </div>`
        : "";

      body.innerHTML = `
        <div class="kvs">
          <div class="kv"><b>Kategori</b><span>${esc(p.category)} • ${esc(
        p.subcategory
      )}</span></div>
          <div class="kv"><b>Status</b><span>${esc(
            p.tag || (p.isBestseller ? "Bestseller" : p.isNew ? "Terbaru" : "Katalog")
          )}</span></div>
        </div>
        <div class="section" style="padding:14px 0 0">
          <div class="section-title"><h2>Ringkasan</h2><p>Highlight produk</p></div>
          <div class="card pad">
            <ul style="margin:0; padding-left:18px; color: var(--muted); line-height:1.7;">
              ${highlights || "<li>Konsultasi spesifikasi tersedia via WhatsApp.</li>"}
            </ul>
            <div style="display:flex; gap:10px; margin-top:14px; flex-wrap:wrap;">
              <a class="btn primary" href="${waLink(p.name)}" target="_blank" rel="noopener">Minta Penawaran (WA)</a>
              <a class="btn" href="products.html" onclick="event.preventDefault(); window.location.href='products.html?cat=${encodeURIComponent(
                p.category
              )}&sub=${encodeURIComponent(p.subcategory)}';">Lihat Kategori</a>
            </div>
          </div>
        </div>
        ${attrHtml}
        ${embed}
      `;
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    return { openProduct, close };
  }

  function bindProductModal(container, modalApi) {
    if (!container || !modalApi) return;
    container.addEventListener("click", (e) => {
      const card = e.target.closest("[data-product-id]");
      if (!card) return;
      // Klik tombol WA di card tetap jalan normal
      if (e.target.closest("a")) return;
      const id = card.getAttribute("data-product-id");
      const p = DATA.products.find((x) => x.id === id);
      if (p) modalApi.openProduct(p);
    });
    container.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const card = e.target.closest("[data-product-id]");
      if (!card) return;
      const id = card.getAttribute("data-product-id");
      const p = DATA.products.find((x) => x.id === id);
      if (p) modalApi.openProduct(p);
    });
  }

  function renderHome() {
    const featured = $("#featuredGrid");
    const best = $("#bestsellerGrid");
    const newest = $("#newestGrid");
    const testi = $("#testiGrid");
    if (featured)
      featured.innerHTML = DATA.products
        .filter((p) => p.isFeatured)
        .slice(0, 4)
        .map(renderProductCard)
        .join("");
    if (best)
      best.innerHTML = DATA.products
        .filter((p) => p.isBestseller)
        .slice(0, 4)
        .map(renderProductCard)
        .join("");
    if (newest)
      newest.innerHTML = DATA.products
        .filter((p) => p.isNew)
        .slice(0, 4)
        .map(renderProductCard)
        .join("");

    if (testi) {
      testi.innerHTML = DATA.testimonials
        .map(
          (t) => `
          <div class="card pad">
            <span class="badge">Testimoni</span>
            <h3 style="margin:10px 0 6px; letter-spacing:-.02em;">${esc(
              t.name
            )}</h3>
            <p class="muted" style="margin:0 0 10px">${esc(t.role)}</p>
            <p style="margin:0; line-height:1.7; color:#22304a;">“${esc(
              t.quote
            )}”</p>
          </div>`
        )
        .join("");
    }
  }

  function renderProductsPage(modalApi) {
    const q = qs();
    const sidebar = $("#filters");
    const grid = $("#productsGrid");
    const meta = $("#productsMeta");
    if (!sidebar || !grid) return;

    const cats = Object.keys(DATA.categories);

    function countFor(cat, sub) {
      return DATA.products.filter((p) => {
        if (cat && p.category !== cat) return false;
        if (sub && p.subcategory !== sub) return false;
        return true;
      }).length;
    }

    function renderFilters() {
      const catHtml = cats
        .map((c) => {
          const active = q.cat === c ? "active" : "";
          return `<button class="chip ${active}" data-filter="cat" data-value="${esc(
            c
          )}"><span>${esc(c)}</span><span class="muted">${countFor(
            c
          )}</span></button>`;
        })
        .join("");

      const subs = q.cat ? DATA.categories[q.cat] || [] : [];
      const subHtml = subs.length
        ? subs
            .map((s) => {
              const active = q.sub === s ? "active" : "";
              return `<button class="chip ${active}" data-filter="sub" data-value="${esc(
                s
              )}"><span>${esc(s)}</span><span class="muted">${countFor(
                q.cat,
                s
              )}</span></button>`;
            })
            .join("")
        : `<div class="muted" style="font-size:13px; line-height:1.6">Pilih kategori untuk melihat subkategori.</div>`;

      sidebar.innerHTML = `
        <div class="filter-group">
          <h3>Kategori</h3>
          <div class="filter-list">${catHtml}</div>
          <div style="margin-top:10px">
            <button class="btn small ghost" id="clearFilters">Reset Filter</button>
          </div>
        </div>
        <div style="height:12px"></div>
        <div class="filter-group">
          <h3>Subkategori</h3>
          <div class="filter-list">${subHtml}</div>
        </div>
      `;
    }

    function match(p) {
      if (q.cat && p.category !== q.cat) return false;
      if (q.sub && p.subcategory !== q.sub) return false;
      if (q.type && p.type !== q.type) return false;
      if (q.q) {
        const hay = `${p.name} ${p.category} ${p.subcategory}`.toLowerCase();
        if (!hay.includes(q.q.toLowerCase())) return false;
      }
      return true;
    }

    function renderGrid() {
      const items = DATA.products.filter(match);
      grid.innerHTML = items.map(renderProductCard).join("");
      if (meta)
        meta.textContent = `${items.length} produk ditemukan${
          q.q ? ` untuk pencarian “${q.q}”` : ""
        }.`;
      bindProductModal(grid, modalApi);
    }

    renderFilters();
    renderGrid();

    sidebar.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-filter]");
      if (btn) {
        const kind = btn.getAttribute("data-filter");
        const val = btn.getAttribute("data-value");
        if (kind === "cat") {
          const nextCat = q.cat === val ? "" : val;
          setQS({ cat: nextCat, sub: "" });
        }
        if (kind === "sub") setQS({ sub: q.sub === val ? "" : val });
        Object.assign(q, qs());
        renderFilters();
        renderGrid();
      }
      if (e.target && e.target.id === "clearFilters") {
        setQS({ cat: "", sub: "", type: "", search: "" });
        location.reload();
      }
    });
  }

  function renderPortfolio() {
    const grid = $("#portfolioGrid");
    const chips = $("#portfolioChips");
    if (!grid || !chips) return;

    let active = "Semua";
    const types = ["Semua", ...new Set(DATA.portfolio.map((p) => p.type))];

    function renderChips() {
      chips.innerHTML = types
        .map((t) => {
          const cls = t === active ? "chip active" : "chip";
          return `<button class="${cls}" data-type="${esc(t)}"><span>${esc(
            t
          )}</span></button>`;
        })
        .join("");
    }

    function renderGrid() {
      const items =
        active === "Semua"
          ? DATA.portfolio
          : DATA.portfolio.filter((p) => p.type === active);
      grid.innerHTML = items
        .map((p) => {
          const isVideo = Boolean(p.videoUrl);
          const play = isVideo ? `<span class="badge play">Video</span>` : "";
          const click = isVideo
            ? `onclick="window.open('${esc(p.videoUrl)}','_blank')"`
            : "";
          return `
            <article class="media-card" ${click} style="${
            isVideo ? "cursor:pointer" : ""
          }">
              <div class="media-top">${play}</div>
              <div class="media-body">
                <span class="badge">${esc(p.type)}</span>
                <b style="margin-top:10px">${esc(p.title)}</b>
                <span>${esc(p.desc)}</span>
              </div>
            </article>
          `;
        })
        .join("");
    }

    renderChips();
    renderGrid();
    chips.addEventListener("click", (e) => {
      const b = e.target.closest("[data-type]");
      if (!b) return;
      active = b.getAttribute("data-type");
      renderChips();
      renderGrid();
    });
  }

  function renderPromo() {
    const grid = $("#promoGrid");
    if (!grid) return;
    grid.innerHTML = DATA.promoPackages
      .map(
        (p) => `
        <div class="card pad">
          <span class="badge">${esc(p.highlight)}</span>
          <h3 style="margin:10px 0 6px; letter-spacing:-.02em;">${esc(
            p.title
          )}</h3>
          <ul style="margin:0; padding-left:18px; color: var(--muted); line-height:1.75;">
            ${p.items.map((i) => `<li>${esc(i)}</li>`).join("")}
          </ul>
          <div style="margin-top:14px">
            <a class="btn primary" href="${waLink(p.title)}" target="_blank" rel="noopener">Ambil Paket via WA</a>
          </div>
        </div>`
      )
      .join("");
  }

  function hydrateSiteMeta() {
    $$("[data-brand]").forEach((n) => (n.textContent = DATA.SITE.brand));
    $$("[data-tagline]").forEach((n) => (n.textContent = DATA.SITE.tagline));
    $$("[data-hours]").forEach((n) => (n.textContent = DATA.SITE.operatingHours));
    const ig = $("[data-instagram]");
    if (ig) ig.href = DATA.SITE.instagramUrl;
    const map = $("#mapsEmbed");
    if (map) map.src = DATA.SITE.mapsEmbedUrl;
    const wa = $$("[data-wa]");
    wa.forEach((a) => (a.href = waLink("Konsultasi umum")));
  }

  // Boot
  document.addEventListener("DOMContentLoaded", () => {
    hydrateSiteMeta();
    initMobileNav();
    initSearch();
    mountWhatsAppFloating();

    const modalApi = initModal();
    const page = document.body.getAttribute("data-page");

    if (page === "home") {
      renderHome();
      const grids = ["#featuredGrid", "#bestsellerGrid", "#newestGrid"]
        .map((s) => $(s))
        .filter(Boolean);
      grids.forEach((g) => bindProductModal(g, modalApi));
    }

    if (page === "products") renderProductsPage(modalApi);
    if (page === "portfolio") renderPortfolio();
    if (page === "promo") renderPromo();
  });
})();

