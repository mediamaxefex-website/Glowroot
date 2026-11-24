window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag("js", new Date());
gtag("config", "G-50J0C8BFDF");

document.addEventListener("click", function (event) {
  const link = event.target.closest("a[data-enquiry]");
  if (link) {
    gtag("event", link.dataset.enquiry + "_enquiry_attempt", { contact_method: "whatsapp" });
  }
});
