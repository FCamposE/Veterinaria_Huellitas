import React, { useState } from 'react';

function Register() {
  const [nombres, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [direccion, setDireccion] = useState('');

  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [credencialesCorrectas, setCredencialesCorrectas] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del usuario a tu servidor o manejarlos de la manera que necesites
    const usuario = {
      nombres,
      apellidos,
      correo,
      telefono,
      nombreUsuario,
      contrasena,
      direccion
    };
    console.log('Usuario registrado:', usuario);
    // Limpia los campos después de enviar el formulario
    setNombre('');
    setApellidos('');
    setCorreo('');
    setTelefono('');
    setNombreUsuario('');
    setContrasena('');
    setDireccion('');
  };

  const handleIniciarSesion = () => {
    setMostrarPopup(true);
  };

  const handleCerrarPopup = () => {
    setMostrarPopup(false);
  };

  const handleInicioSesion = () => {
    // Lógica simple para verificar las credenciales
    if (nombreUsuario === 'usuario' && contrasena === 'contrasena') {
      setCredencialesCorrectas(true);
      setMostrarPopup(false);
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block font-medium">Nombre</label>
          <input 
            type="text" 
            id="nombre"
            value={nombres}
            onChange={(e) => setNombre(e.target.value)} 
            className="form-input w-full" 
            required 
          />
        </div>
        <div>
          <label htmlFor="apellidos" className="block font-medium">Apellidos</label>
          <input 
            type="text" 
            id="apellidos"
            value={apellidos} 
            onChange={(e) => setApellidos(e.target.value)} 
            className="form-input w-full" 
            required 
          />
        </div>
        <div>
          <label htmlFor="correo" className="block font-medium">Correo</label>
          <input 
            type="email" 
            id="correo" 
            value={correo} 
            onChange={(e) => setCorreo(e.target.value)} 
            className="form-input w-full" 
            required 
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block font-medium">Teléfono</label>
          <input
            type="tel" 
            id="telefono" 
            value={telefono} 
            onChange={(e) => setTelefono(e.target.value)} 
            className="form-input w-full" 
            required 
          />
        </div>
        <div>
          <label htmlFor="nombre-usuario" className="block font-medium">Nombre de Usuario</label>
          <input 
            type="text" 
            id="nombre-usuario" 
            value={nombreUsuario} 
            onChange={(e) => setNombreUsuario(e.target.value)} 
            className="form-input w-full" 
            required 
          />
        </div>
        <div>
          <label htmlFor="contrasena" className="block font-medium">Contraseña</label>
          <input 
            type="password" 
            id="contrasena" 
            value={contrasena} 
            onChange={(e) => setContrasena(e.target.value)} 
            className="form-input w-full" 
            required
          />
        </div>
        <div>
          <label htmlFor="direccion" className="block font-medium">Dirección</label>
          <textarea
            id="direccion" 
            value={direccion} 
            onChange={(e) => setDireccion(e.target.value)}
            className="form-textarea w-full" 
            //rows="3"
            required
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Registrar</button>
        </div>
      </form>
      <div className="mt-4">
        <h4>¿Ya estas registrado?</h4><br/>
        <button onClick={handleIniciarSesion} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Iniciar Sesión
        </button>
      </div>
      {mostrarPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
            <label htmlFor="username" className="block font-medium">Nombre de Usuario</label>
            <input 
              type="text" 
              id="username" 
              className="form-input w-full mb-4" 
              value={nombreUsuario} 
              onChange={(e) => setNombreUsuario(e.target.value)} 
            />
            <label htmlFor="password" className="block font-medium">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              className="form-input w-full mb-4" 
              value={contrasena} 
              onChange={(e) => setContrasena(e.target.value)} 
            />
            <div className="flex justify-between">
              <button onClick={handleInicioSesion} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Iniciar Sesión
              </button>
              <button onClick={handleCerrarPopup} className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
     {credencialesCorrectas && (
        <div className="mt-4 text-green-500">
          ¡Bienvenido! Has iniciado sesión correctamente.
        </div>
      )}
    </div>
  );
}

export default Register;
