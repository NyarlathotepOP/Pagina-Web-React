import styles from "./login-style.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Iniciar sesión</h2>
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className={styles.inputGroup}>
          <label>Contraseña:</label>
          <input type="password" />
        </div>
        <button className={styles.loginButton}>Iniciar sesión</button>
      </form>
      <div className={styles.altLogin}>
        <p>O continuar con:</p>
        <button className={styles.googleButton}>
          <img
            src="https://cdn.worldvectorlogo.com/logos/google-g-2015.svg"
            width={30}
            alt="Google icon"
          />
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
}
