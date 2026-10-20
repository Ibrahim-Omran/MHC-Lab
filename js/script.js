/* ============ Settings: change only this part ============ */
// Put the direct link to your APK here (GitHub Releases, Google Drive direct link, your own server...).
// While it is empty, the download buttons show a short message instead of a broken link.
const APK_URL = "https://drive.google.com/file/d/1DMsc4TDGBfg10MuueC5RoJHeAHQrjSe1/view?usp=sharing";

/* ============ Download buttons ============ */
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (toast.hidden = true), 4000);
}

document.querySelectorAll("[data-download]").forEach((link) => {
  if (APK_URL) {
    link.href = APK_URL;
    link.rel = "noopener";
    link.setAttribute("download", "");
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("رابط التحميل هيتضاف قريبًا.");
    });
  }
});

/* ============ Footer year ============ */
document.getElementById("year").textContent = new Date().getFullYear();
