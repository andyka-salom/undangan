# Undangan Khitanan Online

Undangan digital berbasis Vue 3 + Vite + Tailwind CSS. Siap dibangun (build) untuk production dan di-hosting sebagai situs statis.

## 1. Jalankan di komputer

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`. Tambahkan `?to=Nama+Tamu` di URL untuk menguji nama tamu personal, contoh:
`http://localhost:5173/?to=Budi+Santoso`

## 2. Ubah isi undangan

Semua teks, tanggal, lokasi, dan kontak diatur di satu file:

```
src/data/config.js
```

Cukup edit nilai di file itu — nama anak, nama orang tua, tanggal & jam acara (`dateTimeISO` dipakai untuk hitung mundur, jadi pastikan formatnya benar, contoh `2026-12-20T09:00:00+07:00`), alamat, link Google Maps, susunan acara, kutipan/ayat, dan nomor WhatsApp untuk konfirmasi kehadiran.

### Menambahkan foto
- Foto anak: taruh file di `public/images/`, lalu isi `child.photo` di config, contoh `'/images/anak.jpg'`.
- Galeri: isi array `gallery` di config dengan `{ src: '/images/foto1.jpg', caption: '...' }`. Jika dikosongkan, bagian galeri akan menampilkan placeholder otomatis.

### Musik latar (opsional)
Taruh file mp3 di `public/audio/`, isi `music.src` (contoh `/audio/latar.mp3`) dan set `music.enabled: true` di config. Tombol musik akan muncul melayang di pojok kanan bawah setelah undangan dibuka.

## 3. Build untuk production

```bash
npm run build
```

Hasil build ada di folder `dist/` — folder ini yang di-upload ke hosting. Untuk melihat hasil build secara lokal sebelum deploy:

```bash
npm run preview
```

## 4. Deploy (gratis, tanpa server)

Situs ini murni statis (HTML/CSS/JS), jadi bisa langsung di-deploy ke:

- **Vercel**: import repo lalu Vercel otomatis mendeteksi Vite (`npm run build`, output `dist`).
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **Cloudflare Pages / GitHub Pages**: sama, upload isi folder `dist/`.

Kalau mau kirim undangan personal per tamu, cukup tambahkan parameter `?to=` di URL saat membagikan link, contoh:
`https://undangan-kamu.vercel.app/?to=Keluarga+Besar+Pak+Budi`

## 5. Tentang konfirmasi kehadiran (RSVP)

Form RSVP dan dinding ucapan menyimpan data ke **localStorage browser** — artinya data hanya tersimpan di perangkat tamu yang mengisi, dan tuan rumah **tidak otomatis menerima notifikasi**. Ini sengaja dibuat tanpa backend agar bisa langsung di-hosting gratis.

Dua cara agar konfirmasi benar-benar sampai ke tuan rumah:

1. **Paling praktis**: aktifkan `whatsapp.enabled: true` dan isi `whatsapp.number` di config. Tombol "Konfirmasi via WhatsApp" akan membuka chat WhatsApp berisi pesan konfirmasi otomatis ke nomor tuan rumah.
2. **Terpusat untuk semua tamu**: hubungkan form ke layanan seperti Google Sheets (via Google Apps Script), Firebase, atau Supabase. Ganti fungsi `addWish` di `src/composables/useWishes.js` dengan `fetch()` ke endpoint tersebut.

## 6. Struktur folder

```
src/
  data/config.js        <- isi & pengaturan undangan (edit di sini)
  components/           <- tiap bagian undangan (cover, countdown, RSVP, dst.)
  composables/           <- logika hitung mundur, nama tamu, dan wishes
  App.vue                <- merangkai semua bagian
  style.css              <- gaya global + animasi
public/                  <- taruh foto & audio di sini
```

## 7. Kalau halaman blank / kosong

1. Buka DevTools browser (`F12`) → tab **Console**, lihat pesan error (kalau ada isian yang salah di `config.js`, sekarang akan muncul pesan error di layar, bukan halaman kosong lagi).
2. Hentikan dev server (`Ctrl+C`), hapus cache Vite, lalu jalankan ulang — ini paling sering menyelesaikan blank page setelah banyak edit file:
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```
3. Hard refresh browser: `Ctrl+Shift+R` (Windows/Linux) atau `Cmd+Shift+R` (Mac).
4. Pastikan tiap value di `config.js` diapit tanda kutip `'...'` dan diakhiri koma `,` seperti isian aslinya.

## 8. Tumpukan teknologi

- Vue 3 (`<script setup>`)
- Vite
- Tailwind CSS
- `canvas-confetti` (efek konfeti saat konfirmasi terkirim)
