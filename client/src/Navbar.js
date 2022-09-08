import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function Navbar(props) {

    return (
        <div class="navbar">
            <div class="instaicon">
                <div><img src={require("./instaicon.png")} alt="Instagram" /></div>
                <div><img src={require("./instagram.png")} alt="Instagram" /></div>
            </div>
            <div class="icons">
                <div><img src={require("./like.png")} alt="Like" /></div>
            </div>
            <div class="postbutton">
                <button type="button" class="btn btn-secondary btn-sm postbtn" onClick={()=>props.status(!props.cur)}>+ Add new post</button>
            </div>
        </div>
    )
}

export default Navbar;