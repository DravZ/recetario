import FooterComponent from '@/components/footerComponent/FooterComponent';
import NavbarComponent from '@/components/navbarComponent/NavbarComponent';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
  const [nombre, setNombre] = useState('');
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

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, correo, contrasena }),
    });

    const data = await res.json();
    const statusCode = res.status;
    setMensaje(data.message);

    if (statusCode === 201) {
      router.push('/login'); // Redirigir al usuario a la página de login

  } 
  };

  return (
    <>
    <NavbarComponent />
        <div>
            <h1>Registro de Usuario</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                      type="email"
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
                <button type="submit">Registrar</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
      <FooterComponent />
    </>
  );
};

export default Register;
