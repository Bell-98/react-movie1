import Movie from "./Movie";
import MovieItem from "./MovieItem";


const MovieList = ({data,onDel,onEdit,align,  }) => { 
  const {genre,title,maincharacter,releasedate} =data
    return (
        <div className='MovieList'>
             <select onChange={align}>
                <option value="">==정렬==</option>
                <option value="genre">장르 </option>
                <option value="title">제목 </option>  
                <option value="maincharacter">주인공 </option>  
                <option value="releasedate">개봉일 </option>  
            </select> 
            <table> 
              <colgroup>
              <col className='w1' />
              <col className='w2' />
              <col className='w3' />
              <col className='w4' />
              <col className='w5' />
              </colgroup>
              <thead>
                <tr>
                    <th>장르</th>
                    <th>제목</th>
                    <th>주인공</th>
                    <th>개봉일</th>
                    <th>관리</th>                
                </tr>
              </thead>
              <tbody>
               {/*  {
                  data.map( item=> <MovieItem key={item.id} item={item} />)
                } */}
                {data.map(item => <MovieItem key={item.id} item={item} onDel={onDel} onEdit={onEdit} align={align}  />)}
              </tbody>
             
              
            </table>
            
            
        </div>
    );
};

export default MovieList;