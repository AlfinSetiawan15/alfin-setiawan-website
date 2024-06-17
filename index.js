// Saya buat dahulu onclick="showSidebar()" di bagian hamburger menu HTML, fungsinya agar bisa diklik

function showSidebar() {
  //lalu buat function showSidebar()
  const sidebar = document.querySelector(".sidebar"); // masukan querySelector(".sidebar") ke dalam variabel sidebar
  sidebar.style.display = "flex"; // lalu kita inisialisasi ketika hamburger menu diklik, sidebarnya akan terlihat
}

// Saya buat dahulu onclick="hideSidebar()" di bagian close menu HTML, fungsinya agar bisa diklik

function hideSidebar() {
  //lalu buat function hideSidebar()
  const sidebar = document.querySelector(".sidebar"); // masukan querySelector(".sidebar") ke dalam variabel sidebar
  sidebar.style.display = "none"; // lalu kita inisialisasi ketika close menu diklik, sidebarnya akan hilang
}

// DIBAWAH ADALAH KODE DOM (DOCUMENT OBJECT MODEL) = UNTUK MEMANIPULASI HTML LEWAT BAHASA PEMROGRAMAN JAVASCRIPT
// Pertama-tama kita buat dahulu di elemen html dengan ID = #btn1 , #btn2, #btn3

const btn1 = document.getElementById("btn1"); //Masukkan document.getElementById kedalam variabel btn1
btn1.style.padding = "8px 16px"; //setelah ID = #btn1 kita select selanjutnya kita beri style yang kita inginkan lewat javascript seperti padding, color, background, dll
btn1.style.color = "white";
btn1.style.background = "black";

const btn2 = document.getElementById("btn2"); //Masukkan document.getElementById kedalam variabel btn2
btn2.style.padding = "8px 16px"; //setelah ID = #btn2 kita select selanjutnya kita beri style yang kita inginkan lewat javascript seperti padding, color, background, dll
btn2.style.color = "white";
btn2.style.background = "black";

const btn3 = document.getElementById("btn3"); //Masukkan document.getElementById kedalam variabel btn3
btn3.style.padding = "8px 16px"; //setelah ID = #btn3 kita select selanjutnya kita beri style yang kita inginkan lewat javascript seperti padding, color, background, dll
btn3.style.color = "white";
btn3.style.background = "black";

// Sebagai contoh saya ingin mengubah buttonnya menjadi
// padding = "8px 16px"
// color = "white"
// background = "black"
