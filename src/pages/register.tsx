import FooterComponent from '@/components/footerComponent/FooterComponent';
import NavbarComponent from '@/components/navbarComponent/NavbarComponent';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/register.module.css';

const Register = () => {
    const [nombre, setNombre] = useState('');
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
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, correo, contrasena }),
        });
        const data = await res.json();
        const statusCode = res.status;

        if (statusCode === 201) {
            setTimeout(() => {
                router.push('/login'); // Redirigir a la página principal si el login es exitoso
            }, 2000)
            setMensaje2(data.message);
        }else{
            setMensaje(data.message);
        }
    };

    return (
        <>
            <NavbarComponent />
            <div className={styles.registerContainer}>
                <div className={styles.imageSection}></div>
                <div className={styles.formSection}>
                    <div className={styles.card}>
                        <h1 className={styles.welcomeText}>Registro de Usuario</h1>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputContainer}>
                                <label className={styles.inputLabel}>Nombre:</label>
                                <input
                                    type="text"
                                    className={styles.inputField}
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>
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
                                <button type="submit" className={styles.registerButton}>
                                Registrar
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

export default Register;
