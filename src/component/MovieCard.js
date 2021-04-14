import React from 'react'
import {Card} from 'react-bootstrap'
import ReactStars  from 'react-rating-stars-component';
import {Link} from 'react-router-dom'


export default function MovieCard ({mov}) {
    return (
        <div >
          {
  <Card style={{ width: '18rem' }} > 
  <Link to={`/description/${mov.id}`} > Movie description
  <Card.Img variant="top" src ={mov.images} className="img-movie" />
  <Card.Body>
    <Card.Title> 
   {mov.titre} 
    </Card.Title>
    <Card.Text>
   {mov.description}
    </Card.Text> 
    <div className = "star">
    <ReactStars  
    edit={false}
                        name="rate"
                        starCount={5}
                        value={mov.rate}
                        size={30}
                    /> 
        </div>
  </Card.Body>
  </Link>
</Card>}

        </div>
          )
}