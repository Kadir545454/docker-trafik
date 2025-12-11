// 1. Haritayı Başlat (İstanbul Koordinatları: 41.0082, 28.9784)
// setView([enlem, boylam], yakınlaştırma_seviyesi)
var map = L.map('map').setView([41.0082, 28.9784], 10);

// 2. Temel Harita Katmanını Ekle (OpenStreetMap - Ücretsiz)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// ----------------------------------------------------------------
// BURASI TRAFİK VERİSİ KISMI
// ----------------------------------------------------------------

// DİKKAT: Buraya TomTom sitesinden alacağın kendi API KEY'ini yazmalısın.
// Şimdilik örnek bir key yapısı koyuyorum (bu çalışmaz, kendininkini almalısın).
const API_KEY = 'SENİN_TOMTOM_API_KEYİN_BURAYA'; 

// Trafik Katmanı URL Yapısı (Backend mantığı: x, y, z koordinatlarına göre resim ister)
const trafficUrl = `https://api.tomtom.com/traffic/map/4/tile/flow/relative0/{z}/{x}/{y}.png?key=${API_KEY}`;

// Eğer API Key'in varsa trafik katmanını haritaya ekle
if (API_KEY !== 'SENİN_TOMTOM_API_KEYİN_BURAYA') {
    L.tileLayer(trafficUrl, {
        opacity: 0.7, // Trafik renklerinin şeffaflığı
        maxZoom: 22
    }).addTo(map);
    console.log("Trafik katmanı yüklendi.");
} else {
    console.warn("Lütfen script.js dosyasına geçerli bir API Key girin!");
    alert("Trafik verisini görmek için script.js dosyasına API Key eklemelisin!");
}

// İstanbul'a bir işaretçi (Marker) koyalım
L.marker([41.0082, 28.9784]).addTo(map)
    .bindPopup('İstanbul Merkez')
    .openPopup();
