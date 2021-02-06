## Lafzi JS 

Lafzi adalah sebuah tool pencari ayat Al-Qur'an dengan kata kata yang diingin kan 

## Install lafzi 

> npm install @fdciabdul/lafzi-js

## Contoh

```javascript
const cari = require("lafzi-js");

async function cariayat() {
  const cari = await cari.ayat("kun+ina");
  console.log(cari);
}

cariayat();

```

Maka result yang di hasilkan adalah dalam bentuk Array
```
{
    arab: 'وَقُلْنَا يَـٰٓـَٔادَمُ ٱسْكُنْ أَنتَ وَزَوْجُكَ ٱلْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَـٰذِهِ ٱلشَّجَرَةَ فَتَكُونَا مِنَ ٱلظَّـٰلِمِينَمِن قَبْلُ هُدًۭى لِّلنَّاسِ وَأَنزَلَ ٱلْفُرْقَانَ ۗ إِنَّ ٱلَّذِينَ كَفَرُوا۟ بِـَٔايَـٰتِ ٱللَّهِ لَهُمْ عَذَابٌۭ شَدِيدٌۭ ۗ وَٱللَّهُ عَزِيزٌۭ ذُو ٱنتِقَامٍوَإِذْ قَالَ ٱللَّهُ يَـٰعِيسَى ٱبْنَ مَرْيَمَ ءَأَنتَ قُلْتَ لِلنَّاسِ ٱتَّخِذُونِى وَأُمِّىَ إِلَـٰهَيْنِ مِن دُونِ ٱللَّهِ ۖ قَالَ سُبْحَـٰنَكَ مَا يَكُونُ لِىٓ أَنْ أَقُولَ مَا لَيْسَ لِى بِحَقٍّ ۚ إِن كُنتُ قُلْتُهُۥ فَقَدْ عَلِمْتَهُۥ ۚ تَعْلَمُ مَا فِى نَفْسِى وَلَآ أَعْلَمُ مَا فِى نَفْسِكَ ۚ إِنَّكَ أَنتَ عَلَّـٰمُ ٱلْغُيُوبِقُل لَّآ أَقُولُ لَكُمْ عِندِى خَزَآئِنُ ٱللَّهِ وَلَآ أَعْلَمُ ٱلْغَيْبَ وَلَآ أَقُولُ لَكُمْ إِنِّى مَلَكٌ ۖ إِنْ أَتَّبِعُ إِلَّا مَا يُوحَىٰٓ إِلَىَّ ۚ قُلْ هَلْ يَسْتَوِى ٱلْأَعْمَىٰ وَٱلْبَصِيرُ ۚ أَفَلَا تَتَفَكَّرُونَأَن تَقُولُوٓا۟ إِنَّمَآ أُنزِلَ ٱلْكِتَـٰبُ عَلَىٰ طَآئِفَتَيْنِ مِن قَبْلِنَا وَإِن كُنَّا عَن دِرَاسَتِهِمْ لَغَـٰفِلِينَوَيَـٰٓـَٔادَمُ ٱسْكُنْ أَنتَ وَزَوْجُكَ ٱلْجَنَّةَ فَكُلَا مِنْ حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَـٰذِهِ ٱلشَّجَرَةَ فَتَكُونَا مِنَ ٱلظَّـٰلِمِينَوَإِذْ أَخَذَ رَبُّكَ مِنۢ بَنِىٓ ءَادَمَ مِن ظُهُورِهِمْ ذُرِّيَّتَهُمْ وَأَشْهَدَهُمْ عَلَىٰٓ أَنفُسِهِمْ أَلَسْتُ بِرَبِّكُمْ ۖ قَالُوا۟ بَلَىٰ ۛ شَهِدْنَآ ۛ أَن تَقُولُوا۟ يَوْمَ ٱلْقِيَـٰمَةِ إِنَّا كُنَّا عَنْ هَـٰذَا غَـٰفِلِينَيَحْذَرُ ٱلْمُنَـٰفِقُونَ أَن تُنَزَّلَ عَلَيْهِمْ سُورَةٌۭ تُنَبِّئُهُم بِمَا فِى قُلُوبِهِمْ ۚ قُلِ ٱسْتَهْزِءُوٓا۟ إِنَّ ٱللَّهَ مُخْرِجٌۭ مَّا تَحْذَرُونَوَمَا كَانَ ٱللَّهُ لِيُضِلَّ قَوْمًۢا بَعْدَ إِذْ هَدَىٰهُمْ حَتَّىٰ يُبَيِّنَ لَهُم مَّا يَتَّقُونَ ۚ إِنَّ ٱللَّهَ بِكُلِّ شَىْءٍ عَلِيمٌأَكَانَ لِلنَّاسِ عَجَبًا أَنْ أَوْحَيْنَآ إِلَىٰ رَجُلٍۢ مِّنْهُمْ أَنْ أَنذِرِ ٱلنَّاسَ وَبَشِّرِ ٱلَّذِينَ ءَامَنُوٓا۟ أَنَّ لَهُمْ قَدَمَ صِدْقٍ عِندَ رَبِّهِمْ ۗ قَالَ ٱلْكَـٰفِرُونَ إِنَّ هَـٰذَا لَسَـٰحِرٌۭ مُّبِينٌ',
    indo: 'Dan Kami berfirman: "Hai Adam, diamilah oleh kamu dan isterimu surga ini, dan makanlah makanan-makanannya yang banyak lagi baik dimana saja yang kamu sukai, dan janganlah kamu dekati pohon ini, yang menyebabkan kamu termasuk orang-orang yang zalim.sebelum (Al Quran), menjadi petunjuk bagi manusia, dan Dia menurunkan Al Furqaan. Sesungguhnya orang-orang yang kafir terhadap ayat-ayat Allah akan memperoleh siksa yang berat; dan Allah Maha Perkasa lagi mempunyai balasan (siksa).Dan (ingatlah) ketika Allah berfirman: "Hai Isa putera Maryam, adakah kamu mengatakan kepada manusia: "Jadikanlah aku dan ibuku dua orang tuhan selain Allah?". Isa menjawab: "Maha Suci Engkau, tidaklah patut bagiku mengatakan apa yang bukan hakku (mengatakannya). Jika aku pernah mengatakan maka tentulah Engkau mengetahui apa yang ada pada diriku dan aku tidak mengetahui apa yang ada pada diri Engkau. Sesungguhnya Engkau Maha Mengetahui perkara yang ghaib-ghaib".Katakanlah: Aku tidak mengatakan kepadamu, bahwa perbendaharaan Allah ada padaku, dan tidak (pula) aku mengetahui yang ghaib dan tidak (pula) aku mengatakan kepadamu bahwa aku seorang malaikat. Aku tidak mengikuti kecuali apa yang diwahyukan kepadaku. Katakanlah: "Apakah sama orang yang buta dengan yang melihat?" Maka apakah kamu tidak memikirkan(nya)?"(Kami turunkan al-Quran itu) agar kamu (tidak) mengatakan: "Bahwa kitab itu hanya diturunkan kepada dua golongan saja sebelum kami, dan sesungguhnya kami tidak memperhatikan apa yang mereka baca.(Dan Allah berfirman): "Hai Adam bertempat tinggallah kamu dan isterimu di surga serta makanlah olehmu berdua (buah-buahan) di mana saja yang kamu sukai, dan janganlah kamu berdua mendekati pohon ini, lalu menjadilah kamu berdua termasuk orang-orang yang zalim".Dan (ingatlah), ketika Tuhanmu mengeluarkan keturunan anak-anak Adam dari sulbi mereka dan Allah mengambil kesaksian terhadap jiwa mereka (seraya berfirman): "Bukankah Aku ini Tuhanmu?" Mereka menjawab: "Betul (Engkau Tuhan kami), kami menjadi saksi". (Kami lakukan yang demikian itu) agar di hari kiamat kamu tidak mengatakan: "Sesungguhnya kami (bani Adam) adalah orang-orang yang lengah terhadap ini (keesaan Tuhan)",Orang-orang yang munafik itu takut akan diturunkan terhadap mereka sesuatu surat yang menerangkan apa yang tersembunyi dalam hati mereka. Katakanlah kepada mereka: "Teruskanlah ejekan-ejekanmu (terhadap Allah dan rasul-Nya)". Sesungguhnya Allah akan menyatakan apa yang kamu takuti itu.Dan Allah sekali-kali tidak akan menyesatkan suatu kaum, sesudah Allah memberi petunjuk kepada mereka sehingga dijelaskan-Nya kepada mereka apa yang harus mereka jauhi. Sesungguhnya Allah Maha Mengetahui segala sesuatu.Patutkah menjadi keheranan bagi manusia bahwa Kami mewahyukan kepada seorang laki-laki di antara mereka: "Berilah peringatan kepada manusia dan gembirakanlah orang-orang beriman bahwa mereka mempunyai kedudukan yang tinggi di sisi Tuhan mereka". Orang-orang kafir berkata: "Sesungguhnya orang ini (Muhammad) benar-benar adalah tukang sihir yang nyata".'
  }

```
