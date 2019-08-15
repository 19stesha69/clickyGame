import React from "react";
import "./style.css";

const Main = (props) => {
    return (
        <main className="container">
            <div role="img" aria-label="click item" className="click-item">
                <img alt={props.name} src={props.image}></img>
            </div>
        </main>
    );
}


export default Main;