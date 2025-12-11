// 1. Haritayı Başlat (İstanbul Koordinatları)
var map = L.map('map').setView([41.0082, 28.9784], 10);

// 2. Temel Harita Katmanını Ekle (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// ----------------------------------------------------------------
// BURASI TRAFİK VERİSİ KISMI
// ----------------------------------------------------------------

// Senin TomTom API Anahtarın
const API_KEY = 'uWD6Bs17qsOMpQY9yMZJejwu6YnErjWk'; 

// DÜZELTME 1: 'relative0' yerine 'absolute' kullandık ve kalınlık (thickness) ekledik.
// Bu sayede yolları daha net göreceksin.
const trafficUrl = `https://api.tomtom.com/traffic/map/4/tile/flow/absolute/{z}/{x}/{y}.png?key=${API_KEY}&thickness=10`;

// DÜZELTME 2: Mantık hatasını düzelttik.
// Sadece "API_KEY boş değilse" kontrolü yapıyoruz.
if (API_KEY && API_KEY !== 'SENİN_TOMTOM_API_KEYİN_BURAYA') {
    L.tileLayer(trafficUrl, {
        opacity: 1, // Görünürlüğü tam açtık
        maxZoom: 22
    }).addTo(map);
    console.log("Trafik katmanı başarıyla yüklendi.");
} else {
    console.warn("API Key girilmemiş!");
    alert("Trafik verisi için API Key lazım.");
}

// İstanbul'a bir işaretçi
L.marker([41.0082, 28.9784]).addTo(map)
    .bindPopup('İstanbul Merkez')
    .openPopup();
