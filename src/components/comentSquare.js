const ComentSquare = (props) => {
  return(
    <div className="square">
      <div className="squareTop">
        <h3>Foto</h3>
        <p className="nome">{props.name}</p>
        <p className="verified">{props.verified}</p>
      </div>
      
      <div className="bottom">
        <p>{props.review}</p>
      </div>
    </div>
  )
}