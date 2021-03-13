import React, {useState} from 'react';
import './index.css';
import {ITodoList} from "../../pages/home";
import {ToDoListItem} from "../to-do-list-item";
import {truncateText} from "../../services/core-functions";

export const ToDoCard: React.FC<{ item: ITodoList }> = ({item}) => {
    const [itemo, setItem] = useState<ITodoList>(item);
    const addItem = () => {
        const i: ITodoList = {
            id: item.id,
            title: item.title,
            status: item.status,
            items: [{id: `azerqff-${itemo.items.length + 1}`, value: 'eeeeee', checked: false}, ...itemo.items]
        }
        setItem(i);
    }
    return <div className={'todo_card'}>
        <div className={'todo-card_header'}>
            <div className={'todo_card_title'}>{truncateText(itemo.title, 30)}</div>
            <div className={'todo-card_header_button'}
                 onClick={addItem}>add
            </div>
        </div>

        {
            itemo.items.map((itemList, itemListIndex) => {
                return <ToDoListItem key={itemListIndex} item={itemList}/>
            })
        }
    </div>
}
