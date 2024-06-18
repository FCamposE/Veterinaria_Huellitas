import React, { useState } from 'react';
import '../pages/index'

function SessionForms() {
  const [nombres, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [direccion, setDireccion] = useState('');
  
  //const [mostrarPopup, setMostrarPopup] = useState(false);
  const [credencialesCorrectas, setCredencialesCorrectas] = useState(false);

  const [mostrarLogin, setMostrarLogin] = useState(true);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  
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

  const toggleViewRegistro = () => {
    setMostrarRegistro(!mostrarRegistro)
  }

  const toggleViewLogin = () => {
    setMostrarLogin(!mostrarLogin)
  }

  const handleIniciarSesion = () => {
    //setMostrarPopup(true);
  };

  const handleCerrarPopup = () => {
    //setMostrarPopup(false);
  };

  const handleInicioSesion = () => {
    // Lógica simple para verificar las credenciales
    if (nombreUsuario === 'usuario' && contrasena === 'contrasena') {
      setCredencialesCorrectas(true);
      //setMostrarPopup(false);
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <>
    <div className="w-screen h-screen">
      <div className="py-2 px-10">
        <button
        
        className="text-indigo-700 font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          atras
        </button>
      </div>
      <div className="flex justify-center">
        {mostrarRegistro && <div className="formregistro bg-white rounded-xl" id="registroform">
          <div className="flex flex-col justify-center lg:px-8">
                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                  <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                  <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Crea tu cuenta
                  </h2>
                </div>

                <div className="mt-6 mb-6 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-2" action="#" method="POST" onSubmit={handleSubmit}>
                    <div className='flex gap-x-4'>
                      <div>
                      <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
                        Nombres
                      </label>
                      <div className="mt-2">
                        <input
                          id="nombre"
                          type="text"
                          value={nombres}
                          required
                          onChange={(e) => setNombre(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 px-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="apellidos" className="block text-sm font-medium leading-6 text-gray-900">
                        Apellidos
                      </label>
                      <div className="mt-2">
                        <input
                          id="apellidos"
                          type="text"
                          value={apellidos}
                          required
                          onChange={(e) => setApellidos(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 px-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div></div>
                    
                    <div className="flex gap-x-4"><div>
                      <label htmlFor="correo" className="block text-sm font-medium leading-6 text-gray-900">
                        E-mail
                      </label>
                      <div className="mt-2">
                        <input
                          id="correo"
                          type="email"
                          value={correo}
                          required
                          onChange={(e) => setCorreo(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 px-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">
                        Teléfono
                      </label>
                      <div className="mt-2">
                        <input
                          id="telefono"
                          type="tel"
                          value={telefono}
                          required
                          onChange={(e) => setTelefono(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 px-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div></div>

                    <div>
                      <label htmlFor="direccion" className="block text-sm font-medium leading-6 text-gray-900">
                        Dirección
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="direccion"
                          typeof='input'
                          value={direccion}
                          required
                          onChange={(e) => setDireccion(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 px-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className='flex gap-x-4'><div>
                      <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-900">
                        Usuario
                      </label>
                      <div className="mt-2">
                        <input
                          id="usuario"
                          type="text"
                          value={nombreUsuario}
                          required
                          onChange={(e) => setNombreUsuario(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 px-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          Contraseña
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          type="password"
                          value={contrasena}
                          required
                          onChange={(e) => setContrasena(e.target.value)} 
                          className="block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div></div>

                    <div>
                      <button
                        type="submit"
                        className="flex mt-6 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Aceptar
                      </button>
                    </div>
                  </form>

                  <p className="mt-6 text-center text-sm text-gray-500">
                    ¿Ya tienes una cuenta?{' '}
                    <a onClick={toggleViewLogin} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                      Inicia sesión.
                    </a>
                  </p>
                </div>
              </div>
        </div>}

        {/*Formulario Inicar Sesion*/}
        {mostrarLogin && <div className="formlogin bg-white rounded-xl h-min" id="loginform">
          <div className="flex flex-1 flex-col justify-center px-6 py-5 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Iniciar sesión
                </h2>
              </div>

              <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-4" action="#" method="POST">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                      Usuario
                    </label>
                    <div className="mt-2">
                      <input
                        id="username"
                        type="text"
                        value={nombreUsuario}
                        required
                        onChange={(e) => setNombreUsuario(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 px-5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-x-20">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Contraseña
                      </label>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                          ¿Olvidaste tu constraseña?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        type="password"
                        value={contrasena} 
                        autoComplete="current-password"
                        required
                        onChange={(e) => setContrasena(e.target.value)} 
                        className="block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                    onSubmit={handleInicioSesion}
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Ingresar
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  ¿Eres nuevo?{' '}
                  <a onClick={toggleViewRegistro} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Crea una cuenta.
                  </a>
                </p>
              </div>
            </div>
        </div>}
      </div>
    </div>
    </>
    /*<div className="max-w-md mx-auto" id="register">
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
    </div>*/
  );
}

export default SessionForms;
