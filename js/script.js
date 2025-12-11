// 1. Haritayı Başlat
var map = L.map('map').setView([41.0082, 28.9784], 10);

// ----------------------------------------------------------------
// ZEMİN: TAMAMEN SİYAH-BEYAZ (Gri Tonlamalı)
// Bu harita hiçbir yolu renkli boyamaz. Sadece gridir.
// Böylece göreceğin TEK renk, gerçek trafik olacaktır.
// ----------------------------------------------------------------
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
}).addTo(map);

// ----------------------------------------------------------------
// TRAFİK KATMANI (TomTom)
// ----------------------------------------------------------------
// BURAYA DİKKAT: Lütfen tiresiz, gerçek API Key'ini yapıştır.
const API_KEY = 'uWD6Bs17qsOMpQY9yMZJejwu6YnErjWk'; 

const trafficUrl = `https://api.tomtom.com/traffic/map/4/tile/flow/absolute/{z}/{x}/{y}.png?key=${API_KEY}&thickness=10`;

// Trafik katmanını ekle
L.tileLayer(trafficUrl, {
    opacity: 1,
    maxZoom: 22
}).addTo(map);

// Eğer API Key hatalıysa konsola uyarı basar
console.log("Siyah-Beyaz Zemin Yüklendi. Renk görüyorsan o trafiktir.");
