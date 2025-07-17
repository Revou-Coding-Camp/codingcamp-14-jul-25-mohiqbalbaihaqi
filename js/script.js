// console.log("JavaScript is working");
let data = [];

// Set Nama Pengguna pada Welcome Page
function setNamaPengguna() {
  const userName = prompt("Masukkan Nama Pengguna:");
  if (userName && userName.trim() !== "") {
    document.getElementById("user-name").textContent = userName.trim();
  }
}

// Jalankan saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  setNamaPengguna();
});

// Hamburger Menu dengan Icon Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  let isMenuOpen = false;

  hamburgerBtn.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      mobileMenu.classList.remove("hidden");
      // Ganti icon ke X
      hamburgerIcon.className = "fas fa-times";
    } else {
      mobileMenu.classList.add("hidden");
      // Ganti icon ke hamburger
      hamburgerIcon.className = "fas fa-bars";
    }
  });
});

// Function to close mobile menu
function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  mobileMenu.classList.add("hidden");
  // Reset icon ke hamburger
  hamburgerIcon.className = "fas fa-bars";
}

function addData() {
  const InputNama = document.getElementById("input-nama");
  const InputDate = document.getElementById("input-date");
  const RadioGender = document.querySelector("input[name='gender']:checked");
  const Pesan = document.getElementById("pesan");

  if (
    InputNama.value === "" ||
    InputDate.value === "" ||
    !RadioGender ||
    Pesan.value === ""
  ) {
    alert("Please fill in all fields");
  } else {
    const newData = {
      id: Date.now(),
      nama: InputNama.value,
      date: InputDate.value,
      gender: RadioGender ? RadioGender.value : "No Gender Selected",
      pesan: Pesan.value,
    };
    data.push(newData);

    displayData(newData);

    resetForm();
  }

  //   console.log(
  //     InputNama.value,
  //     InputDate.value,
  //     RadioGender ? RadioGender.value : "No Gender Selected",
  //     Pesan.value
  //   );
}

function displayData(data) {
  const showMessage = document.getElementById("show-message");

  showMessage.innerHTML = `
    <b>Current Time :</b> ${new Date().toUTCString()} <br><br>
    Nama          : ${data.nama} <br>
    Tanggal       : ${data.date} <br>
    Jenis Kelamin : ${data.gender} <br>
    Pesan         : ${data.pesan} <br>
  `;

  // showMessage.innerHTML = hasilForm;
}

// reset form
function resetForm() {
  document.getElementById("input-nama").value = "";
  document.getElementById("input-date").value = "";
  document.querySelector("input[name='gender']:checked").checked = false;
  document.getElementById("pesan").value = "";
}
