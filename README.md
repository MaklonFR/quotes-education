# Kata Bijak Pendidikan

Aplikasi React sederhana untuk menampilkan kumpulan kata bijak pendidikan dengan fitur pagination. Menggunakan Tailwind CSS untuk styling.

## Fitur

- Menampilkan daftar kata bijak pendidikan
- Pagination (10 quotes per halaman)
- Responsive design dengan Tailwind CSS

## Instalasi

1. **Clone repository ini:**
   ```sh
   git clone <url-repo-anda>
   cd quotes/inspirasi-kata-bijak
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Jalankan aplikasi:**
   ```sh
   npm run dev
   ```
   Buka browser dan akses [http://localhost:5173](http://localhost:5173)

## Struktur Folder

```
inspirasi-kata-bijak/
├── public/
│   └── icon.png
├── src/
│   ├── components/
│   │   └── QuoteCard.jsx
│   ├── data/
│   │   └── quotes.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Konfigurasi Tailwind CSS

Pastikan file `src/index.css` berisi:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Dan file `tailwind.config.js`:
```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Lisensi

Proyek ini bebas digunakan untuk pembelajaran.