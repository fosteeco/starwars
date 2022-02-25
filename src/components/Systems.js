import Table from 'react-bootstrap/Table'

function Systems(props) {
  return(
    <div className='data-table'>
        <Table
          striped
          bordered
          variant='dark'
          responsive='md'
        >
          <thead className="table-header">
            <tr>
              <th>Name</th>
              <th>Diameter</th>
              <th>Orbit</th>
              <th>Rotation</th>
              <th>Climate</th>
              <th>Population</th>
              <th>Inhabitants</th>
            </tr>
          </thead>
          {/* <tbody className='table-body'>
            {props.systems.map((system, index) => (
              <tr key={index}>
                <td>{system.name}</td>
                <td>{system.diameter}</td>
                <td>{system.orbit}</td>
                <td>{system.rotation}</td>
                <td>{system.climate}</td>
                <td>{system.population}</td>
                <td>{system.residents}</td>
              </tr>
            ))}
          </tbody> */}
        </Table>
      </div>
  )
}

export default Systems