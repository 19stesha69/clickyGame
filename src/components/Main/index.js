import React from "react";
import "./style.css";

const Main = (props) => {
    return (
        <main class="container">
            <div role="img" aria-label="click item" class="click-item">
                <img alt={props.name} src={props.image}></img>
            </div>
        </main>
    );
}


export default Main;