import { Stars } from "../images/stars"

const StarReview = () => {
  
  const reviews = [
    {
      reviews: 'Reviews',
      stars: 5,
    },
    {
      reviews: 'Report Guru',
      stars: 5,
    },
    {
      reviews: 'BestTech',
      stars: 5,
    }
  ]
  
  return(
    <>
      {reviews.map(((item, i) => (
        <div className="review" id={'review' + i}>
          <span>
          </span>
          <h2>Rated {item.stars} Stars in {item.reviews}</h2>
            <img src={Stars[0]} alt=''/>  
        </div> 
      )))}
    </>
  )
}


export default StarReview