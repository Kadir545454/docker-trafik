// 1. Haritayı Başlat (İstanbul Odaklı)
var map = L.map('map').setView([41.0082, 28.9784], 10);

// ----------------------------------------------------------------
// ZEMİN HARİTASI: AYDINLIK VE SADE (IBB TARZI)
// 'CartoDB Positron' kullanıyoruz. İBB haritası gibi temiz ve beyazdır.
// ----------------------------------------------------------------
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// ----------------------------------------------------------------
// TRAFİK VERİSİ (TOMTOM)
// ----------------------------------------------------------------
const API_KEY = '9ecda3a7-d9be-44ce-99a5-2bb9fca915ac'; 

// 'absolute' modu: Hızı kesin renklerle (Yeşil/Kırmızı) gösterir.
// thickness=10: Çizgileri biraz kalınlaştırır ki net görünsün.
const trafficUrl = `https://api.tomtom.com/traffic/map/4/tile/flow/absolute/{z}/{x}/{y}.png?key=${API_KEY}&thickness=10`;

// Trafik katmanını haritaya ekle
L.tileLayer(trafficUrl, {
    opacity: 1, // Şeffaflık yok, renkler net olsun
    maxZoom: 22
}).addTo(map);

console.log("İBB Tarzı Trafik Haritası Yüklendi.");

// İstanbul Merkez İşaretçisi
L.marker([41.0082, 28.9784]).addTo(map)
    .bindPopup('<b>İstanbul Canlı Trafik</b><br>Veriler güncel.')
    .openPopup();
