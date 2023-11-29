import React, { useReducer, useState, useEffect } from 'react';
import MovieInput from './MovieInput';
import MovieList from './MovieList';
import './Movie.scss'
import { useRef } from 'react';

const Movie = () => {
    const no =useRef(1)
    const genreRef =useRef()
    const [data, setData] =useState([]);
    const [isEdit, setisEdit] =useState(false)
    const [movie,setMovie] = useState ({
        genre:"", title:"", maincharacter:"" ,releasedate:""
    })
    const {genre,title,maincharacter,releasedate} =movie
    
    // 
    const changeInput = (e) => {
        const {name, value }= e.target
        setMovie({
            ...movie ,
            [name]: value
        })      
    }
     // 제목텍스트 정렬
    const align =(e) => {
        const {value} = e.target
        setData([...data].sort((a, b)=>{return a[value] > b[value] ? 1 : -1} ))
    }

    const onSubmit =e => {
        e.preventDefault() 
        // 공백처리
        if(!genre || !title || !maincharacter|| !releasedate)return 
        if(isEdit){
        setData(data.map( item => item.id === movie.id ? movie : item  ))
        setisEdit(false)
        setMovie({
            genre:"", title:"", maincharacter:"", releasedate:""
        })
        }else{
            movie.id = no.current++
                 setData([
                     ...data,
                     movie
                     
                 ])
                 setMovie({
                     genre:"", title:"", maincharacter:"" ,releasedate:""
                 })
                 genreRef.current.focus()
        }
    }

    const onEdit= (id) => {
        setMovie(data.find(item => item.id ===id ))
        setisEdit(true)
    }     

    const onDel=(id)=>{
        setData(data.filter(item =>item.id !== id))
    }
    useEffect(()=>{
        genreRef.current.focus()
    },[isEdit])
    
    return (
        <div className='inner'>
         <h2>영화관리 리스트</h2>
         <MovieInput changeInput={changeInput} movie={movie} genreRef={genreRef} onSubmit={onSubmit} isEdit={isEdit}  />
         <MovieList data={data} onDel={onDel} onEdit={onEdit} align={align}  />
        </div>
    );
};

export default Movie;