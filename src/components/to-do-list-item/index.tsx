import React, {useState} from 'react';
import './index.css';
import {ITodoListItem} from "../../pages/home";
import {truncateText} from "../../services/core-functions";


export const ToDoListItem: React.FC<{ item: ITodoListItem }> = ({item}) => {
    const [checkStatus, setCheckStatus] = useState<boolean>(item.checked);
    return <div className={'todo_card_list_item'}>
        <input className={'custom-checkbox'}
               id={'item' + item.id}
               type={'checkbox'}
               defaultChecked={item.checked}
               onChange={(e) => {
                   setCheckStatus(e.currentTarget.checked)
               }}
        />
        <label htmlFor={'item' + item.id}
               className={checkStatus ? 'todo-card_item-list_checked' : ''}>{truncateText(item.value, 45)}</label>
    </div>
}

