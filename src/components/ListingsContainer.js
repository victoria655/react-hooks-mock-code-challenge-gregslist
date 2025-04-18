import React from "react";
import { useEffect,useState } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer() {
   const [listings, setListings] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:3001/listings" ,
        {
          method:"GET",
          headers:{
            "Content-Type": "application/json"
          }
        })
        .then(r=>r.json)
        .then(data => setListings(data))
      },[]) 
  return (
    <main>
      <ul className="cards">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          image={listing.image}
          description={listing.description}
          location={listing.location}
          price={listing.price}
        />
      ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
