import './details.scss'

// eslint-disable-next-line react/prop-types
const Details = ({standard,institute,board,year,marks}) => {
  return (
    <>
        <div className='details'>
            <div className="standard">
                <h1>{standard}</h1>
            </div>
            <div className="institute">
                <h4>{institute}</h4>
            </div>
            <div className="board_or_university">
                <h4>{board}</h4>
            </div>
            <div className="marks_passout">
                <h6>[{year},&nbsp;{marks}]</h6>
            </div>
        </div>
    </>
  )
}

export default Details;
