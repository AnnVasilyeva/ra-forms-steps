import React from 'react';
import PostListItem from "../PostListItem/PostListItem";
import './PostList.css';

export default function PostList({posts, onDelete}) {


    const elements = posts.map((item) => {
        return (
            <tr key={item.id} className='list-group-item'>
                <PostListItem
                    date={item.date}
                    distance={item.distance}
                    onDelete={() => onDelete(item.id)}
                />
            </tr>
        )
    })

    return (
        <table className='app-list'>
            <tr className='list-group-header'>
                <th>Дата (ДД.ММ.ГГ)</th>
                <th>Пройдено км</th>
                <th>Действия</th>
            </tr>
            {elements}
        </table>

    )


}