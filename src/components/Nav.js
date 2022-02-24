import Nav from 'react-bootstrap/Nav'

function NavLinks() {
  return(
    <Nav 
      className="justify-content-center" 
      defaultActiveKey="/home" 
      as="ul"
    >
      <Nav.Item as="li">
        <Nav.Link href="/home">Characters</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/systems">Systems</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/species">Species</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default NavLinks