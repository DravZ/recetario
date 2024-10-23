import FooterComponent from '@/components/footerComponent/FooterComponent';
import NavbarComponent from '@/components/navbarComponent/NavbarComponent';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.css';

const Login = () => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mensaje2, setMensaje2] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const user = localStorage.getItem('user');
            if (user) {
                router.push('/');
            }
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, contrasena }),
        });
        const statusCode = res.status;
        
        if (statusCode === 200) {
            const data = await res.json();
            localStorage.setItem('user', JSON.stringify(data.user)); // Guarda la sesión del usuario
            setMensaje2(data.message);
            
            setTimeout(() => {
                router.push('/'); // Redirigir a la página principal si el login es exitoso
            }, 2000)
        }else{
            const data = await res.json();
            setMensaje(data.message);
        }
    };

    return (
        <>
            <NavbarComponent />
            <div className={styles.loginContainer}>
                <div className={styles.imageSection}></div>
                <div className={styles.formSection}>
                    <div className={styles.card}>
                        <h1 className={styles.welcomeText}>Inicio de Sesión</h1>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputContainer}>
                                <label className={styles.inputLabel}>Email:</label>
                                <input
                                    type="email"
                                    className={styles.inputField}
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <label className={styles.inputLabel}>Contraseña:</label>
                                <input
                                    type="password"
                                    className={styles.inputField}
                                    value={contrasena}
                                    onChange={(e) => setContrasena(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.buttonContainer}>
                                <button type="submit" className={styles.loginButton}>
                                    Iniciar Sesión
                                </button>
                            </div>
                        </form>
                        {mensaje && <p className={styles.message}>{mensaje}</p>}
                        {mensaje2 && <p className={styles.message2}>{mensaje2}</p>}
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    );
};

export default Login;
