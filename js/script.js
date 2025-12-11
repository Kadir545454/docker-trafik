// 1. Haritayı Başlat (İstanbul)
var map = L.map('map').setView([41.0082, 28.9784], 10);

// ----------------------------------------------------------------
// HARİTA ZEMİNİ (Esri Dark Gray - Koyu Gri)
// Simsiyah değil, koyu gri olduğu için yollar daha net görünür.
// ----------------------------------------------------------------
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
}).addTo(map);

// ----------------------------------------------------------------
// TRAFİK VERİSİ (ENGEL YOK, DİREKT YÜKLENİR)
// ----------------------------------------------------------------
const API_KEY = '9ecda3a7-d9be-44ce-99a5-2bb9fca915ac'; 

// Trafik URL'si
const trafficUrl = `https://api.tomtom.com/traffic/map/4/tile/flow/absolute/{z}/{x}/{y}.png?key=${API_KEY}&thickness=12`;

// Koşulsuz şartsız trafik katmanını ekle
L.tileLayer(trafficUrl, {
    opacity: 1, 
    maxZoom: 22
}).addTo(map);

console.log("Trafik katmanı yüklendi.");

// İşaretçi
L.marker([41.0082, 28.9784]).addTo(map)
    .bindPopup('İstanbul Trafik Durumu')
    .openPopup();
