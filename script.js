let produk = [
  {
    nama: "Pterodacty Ram 1",
    harga: 1000,
    gambar: "https://files.catbox.moe/nigm5a.jpeg",
    tipe: "Privat"
  },
  {
    nama: "Pterodactyl Ram 2",
    harga: 2000,
    gambar: "https://files.catbox.moe/nigm5a.jpeg",
    tipe: "Privat"
  },
  {
    nama: "Pterodactyl Ram 3",
    harga: 3000,
    gambar: "https://files.catbox.moe/nigm5a.jpeg",
    tipe: "Privat"
  },
  {
    nama: "Pterodactyl Ram 4",
    harga: 4000,
    gambar: "https://files.catbox.moe/nigm5a.jpeg",
    tipe: "Privat"
  },
  {
    nama: "Pterodactyl Ram 5",
    harga: 5000,
    gambar: "https://files.catbox.moe/nigm5a.jpeg",
    tipe: "Privat"
  },
  {
    nama: "Pterodactyl Ram 6",
    harga: 6000,
    gambar: "https://files.catbox.moe/nigm5a.jpeg",
    tipe: "Privat"
  },
  {
    nama: "Pterodactyl Ram 7",
    harga: 7000,
    gambar: "https://files.catbox.moe/nigm5a.jpeg",
    tipe: "Privat"
  },
  {
    nama: "Pterodactyl Ram 9",
    harga: 9000,
    gambar: "https://files.catbox.moe/nigm5a.jpeg",
    tipe: "Privat"
  },
  {
    nama: "Pterodactyl Ram Unli",
    harga: 10000,
    gambar: "https://files.catbox.moe/nigm5a.jpeg",
    tipe: "Privat"
  }
];

function tampilkanProduk() {
  let html = "";
  produk.forEach(function (item) {
    html += `
      <div class="produk-item ${item.tipe}">
        <img src="${item.gambar}" alt="${item.nama}">
        <h2>${item.nama}</h2>
        <p>Harga: Rp ${item.harga}</p>
        <p class="tipe-produk">Tipe: ${item.tipe}</p>
        <button onclick="beliProduk('${item.nama}', ${item.harga})">Beli Sekarang</button>
      </div>
    `;
  });
  document.querySelector(".produk-list").innerHTML = html;
}

function cariProduk() {
  let kataKunci = document.getElementById("cari").value.toLowerCase();
  let hasil = produk.filter(function (item) {
    return item.nama.toLowerCase().includes(kataKunci);
  });
  let html = "";
  hasil.forEach(function (item) {
    html += `
      <div class="produk-item ${item.tipe}">
        <img src="${item.gambar}" alt="${item.nama}">
        <h2>${item.nama}</h2>
        <p>Harga: Rp ${item.harga}</p>
        <p class="tipe-produk">Tipe: ${item.tipe}</p>
        <button onclick="beliProduk('${item.nama}', ${item.harga})">Beli Sekarang</button>
      </div>
    `;
  });
  document.querySelector(".produk-list").innerHTML = html;
}

function beliProduk(nama, harga) {
  // Tampilkan notifikasi pengisian
  document.querySelector(".notifikasi").style.display = "block";
  
  // Tambahkan event listener untuk tombol kirim data
  document.getElementById("kirim-data").addEventListener("click", function (e) {
    e.preventDefault();
    
    // Ambil data pengisian
    let namaPembeli = document.getElementById("nama-pembeli").value;
    let nomorWhatsApp = document.getElementById("nomor-whatsapp").value;
    let jumlahProduk = document.getElementById("jumlah-produk").value;
    
    // Kirim data ke WhatsApp Anda
    let pesan = `*Halo, saya ingin membeli \`Panel ${nama}\`.*

*Nama:* \`${namaPembeli}\`
*Nomor WhatsApp:* \`${nomorWhatsApp}\`
*Jumlah Produk:* \`${jumlahProduk}\`

Terima kasih!`;
    let link = `https://wa.me/62881026358641?text=${encodeURIComponent(pesan)}`;
    window.open(link, "_blank");
    
    // Tutup notifikasi pengisian
    document.querySelector(".notifikasi").style.display = "none";
  });
}

document.getElementById("tombol-cari").addEventListener("click", function (e) {
  e.preventDefault();
  cariProduk();
});

tampilkanProduk();

// Tambahkan event listener untuk tombol tutup notifikasi
document.querySelector(".tutup-notifikasi").addEventListener("click", function () {
  document.querySelector(".notifikasi").style.display = "none";
});