import React from 'react';

function Card(props) {
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="card p-2 no-border ">
            <div>
                <i className={props.icon}></i>
            </div>
        
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.text}
                </p>
            </div>
        </div>
    </div>
    );
}

export default Card;