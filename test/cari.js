const cari = require("./src");

async function cariayat() {
  const ayat = await cari.ayat("laqod+kana");
  console.log(ayat);
}

cariayat();
