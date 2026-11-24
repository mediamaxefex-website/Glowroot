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

document.addEventListener("click", function (event) {
  const link = event.target.closest("a[href]");
  if (!link || typeof window.gtag !== "function") return;
  const host = link.hostname.replace(/^www\./, "");
  if (host === "maps.app.goo.gl" || host === "maps.google.com" ||
      (host === "google.com" && link.pathname.startsWith("/maps"))) {
    window.gtag("event", "google_maps_click", { map_location: link.href.split("?")[0] });
  }
}, true);
