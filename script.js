const content = document.getElementById('content');
const buttons = document.querySelectorAll('.buttons button');

const kataKeren = {
  1: "“Jadilah seperti Loppy, yang melompat penuh semangat walau dunia berwarna pink.” 💖",
  2: "“Keceriaan itu sederhana, cukup tersenyum dan nikmati hidup seperti Loppy yang lucu.” 😊",
  3: "“Ketika kamu percaya pada diri sendiri, tidak ada yang tidak mungkin, bahkan terbang setinggi kelinci!” 🐇✨",
  4: "“Kehidupan itu manis, seperti warna pink dan kelembutan kelinci kecil yang tak kenal lelah.” 🌸"
};

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.getAttribute('data-page');
    content.textContent = kataKeren[page] || "Kata-kata keren belum tersedia.";
  });
});
