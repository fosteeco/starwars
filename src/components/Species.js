import Table from 'react-bootstrap/Table'

function Species(props) {
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
              <th>Home</th>
              <th>Language</th>
              <th>Designation</th>
            </tr>
          </thead>
          {/* <tbody className='table-body'>
            {props.species.map((species, index) => (
              <tr key={index}>
                <td>{species.name}</td>
                <td>{species.diameter}</td>
                <td>{species.orbit}</td>
                <td>{species.rotation}</td>
              </tr>
            ))}
          </tbody> */}
        </Table>
      </div>
  )
}

export default Species