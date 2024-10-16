// pages/search.js
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Search() {
    const [city, setCity] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        // Redirecionar para a Home com a cidade pesquisada
        router.push(`/?city=${encodeURIComponent(city)}`);
    };

    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Digite o nome da cidade"
                    required
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}


