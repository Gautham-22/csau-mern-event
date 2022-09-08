import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function Textcard(props) {
    return(
        <div>
            <div class="card cardspace cardalign text-center">
                <div class="card-body textcard-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.caption}</p>
                </div>
                <div class="card-body">
                    <img src={require("./user.png")} alt="User" id="user"/>
                    <div class="cardstext">
                        <h5 class="card-title titlefont textcard-title">Anonymous</h5>
                        <p class="card-text textfont">Somewhere in the ocean</p>
                    </div>
                    <i class="fa fa-trash" id="trashstyle"></i>
                    <i class="fa fa-pen-to-square" id="createstyle"></i>
                </div>
            </div>
        </div>
    )
}

export default Textcard;