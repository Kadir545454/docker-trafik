// 1. Haritayı Başlat (İstanbul Odaklı)
var map = L.map('map').setView([41.0082, 28.9784], 10);

// ----------------------------------------------------------------
// DEĞİŞİKLİK BURADA: KARANLIK HARİTA (Dark Matter) KULLANIYORUZ
// Böylece renkli trafik çizgileri çok net belli olacak.
// ----------------------------------------------------------------
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// ----------------------------------------------------------------
// TRAFİK VERİSİ
// ----------------------------------------------------------------
const API_KEY = '9ecda3a7-d9be-44ce-99a5-2bb9fca915ac'; 

// Trafik URL'si (Absolute modu: Trafik hızını net renklerle gösterir)
const trafficUrl = `https://api.tomtom.com/traffic/map/4/tile/flow/absolute/{z}/{x}/{y}.png?key=${API_KEY}&thickness=12`;

// API Key kontrolü ve katmanı ekleme
if (API_KEY) {
    L.tileLayer(trafficUrl, {
        opacity: 1, // Tam görünürlük
        maxZoom: 22
    }).addTo(map);
    console.log("Trafik katmanı (Dark Mode üzerinde) yüklendi.");
} else {
    alert("API Key Hatası!");
}

// Marker ekle
L.marker([41.0082, 28.9784]).addTo(map)
    .bindPopup('İstanbul - Trafik Durumu')
    .openPopup();

// İstanbul'a bir işaretçi
L.marker([41.0082, 28.9784]).addTo(map)
    .bindPopup('İstanbul Merkez')
    .openPopup();
