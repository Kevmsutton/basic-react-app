import React from "react";
import Card from "./Card";

const CardList = props => {
  const cardArray = props.robots.map(robot => (
    <Card key={robot.id} name={robot.name} email={robot.email} />
  ));

  return <div>{cardArray}</div>;
};

export default CardList;
