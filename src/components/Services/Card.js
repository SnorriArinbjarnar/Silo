import React from 'react';

function Card(props) {
    return (
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div class="card p-2 no-border ">
            <div>
                <i class={props.icon}></i>
            </div>
        
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">
                    {props.text}
                </p>
            </div>
        </div>
    </div>
    );
}

export default Card;