import React, { useState } from 'react';
import styles from './register-style.module.css';

const Register = () => {
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handlePasswordChange = () => {
    setPassword(!password);
  };

  const handleConfirmPasswordChange = () => {
    setConfirmPassword(!confirmPassword);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.formHeader}>Crear una cuenta</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Nombre:</label>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email:</label>
          <input type="email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
        <div className={styles.passwordInput}>
        <label className={styles.label}>Contraseña:</label>
            <input
              type={password ? "text" : "password"}
              className={styles.input}
            />
            <span
              className={`${styles.eyeIcon} cursor-pointer`}
              onClick={handlePasswordChange}
            >
              {password ? (
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
        </div>
        <div className={styles.inputGroup}>
        <div className={styles.passwordInput}>
        <label className={styles.label}>Confirmar Contraseña:</label>
            <input
              type={confirmPassword ? "text" : "password"}
              className={styles.input}
            />
            <span
              className={`${styles.eyeIcon} cursor-pointer`}
              onClick={handleConfirmPasswordChange}
            >
              {confirmPassword ? (
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
        </div>
        <button className={styles.registerButton}>Registrarse</button>
        <div className={styles.altLogin}>
          <p className={styles.altText}>O continuar con:</p>
          <button className={styles.googleButton}>
            <img
              src="https://cdn.worldvectorlogo.com/logos/google-g-2015.svg"
              width={30}
              alt="Google icon"
              className={styles.googleIcon}
            />
            Continuar con Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
