import React from 'react'
import {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import ReactStars  from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import data from '../data'

export default function Description (props) {
  const [movie,setMovie] = useState (null)
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  useEffect ( () => {setMovie ( data.filter (el => el.id === props.match.params.id) [0] )},[])
    return (
      <div>
<Link to = '/'> Home</Link>
      {movie && ( <div >
        <button onClick={handleShow}>Trailer</button>
        <div>
        {show ? (
              <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            ) : null}
          </div>
      
          {
  <Card style={{ width: '18rem' }} > 
  <Card.Img variant="top" src ={movie.images} className="img-movie" />
  <Card.Body>
    <Card.Title> 
   {movie.titre} 
    </Card.Title>
    <Card.Text>
   {movie.description}
    </Card.Text> 
    <div className = "star">
    <ReactStars  
    edit={false}
         name="rate"
        starCount={5}
        value={movie.rate}
        size={30}
                    /> 
        </div>
  </Card.Body>
</Card>}

        </div>)}
        
        </div>
          )
}