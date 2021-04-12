import React from "react";
import ReactStars from "react-rating-stars-component";


 const Filter = ({setKeyRate}) => {
    const onStarClick=(nextValue)=> {
         setKeyRate(nextValue);
       }

  return (
    <div>
        <ReactStars 
        value={1}
          name="keyRate" 
          starCount={5}
          size={30}
          onChange={onStarClick}
        />
    </div>
  );
}

export default Filter;