let random = Math.floor(Math.random() * 1000);

alert('Random son: ' + random);

let tasdiqlash = confirm('Shu sonni 2 kopaytirib 2 ga bolmoqchimisiz!');

if (tasdiqlash) {
  alert(`Random sonni 2ga kopaytirdik shu natija chiqdi: ${random * 2};
  Random sonni 2ga boldik shu son chiqdi: ${random / 2}
  Random sonni 2ga boldik qoldiq shu son: ${random % 2}`);
} else {
  alert('Amal tasdiqlanmadi');
}
