import './navbar.scss'
import MyDp from '../../assets/myDp.jpeg'

export default function Header() {
  return (
    <div className='header'>
      <div className="left">
        <img src={MyDp} alt="" className="dp" />
        Sayantan Dolui
      </div>

      <div className="center">
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='#academic'>Academic</a>
              </li>
              <li>
                <a href='#skills'>Skills</a>
              </li>
              <li>
                <a href='#project'>Projects</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
      </div>
    </div>
  )
}
