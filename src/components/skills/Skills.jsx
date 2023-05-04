import './skills.scss'

export default function Skills() {
  return (
    <>
      <section className='skills'>
        <h1 className="title">Skills</h1>

        <div className="container">
        <div className="tech">
            <ul>
                <li>Python,Excel,Machine Learning, MySQL</li>
                <li>HTML5,CSS3,JavaScript</li>
                <li>React.js ( JSX, Hooks, Redux,GraphQL ) </li>
                <li>REST API</li>
            </ul>
        </div>

        <div className="soft">
            <ul>
                <li>Time Management</li>
                <li>Leadership skill</li>
                <li>Communication skill</li>
                <li>Financial</li>
            </ul>
        </div>
        </div>
      </section>
    </>
  )
}
