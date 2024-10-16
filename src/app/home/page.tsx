// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        // Simulação de dados de clima
        const simulatedWeatherData = {
            city: 'São Paulo',
            state: 'SP',
            condition: 'Ensolarado',
            forecast: [
                { date: '2024-10-17', temperature: 25 },
                { date: '2024-10-18', temperature: 26 },
                { date: '2024-10-19', temperature: 24 },
                { date: '2024-10-20', temperature: 27 },
                { date: '2024-10-21', temperature: 23 },
                { date: '2024-10-22', temperature: 22 },
            ],
        };

        setWeatherData(simulatedWeatherData);
    }, []);

    return (
        <div>
            <h1>Home</h1>
            {weatherData ? (
                <div>
                    <h2>{weatherData.city}, {weatherData.state}</h2>
                    <p>Condição: {weatherData.condition}</p>
                    <h3>Previsão para os próximos 6 dias:</h3>
                    <ul>
                        {weatherData.forecast.map((day, index) => (
                            <li key={index}>{day.date}: {day.temperature}°C</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

