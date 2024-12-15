import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const App = () => {
  const weatherData = [
    { city: 'İstanbul', temp: 22, description: 'Açık hava', humidity: 60, candleData: [{ day: 'Pazartesi', price: 22 }, { day: 'Salı', price: 18 }, { day: 'Çarşamba', price: 20 }, { day: 'Perşembe', price: 19 }, { day: 'Cuma', price: 22 }] },
    { city: 'Ankara', temp: 18, description: 'Kısmi bulutlu', humidity: 65, candleData: [{ day: 'Pazartesi', price: 20 }, { day: 'Salı', price: 17 }, { day: 'Çarşamba', price: 19 }, { day: 'Perşembe', price: 18 }, { day: 'Cuma', price: 20 }] },
    { city: 'İzmir', temp: 20, description: 'Kapalı', humidity: 70, candleData: [{ day: 'Pazartesi', price: 21 }, { day: 'Salı', price: 18 }, { day: 'Çarşamba', price: 20 }, { day: 'Perşembe', price: 19 }, { day: 'Cuma', price: 21 }] },
  ];

  const [selectedCity, setSelectedCity] = useState('İstanbul');

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const selectedWeather = weatherData.find((weather) => weather.city === selectedCity);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 bg-white p-6 border-r border-gray-300">
        <h2 className="text-xl font-semibold mb-6 text-center">Şehirler</h2>
        <div className="space-y-4">
          {weatherData.map((weather, index) => (
            <div
              key={index}
              onClick={() => handleCityClick(weather.city)}
              className={`cursor-pointer p-4 rounded-lg shadow-sm ${selectedCity === weather.city ? 'bg-blue-500 text-white' : 'bg-gray-50'}`}
            >
              <h3 className="text-lg font-semibold">{weather.city}</h3>
              <p className="text-sm text-gray-500">Sıcaklık: {weather.temp}°C</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-2/4 p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Pazar Analizi</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Bugün {selectedWeather.city}</h2>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-800 mb-4">Hava Durumu</p>
            <div className="mb-4">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={selectedWeather.candleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500">Açıklama: {selectedWeather.description}</p>
            <p className="text-sm text-gray-500">Nem: {selectedWeather.humidity}%</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/4 bg-white p-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Ekstra Bilgiler</h2>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
          <h3 className="text-lg font-semibold">Hisse Özetleri</h3>
          <p className="text-sm text-gray-500">Apple (AAPL) bugün %5 arttı, iyi kazanç raporları sonrası.</p>
        </div>
      </div>
    </div>
  );
};

export default App;