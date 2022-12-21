
const StarReview = (props) => {
  return(
    <div className="reviewBox" id={props.id}>
      <h2>teste</h2>
      <span>Rated 5 Stars in {props.star}</span>
    </div>
  )
}

export default StarReview