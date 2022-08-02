//
import ComponenteGasto from './ComponenteGasto'

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  gastosFiltrados,
  filtro,
}) => {
  return (
    <div className='contenedor listado-gastos'>
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? `Gastos filtrados en la categoria "${filtro}"`
              : `No existen datos para la categoria "${filtro}"`}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <ComponenteGasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>
            {gastos.length
              ? 'Listado de Gastos'
              : 'Aun no hay gastos ingresados'}
          </h2>
          {gastos.map((gasto) => (
            <ComponenteGasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default ListadoGastos
