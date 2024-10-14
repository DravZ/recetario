import { useState } from 'react';
import { useRouter } from 'next/router';
import NavbarComponent from '@/components/navbarComponent/NavbarComponent';
import FooterComponent from '@/components/footerComponent/FooterComponent';

import { useEffect } from 'react';


const Login = () => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const user = localStorage.getItem('user');
            if (user) {
                router.push('/');
            }
        }
    }, [router]); // Ejecutar cuando el componente esté montado y cuando el router esté disponible

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log("Login clic");
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, contrasena }),
            });

            
            if (!res.ok) {
                throw new Error('Error en la solicitud de login');
            }
            // Aquí puedes atrapar el status y hacer acciones diferentes según el código
            const statusCode = res.status;
            console.log('Código de estado:', statusCode);

            if (statusCode === 200) {
                const data = await res.json();

                const user = data.user;
                setMensaje(data.message);
                // Redirige o ejecuta alguna acción en caso de éxito
                console.log('Login exitoso');

                localStorage.setItem('user', JSON.stringify(user)); // Almacena los datos del usuario como un string JSON
                router.push('/'); // Redirigir al usuario a la página de login

            } else if (statusCode === 401) {
                setMensaje('Correo o contraseña incorrectos');
                console.log('Error de autenticación');
            } else if (statusCode === 500) {
                setMensaje('Error en el servidor');
                console.log('Error en el servidor');
            } else {
                setMensaje('Error desconocido');
                console.log('Ocurrió un error');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <>
            <NavbarComponent/>
            <div>
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Correo:</label>
                        <input
                            type="text"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                </form>
                {mensaje && <p>{mensaje}</p>}
            </div>
            <FooterComponent/>
        </>
    );
};

export default Login;
