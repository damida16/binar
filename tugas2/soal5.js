const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];
function getInfoPenjualan(dataPenjualan) {
  if (!Array.isArray(dataPenjualan) || dataPenjualan.length === 0) {
    return "Data tidak valid";
  }

  let totalModal = 0;
  let totalKeuntungan = 0;
  const produkTerjual = {};
  const penulisTerjual = {};

  for (const product of dataPenjualan) {
    const modal = product.hargaBeli * product.totalTerjual;
    const keuntungan =
      (product.hargaJual - product.hargaBeli) * product.totalTerjual;

    totalModal += modal;
    totalKeuntungan += keuntungan;

    if (!produkTerjual[product.namaProduk]) {
      produkTerjual[product.namaProduk] = 0;
    }
    produkTerjual[product.namaProduk] += product.totalTerjual;

    if (!penulisTerjual[product.penulis]) {
      penulisTerjual[product.penulis] = 0;
    }
    penulisTerjual[product.penulis] += product.totalTerjual;
  }

  const produkBukuTerlaris = Object.keys(produkTerjual).reduce((a, b) =>
    produkTerjual[a] > produkTerjual[b] ? a : b
  );

  const penulisTerlaris = Object.keys(penulisTerjual).reduce((a, b) =>
    penulisTerjual[a] > penulisTerjual[b] ? a : b
  );

  const persentaseKeuntungan =
    ((totalKeuntungan / totalModal) * 100).toFixed(2) + "%";

  return {
    totalKeuntungan: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(totalKeuntungan),
    totalModal: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(totalModal),
    persentaseKeuntungan,
    produkBukuTerlaris,
    penulisTerlaris,
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
