import './navbar.scss'

export default function Header() {
  return (
    <div className='header'>
      <div className="left">
        Sayantan Dolui
      </div>

      <div className="center">
        <ul>
            <li>Home</li>
            <li>Academic</li>
            <li>Skills</li>
            <li>Porjects</li>
            <li>Contact</li>
        </ul>
      </div>

      <div className="right">
         <i className="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  )
}
