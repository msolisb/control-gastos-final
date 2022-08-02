//
import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { formatearFecha, formatearCantidad } from '../helper'

import iconoAhorro from '../img/icono_ahorro.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
  ahorro: iconoAhorro,
  comida: iconoComida,
  casa: iconoCasa,
  gastos: iconoGastos,
  ocio: iconoOcio,
  salud: iconoSalud,
  suscripciones: iconoSuscripciones,
}

const ComponenteGasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
  const { nombreGasto, cantidad, categoria, id, fecha } = gasto

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>Editar</SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='componente-gasto'>
          <div>
            <img
              src={diccionarioIconos[categoria]}
              alt='Icono Categoria'
              className='icono-gasto'
            />
          </div>
          <div className='contenido-componente-gasto'>
            <div className='componente-gasto-descripcion'>
              <p className='categoria'>{categoria}</p>
              <p className='nombre-gasto'>{nombreGasto}</p>
              <p className='fecha'>
                {' '}
                <span>Agregado el:</span> {formatearFecha(fecha)}
              </p>
            </div>
            <p className='cantidad'>{formatearCantidad(cantidad)}</p>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default ComponenteGasto
