import React from 'react';
import Masonry from "react-masonry-css";
import {ToDoCard} from "../components/to-do-card";
import {TODO_ITEMS} from "../services/todo-items";

export interface ITodoList {
    id: string;
    title: string;
    status: boolean;
    items: ITodoListItem[];
}

export interface ITodoListItem {
    id: string;
    value: string;
    checked: boolean;
}

export const Home: React.FC = () => {
    const items: ITodoList[] = TODO_ITEMS;
    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        900: 3,
        700: 2,
        500: 1
    };

    return <>
        <div className={'home_container'}>
            <div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {items.map((item, index) => <ToDoCard key={index} item={item}/>)}
                </Masonry>
            </div>

        </div>
    </>;
}

