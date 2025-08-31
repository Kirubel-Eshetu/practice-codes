import React from "react";
import { Robots } from "./Robots";
import Card from "./Card";

function cardItems(Robots) {
    return (
        <Card id={Robots.id}
            name={Robots.name}
            username={Robots.username}
            email={Robots.email} />
    )
}

function CardList() {
    return (
        <div>
         {Robots.map(cardItems)}
        </div>
    );
}

export default CardList;