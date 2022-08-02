import { useState, useEffect } from 'react'

import cerrarModal from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [nombreGasto, setNombreGasto] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [id, setId] = useState('')
  const [fecha, setFecha] = useState('')

  const [mensaje, setMensaje] = useState('')

  //

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombreGasto(gastoEditar.nombreGasto)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, [])

  const handleCerrarModal = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const handleAgregarGasto = (e) => {
    e.preventDefault()

    if ([nombreGasto, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')

      setTimeout(() => {
        setMensaje('')
      }, 2000)
      return
    }

    guardarGasto({ nombreGasto, cantidad, categoria, id, fecha })
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img
          src={cerrarModal}
          alt='Icono para cerrar Modal'
          onClick={handleCerrarModal}
        />
      </div>

      <form
        className={`form-nuevo-gasto ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleAgregarGasto}
      >
        <legend>{gastoEditar.cantidad ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
        <div className='campo-nuevo-gasto'>
          <label htmlFor='nombreGasto' className='label-nuevo-gasto'>
            Nombre Gasto
          </label>
          <input
            className='input-nuevo-gasto'
            type='text'
            id='nombreGasto'
            placeholder='Añade un nombre de Gasto'
            value={nombreGasto}
            onChange={(e) => setNombreGasto(e.target.value)}
          />
        </div>
        <div className='campo-nuevo-gasto'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
            type='number'
            id='cantidad'
            placeholder='Añade la cantidad del Gasto, ej: 300'
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className='campo-nuevo-gasto'>
          <label htmlFor='categoria-nuevo-gasto'>Categoria Gasto</label>
          <select
            id='categoria-nuevo-gasto'
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=''>--- Selecciones una Categoria ----</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Alimentación</option>
            <option value='casa'>Casa</option>
            <option value='gastos'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </div>

        <input
          type='submit'
          value={gastoEditar.categoria ? 'Guardar Cambios' : 'Añadir Gasto'}
        />

        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default Modal
