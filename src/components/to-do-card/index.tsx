import React from 'react';
import './index.css';
import {ITodoList} from "../../pages/home";
import {ToDoListItem} from "../to-do-list-item";

export const ToDoCard: React.FC<{ item: ITodoList }> = ({item}) => {
    return <div className={'todo_card'}>
        <div className={'todo_card_title'}>{item.title}</div>
        {
            item.items.map((itemList, itemListIndex) => {
                return <ToDoListItem key={itemListIndex} item={itemList}/>
            })
        }
    </div>
}
