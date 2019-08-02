import React from 'react'
import './CardItem.styles.css'

const CardItem = ({user}) => (
   <div className="card-container">
      <img alt="user" src={`https://robohash.org/${user.id}?set=set2&size=180x180`}/>
      <p><strong>{user.username}</strong></p>
   </div>
)

export default CardItem