import './details.scss'

// eslint-disable-next-line react/prop-types
const Details = ({stdEmoji,standard,institute,board,year,marks,instIcon}) => {
  return (
    <>
        <div className='details'>
            <div className="standard">
                <h1>{stdEmoji} {standard}</h1>
            </div> 
            <div className="institute">
                <div className="instIcon">
                    <img src={instIcon} alt="" />
                </div>
                <h4>{institute}</h4>
            </div>
            <div className="board_or_university">
                <div className="board_logo">
                    <img src='' alt="" />
                </div>
                <h4>{board}</h4>
            </div>
            <div className="marks_passout">
                <h1>📅</h1>
                <h6>[{year},&nbsp;{marks}]</h6>
            </div>
        </div>
    </>
  )
}

export default Details;
