export const ComentSquare = () => {
  
  const reviews = [
    {
      image: 'foto',
      user: 'Colton Smith',
      review: '“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! “',
    },
    {
      image: 'foto',
      user: 'Irene Roberts',
      review: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
    },
    {
      image: 'foto',
      user: 'Anne Wallace',
      review: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend the to everyone!"',
    }
  ]
  
  return(
    <>
      {reviews.map((item, i) => (
        <div className={'square' + i} key={i}>
          
          <div className="top">
            <h1>{item.image}</h1>
            <div className="userInfos">
              <p idd='user'>{item.user}</p>
              <p id='verified'>Verified Buyer</p>
            </div>
          </div>
        
          <div className="bottom">
            <p>{item.review}</p>
          </div>
        </div>
      ))}
    </>
  )
}