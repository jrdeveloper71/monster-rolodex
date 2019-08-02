import React, { useState, useEffect } from 'react'
import './CardItem.styles.css'

const CardItem = ({user, i}) => {
   const [revealed, setRevealed] = useState(false)

   useEffect(() => {
      setTimeout(() => setRevealed(true), 35*i)
   })

   return (
      <div className="card-container" revealed={String(revealed)}>
         <img alt="user" src={`https://robohash.org/${user.id}?set=set2&size=180x180`}/>
         <p><strong>{user.username}</strong></p>
      </div>
   );
}

export default CardItem