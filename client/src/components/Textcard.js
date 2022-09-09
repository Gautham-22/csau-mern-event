import React from 'react';

import { RiDeleteBinFill } from 'react-icons/ri';
import { BsPencilFill } from 'react-icons/bs';

function Textcard(props) {
   return (
      <div className="card ">
         <div className="card-img textcard-body">
            <div className="card-title">{props.title}</div>
            <div className="card-text">{props.caption}</div>
         </div>
         <div className="card-body">
            <img src={'./panda-avatar.png'} alt="User" id="user" />
            <div className="card-desc">
               <div className="card-title">Anonymous</div>
               <div className="card-text">Somewhere in the ocean</div>
            </div>
            <div className="icons">
               <RiDeleteBinFill id="trash" />
               <BsPencilFill id="edit" />
            </div>
         </div>
      </div>
   );
}

export default Textcard;
