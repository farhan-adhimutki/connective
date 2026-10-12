# Connective.id
Landing page statis sesuai PRD: HTML, CSS, JavaScript murni. Tidak memerlukan build.

## Pratinjau lokal
Jalankan `python -m http.server 4173 --directory dist` dari folder ini lalu buka http://localhost:4173.
Berkas utama: `dist/index.html`. Folder `dist` dapat diunggah langsung ke hosting statis.

## Data yang masih perlu dilengkapi
- Isi nomor WhatsApp resmi (format internasional), email, dan handle Instagram dalam `dist/js/config.js`. Selama kosong, CTA menuju bagian kontak dengan pemberitahuan; tidak memakai nomor contoh.
- Ganti sampul editorial pada portofolio dengan foto asli yang sudah berizin. Nama lembaga/klien belum ditampilkan karena persetujuan belum disediakan.
- Rincian peran Connective, tanggal, lokasi, dan hasil acara perlu konfirmasi. Tidak ada angka atau testimoni rekaan.
- Warna dan font saat ini interpretasi visual PRD; ganti token pada base.css bila brand kit final tersedia.
- Integrasi analitik siap melalui event `connective:whatsapp-click`, Plausible, atau Umami bila script provider dipasang. Belum ada akun analitik terhubung.
- Domain Sites di metadata dapat diganti dengan domain resmi. Perbarui OG, schema, config, dan URL gambar bersama.
- Instagram Organization.sameAs ditambahkan dari handle terkonfirmasi; saat kosong tidak diterbitkan.

## Aset
Logo asli pengguna disalin tanpa perubahan. Ilustrasi rantai dekoratif dibuat dengan imagegen, bukan dokumentasi kegiatan. Prompt tersedia pada ASSETS.md.
Sampul portofolio dibuat dengan HTML/CSS dan diberi label “Sampul editorial”.

## Perilaku
Menu ponsel, navigasi aktif, scroll progress, preloader maksimum 1,08 detik dan dilewati dalam sesi yang sama, reveal sekali per elemen, parallax ringan, reduced motion, serta fallback konten tanpa JavaScript.
