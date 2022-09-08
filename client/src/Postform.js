import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function Postform() {
    return (
        <div class="form">
           <form>
                <div class="form-group formtitlecard">
                    <center><p id="formtitle">Add New Post</p></center>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1" id="formfont">Username: </label><br/><br/>
                    <input type="text" class="form-control" id="formtxt" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1" id="formfont">Location: </label><br/><br/>
                    <input type="text" class="form-control" id="formtxt" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1" id="formfont">Post Type: </label><br/><br/>
                    <input type="text" class="form-control" id="formtxt" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" id="formfont">Image Link: </label><br/><br/>
                    <input type="text" class="form-control" id="formtxt" placeholder="Password" />
                </div>
                <div class="rabtn">
                    <i class="fa-solid fa-square-xmark" id="cancel"></i>
                    <i class="fa-solid fa-square-check" id="check"></i>
                </div>
            </form>
        </div>
    )
}

export default Postform;