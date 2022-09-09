import React, { useState } from 'react';

import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';

function Postform(props) {
   const [postType, setPostType] = useState('image');

   return (
      <div className="backdrop">
         <div className="form">
            <div className="formtitlecard">
               <p id="formtitle">Add New Post</p>
            </div>
            <div className="formFont">
               Username:
               <input type="text" className="formInput" placeholder="Enter email" />
            </div>
            <div className="formFont">
               Location:
               <input type="text" className="formInput" placeholder="Enter location" />
            </div>
            <div className="formFont">
               Post Type:
               <select className="formInput" onChange={(e) => setPostType(e.target.value)}>
                  <option value={'image'}> Image </option>
                  <option value={'text'}> Text </option>
               </select>
            </div>
            {postType === 'image' && (
               <div className="formFont">
                  Image Link:
                  <input type="text" className="formInput" placeholder="https://picsum.photos/200/300" />
               </div>
            )}
            <div className="formFont">
               Caption:
               <input type="text" className="formInput" placeholder="Somewhere in the ocean" />
            </div>
            <div className="rabtn">
               <div onClick={() => props.status(!props.cur)}>
                  <ImCross />
               </div>
               <div onClick={() => props.status(!props.cur)}>
                  <FaCheck />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Postform;
