# Validasi Connective.id

Diuji 12 Oktober 2026 menggunakan Chromium lokal dan Lighthouse mobile (simulasi jaringan/perangkat; bukan pengukuran pengguna nyata).

- Responsif 360, 768, 1280 px: lulus tanpa overflow horizontal.
- Menu ponsel dan Escape: lulus.
- Reduced motion: lulus.
- Konten dan navigasi tanpa JavaScript: lulus.
- Format dan encoding pesan WhatsApp: lulus dengan konfigurasi uji di memori browser, tidak disimpan sebagai kontak produksi.
- Tanpa nomor resmi: tombol mengarah ke pemberitahuan kontak, tidak membuka nomor rekaan.
- JavaScript syntax dan browser console: lulus tanpa error.
- Lighthouse: Performance 91, Accessibility 100, Best Practices 100, SEO 100.
- LCP 2,8 detik: belum memenuhi target ketat PRD <2,5 detik pada server lokal ini.
- CLS 0,006: memenuhi target <0,1.
- Transfer halaman awal sekitar 213 KiB; gambar hero WebP 28–50 KB.
- Screenshot desktop/ponsel dan laporan mentah tersimpan lokal pada qa-output/ (tidak diterbitkan).

## Belum terverifikasi / menunggu data
- Safari iOS, Firefox, dan Edge belum diuji.
- Nomor WhatsApp, email, handle Instagram resmi belum tersedia.
- Foto asli, izin penggunaan nama/logo klien, serta rincian peran acara belum tersedia. Sampul editorial bukan dokumentasi kegiatan.
- Analitik belum terhubung ke akun provider.
- Pengukuran ulang Lighthouse pada domain produksi dianjurkan setelah aset/kontak final.