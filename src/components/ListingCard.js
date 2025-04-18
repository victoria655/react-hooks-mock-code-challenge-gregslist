import React from "react";



function ListingCard(image, description, location, price ) {
 
  return (
    <li className="card">
      <div className="image">
        <span className="price">{price}</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
