import Cart from "../../../../day08/cart/Cart";


const MovieInput = ({movie,changeInput, genreRef,onSubmit ,isEdit }) => {
     const {genre,title,maincharacter,releasedate} =movie 
    
    return (
        <div className="inner">
           
          <form action="" onSubmit={onSubmit} >
            <p>
                <label htmlFor="" >장르</label>
                <input type="text"   value={genre}  name="genre"  onChange={changeInput}ref={genreRef} />
            </p>
            <p>
                <label htmlFor="">제목</label>
                <input type="text"   value={title}  name="title" onChange={changeInput}  />
            </p>
            <p>
                <label htmlFor="">주인공</label>
                <input type="text"   value={maincharacter}  name="maincharacter"  onChange={changeInput} />
            </p>
            <p>
                <label htmlFor="">개봉일</label>
                <input type="text"   value={releasedate}   name="releasedate"   onChange={changeInput} />
            </p>
            <p>
                
            <button >{isEdit ? "수정" : "입력" } </button>
            </p>
          </form>
    
         
            
        </div>
    );
};

export default MovieInput;