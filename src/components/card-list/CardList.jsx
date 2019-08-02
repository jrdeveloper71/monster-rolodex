import React from 'react'
import './CardList.styles.css'

import CardItem from '../card-item/CardItem'

const CardList = (props) => {
   return(
      <div className="card-list">
      {
         props.users.map((user, i) => (
           <CardItem key={user.id} user={user} i={i}/>
         ))
      }
      </div>
   )
}

export default CardList