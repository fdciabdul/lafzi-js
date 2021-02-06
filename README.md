## Lafzi JS 

Lafzi adalah sebuah tool pencari ayat Al-Qur'an dengan kata kata yang diingin kan 

## Install lafzi 

> npm install lafzi-js

## Contoh

```javascript
const cari = require("lafzi-js");

async function cariayat() {
  const cari = await cari.ayat("kun+ina");
  console.log(cari);
}

cariayat();

```
