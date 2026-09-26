// =========================================================================
// SEMUA ISI UNDANGAN DIATUR DI SINI.
// Ganti teks di bawah sesuai acara khitanan kamu, lalu simpan.
// Tidak perlu menyentuh file .vue untuk mengubah isi undangan.
// =========================================================================

export const config = {
  // Anak yang dikhitan
  child: {
    fullName: 'Muhammad Rasya Athallah',
    nickname: 'Rasya',
    childOrder: 'Putra Pertama',
    parents: 'Bapak Andi Wijaya & Ibu Sarah Puspita',
    photo: '/images/child-default.jpg', // path foto ananda
    quote: 'Semoga menjadi anak yang sholeh, berbakti kepada orang tua, agama, nusa dan bangsa.'
  },

  // Waktu & tempat acara
  event: {
    // Format ISO untuk hitung mundur (WIB = +07:00)
    dateTimeISO: '2026-12-20T09:00:00+07:00',
    dateLabel: 'Minggu, 20 Desember 2026',
    timeLabel: '09.00 WIB – Selesai',
    venueName: 'Kediaman Bapak Andi Wijaya',
    venueAddress: 'Jl. Merpati Indah No. 12, Sidoarjo, Jawa Timur',
    mapsUrl: 'https://maps.google.com/?q=Sidoarjo,Jawa+Timur',
    dresscode: 'Batik / Busana Muslim / Rapi & Sopan',
    agenda: [
      { time: '08.30 WIB', title: 'Kedatangan Tamu Undangan & Pembacaan Sholawat' },
      { time: '09.00 WIB', title: 'Prosesi Tasyakuran Khitanan' },
      { time: '10.30 WIB', title: 'Ramah Tamah & Santap Siang' },
      { time: '12.30 WIB', title: 'Doa Penutup & Acara Selesai' }
    ]
  },

  // Kutipan / ayat pembuka
  quote: {
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nوَقُلْ رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا',
    translation: '"Dan katakanlah: Ya Tuhanku, tambahkanlah kepadaku ilmu pengetahuan dan berilah aku pemahaman yang baik."',
    source: 'QS. Thaha: 114'
  },

  // Amplop & Kado Digital (Tanda Kasih)
  digitalGift: {
    enabled: true,
    title: 'Tanda Kasih Digital',
    description: 'Doa restu Anda merupakan karunia terindah bagi kami. Namun jika ingin memberikan tanda kasih untuk ananda, dapat melalui rekening/e-wallet di bawah ini:',
    accounts: [
      {
        bank: 'Bank BCA',
        accountNumber: '1234567890',
        holder: 'Andi Wijaya',
        icon: 'bca'
      },
      {
        bank: 'Bank Mandiri',
        accountNumber: '0987654321',
        holder: 'Sarah Puspita',
        icon: 'mandiri'
      },
      {
        bank: 'GoPay / OVO',
        accountNumber: '081234567890',
        holder: 'Andi Wijaya',
        icon: 'wallet'
      }
    ],
    giftAddress: {
      recipient: 'Ananda Rasya (c/o Bpk Andi Wijaya)',
      address: 'Jl. Merpati Indah No. 12, Sidoarjo, Jawa Timur (Kode Pos 61211)',
      phone: '081234567890'
    }
  },

  // Galeri foto (isi array kosong -> akan tampil placeholder ilustrasi)
  gallery: [
    { src: '/images/child-default.jpg', caption: 'Syukuran & Doa Bersama Ananda Rasya' }
  ],

  // Pengirim / tuan rumah
  host: {
    familyName: 'Keluarga Besar Bapak Andi Wijaya & Ibu Sarah Puspita',
    closingMessage:
      'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada putra kami.'
  },

  // Kontak untuk konfirmasi kehadiran via WhatsApp
  whatsapp: {
    number: '6281234567890',
    enabled: true
  },

  // Musik latar (opsional)
  music: {
    src: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=traditional-acoustic-113524.mp3',
    enabled: true
  },

  seo: {
    title: 'Undangan Khitanan — Ananda Muhammad Rasya Athallah',
    ogDescription: 'Dengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara Tasyakuran Khitanan putra kami.'
  }
}

