import { useState, useEffect } from 'react'
import { formatearCantidad } from '../helper'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({
  presupuesto,
  setPresupuesto,
  gastos,
  setGastos,
  setIsValidPresupuesto,
}) => {
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    )
    const totalDisponible = presupuesto - totalGastado

    const nuevoPorcentaje = ((totalGastado * 100) / presupuesto).toFixed(2)

    setGastado(totalGastado)
    setDisponible(totalDisponible)

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1000)
  }, [gastos])

  const handleReset = () => {
    const resultado = confirm(
      'Esta seguro de resetear el presupuesto y los gastos'
    )
    if (resultado) {
      setPresupuesto(0)
      setGastos([])
      setIsValidPresupuesto(false)
    }
  }

  return (
    <div className='control-presupuesto contenedor sombra dos-columnas'>
      <div className='progressBar'>
        <CircularProgressbar
          value={porcentaje}
          text={`Gastado: ${porcentaje}%`}
          styles={buildStyles({
            textSize: '10px',
            pathColor: porcentaje >= 100 ? '#b91c1c' : '#3b82f6',
            trailColor: '#f5f5f5',
            textColor: porcentaje >= 100 ? '#b91c1c' : '#3b82f6',
            pathTransitionDuration: 1,
          })}
        />
      </div>
      <div className='contenido-presupuesto'>
        <button className='reset' onClick={handleReset}>
          Reset App
        </button>
        <p>
          Presupuesto: <span>{formatearCantidad(presupuesto)}</span>
        </p>
        <p className={`${disponible <= 0 ? 'negativo' : ''}`}>
          Disponible: <span>{formatearCantidad(disponible)}</span>
        </p>
        <p>
          Gastado: <span>{formatearCantidad(gastado)}</span>
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
