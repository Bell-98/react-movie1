import React from 'react';

const MovieItem = ({item,onDel,onEdit}) => {
    const { id, genre, title, maincharacter,releasedate }=item
    return (
        <tr>   
            <td>{genre} </td>
            <td>{title} </td>
            <td>{maincharacter} </td>
            <td>{releasedate}</td>
            <td>
                 <button onClick={()=>{onEdit(id)} }>수정</button>
                 <button onClick={()=>{onDel(id)} }>삭제</button>
             </td>    

        </tr>
    );
};

export default MovieItem;