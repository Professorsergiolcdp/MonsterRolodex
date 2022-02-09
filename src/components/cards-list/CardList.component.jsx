import React from "react";
import './cardList.style.css';
import {Card} from '../card/Card.component'

export const CardList = (props) => {
    return <div className = 'card-list'>
            {
                props.monsters.map(monster => (
                    <Card key = {monster.id} monster = {monster} >
                        </Card>
                ))
            }
         </div>;
};