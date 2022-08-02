import { useState, useEffect } from 'react'

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className='filtro contenedor sombra'>
      <form>
        <div className='filtro-flex'>
          <label htmlFor='filtro'>Filtrar por Categoria</label>
          <select
            id='filtro'
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value=''>--- Todas las Categorias ----</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Alimentación</option>
            <option value='casa'>Casa</option>
            <option value='gastos'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
