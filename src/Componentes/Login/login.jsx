export default function Login() {
  return (
    <div>
      <form>
        <h2>Iniciar sesión</h2>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" />
        </div>
        <button>Iniciar sesión</button>
      </form>
      <div>
        <p>O continuar con:</p>
        <button>
          <img src="https://cdn.worldvectorlogo.com/logos/google-g-2015.svg" width={30} alt="Google icon" />
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
}

