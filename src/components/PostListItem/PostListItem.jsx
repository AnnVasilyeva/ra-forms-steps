import React from 'react';

export default function PostListItem (props) {
    const {date, distance, onDelete} = props;

    return (
        <>
            <td className='list-item-date'>{date}</td>
            <td className='list-item-distance'>{distance}</td>

            <td className='buttons'>
                <button
                    style={{margin: 0, padding: "1px 6px"}}
                    type='button'
                    className='btn-trash'
                    onClick={onDelete}
                >
                    <i className='fa fa-trash-o fa-sm'></i>
                </button>
            </td>
        </>
    )
}