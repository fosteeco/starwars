import logo from '../images/sw-logo.png'

function Header() {
  return(
    <header>
      <img src={logo} className='logo' alt="Star Wars Logo" />
    </header>
  )
}

export default Header