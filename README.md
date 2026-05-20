# GADING MURNI DGI — Website E‑Commerce (Static)

Website katalog modern, clean, minimalis (style Shopify/Nike) untuk showroom mesin digital printing **GADING MURNI DGI**.

## Cara pakai
- Buka `index.html` (homepage).
- Disarankan menjalankan local server supaya embed & navigasi lebih stabil:
  - `python3 -m http.server 8000`
  - lalu buka `http://localhost:8000/gading-murni-dgi/`

## Edit yang paling penting
Semua data ada di:
- `assets/js/data.js`

Yang biasanya Anda edit:
1) **Nomor WhatsApp**
- Cari `whatsappNumber`
- Format: `628xxxxxxxxxx` (tanpa `+`)

2) **Link Instagram**
- Edit `instagramUrl`

3) **Maps showroom**
- Edit `mapsEmbedUrl`
- Bisa pakai link embed Google Maps: `https://www.google.com/maps?q=...&output=embed`

4) **Tambah / ubah produk**
- Tambah objek baru di array `products`
- Kolom penting:
  - `category`: *Mesin Printing / Sparepart & Head Printer / Tinta Printing / Media Printing*
  - `subcategory`: isi sesuai subkategori yang sudah dibuat
  - `highlights`: poin-poin singkat untuk detail produk
  - Khusus **tinta** tambahkan `attributes`:
    - `Keunggulan warna`
    - `Ketahanan`
    - `Kompatibel mesin`

5) **Portfolio / Hasil Produksi**
- Edit array `portfolio` (bisa isi `videoUrl` untuk “video mesin jalan”)

6) **Promo & Paket Usaha**
- Edit array `promoPackages`

## Struktur halaman
- `index.html` — Home (banner promo, unggulan, bestseller, terbaru, video, testimoni)
- `products.html` — Katalog + filter kategori/subkategori + search
- `portfolio.html` — Hasil produksi (hasil cetak, video mesin jalan, hasil customer, before-after)
- `promo.html` — Promo & paket usaha
- `about.html` — Tentang kami
- `contact.html` — Kontak + maps + instagram

