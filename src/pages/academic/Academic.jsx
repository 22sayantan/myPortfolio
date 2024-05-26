import './academic.scss'
import Details from './details/Details'
import KolaSchool from '../../assets/KolaSchool.jpg'

export default function Academic() {
  return (
    <section className='academic' id='academic'>
      <h1 className='title'>Academic</h1>
      
      <div className="container">
          <Details 
            stdEmoji = '🏫'
            standard="10th"
            institute="Kola Union High School"
            instIcon = {KolaSchool}
            board="West Bengal Board of Secondary Education"
            year="2012"
            marks="68.43%"
          />

          <Details 
            stdEmoji = '🏫'
            standard="12th"
            institute="Kola Union High School"
            instIcon = {KolaSchool}
            board="West Bengal Council of Higher Secondary Education"
            year="2015"
            marks="77.2%"
          />
          
          <Details 
            stdEmoji = '🏅'
            standard="Diploma"
            institute="Ramkrishna Mission Shilpamandira"
            board="West Bengal State Council of Technical Educaiton"
            year="2018"
            marks="8.3"
          />

          <Details 
            stdEmoji = '🎓'
            standard="B.Tech"
            institute="College of Engineering & Management,Kolaghat"
            board="Maulana Abul Kalam Azad University"
            year="2022"
            marks="8.66"
          />
      </div>

    </section>
  )
}
