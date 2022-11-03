import React, {useState} from 'react'
import './Formulario.css'
import {Formulario, ContenedorBoton, Boton, MensajeError } from './Formulario-styled'
import Input from '../Input/Input';
import {FaExclamationTriangle} from "react-icons/fa";


const Form = () => {
  const [nombre, setNombre] = useState({campo: '', valido: null})
  const [apellido, setApellido] = useState({campo: '', valido: null})
  const [correo, setCorreo] = useState({campo: '', valido: null})
  const [correo2, setCorreo2] = useState({campo: '', valido: null})
  const [telefono, setTelefono] = useState({campo: '', valido: null})
  const [formularioValido, setFormularioValido] = useState(null)

  const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{4,20}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

  const validarCorreo = () => {
    if(correo.campo.length > 0){
      if(correo.campo !== correo2.campo){
        setCorreo2((prevState) => {
            return {...prevState, valido: 'false'}
        });
      }else {
        setCorreo2((prevState) => {
            return {...prevState, valido: 'true'}
      });
    }
  }
}

    const onSubmit = (e) => {
      e.preventDefault();

      if(
        nombre.valido === 'true' &&
        apellido.valido === 'true' &&
        correo.valido === 'true' &&
        correo2.valido === 'true' &&
        telefono.valido === 'true'
      ){
        setFormularioValido(true);
      } else {
        setFormularioValido(false);
  }
}

  return (
    <main>
        <Formulario action='' onSubmit={onSubmit}>
          <Input
            estado={nombre}
            cambiarEstado={setNombre}
            tipo="text"
            label="Nombre"
            placeholder="Roberto"
            name="nombre"
            leyendaError="El nombre solo puede contener letras y espacios y un minimo de 4 y maximo de 20 caracteres."
            expresionRegular={expresiones.nombre}
          />
          <Input
            estado={apellido}
            cambiarEstado={setApellido}
            tipo="text"
            label="Apellido"
            placeholder="Perez"
            name="apellido"
            leyendaError="El apellido solo puede contener letras y espacios y un minimo de 4 y maximo de 20 caracteres."
            expresionRegular={expresiones.nombre}
          />
          <Input
            estado={correo}
            cambiarEstado={setCorreo}
            tipo="email"
            label="Correo"
            placeholder="correo@correo.com"
            name="correo"
            leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
            expresionRegular={expresiones.correo}
          />
          <Input
            estado={correo2}
            cambiarEstado={setCorreo2}
            tipo="email"
            label="Verificar Correo"
            placeholder="correo@correo.com"
            name="correo2"
            leyendaError="Ambos correos deben ser iguales."
            funcion={validarCorreo}
          />
          <Input
            estado={telefono}
            cambiarEstado={setTelefono}
            tipo="text"
            label="Telefono"
            placeholder="1165892355"
            name="telefono"
            leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
            expresionRegular={expresiones.telefono}
          />
          {formularioValido === false && <MensajeError>
            <p>
              <FaExclamationTriangle />
              <b> Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </MensajeError> }
          <ContenedorBoton>
            <Boton type='submit'>Enviar</Boton>
          </ContenedorBoton>
        </Formulario>
    </main>
  )
}

export default Form
