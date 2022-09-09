import React from 'react';

import { RiDeleteBinFill } from 'react-icons/ri';
import { BsPencilFill } from 'react-icons/bs';

function Card(props) {
   return (
      <div class="card">
         <img class="card-img" src={props.imglink} alt="Card" />
         <div class="card-body">
            <img src={'./panda-avatar.png'} alt="User" id="user" />
            <div class="card-desc">
               <div class="card-title">Anonymous</div>
               <div class="card-text">Somewhere in the ocean</div>
            </div>
            <div className="icons">
               <RiDeleteBinFill id="trash" />
               <BsPencilFill id="edit" />
            </div>
         </div>
      </div>
   );
}

export default Card;
