// Data awal (contoh) — silakan tambah/edit sesuai stok & katalog asli.
// Tips: ubah nomor WhatsApp di SITE.whatsappNumber (format: 628xxxxxxxxxx tanpa +).

window.GMDGI_DATA = (() => {
  const SITE = {
    brand: "GADING MURNI DGI",
    tagline: "Distributor Mesin Printing Premium",
    whatsappNumber: "685797203195", // TODO: ganti dengan nomor WA Anda
    whatsappDefaultMessage:
      "Halo GADING MURNI DGI, saya mau konsultasi & minta penawaran untuk produk berikut:",
    instagramUrl: "https://www.instagram.com/gadingmurni_cideng/",
    mapsEmbedUrl:
      "<iframe src="https://www.google.chttps://maps.app.goo.gl/gdrHLPyH8d8MTJm38om/maps/embed?pb=!1m18!..." 
width="600" 
height="450" 
style="border:0;" 
allowfullscreen="" 
loading="lazy">
</iframe>",
    operatingHours: "Senin–Sabtu 09.00–17.00",
  };

  /** @type {Array<{id:string,name:string,category:string,subcategory:string,type:string,tag?:string,highlights:string[],videoUrl?:string,isFeatured?:boolean,isBestseller?:boolean,isNew?:boolean,attributes?:Record<string,string>}>} */
  const products = [
    // ===================== MESIN PRINTING =====================
    {
      id: "m-uv-01",
      name: "Mesin UV — Compact Pro Series",
      category: "Mesin Printing",
      subcategory: "Mesin UV",
      type: "machine",
      tag: "Unggulan",
      highlights: [
        "Finishing premium untuk rigid & flexible media",
        "Hasil tajam, warna solid, dan cepat kering",
        "Cocok untuk usaha signage & dekorasi",
      ],
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      isFeatured: true,
      isBestseller: true,
    },
    {
      id: "m-eco-01",
      name: "Mesin Eco Solvent — Value Series",
      category: "Mesin Printing",
      subcategory: "Mesin Eco Solvent",
      type: "machine",
      tag: "Bestseller",
      highlights: [
        "Ideal untuk banner, sticker, vinyl",
        "Biaya operasional efisien",
        "Output stabil untuk produksi harian",
      ],
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      isBestseller: true,
    },
    {
      id: "m-dtf-01",
      name: "Mesin DTF — Apparel Starter",
      category: "Mesin Printing",
      subcategory: "Mesin DTF",
      type: "machine",
      tag: "Terbaru",
      highlights: [
        "Cocok untuk kaos, jersey, totebag",
        "Warna cerah + putih solid",
        "Alur kerja cocok untuk pemula",
      ],
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      isNew: true,
    },
    {
      id: "m-sub-01",
      name: "Mesin Sublim — Textile Series",
      category: "Mesin Printing",
      subcategory: "Mesin Sublim",
      type: "machine",
      highlights: [
        "Produksi kain, jersey, bahan sublim",
        "Hasil halus untuk kebutuhan fashion",
        "Stabil untuk running panjang",
      ],
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      isFeatured: true,
    },
    {
      id: "m-cut-01",
      name: "Mesin Cutting — Precision Cutter",
      category: "Mesin Printing",
      subcategory: "Mesin Cutting",
      type: "machine",
      highlights: [
        "Cutting sticker/vinyl rapi",
        "Tracking stabil, presisi tinggi",
        "Workflow cocok untuk signage",
      ],
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      isNew: true,
    },
    {
      id: "m-flat-01",
      name: "Mesin Flatbed — Rigid Media",
      category: "Mesin Printing",
      subcategory: "Mesin Flatbed",
      type: "machine",
      highlights: [
        "Khusus media rigid (acrylic, board, dll.)",
        "Finishing profesional untuk produk custom",
        "Cocok untuk usaha souvenir & signage premium",
      ],
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      isFeatured: true,
      isNew: true,
    },

    // ===================== SPAREPART & HEAD PRINTER =====================
    {
      id: "s-ph-01",
      name: "Printhead — Original Grade",
      category: "Sparepart & Head Printer",
      subcategory: "Printhead",
      type: "sparepart",
      highlights: [
        "Head original grade (sesuaikan tipe)",
        "Stabil untuk produksi",
        "Konsultasi kompatibilitas tersedia",
      ],
      isBestseller: true,
    },
    {
      id: "s-mb-01",
      name: "Mainboard — Controller Board",
      category: "Sparepart & Head Printer",
      subcategory: "Mainboard",
      type: "sparepart",
      highlights: [
        "Board controller mesin",
        "Support instalasi & setting",
        "Garansi sesuai ketentuan",
      ],
    },
    {
      id: "s-dam-01",
      name: "Damper — Ink Flow Stabilizer",
      category: "Sparepart & Head Printer",
      subcategory: "Damper",
      type: "sparepart",
      highlights: ["Aliran tinta stabil", "Kualitas material tahan lama"],
    },
    {
      id: "s-pump-01",
      name: "Ink Pump — Feeding System",
      category: "Sparepart & Head Printer",
      subcategory: "Ink pump",
      type: "sparepart",
      highlights: ["Sirkulasi tinta optimal", "Ganti mudah, stok ready"],
      isNew: true,
    },
    {
      id: "s-belt-01",
      name: "Belt — Drive Belt",
      category: "Sparepart & Head Printer",
      subcategory: "Belt",
      type: "sparepart",
      highlights: ["Gerak presisi", "Mendukung hasil konsisten"],
    },
    {
      id: "s-motor-01",
      name: "Motor — Stepper/Servo (sesuai tipe)",
      category: "Sparepart & Head Printer",
      subcategory: "Motor",
      type: "sparepart",
      highlights: ["Torsi stabil", "Konsultasi tipe motor tersedia"],
    },

    // ===================== TINTA PRINTING =====================
    {
      id: "i-uv-01",
      name: "Tinta UV — Premium Color",
      category: "Tinta Printing",
      subcategory: "Tinta UV",
      type: "ink",
      tag: "Unggulan",
      highlights: ["Warna hidup", "Cocok untuk UV printing"],
      isFeatured: true,
      attributes: {
        "Keunggulan warna": "Warna solid + glossy, detail tajam",
        Ketahanan: "Tahan gesek & cuaca (tergantung media/laminasi)",
        "Kompatibel mesin": "UV printer (konsultasi tipe head/brand)",
      },
    },
    {
      id: "i-eco-01",
      name: "Tinta Eco Solvent — Outdoor Grade",
      category: "Tinta Printing",
      subcategory: "Eco solvent",
      type: "ink",
      highlights: ["Outdoor friendly", "Drying stabil"],
      isBestseller: true,
      attributes: {
        "Keunggulan warna": "Tone natural, konsisten untuk produksi",
        Ketahanan: "Tahan pudar untuk kebutuhan signage",
        "Kompatibel mesin": "Eco solvent printer (konsultasi tipe)",
      },
    },
    {
      id: "i-sub-01",
      name: "Tinta Sublim — Textile Series",
      category: "Tinta Printing",
      subcategory: "Sublim",
      type: "ink",
      isNew: true,
      highlights: ["Cerah untuk kain", "Transfer stabil"],
      attributes: {
        "Keunggulan warna": "Cerah & halus, cocok untuk jersey/fashion",
        Ketahanan: "Tahan cuci (tergantung proses heatpress)",
        "Kompatibel mesin": "Printer sublim (konsultasi tipe)",
      },
    },
    {
      id: "i-dtf-01",
      name: "Tinta DTF — White & CMYK Set",
      category: "Tinta Printing",
      subcategory: "DTF",
      type: "ink",
      tag: "Terbaru",
      isNew: true,
      highlights: ["Putih solid", "Elastis untuk apparel"],
      attributes: {
        "Keunggulan warna": "Warna cerah + putih pekat",
        Ketahanan: "Tahan tarik & cuci (tergantung powder/press)",
        "Kompatibel mesin": "DTF printer (konsultasi tipe head)",
      },
    },
    {
      id: "i-pig-01",
      name: "Tinta Pigment — General Purpose",
      category: "Tinta Printing",
      subcategory: "Pigment",
      type: "ink",
      highlights: ["Warna natural", "Cocok untuk beberapa aplikasi indoor"],
      attributes: {
        "Keunggulan warna": "Natural, tidak mudah bleeding",
        Ketahanan: "Baik untuk indoor (tergantung media)",
        "Kompatibel mesin": "Printer pigment (konsultasi tipe)",
      },
    },

    // ===================== MEDIA PRINTING =====================
    {
      id: "md-ban-01",
      name: "Media Banner",
      category: "Media Printing",
      subcategory: "Banner",
      type: "media",
      highlights: ["Untuk indoor/outdoor", "Pilihan gramasi tersedia"],
      isBestseller: true,
    },
    {
      id: "md-sti-01",
      name: "Media Sticker",
      category: "Media Printing",
      subcategory: "Sticker",
      type: "media",
      highlights: ["Stiker label & branding", "Pilihan lem sesuai kebutuhan"],
      isFeatured: true,
    },
    {
      id: "md-vin-01",
      name: "Media Vinyl",
      category: "Media Printing",
      subcategory: "Vinyl",
      type: "media",
      highlights: ["Untuk cutting & printing", "Finishing rapi"],
    },
    {
      id: "md-acr-01",
      name: "Media Acrylic",
      category: "Media Printing",
      subcategory: "Acrylic",
      type: "media",
      highlights: ["Untuk signage premium", "Cocok untuk UV/flatbed"],
      isNew: true,
    },
    {
      id: "md-pp-01",
      name: "Media Photo Paper",
      category: "Media Printing",
      subcategory: "Photo paper",
      type: "media",
      highlights: ["Hasil foto tajam", "Pilihan glossy/matte"],
    },
    {
      id: "md-back-01",
      name: "Media Backlite",
      category: "Media Printing",
      subcategory: "Backlite",
      type: "media",
      highlights: ["Untuk lightbox", "Warna tetap hidup"],
    },
    {
      id: "md-can-01",
      name: "Media Canvas",
      category: "Media Printing",
      subcategory: "Canvas",
      type: "media",
      highlights: ["Tekstur premium", "Cocok untuk artwork/dekor"],
      isFeatured: true,
    },
  ];

  /** @type {Array<{id:string,name:string,quote:string,role:string}>} */
  const testimonials = [
    {
      id: "t-01",
      name: "Owner Printing A",
      role: "Jasa cetak banner & sticker",
      quote:
        "Mesinnya stabil untuk produksi harian. Tim GADING MURNI DGI responsif dan bantu setting sampai beres.",
    },
    {
      id: "t-02",
      name: "Workshop Apparel B",
      role: "DTF untuk kaos",
      quote:
        "Hasil DTF cerah, putihnya solid. Training-nya jelas jadi tim kami cepat bisa jalan.",
    },
    {
      id: "t-03",
      name: "Signage Studio C",
      role: "UV & rigid media",
      quote:
        "Finishing UV di acrylic bagus banget. Portofolio kami jadi naik kelas.",
    },
  ];

  /** @type {Array<{id:string,title:string,type:"hasil cetak"|"video mesin jalan"|"hasil customer"|"before after",desc:string,videoUrl?:string}>} */
  const portfolio = [
    {
      id: "p-01",
      title: "Sticker Cutting — Finishing Rapi",
      type: "hasil cetak",
      desc: "Contoh hasil sticker untuk branding produk UMKM.",
    },
    {
      id: "p-02",
      title: "Mesin UV Running — Demo Produksi",
      type: "video mesin jalan",
      desc: "Video demo mesin saat printing.",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    },
    {
      id: "p-03",
      title: "Hasil Customer — Banner Event",
      type: "hasil customer",
      desc: "Hasil produksi customer untuk kebutuhan event.",
    },
    {
      id: "p-04",
      title: "Before / After — Upgrade Mesin",
      type: "before after",
      desc: "Perbandingan hasil sebelum dan sesudah upgrade.",
    },
    {
      id: "p-05",
      title: "Acrylic Sign — UV Print",
      type: "hasil cetak",
      desc: "Contoh hasil UV printing di acrylic.",
    },
    {
      id: "p-06",
      title: "DTF Apparel — Warna Cerah",
      type: "hasil cetak",
      desc: "Hasil DTF untuk apparel, elastis dan tajam.",
    },
  ];

  /** @type {Array<{id:string,title:string,items:string[],highlight:string}>} */
  const promoPackages = [
    {
      id: "pk-01",
      title: "Paket Usaha Printing Pemula",
      highlight: "Cocok mulai dari 0",
      items: [
        "1 Mesin sesuai kebutuhan (konsultasi)",
        "Tinta + media awal",
        "Training & setup workflow",
        "Support after-sales",
      ],
    },
    {
      id: "pk-02",
      title: "Mesin + Tinta + Training",
      highlight: "Siap produksi",
      items: [
        "Paket mesin + tinta",
        "Training operator",
        "Panduan maintenance",
        "Rekomendasi media",
      ],
    },
    {
      id: "pk-03",
      title: "Diskon Pameran (GPPE)",
      highlight: "Untuk closing cepat",
      items: [
        "Promo harga khusus pameran",
        "Bonus item tertentu",
        "Booking unit (selama stok)",
      ],
    },
  ];

  const categories = {
    "Mesin Printing": [
      "Mesin UV",
      "Mesin Eco Solvent",
      "Mesin DTF",
      "Mesin Sublim",
      "Mesin Cutting",
      "Mesin Flatbed",
    ],
    "Sparepart & Head Printer": [
      "Printhead",
      "Mainboard",
      "Damper",
      "Ink pump",
      "Belt",
      "Motor",
    ],
    "Tinta Printing": ["Tinta UV", "Eco solvent", "Sublim", "DTF", "Pigment"],
    "Media Printing": [
      "Banner",
      "Sticker",
      "Vinyl",
      "Acrylic",
      "Photo paper",
      "Backlite",
      "Canvas",
    ],
  };

  return { SITE, products, categories, testimonials, portfolio, promoPackages };
})();

