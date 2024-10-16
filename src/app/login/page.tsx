// pages/login.js
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();

    const handleLogin = () => {
        // Simulação de login (implemente autenticação real)
        router.push('/profile'); // Redirecionar para a página Profile
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Fazer Login</button>
        </div>
    );
}
