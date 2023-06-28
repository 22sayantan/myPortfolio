import { NavLink } from 'react-router-dom'
import './navbar.scss'

export default function Header() {
  return (
    <div className='header'>
      <div className="left">
        Sayantan Dolui
      </div>

      <div className="center">
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/academic'>Academic</NavLink>
              </li>
              <li>
                <NavLink to='/skills'>Skills</NavLink>
              </li>
              <li>
                <NavLink to='/project'>Projects</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
      </div>

      <div className="right">
         <i className="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  )
}
