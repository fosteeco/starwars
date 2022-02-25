import Table from 'react-bootstrap/Table'

function Characters(characters) {
  return(
    <div className='data-table container col-md-12 mt-4'>
        <Table
          striped
          bordered
          variant='dark'
          responsive='md'
        >
          <thead className="table-header">
            <tr>
              <th>Name</th>
              <th>Birth</th>
              <th>Gender</th>
              <th>Home</th>
              <th>Species</th>
            </tr>
          </thead>
          {/* <tbody className='table-body'>
            {characters.map((characterData, index) => (
              <tr key={index}>
                <td>{characters.name}</td>
                <td>{characters.birth_year}</td>
                <td>{characters.gender}</td>
                <td>{characters.homeworld}</td>
                <td>{characters.species}</td>
              </tr>
            ))}
          </tbody> */}
        </Table>
      </div>
  )
}

export default Characters