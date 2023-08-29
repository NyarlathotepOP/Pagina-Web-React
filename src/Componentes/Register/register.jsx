import React from "react";

const Register = () => {
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
          <label className={styles.label}>Contraseña:</label>
          <input type="password" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Confirmar contraseña:</label>
          <input type="password" className={styles.input} />
        </div>
        <button className={styles.registerButton}>Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
